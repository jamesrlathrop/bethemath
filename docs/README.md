# Deployment notes

## Railway

- start command (Procfile):
  `streamlit run app.py --server.address 0.0.0.0 --server.port $PORT --server.headless true --server.enableXsrfProtection false --server.enableCORS false`
- environment vars:
  - `ACCESS_CODES`: comma-separated codes (example: `BETA-2026,MATH-2026,TEAM-2026`)

## Domain

- Custom domain: `bethemath.matesuite.ai`
- GoDaddy:
  - CNAME `bethemath` → `ybu5p4e8.up.railway.app`
  - TXT `_railway-verify.bethemath` → `railway-verify=eb9dbb8149ac79c56073acba0135bbe613ca22b61ade822facc5b5e46186409a`
