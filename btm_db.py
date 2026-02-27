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


def ensure_schema():
    """
    Creates the access_codes table if missing.
    Adds optional columns if missing (note, is_active, revoked_at).
    Safe to run repeatedly.
    """
    with get_conn() as conn:
        with conn.cursor() as cur:
            # Create table if it doesn't exist
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
                cur.execute("ALTER TABLE access_codes ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT TRUE")

            if not _has_column("access_codes", "note"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN note TEXT")

            # Optional: keep a revoked timestamp if you want it (nice for audits)
            if not _has_column("access_codes", "revoked_at"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN revoked_at TIMESTAMPTZ")

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
# Access code logic
# -----------------------
def add_access_codes(codes: list[str], note: str | None = None) -> int:
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

    has_revoked_at = _has_column("access_codes", "revoked_at")

    inserted = 0
    with get_conn() as conn:
        with conn.cursor() as cur:
            for c in cleaned:
                if has_revoked_at:
                    cur.execute(
                        """
                        INSERT INTO access_codes (code, note, is_active, revoked_at)
                        VALUES (%s, %s, TRUE, NULL)
                        ON CONFLICT (code) DO NOTHING
                        """,
                        (c, note),
                    )
                else:
                    cur.execute(
                        """
                        INSERT INTO access_codes (code, note, is_active)
                        VALUES (%s, %s, TRUE)
                        ON CONFLICT (code) DO NOTHING
                        """,
                        (c, note),
                    )
                inserted += cur.rowcount
        conn.commit()

    return inserted


def list_access_codes(limit: int = 50, include_revoked: bool = True) -> list[dict]:
    ensure_schema()

    has_revoked_at = _has_column("access_codes", "revoked_at")

    select_cols = "code, created_at, note, is_active"
    if has_revoked_at:
        select_cols += ", revoked_at"

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
                WHERE code = %s AND is_active = TRUE
                """,
                (code,),
            )
            return cur.fetchone() is not None


def revoke_access_code(code: str) -> bool:
    ensure_schema()
    code = (code or "").strip().upper()
    if not code:
        return False

    has_revoked_at = _has_column("access_codes", "revoked_at")
    now = datetime.now(timezone.utc)

    with get_conn() as conn:
        with conn.cursor() as cur:
            if has_revoked_at:
                cur.execute(
                    """
                    UPDATE access_codes
                    SET is_active = FALSE, revoked_at = %s
                    WHERE code = %s
                    """,
                    (now, code),
                )
            else:
                cur.execute(
                    """
                    UPDATE access_codes
                    SET is_active = FALSE
                    WHERE code = %s
                    """,
                    (code,),
                )
            conn.commit()
            return cur.rowcount > 0


def reactivate_access_code(code: str) -> bool:
    ensure_schema()
    code = (code or "").strip().upper()
    if not code:
        return False

    has_revoked_at = _has_column("access_codes", "revoked_at")

    with get_conn() as conn:
        with conn.cursor() as cur:
            if has_revoked_at:
                cur.execute(
                    """
                    UPDATE access_codes
                    SET is_active = TRUE, revoked_at = NULL
                    WHERE code = %s
                    """,
                    (code,),
                )
            else:
                cur.execute(
                    """
                    UPDATE access_codes
                    SET is_active = TRUE
                    WHERE code = %s
                    """,
                    (code,),
                )
            conn.commit()
            return cur.rowcount > 0


def export_access_codes(include_revoked: bool = True) -> list[dict]:
    # Just return everything (for CSV)
    return list_access_codes(limit=1000000, include_revoked=include_revoked)
