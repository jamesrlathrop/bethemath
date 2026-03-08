import os
import json
import re
import base64
import mimetypes
from pathlib import Path

import requests
import streamlit as st

from btm_access import require_access_code

# -----------------------
# Page config
# -----------------------
st.set_page_config(
    page_title="BeTheMath — Error Detective",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# -----------------------
# Security: require access even if someone hits /play directly
# -----------------------
if not require_access_code(label="Access code"):
    st.stop()

# -----------------------
# OpenAI helper (server-side, key stays private)
# -----------------------
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "").strip()
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini").strip()  # cost-effective & strong :contentReference[oaicite:2]{index=2}

def _openai_explain(problem: str, student_work: str, style: str, avoid_text: str = "") -> str:
    """
    Returns a markdown explanation with clear sections:
    - STEP-BY-STEP
    - CLEAN FIX (copy-ready)
    - WHY THE WRONG ANSWER FEELS RIGHT
    - QUICK CHECK
    """
    if not OPENAI_API_KEY:
        return (
            "⚠️ AI helper is not configured.\n\n"
            "Ask the owner to set Railway → Variables → `OPENAI_API_KEY`."
        )

    system = (
        "You are BeTheMath AI Tutor. Be kind, clear, and practical.\n"
        "Write for a student who is confused.\n"
        "Always provide:\n"
        "1) STEP-BY-STEP numbered steps.\n"
        "2) CLEAN FIX (1–3 lines) that can be pasted into an app.\n"
        "3) WHY THE WRONG ANSWER FEELS RIGHT (one sentence).\n"
        "4) QUICK CHECK (one short question + answer).\n"
        "Keep math correct. Use simple words. No extra fluff.\n"
    )

    user = (
        f"STYLE: {style}\n"
        f"PROBLEM:\n{problem}\n\n"
        f"STUDENT WORK (incorrect):\n{student_work}\n\n"
        "If the student work is missing steps, infer the most likely mistake and explain it.\n"
    )
    if avoid_text.strip():
        user += f"\nAvoid repeating these exact phrases/approach:\n{avoid_text}\n"

    payload = {
        "model": OPENAI_MODEL,
        "store": False,  # don’t store responses :contentReference[oaicite:3]{index=3}
        "input": [
            {"role": "system", "content": [{"type": "input_text", "text": system}]},
            {"role": "user", "content": [{"type": "input_text", "text": user}]},
        ],
        "max_output_tokens": 650,
    }

    r = requests.post(
        "https://api.openai.com/v1/responses",
        headers={
            "Authorization": f"Bearer {OPENAI_API_KEY}",  # Bearer auth :contentReference[oaicite:4]{index=4}
            "Content-Type": "application/json",
        },
        data=json.dumps(payload),
        timeout=35,
    )
    r.raise_for_status()
    data = r.json()

    # Extract first output_text from message items
    out = []
    for item in data.get("output", []) or []:
        if item.get("type") == "message":
            for c in item.get("content", []) or []:
                if c.get("type") == "output_text" and c.get("text"):
                    out.append(c["text"])
    return "\n".join(out).strip() or "⚠️ No text returned from model."

def _extract_clean_fix(md: str) -> str:
    """
    Best-effort extraction of CLEAN FIX section.
    """
    # Common headings
    patterns = [
        r"CLEAN\s*FIX[:\s]*\n(.+?)(\n\s*\n|$)",
        r"###\s*CLEAN\s*FIX.*?\n(.+?)(\n###|\Z)",
        r"\*\*CLEAN\s*FIX\*\*[:\s]*\n(.+?)(\n\s*\n|$)",
    ]
    for p in patterns:
        m = re.search(p, md, flags=re.IGNORECASE | re.DOTALL)
        if m:
            return m.group(1).strip()
    # fallback: first 3 lines
    lines = [ln.strip() for ln in (md or "").splitlines() if ln.strip()]
    return "\n".join(lines[:3]).strip()

# -----------------------
# AI Helper UI (student-friendly)
# -----------------------
with st.expander("🤖 AI Helper — Study a Specific Problem (fills the explanation for you)", expanded=False):
    st.write("Type the problem + what the student wrote. Click **Explain it**.")
    ai_problem = st.text_area(
        "Problem (what was asked?)",
        key="ai_problem",
        placeholder="Example: Simplify 3/4 + 1/3",
        height=80,
    )
    ai_work = st.text_area(
        "Student work (incorrect)",
        key="ai_work",
        placeholder="Example: 3/4 + 1/3 = 7",
        height=80,
    )

    c1, c2 = st.columns(2)
    with c1:
        if st.button("Explain it (step-by-step)", use_container_width=True):
            st.session_state["ai_last_style"] = "STEP-BY-STEP (simple, numbered)"
            st.session_state["ai_last_text"] = ""
            st.session_state["ai_explain_md"] = _openai_explain(
                ai_problem.strip(),
                ai_work.strip(),
                style=st.session_state["ai_last_style"],
                avoid_text="",
            )
    with c2:
        if st.button("Explain another way", use_container_width=True):
            prev = st.session_state.get("ai_explain_md", "")
            st.session_state["ai_last_style"] = "ANOTHER WAY (different words, different approach, add an analogy)"
            st.session_state["ai_explain_md_2"] = _openai_explain(
                ai_problem.strip(),
                ai_work.strip(),
                style=st.session_state["ai_last_style"],
                avoid_text=prev[:900],  # avoid repeating too closely
            )

    md1 = st.session_state.get("ai_explain_md", "").strip()
    if md1:
        st.markdown("### Explanation")
        st.markdown(md1)

        clean = _extract_clean_fix(md1)
        st.markdown("### Copy-ready Clean Fix (paste into the Study box)")
        st.code(clean, language="text")

    md2 = st.session_state.get("ai_explain_md_2", "").strip()
    if md2:
        st.markdown("### Another Explanation (different wording)")
        st.markdown(md2)

        clean2 = _extract_clean_fix(md2)
        st.markdown("### Copy-ready Clean Fix (alternate)")
        st.code(clean2, language="text")

# -----------------------
# Render the game (your existing webapp build)
# -----------------------
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

# Inline CSS <link href="...css">
def repl_css(m):
    href = m.group(1)
    if not _is_local(href):
        return m.group(0)
    f = _resolve(href)
    if f.exists():
        return f"<style>\n{_read_text(f)}\n</style>"
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
        type_attr = ' type="module"' if "module" in attrs else ""
        return f"<script{type_attr}>\n{_read_text(f)}\n</script>"
    return m.group(0)

html = re.sub(r'<script[^>]+src="([^"]+\.js[^"]*)"([^>]*)>\s*</script>', repl_js, html, flags=re.IGNORECASE)

# Inline images in <img src="...">
def repl_img(m):
    src = m.group(1)
    if not _is_local(src):
        return m.group(0)
    f = _resolve(src)
    if f.exists():
        return m.group(0).replace(src, _data_uri(f))
    return m.group(0)

html = re.sub(r'<img[^>]+src="([^"]+)"[^>]*>', repl_img, html, flags=re.IGNORECASE)

# Render inside an iframe so scrolling behaves nicely on long pages
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