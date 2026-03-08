import os
import json
import re
import requests
import streamlit as st
import streamlit.components.v1 as components

from btm_access import require_access_code

st.set_page_config(
    page_title="BeTheMath — AI Tutor",
    page_icon="🧠",
    layout="centered",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      header[data-testid="stHeader"] { display: none; }
      [data-testid="stSidebar"] { display: none; }
      footer { display: none; }
      .block-container { padding-top: 0.6rem; }
    </style>
    """,
    unsafe_allow_html=True,
)

# keep it protected (should already be unlocked in the same browser session)
if not require_access_code(label="Access code"):
    st.stop()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "").strip()
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini").strip()

def _qp_get(qp, key: str) -> str:
    v = qp.get(key, "")
    if isinstance(v, list):
        return v[0] if v else ""
    return v or ""

def _extract_clean_fix(md: str) -> str:
    patterns = [
        r"CLEAN\s*FIX[:\s]*\n(.+?)(\n\s*\n|$)",
        r"###\s*CLEAN\s*FIX.*?\n(.+?)(\n###|\Z)",
        r"\*\*CLEAN\s*FIX\*\*[:\s]*\n(.+?)(\n\s*\n|$)",
    ]
    for p in patterns:
        m = re.search(p, md, flags=re.IGNORECASE | re.DOTALL)
        if m:
            return m.group(1).strip()
    lines = [ln.strip() for ln in (md or "").splitlines() if ln.strip()]
    return "\n".join(lines[:3]).strip()

def _openai_explain(problem: str, student_work: str, variant: str) -> str:
    if not OPENAI_API_KEY:
        return "⚠️ OPENAI_API_KEY is missing in Railway Variables."

    style = "STEP-BY-STEP (simple, numbered)"
    if variant == "alt":
        style = "ANOTHER WAY (different wording, different approach, add an analogy)"

    system = (
        "You are BeTheMath AI Tutor. Be kind, clear, and practical.\n"
        "Write for a student who is confused.\n"
        "Always include these sections:\n"
        "STEP-BY-STEP (numbered)\n"
        "CLEAN FIX (1–3 lines, copy-ready)\n"
        "WHY THE WRONG ANSWER FEELS RIGHT (one sentence)\n"
        "QUICK CHECK (one short question + answer)\n"
        "Keep math correct. Use simple words.\n"
    )
    user = (
        f"STYLE: {style}\n\n"
        f"PROBLEM:\n{problem}\n\n"
        f"STUDENT WORK (incorrect):\n{student_work}\n\n"
        "If student work is missing steps, infer the most likely mistake and explain it.\n"
    )

    payload = {
        "model": OPENAI_MODEL,
        "store": False,
        "input": [
            {"role": "system", "content": [{"type": "input_text", "text": system}]},
            {"role": "user", "content": [{"type": "input_text", "text": user}]},
        ],
        "max_output_tokens": 750,
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
    except Exception:
        return "⚠️ Network error calling AI. Try again."

    if r.status_code == 401:
        return "⚠️ OpenAI 401 Unauthorized. Fix Railway → Variables → OPENAI_API_KEY and redeploy."
    if r.status_code >= 400:
        return f"⚠️ AI error ({r.status_code}). Try again."

    data = r.json()
    out = []
    for item in data.get("output", []) or []:
        if item.get("type") == "message":
            for c in item.get("content", []) or []:
                if c.get("type") == "output_text" and c.get("text"):
                    out.append(c["text"])
    return ("\n".join(out)).strip() or "⚠️ No text returned."

qp = st.query_params if hasattr(st, "query_params") else st.experimental_get_query_params()
problem = _qp_get(qp, "problem").strip()
work = _qp_get(qp, "work").strip()
variant = _qp_get(qp, "variant").strip() or "step"

st.markdown("## 🤖 AI Tutor")
if not problem or not work:
    st.warning("Missing problem or student work. Close this window and try again.")
    st.stop()

md = _openai_explain(problem, work, variant)
st.markdown(md)

clean = _extract_clean_fix(md)
st.markdown("### Clean fix to insert")
clean_edit = st.text_area("", value=clean, height=120)

c1, c2 = st.columns(2)
with c1:
    if st.button("Insert into Study box", use_container_width=True):
        payload = {"type": "btm_clean_fix", "text": clean_edit}
        components.html(
            f"""
            <script>
              window.parent.postMessage({json.dumps(payload)}, "*");
              window.parent.postMessage({json.dumps({"type":"btm_close_ai"})}, "*");
            </script>
            """,
            height=0,
        )
        st.success("Sent.")
with c2:
    if st.button("Close", use_container_width=True):
        components.html(
            f"<script>window.parent.postMessage({json.dumps({'type':'btm_close_ai'})}, '*');</script>",
            height=0,
        )