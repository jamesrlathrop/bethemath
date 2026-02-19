# BeTheMath Project Status (2026-02-18)

## Current state
- GitHub repo: `bethemath`
- Streamlit scaffold: `app.py` + `requirements.txt`
- Access code gate added (env var `ACCESS_CODES`, default `DEMO-000`)
- Procfile added for Railway: streamlit serves on `$PORT` and `0.0.0.0`

## Deployment
- Railway deployment listed in GitHub: `believable-kindness / production`
- Primary issue: app previously failed to respond (likely wrong start command / wrong port binding)
- Fix attempt: ensure Railway uses Procfile or set service start command to:
  `streamlit run app.py --server.address 0.0.0.0 --server.port $PORT --server.enableCORS false`

## Next steps
1. Verify Railway redeploy picks up the Procfile.
2. Set env var `ACCESS_CODES` in Railway (comma-separated) and remove default code.
3. Test live URL and health-check behavior.
4. Align MateSuite.ai routing (path/base URL) after live verification.
