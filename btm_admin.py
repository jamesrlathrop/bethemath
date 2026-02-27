import os
import streamlit as st


def require_admin_key(label: str = "Enter admin code"):
    """
    Simple admin gate using ADMIN_CODE env var.
    """
    if st.session_state.get("admin_ok"):
        return True

    st.title("Admin Access")
    admin = st.text_input(label, type="password")

    if st.button("Unlock"):
        entered = (admin or "").strip()
        expected = (os.getenv("ADMIN_CODE") or "").strip()

        if not expected:
            st.error("ADMIN_CODE is not set in Railway Variables.")
            st.stop()

        if entered == expected:
            st.session_state["admin_ok"] = True
            st.success("Admin OK")
            st.rerun()
        else:
            st.error("Invalid admin code.")

    st.stop()
