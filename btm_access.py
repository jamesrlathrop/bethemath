import uuid
import streamlit as st

from btm_db import consume_access_code


def _ensure_session_id():
    st.session_state.setdefault("session_id", str(uuid.uuid4()))


def require_access_code(label: str = "Access code") -> bool:
    """
    Student gate:
    - DB consume ONLY (enforces max_uses, logs events)
    """
    if st.session_state.get("access_granted"):
        return True

    _ensure_session_id()

    st.subheader("Access required")
    code = st.text_input(label, type="password", placeholder="BTM-XXXX")

    if st.button("Unlock"):
        entered = (code or "").strip().upper()

        try:
            ok, msg = consume_access_code(entered, session_id=st.session_state["session_id"])
        except Exception as e:
            st.error(f"Database error: {e}")
            st.stop()

        if ok:
            st.session_state["access_granted"] = True
            st.success(msg)
            st.rerun()
        else:
            st.error(msg)

    st.stop()