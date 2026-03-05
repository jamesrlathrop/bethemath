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
    Creates/updates required tables.
    Safe to run repeatedly.
    """

    with get_conn() as conn:
        with conn.cursor() as cur:
            # --- access_codes ---
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS access_codes (
                    code TEXT PRIMARY KEY,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                )
                """
            )

            if not _has_column("access_codes", "is_active"):
                cur.execute(
                    "ALTER TABLE access_codes ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT TRUE"
                )

            if not _has_column("access_codes", "note"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN note TEXT")

            if not _has_column("access_codes", "revoked_at"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN revoked_at TIMESTAMPTZ")

            # usage tracking
            if not _has_column("access_codes", "uses"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN uses INTEGER NOT NULL DEFAULT 0")

            if not _has_column("access_codes", "max_uses"):
                cur.execute("ALTER TABLE access_codes ADD COLUMN max_uses INTEGER NOT NULL DEFAULT 1")

            # --- access_events (audit log) ---
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS access_events (
                    id BIGSERIAL PRIMARY KEY,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                    event_type TEXT NOT NULL,
                    code TEXT,
                    detail TEXT
                )
                """
            )

            # --- stripe_fulfillments (prevents issuing multiple lifetime codes on refresh) ---
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS stripe_fulfillments (
                    session_id TEXT PRIMARY KEY,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                    email TEXT,
                    code TEXT NOT NULL
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
# Audit
# -----------------------
def _log_event(event_type: str, code: str | None = None, detail: str | None = None):
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO access_events (event_type, code, detail) VALUES (%s, %s, %s)",
                (event_type, code, detail),
            )
        conn.commit()


def last_access_events(limit: int = 100) -> list[dict]:
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                SELECT created_at, event_type, code, detail
                FROM access_events
                ORDER BY created_at DESC
                LIMIT %s
                """,
                (int(limit),),
            )
            return list(cur.fetchall())


# -----------------------
# Access code logic
# -----------------------
def add_access_codes(codes: list[str], note: str | None = None, max_uses: int = 1) -> int:
    """
    Inserts codes (ignores duplicates).
    max_uses defaults to 1 (single-use).
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

    max_uses = int(max_uses) if max_uses is not None else 1
    if max_uses < 1:
        max_uses = 1

    inserted = 0
    with get_conn() as conn:
        with conn.cursor() as cur:
            for c in cleaned:
                cur.execute(
                    """
                    INSERT INTO access_codes (code, note, is_active, revoked_at, uses, max_uses)
                    VALUES (%s, %s, TRUE, NULL, 0, %s)
                    ON CONFLICT (code) DO NOTHING
                    """,
                    (c, note, max_uses),
                )
                inserted += cur.rowcount
        conn.commit()

    _log_event("codes_added", detail=f"inserted={inserted} max_uses={max_uses} note={note or ''}")
    return inserted


def list_access_codes(limit: int = 50, include_revoked: bool = True) -> list[dict]:
    ensure_schema()

    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            if include_revoked:
                cur.execute(
                    """
                    SELECT code, created_at, note, is_active, revoked_at, uses, max_uses
                    FROM access_codes
                    ORDER BY created_at DESC
                    LIMIT %s
                    """,
                    (int(limit),),
                )
            else:
                cur.execute(
                    """
                    SELECT code, created_at, note, is_active, revoked_at, uses, max_uses
                    FROM access_codes
                    WHERE is_active = TRUE
                    ORDER BY created_at DESC
                    LIMIT %s
                    """,
                    (int(limit),),
                )
            return list(cur.fetchall())


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
            ok = cur.rowcount > 0

    if ok:
        _log_event("code_revoked", code=code)
    return ok


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
            ok = cur.rowcount > 0

    if ok:
        _log_event("code_reactivated", code=code)
    return ok


def consume_access_code(code: str) -> tuple[bool, str]:
    """
    Validates + consumes one use.
    Returns (ok, message).
      ok=True -> access granted and use incremented (unless unlimited design; we use max_uses big number)
      ok=False -> message explains why
    """
    ensure_schema()
    code = (code or "").strip().upper()
    if not code:
        return False, "Missing code."

    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                """
                SELECT code, is_active, uses, max_uses
                FROM access_codes
                WHERE code = %s
                """,
                (code,),
            )
            row = cur.fetchone()

            if not row:
                _log_event("consume_failed", code=code, detail="not_found")
                return False, "Invalid access code."

            if not row["is_active"]:
                _log_event("consume_failed", code=code, detail="inactive")
                return False, "This code is inactive."

            uses = int(row.get("uses") or 0)
            max_uses = int(row.get("max_uses") or 1)

            if uses >= max_uses:
                _log_event("consume_failed", code=code, detail=f"exhausted uses={uses} max={max_uses}")
                return False, "This code has already been used."

            # consume
            cur.execute(
                """
                UPDATE access_codes
                SET uses = uses + 1
                WHERE code = %s
                """,
                (code,),
            )
            conn.commit()

    _log_event("consume_ok", code=code)
    return True, "Access granted ✅"


# -----------------------
# Stripe fulfillment
# -----------------------
def fulfill_stripe_lifetime(session_id: str, email: str | None) -> str:
    """
    Given a Stripe session_id that is verified paid, issue ONE lifetime code.
    This is idempotent: refresh won't create another code.
    Returns the issued code.
    """
    ensure_schema()
    session_id = (session_id or "").strip()
    email = (email or "").strip() if email else None
    if not session_id:
        raise RuntimeError("Missing session_id")

    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            # Already fulfilled?
            cur.execute(
                "SELECT code FROM stripe_fulfillments WHERE session_id = %s",
                (session_id,),
            )
            existing = cur.fetchone()
            if existing and existing.get("code"):
                return existing["code"]

            # Create new lifetime code
            lifetime_code = generate_code(prefix="BTM", length=6)

            # Insert access code with large max_uses = "lifetime"
            add_access_codes([lifetime_code], note=f"LIFETIME:{email or 'unknown'}", max_uses=1000000)

            # Record fulfillment
            cur.execute(
                """
                INSERT INTO stripe_fulfillments (session_id, email, code)
                VALUES (%s, %s, %s)
                """,
                (session_id, email, lifetime_code),
            )
            conn.commit()

    _log_event("stripe_fulfilled", code=lifetime_code, detail=f"session_id={session_id} email={email or ''}")
    return lifetime_code\n

# -----------------------
# Export
# -----------------------
def export_access_codes(include_revoked: bool = True) -> list[dict]:
    """
    Returns access codes as a list of dicts for CSV export.
    """
    rows = list_access_codes(limit=1000000, include_revoked=include_revoked)
    out = []
    for r in rows:
        d = dict(r)
        for k, v in list(d.items()):
            # Convert datetimes (and similar objects) to strings for CSV/DataFrame safety
            if hasattr(v, "isoformat"):
                try:
                    d[k] = v.isoformat()
                except Exception:
                    d[k] = str(v)
        out.append(d)
    return out
\n