import os
import streamlit as st

from btm_db import is_valid_access_code


def _env_codes() -> set[str]:
    raw = os.getenv("ACCESS_CODES") or os.getenv("ACCESS_CODE") or ""
    parts = raw.replace(",", "\n").replace(";", "\n").splitlines()
    return {p.strip().upper() for p in parts if p.strip()}


def require_access_code(label: str = "Access code") -> bool:
    """
    Student gate:
    - DB first (recommended)
    - fallback to ACCESS_CODES env var (optional)
    """
    if st.session_state.get("access_granted"):
        return True

    st.subheader("Access required")
    code = st.text_input(label, type="password", placeholder="BTM-XXXX")

    if st.button("Unlock"):
        entered = (code or "").strip().upper()

        ok = False
        # 1) DB
        try:
            ok = is_valid_access_code(entered)
        except Exception as e:
            st.error(f"Database error: {e}")

        # 2) Fallback env
        if not ok:
            if entered in _env_codes():
                ok = True

        if ok:
            st.session_state["access_granted"] = True
            st.success("Access granted ✅")
            st.rerun()
        else:
            st.error("Invalid access code.")

    st.stop()
