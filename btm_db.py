import os
import psycopg2
import psycopg2.extras

DATABASE_URL = os.getenv("DATABASE_URL", "")


def _conn():
    if not DATABASE_URL:
        raise RuntimeError("DATABASE_URL is not set")
    return psycopg2.connect(DATABASE_URL)


def ensure_schema():
    """
    Idempotent schema setup:
    - creates access_codes table if missing
    - adds missing columns (like note) safely
    """
    with _conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS access_codes (
                    id SERIAL PRIMARY KEY,
                    code TEXT UNIQUE NOT NULL,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                    revoked_at TIMESTAMPTZ NULL
                );
                """
            )
            cur.execute(
                """
                ALTER TABLE access_codes
                ADD COLUMN IF NOT EXISTS note TEXT NULL;
                """
            )
        conn.commit()


def db_healthcheck():
    ensure_schema()
    with _conn() as conn:
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
            cur.execute("SELECT NOW() as now;")
            return cur.fetchone()


def generate_code(prefix="BTM", length=4):
    import random
    import string

    suffix = "".join(random.choices(string.ascii_uppercase + string.digits, k=length))
    return f"{prefix}-{suffix}"


def add_access_codes(codes, note=None):
    ensure_schema()
    inserted = 0
    with _conn() as conn:
        with conn.cursor() as cur:
            for c in codes:
                c = (c or "").strip().upper()
                if not c:
                    continue
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


def list_access_codes(limit=25, include_revoked=False):
    ensure_schema()
    with _conn() as conn:
        with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
            if include_revoked:
                cur.execute(
                    """
                    SELECT code, created_at, revoked_at, note
                    FROM access_codes
                    ORDER BY created_at DESC
                    LIMIT %s;
                    """,
                    (limit,),
                )
            else:
                cur.execute(
                    """
                    SELECT code, created_at, revoked_at, note
                    FROM access_codes
                    WHERE revoked_at IS NULL
                    ORDER BY created_at DESC
                    LIMIT %s;
                    """,
                    (limit,),
                )
            return list(cur.fetchall())


def is_valid_access_code(code: str) -> bool:
    ensure_schema()
    c = (code or "").strip().upper()
    if not c:
        return False
    with _conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "SELECT 1 FROM access_codes WHERE code=%s AND revoked_at IS NULL LIMIT 1;",
                (c,),
            )
            return cur.fetchone() is not None


def revoke_code(code: str):
    ensure_schema()
    c = (code or "").strip().upper()
    with _conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "UPDATE access_codes SET revoked_at = NOW() WHERE code=%s AND revoked_at IS NULL;",
                (c,),
            )
            conn.commit()
            return cur.rowcount
