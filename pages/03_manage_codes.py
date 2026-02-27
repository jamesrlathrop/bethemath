import streamlit as st
from btm_admin import require_admin_key
from btm_db import db_healthcheck, list_access_codes, revoke_access_code, reactivate_access_code

require_admin_key()

st.title("Manage Codes")

try:
    v = db_healthcheck()
    st.success("✅ Database connected")
    with st.expander("DB details"):
        st.write(v)
except Exception as e:
    st.error(f"❌ Database not connected: {e}")
    st.stop()

st.markdown("---")

limit = st.number_input("Show how many?", min_value=10, max_value=500, value=50, step=10)
rows = list_access_codes(int(limit), include_revoked=True)

if not rows:
    st.info("No codes found.")
    st.stop()

for r in rows:
    code = r["code"]
    note = r.get("note")
    active = bool(r.get("is_active", True))
    status = "✅ active" if active else "🛑 inactive"

    cols = st.columns([2, 3, 2, 2])
    cols[0].markdown(f"**`{code}`**")
    cols[1].write(note or "—")
    cols[2].write(status)

    if active:
        if cols[3].button("Revoke", key=f"rev_{code}", use_container_width=True):
            revoke_access_code(code)
            st.toast("Revoked ✅")
            st.rerun()
    else:
        if cols[3].button("Reactivate", key=f"rea_{code}", use_container_width=True):
            reactivate_access_code(code)
            st.toast("Reactivated ✅")
            st.rerun()
