import streamlit as st
from btm_admin import require_admin_key
from btm_db import db_healthcheck, generate_code, add_access_codes, list_access_codes

# Admin gate
if not st.session_state.get("admin_ok"):
    require_admin_key()

st.title("Generate Access Codes")

# DB check (also creates/updates schema)
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
    codes = [generate_code(prefix=prefix.strip().upper(), length=length) for _ in range(count)]
    inserted = add_access_codes(codes, note=(note.strip() or None))

    st.success(f"✅ Generated {len(codes)} codes. Inserted {inserted} new into DB.")
    st.code("\n".join(codes))

st.markdown("---")
st.subheader("Latest codes in DB")
rows = list_access_codes(25, include_revoked=True)
for r in rows:
    status = "✅ active" if r["revoked_at"] is None else "🛑 revoked"
    extra = f" — {r['note']}" if r.get("note") else ""
    st.write(f"{r['code']} — {status}{extra}")
