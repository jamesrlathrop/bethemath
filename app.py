import streamlit as st
from btm_access import require_access_code

st.set_page_config(
    page_title="BeTheMath",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Gate renders only when locked
if not require_access_code(label="Access code"):
    st.stop()

# --- If a Stripe purchase just happened, show the lifetime code clearly ---
lifetime_code = st.session_state.get("lifetime_code")
last_code = st.session_state.get("lifetime_code_last")

# If a NEW code appears, force re-acknowledgement
if lifetime_code and lifetime_code != last_code:
    st.session_state["lifetime_code_ack"] = False
    st.session_state["lifetime_code_last"] = lifetime_code

if lifetime_code and not st.session_state.get("lifetime_code_ack"):
    st.success("Payment verified ✅  Your lifetime access code is below. Save it now.")
    st.code(lifetime_code)

    st.download_button(
        "Download code (.txt)",
        data=(lifetime_code + "\n"),
        file_name="BeTheMath_Lifetime_Code.txt",
        mime="text/plain",
        use_container_width=True,
    )

    if st.button("I saved it — continue to BeTheMath", type="primary", use_container_width=True):
        st.session_state["lifetime_code_ack"] = True
        st.switch_page("pages/00_play.py")

    st.stop()

# After unlock: go straight into the internal Play page
st.switch_page("pages/00_play.py")