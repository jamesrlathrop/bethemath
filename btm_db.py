import os
import random
import string
from contextlib import contextmanager

import psycopg2
from psycopg2.extras import RealDictCursor


# -------------------------
# Connection
# -------------------------
def _database_url() -> str:
    # Railway typically provides DATABASE_URL
    url = os.getenv("DATABASE_URL") or os.getenv("POSTGRES_URL") or ""
    return url.strip()


@contextmanager
def get_conn():
    url = _database_url()
    if not url:
        raise RuntimeError("DATABASE_URL is not set. Add it in Railway → bethemath → Variables.")

    conn = psycopg2.connect(url)
    try:
        yield conn
    finally:
        conn.close()


def ensure_schema():
    """
    Creates tables/columns if they don't exist yet.
    Safe to call repeatedly.
    """
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS access_codes (
                    code        TEXT PRIMARY KEY,
                    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
                    note        TEXT NULL,
                    revoked_at  TIMESTAMPTZ NULL
                );
                """
            )
        conn.commit()


# -------------------------
# Utilities
# -------------------------
def generate_code(prefix: str = "BTM", length: int = 4) -> str:
    """
    Generates codes like BTM-AB12 (length counts the random part).
    """
    prefix = (prefix or "BTM").strip().upper()
    length = int(length)
    alphabet = string.ascii_uppercase + string.digits
    token = "".join(random.choice(alphabet) for _ in range(length))
    return f"{prefix}-{token}"


def db_healthcheck():
    ensure_schema()
    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute("SELECT NOW() AS now;")
            return cur.fetchone()


# -------------------------
# Access codes (DB)
# -------------------------
def add_access_codes(codes: list[str], note: str | None = None) -> int:
    """
    Inserts codes if not already present. Returns how many were inserted.
    """
    ensure_schema()
    cleaned = []
    for c in codes or []:
        c = (c or "").strip().upper()
        if c:
            cleaned.append(c)

    if not cleaned:
        return 0

    inserted = 0
    with get_conn() as conn:
        with conn.cursor() as cur:
            for c in cleaned:
                cur.execute(
                    """
                    INSERT INTO access_codes (code, note)
                    VALUES (%s, %s)
                    ON CONFLICT (code) DO NOTHING
                    """,
                    (c, note),
                )
                # rowcount is 1 if inserted, 0 if conflict
                inserted += cur.rowcount
        conn.commit()
    return inserted


def list_access_codes(limit: int = 25, include_revoked: bool = False):
    ensure_schema()
    limit = int(limit)

    where = "" if include_revoked else "WHERE revoked_at IS NULL"

    with get_conn() as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            cur.execute(
                f"""
                SELECT code, created_at, note, revoked_at
                FROM access_codes
                {where}
                ORDER BY created_at DESC
                LIMIT %s
                """,
                (limit,),
            )
            return cur.fetchall()


def revoke_access_code(code: str) -> bool:
    ensure_schema()
    c = (code or "").strip().upper()
    if not c:
        return False

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE access_codes
                SET revoked_at = NOW()
                WHERE code = %s AND revoked_at IS NULL
                """,
                (c,),
            )
            changed = cur.rowcount > 0
        conn.commit()
    return changed


def is_valid_access_code(code: str) -> bool:
    ensure_schema()
    c = (code or "").strip().upper()
    if not c:
        return False

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT 1
                FROM access_codes
                WHERE code = %s AND revoked_at IS NULL
                LIMIT 1
                """,
                (c,),
            )
            return cur.fetchone() is not None
