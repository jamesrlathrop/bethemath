import os
import streamlit as st

from btm_db import is_valid_access_code, list_access_codes


def get_access_codes_env() -> set[str]:
    raw = os.getenv("ACCESS_CODES") or os.getenv("ACCESS_CODE") or ""
    parts = raw.replace(",", "\n").replace(";", "\n").splitlines()
    return {p.strip().upper() for p in parts if p.strip()}


def require_access_code(label: str = "Access code"):
    # Already unlocked?
    if st.session_state.get("access_granted"):
        return

    st.subheader("Access required")
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

        # 2) Fallback to env codes (optional)
        if not ok and entered in get_access_codes_env():
            ok = True

        if ok:
            st.session_state["access_granted"] = True
            st.success("Access granted")
            st.rerun()
        else:
            st.error("Invalid access code")

            if os.getenv("DEBUG_ACCESS") == "1":
                st.warning("DEBUG: latest DB codes")
                try:
                    st.write(list_access_codes(10))
                except Exception as e:
                    st.error(f"DEBUG list failed: {e}")

    st.stop()
