import os
import time
import base64
import hashlib
import hmac

import streamlit as st
import streamlit.components.v1 as components

from btm_db import consume_access_code, fulfill_stripe_lifetime
from btm_stripe import create_checkout_session, verify_paid_session

SUPPORT_EMAIL = os.getenv("BTM_SUPPORT_EMAIL", "support@matesuite.ai").strip()

REMEMBER_PARAM = "btm_token"
REMEMBER_DAYS = 90


def _remember_secret() -> str:
    return (
        os.getenv("BTM_REMEMBER_SECRET")
        or os.getenv("ACCESS_CODE_SECRET")
        or os.getenv("APP_SECRET")
        or "change-this-before-production"
    )


def _sign_value(raw: str) -> str:
    secret = _remember_secret().encode("utf-8")
    return hmac.new(secret, raw.encode("utf-8"), hashlib.sha256).hexdigest()


def _make_remember_token(scope: str = "permanent") -> str:
    exp = int(time.time()) + REMEMBER_DAYS * 24 * 60 * 60
    raw = f"{scope}|{exp}"
    sig = _sign_value(raw)
    token = f"{raw}|{sig}"
    return base64.urlsafe_b64encode(token.encode("utf-8")).decode("utf-8")


def _read_remember_token(token: str):
    try:
        decoded = base64.urlsafe_b64decode(token.encode("utf-8")).decode("utf-8")
        scope, exp_str, sig = decoded.split("|", 2)
        raw = f"{scope}|{exp_str}"
        expected = _sign_value(raw)

        if not hmac.compare_digest(sig, expected):
            return None
        if int(exp_str) < int(time.time()):
            return None

        return {"scope": scope, "exp": int(exp_str)}
    except Exception:
        return None


def restore_remembered_access():
    try:
        token = st.query_params.get(REMEMBER_PARAM, None)
    except Exception:
        token = None

    if not token:
        return False

    data = _read_remember_token(token)
    if not data:
        try:
            del st.query_params[REMEMBER_PARAM]
        except Exception:
            pass
        return False

    st.session_state["access_granted"] = True
    st.session_state["access_scope"] = data["scope"]
    st.session_state["access_restored"] = True
    return True


def save_remembered_access(scope: str = "permanent"):
    st.query_params[REMEMBER_PARAM] = _make_remember_token(scope)


def clear_remembered_access():
    try:
        del st.query_params[REMEMBER_PARAM]
    except Exception:
        pass


def _clear_session_id_param():
    try:
        if "session_id" in st.query_params:
            del st.query_params["session_id"]
    except Exception:
        # Fallback for older behavior
        try:
            qp = st.experimental_get_query_params()
            qp.pop("session_id", None)
            st.experimental_set_query_params(**qp)
        except Exception:
            pass


def _get_session_id():
    try:
        return st.query_params.get("session_id")
    except Exception:
        qp = st.experimental_get_query_params()
        raw = qp.get("session_id")
        return raw[0] if isinstance(raw, list) and raw else None


def require_access_code(label: str = "Access code") -> bool:
    # Initialize session flag
    if "access_granted" not in st.session_state:
        st.session_state["access_granted"] = False

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
                st.session_state["access_scope"] = "purchase"
                st.session_state.pop("checkout_url", None)
                save_remembered_access("purchase")
                _clear_session_id_param()
                st.rerun()
            else:
                st.error("Payment not verified yet. If you just paid, wait a moment and refresh.")
                st.stop()

    # Restore remembered access across reloads
    if not st.session_state.get("access_granted"):
        restore_remembered_access()

    if st.session_state.get("access_granted"):
        return True

    # Gate UI
    st.markdown(
        """
        <style>
          .btm-wrap {max-width: 760px; margin: 0 auto;}
          .btm-card {border: 1px solid rgba(255,255,255,0.10); border-radius: 18px; padding: 18px; background: rgba(255,255,255,0.03);}
          .btm-muted {opacity: 0.82;}
          .btm-check {line-height: 1.65;}
          .btm-foot {margin-top: 10px; opacity: 0.78; font-size: 0.95rem;}
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

    # Start checkout on click
    if st.button("Buy lifetime access — $49", type="primary", use_container_width=True):
        st.session_state["checkout_url"] = create_checkout_session()

    checkout_url = st.session_state.get("checkout_url")
    if checkout_url:
        st.info("Redirecting to Stripe… If nothing happens (Brave Private can block redirects), click below.")
        st.link_button("Open secure Stripe checkout", checkout_url, use_container_width=True)
        components.html(f"<script>window.location.href='{checkout_url}';</script>", height=0)
        st.markdown("</div>", unsafe_allow_html=True)
        st.markdown("</div>", unsafe_allow_html=True)
        st.stop()

    st.markdown(
        f"<div class='btm-foot'>Questions? Email <a href='mailto:{SUPPORT_EMAIL}'>{SUPPORT_EMAIL}</a><br/>Tip: Save your lifetime access code — it unlocks BeTheMath on any device.</div>",
        unsafe_allow_html=True,
    )

    with st.expander("I already have an access code"):
        code_in = st.text_input(label, type="password", placeholder="e.g., BTM-2EE7")
        if st.button("Unlock", use_container_width=True):
            entered = (code_in or "").strip().upper()
            ok, msg = consume_access_code(entered)
            if ok:
                st.session_state["access_granted"] = True
                st.session_state["access_scope"] = "permanent"
                st.session_state.pop("checkout_url", None)
                save_remembered_access("permanent")
                st.rerun()
            else:
                st.error(msg)
        st.caption("Codes are not case-sensitive.")

    st.markdown("</div>", unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)
    st.stop()