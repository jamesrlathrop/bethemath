import json
import streamlit as st
import streamlit.components.v1 as components

from btm_access import require_access_code

st.set_page_config(page_title="BeTheMath", page_icon="🧠", layout="centered")

# Gate renders only when locked
if not require_access_code(label="Access code"):
    st.stop()

# One-time popup to deliver lifetime code without adding page UI clutter
code = st.session_state.get("lifetime_code")
if code and not st.session_state.get("lifetime_code_shown"):
    st.session_state["lifetime_code_shown"] = True
    msg = f"Payment verified ✅\n\nYour lifetime access code is:\n{code}\n\nPlease save it somewhere safe."
    components.html(f"<script>alert({json.dumps(msg)});</script>", height=0)

# After unlock: go straight into the internal Play page
st.switch_page("pages/00_play.py")