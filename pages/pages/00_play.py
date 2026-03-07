from pathlib import Path
import re
import base64
import mimetypes
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="BeTheMath — Error Detective", page_icon="🧠", layout="wide")

# Must be unlocked
if not st.session_state.get("btm_unlocked", True):  # require_access_code usually sets unlocked state
    st.warning("Please unlock BeTheMath first.")
    st.switch_page("app.py")

WEB_DIR = Path("webapp")           # we'll create this folder next
INDEX = WEB_DIR / "index.html"

st.title("BeTheMath — Error Detective")

if not INDEX.exists():
    st.error("Game files not found yet.")
    st.info("Create folder `webapp/` and add `index.html` + any `assets/` folder into it.")
    st.stop()

html = INDEX.read_text(encoding="utf-8", errors="ignore")

def _is_local(p: str) -> bool:
    p = (p or "").strip()
    return p and not p.startswith(("http://", "https://", "data:", "mailto:", "#"))

def _read_file(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")

def _data_uri(path: Path) -> str:
    mime, _ = mimetypes.guess_type(str(path))
    mime = mime or "application/octet-stream"
    b64 = base64.b64encode(path.read_bytes()).decode("utf-8")
    return f"data:{mime};base64,{b64}"

def _resolve(p: str) -> Path:
    # handle /assets/... or assets/...
    p = p.lstrip("/")
    return WEB_DIR / p

# Inline CSS <link href="...css">
def repl_css(m):
    href = m.group(1)
    if not _is_local(href):
        return m.group(0)
    f = _resolve(href)
    if f.exists():
        return f"<style>\n{_read_file(f)}\n</style>"
    return m.group(0)

html = re.sub(r'<link[^>]+href="([^"]+\.css[^"]*)"[^>]*>', repl_css, html, flags=re.IGNORECASE)

# Inline JS <script src="...js"></script>
def repl_js(m):
    src = m.group(1)
    attrs = m.group(2) or ""
    if not _is_local(src):
        return m.group(0)
    f = _resolve(src)
    if f.exists():
        # keep module if present
        type_attr = ' type="module"' if "module" in attrs else ""
        return f"<script{type_attr}>\n{_read_file(f)}\n</script>"
    return m.group(0)

html = re.sub(r'<script[^>]+src="([^"]+\.js[^"]*)"([^>]*)>\s*</script>', repl_js, html, flags=re.IGNORECASE)

# Inline common images/icons in <img src="...">
def repl_img(m):
    src = m.group(1)
    if not _is_local(src):
        return m.group(0)
    f = _resolve(src)
    if f.exists():
        return m.group(0).replace(src, _data_uri(f))
    return m.group(0)

html = re.sub(r'<img[^>]+src="([^"]+)"[^>]*>', repl_img, html, flags=re.IGNORECASE)

components.html(html, height=1000, scrolling=True)
