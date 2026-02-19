# BeTheMath Project Status (2026-02-18)

## Current state
- GitHub repo: `bethemath`
- Streamlit scaffold: `app.py` + `requirements.txt`
- Access code gate configured via env var `ACCESS_CODES` (Railway now set to `BETA-2026,MATH-2026,TEAM-2026`)
- Procfile added and Railway start command aligned to the working `streamlit run ... --server.headless true --server.enableXsrfProtection false --server.enableCORS false`

## Deployment
- Railway project: `believable-kindness` / `production`
- Public endpoint (until domain verifies): `heartfelt-strength-production-efd1.up.railway.app`
- Custom domain configured on Railway: `bethemath.matesuite.ai`
- DNS: GoDaddy CNAME created; TXT verification record will be added on next attempt (GoDaddy 3-attempt limit hit tonight)

## Next steps
1. Add TXT record on GoDaddy (host `_railway-verify.bethemath`, value `railway-verify=eb9dbb8149ac79c56073acba0135bbe613ca22b61ade822facc5b5e46186409a`)
2. Verify custom domain + HTTPS on Railway and test `https://bethemath.matesuite.ai`
3. Remove legacy fallback demo code path from `app.py`, add admin tooling for code generation, then implement Stripe checkout flow.
