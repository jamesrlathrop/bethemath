import os
import json
import re
import base64
import mimetypes
from pathlib import Path

import requests
import streamlit as st
import streamlit.components.v1 as components

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

# Hide Streamlit chrome so it feels like an app
st.markdown(
    """
    <style>
      header[data-testid="stHeader"] { display: none; }
      footer { display: none; }
    </style>
    """,
    unsafe_allow_html=True,
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
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini").strip()


def _openai_explain(problem: str, student_work: str, style: str, avoid_text: str = "") -> str:
    """
    Returns markdown explanation with:
    - STEP-BY-STEP
    - CLEAN FIX (copy-ready)
    - WHY THE WRONG ANSWER FEELS RIGHT
    - QUICK CHECK
    """
    if not OPENAI_API_KEY:
        return (
            "⚠️ AI Helper isn’t configured.\n\n"
            "Fix: Railway → Variables → set `OPENAI_API_KEY`, then redeploy."
        )

    system = (
        "You are BeTheMath AI Tutor. Be kind, clear, and practical.\n"
        "Write for a student who is confused.\n"
        "Always provide:\n"
        "1) STEP-BY-STEP numbered steps.\n"
        "2) CLEAN FIX (1–3 lines) that can be pasted into an app.\n"
        "3) WHY THE WRONG ANSWER FEELS RIGHT (one sentence).\n"
        "4) QUICK CHECK (one short question + answer).\n"
        "Keep math correct. Use simple words.\n"
    )

    user = (
        f"STYLE: {style}\n\n"
        f"PROBLEM:\n{problem}\n\n"
        f"STUDENT WORK (incorrect):\n{student_work}\n\n"
        "If the student work is missing steps, infer the most likely mistake and explain it.\n"
    )
    if avoid_text.strip():
        user += f"\nAvoid repeating these exact phrases/approach:\n{avoid_text}\n"

    payload = {
        "model": OPENAI_MODEL,
        "store": False,
        "input": [
            {"role": "system", "content": [{"type": "input_text", "text": system}]},
            {"role": "user", "content": [{"type": "input_text", "text": user}]},
        ],
        "max_output_tokens": 700,
    }

    try:
        r = requests.post(
            "https://api.openai.com/v1/responses",
            headers={
                "Authorization": f"Bearer {OPENAI_API_KEY}",
                "Content-Type": "application/json",
            },
            data=json.dumps(payload),
            timeout=40,
        )
    except requests.exceptions.RequestException:
        return "⚠️ AI Helper network error. Please try again."

    # Never crash the app
    if r.status_code == 401:
        return (
            "⚠️ AI Helper isn’t authorized (OpenAI 401).\n\n"
            "Fix: Railway → Variables → `OPENAI_API_KEY` must be a valid OpenAI API key, then redeploy."
        )
    if r.status_code >= 400:
        return f"⚠️ AI Helper error ({r.status_code}). Please try again."

    try:
        data = r.json()
    except Exception:
        return "⚠️ AI Helper returned unreadable data. Please try again."

    # Extract first output_text from message items
    out = []
    for item in data.get("output", []) or []:
        if item.get("type") == "message":
            for c in item.get("content", []) or []:
                if c.get("type") == "output_text" and c.get("text"):
                    out.append(c["text"])
    return ("\n".join(out)).strip() or "⚠️ No text returned. Please try again."


def _extract_clean_fix(md: str) -> str:
    """
    Best-effort extraction of CLEAN FIX section.
    """
    patterns = [
        r"CLEAN\s*FIX[:\s]*\n(.+?)(\n\s*\n|$)",
        r"###\s*CLEAN\s*FIX.*?\n(.+?)(\n###|\Z)",
        r"\*\*CLEAN\s*FIX\*\*[:\s]*\n(.+?)(\n\s*\n|$)",
    ]
    for p in patterns:
        m = re.search(p, md, flags=re.IGNORECASE | re.DOTALL)
        if m:
            return m.group(1).strip()
    # fallback: first 3 non-empty lines
    lines = [ln.strip() for ln in (md or "").splitlines() if ln.strip()]
    return "\n".join(lines[:3]).strip()


# -----------------------
# AI Helper UI (student-friendly)
# -----------------------
with st.expander("🤖 AI Helper — Study a Specific Problem (fills the explanation for you)", expanded=True):
    st.write("Type the problem + what the student wrote. Click **Explain it**.")

    ai_problem = st.text_area(
        "Problem (what was asked?)",
        key="ai_problem",
        placeholder="Example: Simplify 3/4 + 1/3",
        height=70,
    )
    ai_work = st.text_area(
        "Student work (incorrect)",
        key="ai_work",
        placeholder="Example: 3/4 + 1/3 = 7",
        height=70,
    )

    c1, c2 = st.columns(2)

    if "ai_explain_md" not in st.session_state:
        st.session_state["ai_explain_md"] = ""
    if "ai_explain_md_2" not in st.session_state:
        st.session_state["ai_explain_md_2"] = ""

    with c1:
        if st.button("Explain it (step-by-step)", use_container_width=True):
            if not ai_problem.strip() or not ai_work.strip():
                st.warning("Please fill in BOTH the problem and the student’s work first.")
            else:
                st.session_state["ai_explain_md_2"] = ""
                st.session_state["ai_explain_md"] = _openai_explain(
                    ai_problem.strip(),
                    ai_work.strip(),
                    style="STEP-BY-STEP (simple, numbered)",
                    avoid_text="",
                )

    with c2:
        if st.button("Explain another way", use_container_width=True):
            if not ai_problem.strip() or not ai_work.strip():
                st.warning("Please fill in BOTH the problem and the student’s work first.")
            else:
                prev = st.session_state.get("ai_explain_md", "")
                st.session_state["ai_explain_md_2"] = _openai_explain(
                    ai_problem.strip(),
                    ai_work.strip(),
                    style="ANOTHER WAY (different wording, add an analogy)",
                    avoid_text=(prev or "")[:900],
                )

    md1 = (st.session_state.get("ai_explain_md") or "").strip()
    if md1:
        st.markdown("### Explanation")
        st.markdown(md1)

        clean = _extract_clean_fix(md1)
        st.markdown("### Copy-ready Clean Fix (paste into the Study box)")
        st.code(clean, language="text")

        colA, colB = st.columns(2)
        with colA:
            if st.button("Copy Clean Fix", key="copy_fix_1", use_container_width=True):
                components.html(
                    f"<script>navigator.clipboard.writeText({json.dumps(clean)});</script>",
                    height=0,
                )
                st.success("Copied. Click Study in the app and paste into Clean fix / explanation.")
        with colB:
            st.info("Next: click **Study** (top bar) → paste into **Clean fix / explanation** → **Practice Now**.")

    md2 = (st.session_state.get("ai_explain_md_2") or "").strip()
    if md2:
        st.markdown("### Another Explanation (different wording)")
        st.markdown(md2)

        clean2 = _extract_clean_fix(md2)
        st.markdown("### Copy-ready Clean Fix (alternate)")
        st.code(clean2, language="text")

        colA2, colB2 = st.columns(2)
        with colA2:
            if st.button("Copy Alternate Clean Fix", key="copy_fix_2", use_container_width=True):
                components.html(
                    f"<script>navigator.clipboard.writeText({json.dumps(clean2)});</script>",
                    height=0,
                )
                st.success("Copied. Click Study in the app and paste into Clean fix / explanation.")
        with colB2:
            st.info("Same steps: **Study** → paste → **Practice Now**.")


# -----------------------
# Render the embedded game (webapp/index.html)
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


html = re.sub(
    r'<script[^>]+src="([^"]+\.js[^"]*)"([^>]*)>\s*</script>',
    repl_js,
    html,
    flags=re.IGNORECASE,
)

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

# Render inside an iframe so scrolling behaves nicely
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