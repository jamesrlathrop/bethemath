import os
import psycopg2


def _connect():
    """Connect to Postgres using Railway DATABASE_URL."""
    dsn = os.environ.get("DATABASE_URL")
    if not dsn:
        raise RuntimeError("DATABASE_URL is not set")

    # Normalize scheme for psycopg2 compatibility
    if dsn.startswith("postgres://"):
        dsn = dsn.replace("postgres://", "postgresql://", 1)

    # Railway-managed Postgres typically works without forcing sslmode here
    return psycopg2.connect(dsn)


def ensure_tables():
    """Create required tables if they don't exist."""
    with _connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS access_codes (
                    code TEXT PRIMARY KEY,
                    is_active BOOLEAN NOT NULL DEFAULT TRUE,
                    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
                );
                """
            )
        conn.commit()


def add_access_codes(codes):
    """Insert or reactivate codes (idempotent)."""
    if not codes:
        return

    ensure_tables()

    normalized = []
    for c in codes:
        if c and str(c).strip():
            normalized.append((str(c).strip().upper(),))

    if not normalized:
        return

    with _connect() as conn:
        with conn.cursor() as cur:
            cur.executemany(
                """
                INSERT INTO access_codes (code, is_active)
                VALUES (%s, TRUE)
                ON CONFLICT (code) DO UPDATE SET is_active = EXCLUDED.is_active;
                """,
                normalized,
            )
        conn.commit()


def is_valid_access_code(code: str) -> bool:
    """Return True if the code exists and is active."""
    if not code or not str(code).strip():
        return False

    ensure_tables()
    code = str(code).strip().upper()

    with _connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT 1
                FROM access_codes
                WHERE code = %s AND is_active = TRUE
                LIMIT 1;
                """,
                (code,),
            )
            return cur.fetchone() is not None


def db_healthcheck() -> str:
    """Returns Postgres version if connected."""
    ensure_tables()
    with _connect() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT version();")
            return cur.fetchone()[0]


def list_access_codes(limit: int = 25):
    """Return latest active codes (most recent first)."""
    ensure_tables()
    with _connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                SELECT code
                FROM access_codes
                WHERE is_active = TRUE
                ORDER BY created_at DESC
                LIMIT %s;
                """,
                (limit,),
            )
            return [row[0] for row in cur.fetchall()]
