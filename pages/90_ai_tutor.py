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
    import math

    problem = (problem or "").strip()
    work = (work or "").strip()

    if not work and not problem:
        return ""

    if variant == "alt":
        lead = "Another clear way to think about it:"
    else:
        lead = "My corrected thinking:"

    source = f"{problem} {work}".strip()

    # Handle simple fraction simplification like "simplify 3/27"
    m = re.search(r"simplify\s+(-?\d+)\s*/\s*(-?\d+)", source, re.IGNORECASE)
    if not m:
        m = re.search(r"(-?\d+)\s*/\s*(-?\d+)", source)

    if m:
        num = int(m.group(1))
        den = int(m.group(2))

        if den == 0:
            return f"{lead} A fraction cannot have a denominator of 0."

        g = math.gcd(abs(num), abs(den))
        simp_num = num // g
        simp_den = den // g

        if g == 1:
            return (
                f"{lead} The fraction {num}/{den} is already in simplest form because "
                f"the numerator and denominator do not share a common factor greater than 1."
            )

        return (
            f"{lead} To simplify {num}/{den}, divide both the numerator and denominator by {g}. "
            f"{num} ÷ {g} = {simp_num}. {den} ÷ {g} = {simp_den}. "
            f"So {num}/{den} = {simp_num}/{simp_den}."
        )

    # Safer generic fallback: do not repeat incorrect work as if it were correct
    if problem and work:
        return (
            f"{lead} The student's work is incorrect. Start again from the original problem and "
            f"correct the mistake step by step. Problem: {problem}. "
            f"Incorrect work: {work}. Explain what went wrong, then show the corrected steps clearly."
        )

    if problem:
        return (
            f"{lead} Start from the original problem and work it out step by step. "
            f"Problem: {problem}."
        )

    return (
        f"{lead} The student's work needs to be corrected step by step. "
        f"Incorrect work: {work}."
    )

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
