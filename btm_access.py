import streamlit as st
import streamlit.components.v1 as components

from btm_db import consume_access_code, fulfill_stripe_lifetime
from btm_stripe import create_checkout_session, verify_paid_session

def _clear_query_params():
    try:
        st.query_params.clear()
    except Exception:
        st.experimental_set_query_params()

def _get_session_id():
    try:
        return st.query_params.get("session_id")
    except Exception:
        qp = st.experimental_get_query_params()
        raw = qp.get("session_id")
        return raw[0] if isinstance(raw, list) and raw else None

def require_access_code(label: str = "Access code") -> bool:
    # Already unlocked in this session
    if st.session_state.get("access_granted"):
        return True

    # Stripe return
    session_id = _get_session_id()
    if session_id:
        if st.session_state.get("stripe_session_fulfilled") != session_id:
            with st.spinner("Verifying payment…"):
                v = verify_paid_session(session_id)

            if v.get("paid"):
                code = fulfill_stripe_lifetime(v["session_id"], v.get("email"))
                st.session_state["stripe_session_fulfilled"] = session_id
                st.session_state["lifetime_code"] = code
                st.session_state["access_granted"] = True
                _clear_query_params()
                st.rerun()
            else:
                st.error("Payment not verified yet. If you just paid, wait a moment and refresh.")
                st.stop()

    # Gate UI (minimal + confident)
    st.markdown(
        """
        <style>
          .btm-wrap {max-width: 760px; margin: 0 auto;}
          .btm-card {border: 1px solid rgba(255,255,255,0.10); border-radius: 18px; padding: 18px; background: rgba(255,255,255,0.03);}
          .btm-muted {opacity: 0.82;}
          .btm-check {line-height: 1.65;}
        </style>
        """,
        unsafe_allow_html=True,
    )

    st.markdown("<div class='btm-wrap'>", unsafe_allow_html=True)
    st.title("BeTheMath")
    st.caption("One-time payment • Lifetime access • No subscription")
    st.markdown("<div class='btm-muted'>Secure checkout is handled by Stripe.</div>", unsafe_allow_html=True)
    st.divider()

    st.markdown("<div class='btm-card'>", unsafe_allow_html=True)
    st.subheader("Lifetime access — $49")
    st.markdown(
        """
<div class="btm-check">
✔ Designed for real learning — not memorization<br/>
✔ Parent and teacher friendly<br/>
✔ One payment — no recurring fees<br/>
✔ Instant access after purchase<br/>
</div>
        """,
        unsafe_allow_html=True,
    )

    # Start checkout on click (stores URL so fallback button appears reliably)
    if st.button("Buy lifetime access — $49", type="primary", use_container_width=True):
        st.session_state["checkout_url"] = create_checkout_session()

    checkout_url = st.session_state.get("checkout_url")
    if checkout_url:
        st.info("Redirecting to Stripe… If nothing happens (Brave Private can block redirects), click the button below.")
        st.link_button("Open secure Stripe checkout", checkout_url, use_container_width=True)
        # Best-effort auto-redirect
        components.html(f"<script>window.location.href='{checkout_url}';</script>", height=0)
        st.stop()

    st.markdown("</div>", unsafe_allow_html=True)

    with st.expander("I already have an access code"):
        code_in = st.text_input(label, type="password", placeholder="e.g., BTM-2EE7")
        if st.button("Unlock", use_container_width=True):
            entered = (code_in or "").strip().upper()
            ok, msg = consume_access_code(entered)
            if ok:
                st.session_state["access_granted"] = True
                st.rerun()
            else:
                st.error(msg)
        st.caption("Codes are not case-sensitive.")

    st.markdown("</div>", unsafe_allow_html=True)
    st.stop()
