import os
import streamlit as st

def get_admin_key() -> str:
    key = os.environ.get("ADMIN_KEY")
    if not key:
        key = os.environ.get("ADMIN_TOKEN")
    return (key or "").strip()

def require_admin_key(label: str = "Admin key"):
    admin_key = get_admin_key()
    if not admin_key:
        st.error("Admin key not configured.")
        st.stop()

    provided = st.text_input(label, type="password")

    if (provided or "").strip() != admin_key:
        st.error("Invalid admin key")
        st.stop()

    st.success("Admin unlocked")
