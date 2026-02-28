import streamlit as st
from btm_admin import require_admin_key
from btm_db import (
    db_healthcheck,
    list_access_codes,
    revoke_access_code,
    reactivate_access_code,
    last_access_events,
)

require_admin_key()

st.title("Admin: Access Codes")

# --- DB status ---
try:
    v = db_healthcheck()
    st.success("✅ Database connected")
    with st.expander("DB details"):
        st.write(v)
except Exception as e:
    st.error(f"❌ Database not connected: {e}")
    st.stop()

# --- Controls ---
colA, colB, colC = st.columns([1, 1, 2])
with colA:
    include_inactive = st.checkbox("Include inactive (revoked)", value=True)
with colB:
    limit = st.number_input("Show how many?", min_value=10, max_value=500, value=50, step=10)
with colC:
    st.caption("Tip: single-use codes show **uses=1 / max_uses=1** after consumption.")

rows = list_access_codes(int(limit), include_revoked=include_inactive)

if not rows:
    st.info("No codes found.")
    st.stop()

st.markdown("## Codes")

# --- Codes list ---
for r in rows:
    code = r["code"]
    note = r.get("note")
    active = bool(r.get("is_active", True))
    uses = int(r.get("uses", 0) or 0)
    max_uses = int(r.get("max_uses", 1) or 1)
    exhausted = uses >= max_uses

    status = "✅ active" if active else "🛑 inactive"
    usage = f"{uses} / {max_uses}"
    badge = "🔁 exhausted" if exhausted else "🆕 available"

    c1, c2, c3, c4 = st.columns([2.2, 1.2, 2.6, 1.4])
    with c1:
        st.write(f"`{code}`")
        st.caption(note or "—")
    with c2:
        st.write(status)
        st.caption(f"usage: **{usage}**")
    with c3:
        st.write(badge)
        if exhausted:
            st.caption("This code will be rejected by the student gate.")
        else:
            st.caption("This code should unlock once until max_uses is reached.")
    with c4:
        if active:
            if st.button("Revoke", key=f"revoke_{code}"):
                ok = revoke_access_code(code)
                if ok:
                    st.success(f"Revoked {code}")
                    st.rerun()
                else:
                    st.error("Could not revoke.")
        else:
            if st.button("Reactivate", key=f"react_{code}"):
                ok = reactivate_access_code(code)
                if ok:
                    st.success(f"Reactivated {code}")
                    st.rerun()
                else:
                    st.error("Could not reactivate.")

    st.divider()

# --- Audit / last events ---
st.markdown("## Usage audit (last 100 events)")
events = last_access_events(limit=100)
if not events:
    st.info("No events yet.")
else:
    # Nice compact display
    st.dataframe(events, use_container_width=True)