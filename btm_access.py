import os
import streamlit as st

from btm_db import is_valid_access_code, list_access_codes


def _get_access_codes_env() -> set[str]:
    """
    Env fallback: ACCESS_CODES can be comma/newline/semicolon separated.
    """
    raw = os.getenv("ACCESS_CODES") or os.getenv("ACCESS_CODE") or ""
    parts = raw.replace(",", "\n").replace(";", "\n").splitlines()
    return {p.strip().upper() for p in parts if p.strip()}


def require_access_code(label: str = "Access code"):
    """
    Customer gate:
    1) Check DB (real access system)
    2) Fallback to env codes (bootstrap)
    """
    if st.session_state.get("access_granted"):
        return True

    st.title("Access required")
    code = st.text_input(label, type="password", placeholder="BTM-XXXX")

    if st.button("Unlock"):
        entered = (code or "").strip().upper()

        ok = False

        # 1) Check DB first
        try:
            ok = is_valid_access_code(entered)
        except Exception as e:
            st.error(f"Database error: {e}")
            ok = False

        # 2) Fallback to env codes (optional bootstrap)
        if not ok and entered in _get_access_codes_env():
            ok = True

        if ok:
            st.session_state["access_granted"] = True
            st.success("Access granted")
            st.rerun()
        else:
            st.error("Invalid access code")

            # Optional debug: show what DB contains
            if os.getenv("DEBUG_ACCESS") == "1":
                st.warning("DEBUG_ACCESS=1 (showing latest DB codes)")
                try:
                    rows = list_access_codes(20, include_revoked=True)
                    st.write([r["code"] for r in rows])
                except Exception as e:
                    st.error(f"Could not read codes: {e}")

    # Stop app until unlocked
    st.stop()
