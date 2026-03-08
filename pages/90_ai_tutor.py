import os
import json
import re
import time
import hmac
import hashlib
import requests
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="BeTheMath — AI Tutor",
    page_icon="🧠",
    layout="centered",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      header[data-testid="stHeader"] { display:none; }
      [data-testid="stSidebar"] { display:none; }
      footer { display:none; }
      .block-container { max-width: 900px; padding-top: 0.8rem; }
    </style>
    """,
    unsafe_allow_html=True,
)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "").strip()
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4.1-mini").strip()
SECRET = (os.getenv("BTM_AI_TUTOR_SECRET") or os.getenv("ADMIN_CODE") or "").encode("utf-8")

def _qp_get(qp, key: str) -> str:
    v = qp.get(key, "")
    if isinstance(v, list):
        return v[0] if v else ""
    return v or ""

def _token_ok(token: str) -> bool:
    try:
        ts_s, sig = token.split(".", 1)
        ts = int(ts_s)
    except Exception:
        return False

    # valid for 30 minutes
    if abs(int(time.time()) - ts) > 1800:
        return False

    payload = f"{ts}"
    good = hmac.new(SECRET, payload.encode("utf-8"), hashlib.sha256).hexdigest()[:32]
    return hmac.compare_digest(good, sig)

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

    style = "STEP-BY-STEP (simple, numbered)" if variant != "alt" else "ANOTHER WAY (different wording, add an analogy)"

    system = (
        "You are BeTheMath AI Tutor. Be kind, clear, and practical.\n"
        "Always include:\n"
        "STEP-BY-STEP (numbered)\n"
        "CLEAN FIX (1–3 lines)\n"
        "WHY THE WRONG ANSWER FEELS RIGHT (one sentence)\n"
        "QUICK CHECK (one question + answer)\n"
        "Keep math correct. Use simple words.\n"
    )
    user = (
        f"STYLE: {style}\n\n"
        f"PROBLEM:\n{problem}\n\n"
        f"STUDENT WORK (incorrect):\n{student_work}\n\n"
        "If steps are missing, infer the most likely mistake and explain it.\n"
    )

    payload = {
        "model": OPENAI_MODEL,
        "store": False,
        "input": [
            {"role": "system", "content": [{"type": "input_text", "text": system}]},
            {"role": "user", "content": [{"type": "input_text", "text": user}]},
        ],
        "max_output_tokens": 850,
    }

    r = requests.post(
        "https://api.openai.com/v1/responses",
        headers={"Authorization": f"Bearer {OPENAI_API_KEY}", "Content-Type": "application/json"},
        data=json.dumps(payload),
        timeout=45,
    )

    if r.status_code == 401:
        return "⚠️ OpenAI 401 Unauthorized. Fix OPENAI_API_KEY in Railway Variables and redeploy."
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

token = _qp_get(qp, "token").strip()
problem = _qp_get(qp, "problem").strip()
work = _qp_get(qp, "work").strip()
variant = (_qp_get(qp, "variant") or "step").strip()

if not token or not _token_ok(token):
    st.error("This AI Tutor window is not authorized. Close it and reopen from inside Study → AI Generate Fix.")
    st.stop()

st.markdown("## 🤖 AI Tutor")
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
              const msg = {json.dumps(payload)};
              // We are inside a Streamlit component iframe -> parent is the AI page
              // parent.parent is the GAME iframe (where the Study box exists)
              if (window.parent && window.parent.parent) {{
                window.parent.parent.postMessage(msg, "*");
                window.parent.parent.postMessage({json.dumps({"type":"btm_close_ai"})}, "*");
              }} else if (window.parent) {{
                window.parent.postMessage(msg, "*");
                window.parent.postMessage({json.dumps({"type":"btm_close_ai"})}, "*");
              }}
            </script>
            """,
            height=0,
        )
        st.success("Sent.")
with c2:
    if st.button("Close", use_container_width=True):
        components.html(
    f"""
    <script>
      const closeMsg = {json.dumps({'type':'btm_close_ai'})};
      if (window.parent && window.parent.parent) {{
        window.parent.parent.postMessage(closeMsg, "*");
      }} else if (window.parent) {{
        window.parent.postMessage(closeMsg, "*");
      }}
    </script>
    """,
    height=0,
)