import re
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="AI Tutor", layout="centered")

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

def fallback_clean_fix(problem: str, work: str, variant: str = "step") -> str:
    problem = (problem or "").strip()
    work = (work or "").strip()

    if not work and not problem:
        return ""

    text = work or problem
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()

    if variant == "alt":
        lead = "Another clear way to think about it:"
    else:
        lead = "My corrected thinking:"

    if text and text[-1] not in ".!?":
        text += "."

    if problem:
        return f"{lead} For {problem}, the mistake in the work should be corrected step by step. {text}"
    return f"{lead} {text}"

def generate_clean_fix(problem: str, work: str, variant: str = "step") -> str:
    try:
        from btm_ai import generate_clean_fix as project_generate_clean_fix  # type: ignore
        result = project_generate_clean_fix(problem=problem, work=work, variant=variant)
        if isinstance(result, str) and result.strip():
            return result.strip()
    except Exception:
        pass

    return fallback_clean_fix(problem, work, variant)

qp = st.query_params

problem = qp.get("problem", "")
work = qp.get("work", "")
variant = qp.get("variant", "step")

if isinstance(problem, list):
    problem = problem[0] if problem else ""
if isinstance(work, list):
    work = work[0] if work else ""
if isinstance(variant, list):
    variant = variant[0] if variant else "step"

problem = str(problem or "").strip()
work = str(work or "").strip()
variant = str(variant or "step").strip()

clean_edit = generate_clean_fix(problem, work, variant)

st.title("AI Generate Fix")
st.caption("Review the clean version below, then insert it back into Study.")

st.text_area(
    "Problem",
    value=problem,
    height=100,
    disabled=True,
)

st.text_area(
    "Student work (incorrect)",
    value=work,
    height=140,
    disabled=True,
)

edited = st.text_area(
    "Clean fix",
    value=clean_edit,
    height=220,
    key="clean_fix_editable",
)

c1, c2 = st.columns(2)

with c1:
    if st.button("Insert into Study box", use_container_width=True):
        payload = {"type": "btm_clean_fix", "text": edited}
        components.html(
            f"""
            <script>
              const msg = {payload};
              const closeMsg = {{type: "btm_close_ai"}};

              try {{
                if (window.parent && window.parent.parent) {{
                  window.parent.parent.postMessage(msg, "*");
                  window.parent.parent.postMessage(closeMsg, "*");
                }} else if (window.parent) {{
                  window.parent.postMessage(msg, "*");
                  window.parent.postMessage(closeMsg, "*");
                }}
              }} catch (e) {{
                console.error("postMessage failed", e);
              }}
            </script>
            """,
            height=0,
        )
        st.success("Inserted. Returning to Study…")

with c2:
    if st.button("Close", use_container_width=True):
        components.html(
            """
            <script>
              const closeMsg = {type: "btm_close_ai"};
              try {
                if (window.parent && window.parent.parent) {
                  window.parent.parent.postMessage(closeMsg, "*");
                } else if (window.parent) {
                  window.parent.postMessage(closeMsg, "*");
                }
              } catch (e) {
                console.error("close postMessage failed", e);
              }
            </script>
            """,
            height=0,
        )
        st.info("Closing…")
