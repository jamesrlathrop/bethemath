from pathlib import Path
import re
import base64
import mimetypes
import streamlit as st
import streamlit.components.v1 as components

from btm_access import require_access_code

if not require_access_code(label="Access code"):
    st.stop()

st.set_page_config(page_title="BeTheMath — Error Detective", page_icon="🧠", layout="wide")

# ---- Streamlit page chrome + background blend (ONE place only) ----
st.markdown(
    """
    <style>
      /* Match Streamlit background to the game so "outside" doesn't look white */
      .stApp, [data-testid="stAppViewContainer"] {
        background: #020617 !important;
      }

      /* Edge-to-edge play page */
      .main .block-container {
        max-width: 100% !important;
        padding: 0 !important;
      }

      /* Remove Streamlit chrome */
      header[data-testid="stHeader"] { display: none; }
      footer { display: none; }
    </style>
    """,
    unsafe_allow_html=True,
)

WEB_DIR = Path("webapp")
INDEX = WEB_DIR / "index.html"

if not INDEX.exists():
    st.error("Game files not found yet.")
    st.info("Create folder `webapp/` and add `index.html` + any `assets/` folder into it.")
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

# ---- Inline CSS <link href="...css"> ----
def repl_css(m):
    href = m.group(1)
    if not _is_local(href):
        return m.group(0)
    f = _resolve(href)
    if f.exists():
        return f"<style>\n{_read_text(f)}\n</style>"
    return m.group(0)

html = re.sub(r'<link[^>]+href="([^"]+\.css[^"]*)"[^>]*>', repl_css, html, flags=re.IGNORECASE)

# ---- Inline JS <script src="...js"></script> ----
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

html = re.sub(
    r'<script[^>]+src="([^"]+\.js[^"]*)"([^>]*)>\s*</script>',
    repl_js,
    html,
    flags=re.IGNORECASE,
)

# ---- Inline images in <img src="..."> ----
def repl_img(m):
    src = m.group(1)
    if not _is_local(src):
        return m.group(0)
    f = _resolve(src)
    if f.exists():
        return m.group(0).replace(src, _data_uri(f))
    return m.group(0)

html = re.sub(r'<img[^>]+src="([^"]+)"[^>]*>', repl_img, html, flags=re.IGNORECASE)

# ---- Force the embedded game to fill the available frame ----
FULLSCREEN_PATCH = """
<style>
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
  }

  /* Your app root is #mq-root */
  #mq-root, #root, #app, .app, .container, .main, .game {
    width: 100% !important;
    height: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  canvas {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
  }
</style>
"""

# Insert into <head> if present, otherwise prepend
if re.search(r"</head>", html, flags=re.IGNORECASE):
    html = re.sub(r"</head>", FULLSCREEN_PATCH + "\n</head>", html, count=1, flags=re.IGNORECASE)
else:
    html = FULLSCREEN_PATCH + html

# Bigger height + no scroll chrome
b64 = base64.b64encode(html.encode("utf-8")).decode("utf-8")

st.markdown(
    f"""
    <iframe
      src="data:text/html;base64,{b64}"
      style="width:100%; height: calc(100vh - 8px); border:0; display:block; background:#020617;"
      allow="autoplay"
      scrolling="yes"
    ></iframe>
    """,
    unsafe_allow_html=True,
)