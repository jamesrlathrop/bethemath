import os
import streamlit as st


def _mask(s: str) -> str:
    """Show only a tiny fingerprint of a secret."""
    if not s:
        return "<empty>"
    if len(s) <= 4:
        return "*" * len(s)
    return f"{s[:2]}***{s[-2:]} (len={len(s)})"


def require_admin_key(label: str = "Enter admin code"):
    """
    Checks ADMIN_CODE env var.
    """
    if st.session_state.get("admin_ok"):
        return True

    st.title("Admin Access")
    admin = st.text_input(label, type="password")

    # --- Debug (admin-only switch) ---
    if os.getenv("DEBUG_ADMIN") == "1":
        expected_dbg = (os.getenv("ADMIN_CODE") or "")
        st.warning("DEBUG_ADMIN is ON (turn off after fixing).")
        st.write("ADMIN_CODE present:", bool(expected_dbg))
        st.write("ADMIN_CODE fingerprint:", _mask(expected_dbg.strip()))
        st.write("Entered length (current):", len((admin or "").strip()))

    if st.button("Unlock"):
        entered = (admin or "").strip()
        expected = (os.getenv("ADMIN_CODE") or "").strip()

        if not expected:
            st.error("ADMIN_CODE is not set in Railway Variables for this service/environment.")
            st.stop()

        if entered == expected:
            st.session_state["admin_ok"] = True
            st.success("Admin OK")
            st.rerun()
        else:
            st.error("Invalid admin code.")

    st.stop()
