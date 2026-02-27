import streamlit as st
from btm_admin import require_admin_key
from btm_db import db_healthcheck, list_access_codes

require_admin_key()

st.title("Admin: Access Codes")

try:
    v = db_healthcheck()
    st.success("✅ Database connected")
    with st.expander("DB details"):
        st.write(v)
except Exception as e:
    st.error(f"❌ Database not connected: {e}")
    st.stop()

include_inactive = st.checkbox("Include inactive (revoked)", value=True)
limit = st.number_input("Show how many?", min_value=10, max_value=500, value=50, step=10)

rows = list_access_codes(int(limit), include_revoked=include_inactive)

if not rows:
    st.info("No codes found.")
    st.stop()

for r in rows:
    code = r["code"]
    note = r.get("note")
    active = bool(r.get("is_active", True))
    status = "✅ active" if active else "🛑 inactive"
    st.write(f"`{code}` — {status} — note: {note or '—'}")
