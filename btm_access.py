import os
import streamlit as st

from btm_db import consume_access_code, fulfill_stripe_lifetime
from btm_stripe import create_checkout_session, verify_paid_session

# Where the “beautiful app” lives
BEAUTIFUL_APP_URL = os.getenv(
    "BEAUTIFUL_APP_URL",
    "https://jamesrlathrop.github.io/mathquest-errors-to-insight/",
)

def require_access_code(label: str = "Access code") -> bool:
    """
    Student gate:
    - Enter access code (consumes 1 use)
    - OR buy lifetime access via Stripe checkout
    - After Stripe success return, verify payment, issue code, and unlock session
    """

    # Already granted this session?
    if st.session_state.get("access_granted"):
        st.success("✅ You’re unlocked.")
        st.link_button("Open BeTheMath", BEAUTIFUL_APP_URL)
        return True

    st.subheader("Access required")

    # -----------------------------
    # Handle Stripe return (success redirect)
    # Expect success_url includes ?session_id={CHECKOUT_SESSION_ID}
    # -----------------------------
    qp = st.query_params
    session_id = qp.get("session_id")

    if session_id:
        # Avoid re-verifying on every rerun
        if st.session_state.get("stripe_session_fulfilled") != session_id:
            with st.spinner("Verifying payment..."):
                try:
                    v = verify_paid_session(session_id)
                    if v.get("paid"):
                        code = fulfill_stripe_lifetime(v["session_id"], v.get("email"))
                        st.session_state["stripe_session_fulfilled"] = session_id
                        st.session_state["access_granted"] = True

                        st.success("Payment verified ✅")
                        st.markdown("### Your lifetime access code")
                        st.code(code)
                        st.caption(
                            "Save this code somewhere safe. You can use it anytime to unlock the app."
                        )
                    else:
                        st.error(
                            "Payment not verified yet. If you just paid, wait a moment and refresh."
                        )
                except Exception as e:
                    st.error(f"Could not verify payment: {e}")

        st.markdown("---")
        st.success("✅ You’re unlocked.")
        st.link_button("Open BeTheMath", BEAUTIFUL_APP_URL)
        return True

    # -----------------------------
    # Access code entry
    # -----------------------------
    code_in = st.text_input(label, type="password", placeholder="BTM-XXXX")

    if st.button("Unlock"):
        entered = (code_in or "").strip().upper()
        ok, msg = consume_access_code(entered)
        if ok:
            st.session_state["access_granted"] = True
            st.success(msg)
            st.rerun()
        else:
            st.error(msg)

    st.markdown("---")

    # -----------------------------
    # Buy lifetime access
    # -----------------------------
    st.markdown("### Prefer to buy lifetime access?")
    st.caption("One-time purchase. You’ll receive a lifetime access code after payment.")

    email = st.text_input("Email for receipt", placeholder="you@example.com")

    # Persist the checkout URL so it doesn’t disappear on reruns
    if "checkout_url" not in st.session_state:
        st.session_state["checkout_url"] = None

    if st.button("Buy Lifetime Access ($49)"):
        if not email or "@" not in email:
            st.warning("Please enter a valid email.")
        else:
            try:
                st.session_state["checkout_url"] = create_checkout_session(email.strip())
            except Exception as e:
                st.error(f"Could not start checkout: {e}")

    if st.session_state.get("checkout_url"):
        st.link_button("Continue to secure payment", st.session_state["checkout_url"])

    # Stop page here until unlocked
    st.stop()