import os
import streamlit as st

from btm_db import is_valid_access_code, list_access_codes


def get_access_codes():
    """
    Optional fallback / bootstrap:
    supports ACCESS_CODES (comma-separated) or ACCESS_CODE (single).
    """
    codes = os.environ.get("ACCESS_CODES") or os.environ.get("ACCESS_CODE") or ""
    return [c.strip().upper() for c in codes.split(",") if c.strip()]


def require_access_code(label: str = "Access code"):
    """
    Customer gate:
    - DB first (Postgres access_codes table)
    - env fallback (optional)
    - DEBUG_ACCESS=1 shows latest DB codes when invalid (admin/dev only)
    """
    if st.session_state.get("access_granted"):
        return

    st.subheader("Access required")
    code = st.text_input(label, type="password", placeholder="BTM-XXXX")

    if st.button("Unlock"):
        entered = (code or "").strip().upper()

        # 1) Check DB first
        ok = False
        try:
            ok = is_valid_access_code(entered)
        except Exception as e:
            st.error(f"Database error: {e}")
            ok = False

        # 2) Optional fallback to env codes
        if not ok and entered in get_access_codes():
            ok = True

        if ok:
            st.session_state["access_granted"] = True
            st.success("Access granted")
            st.rerun()
        else:
            st.error("Invalid access code")

            # DEBUG (only if explicitly enabled)
            if os.environ.get("DEBUG_ACCESS") == "1":
                st.warning("DEBUG_ACCESS is ON — latest DB codes:")
                try:
                    st.write(list_access_codes(10))
                except Exception as e:
                    st.error(f"Debug list failed: {e}")

    # Stop the app until access is granted
    if not st.session_state.get("access_granted"):
        st.stop()
