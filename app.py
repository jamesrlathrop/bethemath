import os
import json
import streamlit as st
import streamlit.components.v1 as components

from btm_access import require_access_code

st.set_page_config(page_title="BeTheMath", page_icon="🧠", layout="centered")

BEAUTIFUL_APP_URL = os.getenv(
    "BEAUTIFUL_APP_URL",
    "https://jamesrlathrop.github.io/mathquest-errors-to-insight/",
).strip()

# Gate renders only when locked
if not require_access_code(label="Access code"):
    st.stop()

# One-time popup to deliver lifetime code without adding page UI clutter
code = st.session_state.get("lifetime_code")
if code and not st.session_state.get("lifetime_code_shown"):
    st.session_state["lifetime_code_shown"] = True
    msg = f"Payment verified ✅\n\nYour lifetime access code is:\n{code}\n\nPlease save it somewhere safe."
    components.html(f"<script>alert({json.dumps(msg)});</script>", height=0)

# Post-unlock: EXACTLY ONE button
st.link_button("Open BeTheMath", BEAUTIFUL_APP_URL, use_container_width=True)
