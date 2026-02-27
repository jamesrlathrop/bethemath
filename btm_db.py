import os
import random
import string
from datetime import datetime, timezone

import psycopg2
from psycopg2.extras import RealDictCursor


# -----------------------
# Connection
# -----------------------
def get_conn():
    url = os.getenv("DATABASE_URL")
    if not url:
        raise RuntimeError("DATABASE_URL is not set (Railway Variables).")
    return psycopg2.connect(url)


# -----------------------
# Schema helpers
# -----------------------
def _has_column(table: str, column: str) -> bool:
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT 1
                FROM information_schema.columns
                WHERE table_name = %s AND column_name = %s
                """,
                (table, column),
            )
            return cur.fetchone() is not None


def _has_table(table: str) -> bool:
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT 1
                FROM information_schema.tables
                WHERE table_name = %s
                """,
                (table,),
            )
            return cur.fetchone() is not None


def ensure_schema():
    """
    Creates / migrates schema safely (idempotent).
    - access_codes:
        code (PK), created_at, is_active, note, revoked_at, max_uses, uses
    - access_code_events:
        id (serial PK), created_at, event_type, code, session_id, detail
    """
    with get_conn() as conn:
        with conn.cursor() as cur:
            # Create access_codes base table if missing
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS access_codes (
                    code TEXT PRIMARY KEY,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                )
                """
            )

            # Add columns if missing
            if not _has_column("access_codes", "is_active"):
                cur.execute(
                    "ALTER TABLE access_codes ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT TRUE"
                )

            if not _has_column("access_codes", "note"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN note TEXT")

            if not _has_column("access_codes", "revoked_at"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN revoked_at TIMESTAMPTZ")

            # Usage enforcement
            if not _has_column("access_codes", "max_uses"):
                cur.execute(
                    "ALTER TABLE access_codes ADD COLUMN max_uses INTEGER NOT NULL DEFAULT 1"
                )

            if not _has_column("access_codes", "uses"):
                cur.execute(
                    "ALTER TABLE access_codes ADD COLUMN uses INTEGER NOT NULL DEFAULT 0"
                )

            # Events table for audits
            if not _has_table("access_code_events"):
                cur.execute(
                    """
                    CREATE TABLE access_code_events (
                        id SERIAL PRIMARY KEY,
                        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                        event_type TEXT NOT NULL,
                        code TEXT,
                        session_id TEXT,
                        detail TEXT
                    )
                    """
                )

        conn.commit()


# -----------------------
# Healthcheck
# -----------------------
def db_healthcheck() -> dict:
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT NOW() as now")
            row = cur.fetchone()
            return {"ok": True, "now": str(row["now"])}


# -----------------------
# Code generation
# -----------------------
def generate_code(prefix: str = "BTM", length: int = 4) -> str:
    prefix = (prefix or "BTM").strip().upper()
    length = max(2, min(int(length), 24))
    alphabet = string.ascii_uppercase + string.digits
    suffix = "".join(random.choice(alphabet) for _ in range(length))
    return f"{prefix}-{suffix}"


# -----------------------
# Events
# -----------------------
def log_access_event(event_type: str, code: str | None, session_id: str | None, detail: str | None):
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO access_code_events (event_type, code, session_id, detail)
                VALUES (%s, %s, %s, %s)
                """,
                (event_type, code, session_id, detail),
            )
        conn.commit()


def last_access_events(limit: int = 100) -> list[dict]:
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                SELECT created_at, event_type, code, session_id, detail
                FROM access_code_events
                ORDER BY created_at DESC
                LIMIT %s
                """,
                (int(limit),),
            )
            return list(cur.fetchall())


# -----------------------
# Access code logic
# -----------------------
def add_access_codes(
    codes: list[str],
    note: str | None = None,
    max_uses: int = 1,
) -> int:
    """
    Inserts codes (ignores duplicates).
    Returns number of newly inserted rows.
    """
    ensure_schema()

    cleaned = []
    for c in codes:
        c = (c or "").strip().upper()
        if c:
            cleaned.append(c)

    if not cleaned:
        return 0

    max_uses = int(max_uses) if max_uses else 1
    if max_uses < 1:
        max_uses = 1

    inserted = 0
    with get_conn() as conn:
        with conn.cursor() as cur:
            for c in cleaned:
                cur.execute(
                    """
                    INSERT INTO access_codes (code, note, is_active, revoked_at, max_uses, uses)
                    VALUES (%s, %s, TRUE, NULL, %s, 0)
                    ON CONFLICT (code) DO NOTHING
                    """,
                    (c, note, max_uses),
                )
                inserted += cur.rowcount
        conn.commit()

    return inserted


def list_access_codes(limit: int = 50, include_revoked: bool = True) -> list[dict]:
    ensure_schema()

    # Always select these columns now that schema ensures them
    select_cols = "code, created_at, note, is_active, revoked_at, max_uses, uses"

    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            if include_revoked:
                cur.execute(
                    f"""
                    SELECT {select_cols}
                    FROM access_codes
                    ORDER BY created_at DESC
                    LIMIT %s
                    """,
                    (int(limit),),
                )
            else:
                cur.execute(
                    f"""
                    SELECT {select_cols}
                    FROM access_codes
                    WHERE is_active = TRUE
                    ORDER BY created_at DESC
                    LIMIT %s
                    """,
                    (int(limit),),
                )
            return list(cur.fetchall())


def is_valid_access_code(code: str) -> bool:
    """
    Backwards-compatible validation.
    Now also enforces "not exhausted" (uses < max_uses).
    """
    ensure_schema()

    code = (code or "").strip().upper()
    if not code:
        return False

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT 1
                FROM access_codes
                WHERE code = %s
                  AND is_active = TRUE
                  AND uses < max_uses
                """,
                (code,),
            )
            return cur.fetchone() is not None


def consume_access_code(code: str, session_id: str | None = None) -> tuple[bool, str]:
    """
    Atomically consumes 1 use of a code.
    Returns (ok, message). Logs success/failure to access_code_events.
    """
    ensure_schema()

    code = (code or "").strip().upper()
    if not code:
        log_access_event("consume_failure", None, session_id, "empty_code")
        return False, "No code entered."

    with get_conn() as conn:
        try:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                # Lock the row so concurrent consumes are safe
                cur.execute(
                    """
                    SELECT code, is_active, uses, max_uses
                    FROM access_codes
                    WHERE code = %s
                    FOR UPDATE
                    """,
                    (code,),
                )
                row = cur.fetchone()

                if not row:
                    cur.execute(
                        """
                        INSERT INTO access_code_events (event_type, code, session_id, detail)
                        VALUES (%s, %s, %s, %s)
                        """,
                        ("consume_failure", code, session_id, "code_not_found"),
                    )
                    conn.commit()
                    return False, "Invalid access code."

                if not row["is_active"]:
                    cur.execute(
                        """
                        INSERT INTO access_code_events (event_type, code, session_id, detail)
                        VALUES (%s, %s, %s, %s)
                        """,
                        ("consume_failure", code, session_id, "code_inactive"),
                    )
                    conn.commit()
                    return False, "This code is inactive."

                if int(row["uses"]) >= int(row["max_uses"]):
                    cur.execute(
                        """
                        INSERT INTO access_code_events (event_type, code, session_id, detail)
                        VALUES (%s, %s, %s, %s)
                        """,
                        ("consume_failure", code, session_id, "code_exhausted"),
                    )
                    conn.commit()
                    return False, "This code has already been used."

                # Consume
                cur.execute(
                    """
                    UPDATE access_codes
                    SET uses = uses + 1
                    WHERE code = %s
                    """,
                    (code,),
                )

                cur.execute(
                    """
                    INSERT INTO access_code_events (event_type, code, session_id, detail)
                    VALUES (%s, %s, %s, %s)
                    """,
                    ("consume_success", code, session_id, "ok"),
                )

            conn.commit()
            return True, "Access granted ✅"

        except Exception as e:
            conn.rollback()
            # Best-effort log
            try:
                log_access_event("consume_failure", code, session_id, f"db_error:{type(e).__name__}")
            except Exception:
                pass
            return False, f"Database error: {e}"


def revoke_access_code(code: str) -> bool:
    ensure_schema()
    code = (code or "").strip().upper()
    if not code:
        return False

    now = datetime.now(timezone.utc)

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE access_codes
                SET is_active = FALSE, revoked_at = %s
                WHERE code = %s
                """,
                (now, code),
            )
            conn.commit()
            return cur.rowcount > 0


def reactivate_access_code(code: str) -> bool:
    ensure_schema()
    code = (code or "").strip().upper()
    if not code:
        return False

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE access_codes
                SET is_active = TRUE, revoked_at = NULL
                WHERE code = %s
                """,
                (code,),
            )
            conn.commit()
            return cur.rowcount > 0


def export_access_codes(include_revoked: bool = True) -> list[dict]:
    return list_access_codes(limit=1000000, include_revoked=include_revoked)