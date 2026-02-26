import streamlit as st

from btm_admin import require_admin_key
from btm_db import list_access_codes, revoke_access_code, db_healthcheck


require_admin_key()
st.title("Manage codes")

try:
    db_healthcheck()
except Exception as e:
    st.error(f"Database not connected: {e}")
    st.stop()

show_revoked = st.checkbox("Show revoked codes", value=True)
limit = int(st.number_input("How many to show", min_value=10, max_value=200, value=50))

rows = list_access_codes(limit=limit, include_revoked=show_revoked)

if not rows:
    st.info("No codes in database yet. Go to **generate codes** and create some.")
    st.stop()

st.caption("Tip: Click a code field to copy it (browser copy).")

for r in rows:
    code = r["code"]
    revoked = r["revoked_at"] is not None
    status = "🛑 revoked" if revoked else "✅ active"

    cols = st.columns([3, 1, 1])
    cols[0].text_input(status, value=code, key=f"code_{code}", disabled=False)

    if revoked:
        cols[1].write("")
        cols[2].write("")
    else:
        if cols[1].button("Revoke", key=f"rev_{code}"):
            ok = revoke_access_code(code)
            if ok:
                st.success(f"Revoked {code}")
            else:
                st.warning(f"Could not revoke {code} (maybe already revoked).")
            st.rerun()
