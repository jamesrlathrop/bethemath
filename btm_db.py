import os
import psycopg2
from psycopg2.extras import RealDictCursor

# ------------------------------------------------------------
# Connection
# ------------------------------------------------------------
def _db_url() -> str:
    url = os.getenv("DATABASE_URL") or ""
    if not url:
        raise RuntimeError("DATABASE_URL is not set (Railway variable).")
    return url

def get_conn():
    # Railway DATABASE_URL is usually postgres://... which psycopg2 accepts
    return psycopg2.connect(_db_url(), sslmode="require")

# ------------------------------------------------------------
# Schema (auto-migration)
# ------------------------------------------------------------
def ensure_schema():
    """
    Creates/updates tables/columns needed by the app.
    Safe to call multiple times.
    """
    with get_conn() as conn:
        with conn.cursor() as cur:
            # Create table if missing
            cur.execute("""
                CREATE TABLE IF NOT EXISTS access_codes (
                    code TEXT PRIMARY KEY,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                );
            """)

            # Add missing columns (won't error if they already exist)
            cur.execute("ALTER TABLE access_codes ADD COLUMN IF NOT EXISTS revoked_at TIMESTAMPTZ;")
            cur.execute("ALTER TABLE access_codes ADD COLUMN IF NOT EXISTS note TEXT;")

            conn.commit()

def db_healthcheck():
    """
    Returns a small dict if DB is reachable.
    Also ensures schema exists.
    """
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT NOW() AS now;")
            return dict(cur.fetchone())

# ------------------------------------------------------------
# Access code operations
# ------------------------------------------------------------
def is_valid_access_code(code: str) -> bool:
    ensure_schema()
    c = (code or "").strip().upper()
    if not c:
        return False

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT 1 FROM access_codes WHERE code=%s AND revoked_at IS NULL LIMIT 1;",
                (c,),
            )
            return cur.fetchone() is not None

def add_access_codes(codes: list[str], note: str | None = None) -> int:
    """
    Inserts codes. Ignores duplicates. Returns number inserted.
    """
    ensure_schema()
    norm = []
    for c in codes:
        cc = (c or "").strip().upper()
        if cc:
            norm.append(cc)

    if not norm:
        return 0

    inserted = 0
    with get_conn() as conn:
        with conn.cursor() as cur:
            for c in norm:
                cur.execute(
                    """
                    INSERT INTO access_codes (code, note)
                    VALUES (%s, %s)
                    ON CONFLICT (code) DO NOTHING;
                    """,
                    (c, note),
                )
                inserted += cur.rowcount
        conn.commit()
    return inserted

def list_access_codes(limit: int = 25, include_revoked: bool = False):
    ensure_schema()
    limit = max(1, min(int(limit), 200))

    where = "" if include_revoked else "WHERE revoked_at IS NULL"

    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                f"""
                SELECT code, created_at, revoked_at, note
                FROM access_codes
                {where}
                ORDER BY created_at DESC
                LIMIT %s;
                """,
                (limit,),
            )
            return list(cur.fetchall())

def revoke_code(code: str):
    ensure_schema()
    c = (code or "").strip().upper()
    if not c:
        return 0

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "UPDATE access_codes SET revoked_at=NOW() WHERE code=%s AND revoked_at IS NULL;",
                (c,),
            )
            conn.commit()
            return cur.rowcount
