import os
import uuid
import streamlit as st

from btm_db import consume_access_code, is_valid_access_code


def _env_codes() -> set[str]:
    raw = os.getenv("ACCESS_CODES") or os.getenv("ACCESS_CODE") or ""
    parts = raw.replace(",", "\n").replace(";", "\n").splitlines()
    return {p.strip().upper() for p in parts if p.strip()}


def _ensure_session_id():
    st.session_state.setdefault("session_id", str(uuid.uuid4()))


def require_access_code(label: str = "Access code") -> bool:
    """
    Student gate:
    - Consume from DB (enforces max_uses, logs events)  ✅
    - Optional fallback to ACCESS_CODES env var (unlimited)  ⚠️
    """
    if st.session_state.get("access_granted"):
        return True

    _ensure_session_id()

    st.subheader("Access required")
    code = st.text_input(label, type="password", placeholder="BTM-XXXX")

    if st.button("Unlock"):
        entered = (code or "").strip().upper()

        # 1) DB consume (preferred)
        ok = False
        msg = "Invalid access code."
        try:
            ok, msg = consume_access_code(entered, session_id=st.session_state["session_id"])
        except Exception as e:
            st.error(f"Database error: {e}")

        # 2) Optional fallback env (no consumption)
        if not ok:
            if entered in _env_codes():
                # keep legacy support if you still want it
                ok = True
                msg = "Access granted ✅"

        if ok:
            st.session_state["access_granted"] = True
            st.success(msg)
            st.rerun()
        else:
            st.error(msg)

    st.stop()