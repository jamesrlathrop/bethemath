import os
import re
import time
import hmac
import hashlib
import base64
import mimetypes
from pathlib import Path

import streamlit as st
from btm_access import require_access_code


st.set_page_config(
    page_title="BeTheMath — Error Detective",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# IMPORTANT: run access gate BEFORE forcing dark background (prevents unreadable black gate)
if not require_access_code(label="Access code"):
    st.stop()

# After unlock, make it feel like an app
st.markdown(
    """
    <style>
      header[data-testid="stHeader"] { display: none; }
      footer { display: none; }
      [data-testid="stSidebar"] { display: none; }
      .stApp, [data-testid="stAppViewContainer"] { background:#020617 !important; }
      .main .block-container { max-width:100% !important; padding:0 !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

# Build a short-lived signed token so the in-game AI modal can open /ai_tutor
# even though it starts a new Streamlit session.
APP_URL = os.getenv("APP_URL", "https://bethemath.matesuite.ai").rstrip("/")
SECRET = (os.getenv("BTM_AI_TUTOR_SECRET") or os.getenv("ADMIN_CODE") or "").encode("utf-8")

ts = int(time.time())
payload = f"{ts}"
sig = hmac.new(SECRET, payload.encode("utf-8"), hashlib.sha256).hexdigest()[:32]
UNLOCK_TOKEN = f"{ts}.{sig}"

# Load the game
WEB_DIR = Path("webapp")
INDEX = WEB_DIR / "index.html"
if not INDEX.exists():
    st.error("Game files not found yet (webapp/index.html).")
    st.stop()

html = INDEX.read_text(encoding="utf-8", errors="ignore")

def _is_local(p: str) -> bool:
    p = (p or "").strip()
    return p and not p.startswith(("http://", "https://", "data:", "mailto:", "#"))

def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")

def _data_uri(path: Path) -> str:
    mime, _ = mimetypes.guess_type(str(path))
    mime = mime or "application/octet-stream"
    b64 = base64.b64encode(path.read_bytes()).decode("utf-8")
    return f"data:{mime};base64,{b64}"

def _resolve(p: str) -> Path:
    return WEB_DIR / p.lstrip("/")

# Inline CSS
def repl_css(m):
    href = m.group(1)
    if not _is_local(href):
        return m.group(0)
    f = _resolve(href)
    if f.exists():
        return f"<style>\n{_read_text(f)}\n</style>"
    return m.group(0)

html = re.sub(r'<link[^>]+href="([^"]+\.css[^"]*)"[^>]*>', repl_css, html, flags=re.IGNORECASE)

# Inline JS
def repl_js(m):
    src = m.group(1)
    attrs = m.group(2) or ""
    if not _is_local(src):
        return m.group(0)
    f = _resolve(src)
    if f.exists():
        type_attr = ' type="module"' if "module" in attrs else ""
        return f"<script{type_attr}>\n{_read_text(f)}\n</script>"
    return m.group(0)

html = re.sub(r'<script[^>]+src="([^"]+\.js[^"]*)"([^>]*)>\s*</script>', repl_js, html, flags=re.IGNORECASE)

# Inline images
def repl_img(m):
    src = m.group(1)
    if not _is_local(src):
        return m.group(0)
    f = _resolve(src)
    if f.exists():
        return m.group(0).replace(src, _data_uri(f))
    return m.group(0)

html = re.sub(r'<img[^>]+src="([^"]+)"[^>]*>', repl_img, html, flags=re.IGNORECASE)

# Inject host + token into the game (so the modal can open AI Tutor safely)
inject = f"""
<script>
  window.__BTM_HOST = {APP_URL!r};
  window.__BTM_UNLOCK_TOKEN = {UNLOCK_TOKEN!r};
</script>
"""
if re.search(r"</head>", html, flags=re.IGNORECASE):
    html = re.sub(r"</head>", inject + "\n</head>", html, count=1, flags=re.IGNORECASE)
else:
    html = inject + html

b64 = base64.b64encode(html.encode("utf-8")).decode("utf-8")
st.markdown(
    f"""
    <iframe
      src="data:text/html;base64,{b64}"
      style="width:100%; height: calc(100vh - 8px); border:0; display:block; background:#020617;"
      scrolling="yes"
    ></iframe>
    """,
    unsafe_allow_html=True,
)