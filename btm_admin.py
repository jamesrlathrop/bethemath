# btm_admin.py
import os
import streamlit as st

def get_admin_key() -> str | None:
    """
    Returns the configured admin credential from Railway environment variables
    (preferred) or Streamlit secrets (fallback).
    """
    return (
        os.getenv("ADMIN_CODE")
        or os.getenv("ADMIN_KEY")
        or st.secrets.get("ADMIN_CODE")
        or st.secrets.get("ADMIN_KEY")
    )

def require_admin() -> None:
    """
    Gate admin pages. Stores an authenticated flag in session_state.
    """
    admin_key = get_admin_key()
    if not admin_key:
        st.error("Admin access is not configured. Set ADMIN_CODE in your environment.")
        st.stop()

    if st.session_state.get("is_admin", False):
        return

    st.subheader("Admin Access")
    entered = st.text_input("Enter admin code", type="password")
    if st.button("Unlock"):
        if entered == admin_key:
            st.session_state["is_admin"] = True
            st.success("Unlocked.")
            st.rerun()
        else:
            st.error("Invalid admin key")
    st.stop()

# Backward-compatible alias if other files import ADMIN_KEY style
def require_admin_key() -> None:
    require_admin()
