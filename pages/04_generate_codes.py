import random
import string
import streamlit as st

from btm_admin import require_admin_key
from btm_db import db_healthcheck, add_access_codes, list_access_codes

ALPHABET = string.ascii_uppercase + string.digits


def generate_code(prefix: str = "BTM", length: int = 6) -> str:
    prefix = (prefix or "BTM").strip().upper()
    return f"{prefix}-" + "".join(random.choice(ALPHABET) for _ in range(length))


# If already unlocked, don't ask again
if not st.session_state.get("admin_ok"):
    require_admin_key()

st.title("Generate Access Codes")

# DB truth light
try:
    v = db_healthcheck()
    st.success("✅ Database connected")
    with st.expander("DB details"):
        st.write(v)
except Exception as e:
    st.error(f"❌ Database not connected: {e}")
    st.stop()

count = int(st.number_input("How many codes?", min_value=1, value=1))
prefix = st.text_input("Prefix", value="BTM")
length = int(st.number_input("Code length", min_value=4, max_value=12, value=4))
note = st.text_input("Optional note (e.g., cohort name)", value="")

if st.button("Generate codes"):
    codes = [generate_code(prefix=prefix, length=length) for _ in range(count)]

    inserted = add_access_codes(codes, note=(note.strip() or None))

    st.success(f"✅ Generated {len(codes)} codes. Inserted {inserted} new into DB.")
    st.code("\n".join(codes))

    st.markdown("---")
    st.subheader("Latest codes in DB (including revoked)")
    rows = list_access_codes(25, include_revoked=True)

    if not rows:
        st.info("No codes found yet.")
    else:
        for r in rows:
            status = "✅ active" if r.get("revoked_at") is None else "🛑 revoked"
            st.write(f"{r['code']} — {status}")
