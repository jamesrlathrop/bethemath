
import streamlit as st
from btm_admin import require_admin_key

require_admin_key()

st.title("Admin: Access Codes")
st.write("Use the sidebar pages:")
st.markdown("- **generate codes**: create new customer codes")
st.markdown("- **manage codes**: view/revoke codes")
