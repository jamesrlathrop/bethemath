import os
from contextlib import contextmanager
from datetime import datetime, timezone

# Prefer psycopg2, but allow psycopg (v3) if that's what's installed.
try:
    import psycopg2
    from psycopg2.extras import RealDictCursor
    _USING_PSYCOPG2 = True
except Exception:
    psycopg2 = None
    RealDictCursor = None
    _USING_PSYCOPG2 = False

try:
    import psycopg  # type: ignore
    _USING_PSYCOPG3 = True
except Exception:
    psycopg = None
    _USING_PSYCOPG3 = False


def _db_url() -> str:
    url = os.getenv("DATABASE_URL") or ""
    if not url:
        raise RuntimeError("DATABASE_URL is not set in environment variables.")
    return url


@contextmanager
def get_conn():
    """
    Context manager returning a DB connection that is always closed.
    Works with either psycopg2 or psycopg (v3).
    """
    url = _db_url()

    if _USING_PSYCOPG2:
        conn = psycopg2.connect(url)
        try:
            yield conn
        finally:
            conn.close()
        return

    if _USING_PSYCOPG3:
        conn = psycopg.connect(url)
        try:
            yield conn
        finally:
            conn.close()
        return

    raise RuntimeError(
        "No Postgres driver found. Install psycopg2-binary or psycopg."
    )


def ensure_tables():
    """
    Creates the access_codes table if it doesn't exist.
    This IS the 'codes table' you're asking about.
    """
    sql = """
    CREATE TABLE IF NOT EXISTS access_codes (
        code TEXT PRIMARY KEY,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        revoked_at TIMESTAMPTZ NULL,
        note TEXT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_access_codes_created_at
      ON access_codes(created_at DESC);
    """

    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(sql)
        conn.commit()


def db_healthcheck() -> dict:
    """Returns Postgres version if connected."""
    ensure_tables()
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT version()")
            v = cur.fetchone()
    return {"ok": True, "version": v[0] if v else None}


def add_access_codes(codes: list[str], note: str | None = None) -> int:
    """
    Inserts new codes. Ignores duplicates.
    Returns number inserted (best-effort).
    """
    ensure_tables()
    cleaned = []
    for c in codes:
        c2 = (c or "").strip().upper()
        if c2:
            cleaned.append(c2)

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
                try:
                    inserted += int(cur.rowcount or 0)
                except Exception:
                    pass
        conn.commit()
    return inserted


def list_access_codes(limit: int = 50, include_revoked: bool = True) -> list[dict]:
    """
    Returns list of dict rows: {code, created_at, revoked_at, note}
    """
    ensure_tables()
    limit = max(1, min(int(limit), 500))

    where = "" if include_revoked else "WHERE revoked_at IS NULL"
    sql = f"""
      SELECT code, created_at, revoked_at, note
      FROM access_codes
      {where}
      ORDER BY created_at DESC
      LIMIT %s
    """

    with get_conn() as conn:
        # dict cursor for psycopg2, normal for psycopg3
        if _USING_PSYCOPG2 and RealDictCursor is not None:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute(sql, (limit,))
                rows = cur.fetchall()
            return [dict(r) for r in rows]

        with conn.cursor() as cur:
            cur.execute(sql, (limit,))
            rows = cur.fetchall()
        out = []
        for r in rows:
            out.append(
                {"code": r[0], "created_at": r[1], "revoked_at": r[2], "note": r[3]}
            )
        return out


def is_valid_access_code(code: str) -> bool:
    """
    True if code exists and is not revoked.
    """
    ensure_tables()
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
                """,
                (c,),
            )
            row = cur.fetchone()
    return bool(row)


def revoke_access_code(code: str) -> bool:
    """
    Marks a code as revoked (does not delete).
    Returns True if it existed and is now revoked.
    """
    ensure_tables()
    c = (code or "").strip().upper()
    if not c:
        return False

    now = datetime.now(timezone.utc)
    with get_conn() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE access_codes
                SET revoked_at = %s
                WHERE code = %s AND revoked_at IS NULL
                """,
                (now, c),
            )
            ok = (cur.rowcount or 0) > 0
        conn.commit()
    return ok
