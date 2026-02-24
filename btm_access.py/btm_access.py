import os
import streamlit as st

from btm_db import is_valid_access_code  # NEW


def get_access_codes():
    # Keep env support as fallback / bootstrap
    codes = os.environ.get("ACCESS_CODES")
    if not codes:
        codes = os.environ.get("ACCESS_CODE")
    if not codes:
        return []
    return [c.strip().upper() for c in codes.split(",") if c.strip()]


def require_access_code(label: str = "Access code"):
    st.subheader("Access required")
    code = st.text_input(label, type="password")

    if st.button("Unlock"):
        entered = (code or "").strip().upper()

        # 1) Check DB first (real customer benefit)
        ok = False
        try:
    ok = is_valid_access_code(entered)
except Exception as e:
    st.error(f"Database error: {e}")
    ok = False

        # 2) Fallback to env codes (optional)
        if not ok and entered in get_access_codes():
            ok = True

        if ok:
            st.session_state["access_granted"] = True
            st.success("Access granted")
        else:
            st.error("Invalid access code")

    if not st.session_state.get("access_granted"):
        st.stop()
