import os
import streamlit as st

def get_admin_key() -> str | None:
    # Railway env vars first, then Streamlit secrets as fallback
    return (
        os.getenv("ADMIN_CODE")
        or os.getenv("ADMIN_KEY")
        or st.secrets.get("ADMIN_CODE")
        or st.secrets.get("ADMIN_KEY")
    )

def require_admin() -> None:
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

# Keep backward compatibility if other pages import the old name
def require_admin_key() -> None:
    require_admin()
