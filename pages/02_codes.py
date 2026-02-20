import streamlit as st
from btm_admin import require_admin_key

require_admin_key()
st.title("Admin: Access Codes")
st.write("Admin code tools will be built next.")
