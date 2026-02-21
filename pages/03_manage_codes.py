import os
import streamlit as st

def _is_admin() -> bool:
    """
    Admin gate for Streamlit pages.
    Admin can be enabled by:
      - st.session_state["is_admin"] == True, OR
      - entering an admin code that matches ADMIN_CODE env var.
    """
    return bool(st.session_state.get("is_admin", False))


def require_admin() -> bool:
    """
    Call at the top of any admin-only Streamlit page.
    Returns True if access is granted; otherwise renders a login UI and stops.
    """
    # Already approved this session
    if _is_admin():
        return True

    st.title("Admin Access")

    # Optional: env-based admin code
    admin_code_env = os.getenv("ADMIN_CODE", "").strip()

    if not admin_code_env:
        st.info("Admin access is not configured. Set ADMIN_CODE in your environment.")
        st.stop()

    code = st.text_input("Enter admin code", type="password")
    col1, col2 = st.columns([1, 2])

    with col1:
        if st.button("Unlock", use_container_width=True):
            if code.strip() == admin_code_env:
                st.session_state["is_admin"] = True
                st.success("Admin unlocked.")
                st.rerun()
            else:
                st.error("Incorrect code.")

    with col2:
        st.caption("Tip: Set ADMIN_CODE in Railway/Streamlit secrets.")

    st.stop()
def get_codes():
    raw = os.environ.get("ACCESS_CODES", "")
    out = []
    for part in raw.split(","):
        t = part.strip()
        if t:
            out.append(t.upper())
    return out

def main():
    require_admin_key()
    st.title("Codes (admin)")

    codes = get_codes()
    st.write("Codes configured:", len(codes))

    if codes:
        st.code("\n".join(codes))
    else:
        st.warning("No access codes found (ENV ACCESS_CODES).")

if __name__ == "__main__":
    main()
