import streamlit as st
from btm_admin import require_admin_key

require_admin_key()
st.title("Admin OK")
st.caption("Use the sidebar: generate codes / manage codes")
