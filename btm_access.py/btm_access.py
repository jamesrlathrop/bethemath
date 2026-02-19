import os
import streamlit as st

def get_access_codes():
    codes = os.environ.get("ACCESS_CODES")
    if not codes:
        codes = os.environ.get("ACCESS_CODE")
    if not codes:
        return []
    return [c.strip().upper() for c in codes.split(",") if c.strip()]

def require_access_code(label: str = "Access code"):
    codes = get_access_codes()
    if not codes:
        st.error("Access codes not configured.")
        st.stop()

    st.subheader("Access required")
    code = st.text_input(label, type="password")

    if st.button("Unlock"):
        if (code or "").strip().upper() in codes:
            st.session_state["access_granted"] = True
            st.success("Access granted")
        else:
            st.error("Invalid access code")

    if not st.session_state.get("access_granted"):
        st.stop()
