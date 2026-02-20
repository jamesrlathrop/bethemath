# Stripe checkout plan (scaffold)

Status: not enabled yet; this doc captures the plan.

## Environment variables (Railway)
- STRIPE_SECRET_KEY
- STRIPE_PRICE_ID
- STRIPE_WEBHOOK_SECRET
- BASE_URL (for redirects; ex: https://bethemath.matesuite.ai)

## Minimal Stripe dependency
Add to `requirements.txt`:

- stripe

## Target flow
1. Customer clicks "Buy access".
2. Create a Stripe Checkout Session and redirect.
3. Stripe redirects back with `session_id`.
4. Server verifies the session and issues an access code.
5. Admin adds issued code to `ACCESS_CODES` (until a database is added).

## Notes
- Webhook verification is recommended.
- Streamlit does not expose a webhook endpoint by default; consider FastAPI on Railway as a webhook handler.
