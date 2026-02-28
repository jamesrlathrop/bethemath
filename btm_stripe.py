import os
import stripe

# Stripe secret key must be set in Railway Variables: STRIPE_SECRET_KEY
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")


def create_checkout_session(customer_email: str) -> str:
    """
    Creates a Stripe Checkout Session for one-time "Lifetime Access" purchase.
    Returns the Checkout URL to send the user to Stripe.
    """
    price_id = os.getenv("STRIPE_PRICE_ID")
    if not price_id:
        raise RuntimeError("STRIPE_PRICE_ID is not set in Railway Variables.")

    # IMPORTANT: Use your real deployed URL here (not localhost)
    base_url = os.getenv("APP_BASE_URL") or "https://bethemath-production.up.railway.app"

    success_url = f"{base_url}/?paid=1&session_id={{CHECKOUT_SESSION_ID}}"
    cancel_url = f"{base_url}/?canceled=1"

    session = stripe.checkout.Session.create(
        mode="payment",
        customer_email=customer_email,
        line_items=[{"price": price_id, "quantity": 1}],
        success_url=success_url,
        cancel_url=cancel_url,
    )
    return session.url


def verify_paid_session(session_id: str) -> dict:
    """
    Verifies a Stripe Checkout session is paid.
    Returns dict: {paid: bool, email: str|None, session_id: str}
    """
    sess = stripe.checkout.Session.retrieve(session_id)
    paid = (sess.get("payment_status") == "paid")

    # Stripe may store email in either location depending on flow
    email = None
    cd = sess.get("customer_details") or {}
    email = cd.get("email") or sess.get("customer_email")

    return {"paid": paid, "email": email, "session_id": sess.get("id")}