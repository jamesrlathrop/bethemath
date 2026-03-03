import os
import stripe

# Stripe secret key must be set in Railway Variables: STRIPE_SECRET_KEY
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

def _base_url() -> str:
    # Prefer APP_URL; fall back to APP_BASE_URL; then your domain.
    return (os.getenv("APP_URL") or os.getenv("APP_BASE_URL") or "https://bethemath.matesuite.ai").rstrip("/")

def create_checkout_session() -> str:
    """
    Creates a Stripe Checkout Session for one-time "Lifetime Access" purchase.
    Returns the hosted checkout URL.
    """
    price_id = os.getenv("STRIPE_PRICE_ID")
    if not price_id:
        raise RuntimeError("STRIPE_PRICE_ID is not set in Railway Variables.")

    base = _base_url()
    success_url = f"{base}/?session_id={{CHECKOUT_SESSION_ID}}"
    cancel_url = f"{base}/"

    session = stripe.checkout.Session.create(
        mode="payment",
        line_items=[{"price": price_id, "quantity": 1}],
        success_url=success_url,
        cancel_url=cancel_url,
        allow_promotion_codes=True,
    )
    return session.url

def verify_paid_session(session_id: str) -> dict:
    """
    Verifies a Stripe Checkout session is paid.
    Returns dict: {paid: bool, email: str|None, session_id: str}
    """
    sess = stripe.checkout.Session.retrieve(session_id)
    paid = (sess.get("payment_status") == "paid")

    cd = sess.get("customer_details") or {}
    email = cd.get("email") or sess.get("customer_email")

    return {"paid": paid, "email": email, "session_id": sess.get("id")}
