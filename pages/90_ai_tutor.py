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


def _format_clean_fix(what_went_wrong: str, corrected_work: str, final_answer: str) -> str:
    return (
        f"What went wrong:\n{what_went_wrong.strip()}\n\n"
        f"Corrected work:\n{corrected_work.strip()}\n\n"
        f"Final answer:\n{final_answer.strip()}"
    )


def _is_bad_clean_fix(text: str) -> bool:
    if not isinstance(text, str) or not text.strip():
        return True

    lowered = text.lower()

    blocked_phrases = [
        "start again from the original problem",
        "explain what went wrong",
        "show the corrected steps",
        "problem:",
        "incorrect work:",
        "my corrected thinking:",
        "the student's work is incorrect",
    ]

    if any(p in lowered for p in blocked_phrases):
        return True

    required_labels = [
        "what went wrong:",
        "corrected work:",
        "final answer:",
    ]

    return not all(label in lowered for label in required_labels)


def fallback_clean_fix(problem: str, work: str, variant: str = "step") -> str:
    import math

    problem = (problem or "").strip()
    work = (work or "").strip()

    if not work and not problem:
        return ""

    def fmt_num(value) -> str:
        if isinstance(value, float) and value.is_integer():
            return str(int(value))
        return str(value)

    def safe_eval(expr: str):
        if not expr:
            return None

        expr = expr.strip()
        expr = expr.replace("×", "*").replace("÷", "/").replace("^", "**")

        if expr.endswith("="):
            expr = expr[:-1].strip()

        if "=" in expr:
            expr = expr.split("=")[0].strip()

        if re.search(r"[A-Za-z]", expr):
            return None

        if not re.fullmatch(r"[0-9\.\s\+\-\*\/\(\)]{1,120}", expr):
            return None

        try:
            return eval(expr, {"__builtins__": {}}, {})
        except Exception:
            return None

    def solve_one_step_equation(expr: str):
        """
        Supports simple one-step equations like:
        x + 5 = 12
        x - 5 = 12
        5 + x = 12
        5 - x = 12
        3x = 12
        x / 4 = 3
        """
        if not expr:
            return None

        s = expr.replace(" ", "")
        if s.count("=") != 1:
            return None

        left, right = s.split("=")

        try:
            rhs = float(right)
        except Exception:
            return None

        num = r"(-?\d+(?:\.\d+)?)"

        patterns = [
            (rf"^x\+{num}$", lambda a: rhs - float(a)),
            (rf"^x-{num}$", lambda a: rhs + float(a)),
            (rf"^{num}\+x$", lambda a: rhs - float(a)),
            (rf"^{num}-x$", lambda a: float(a) - rhs),
            (rf"^{num}x$", lambda a: rhs / float(a) if float(a) != 0 else None),
            (rf"^x/{num}$", lambda a: rhs * float(a)),
        ]

        for pattern, solver in patterns:
            m = re.match(pattern, left)
            if m:
                value = solver(m.group(1))
                if value is None:
                    return None
                return value

        return None

    source = f"{problem} {work}".strip()

    # Prioritize slope from two coordinate points before treating values like 3/6 as plain fraction simplification
    coord_matches = list(re.finditer(r"\((-?\d+)\s*,\s*(-?\d+)\)", source))
    if len(coord_matches) >= 2 and "slope" in source.lower():
        x1 = int(coord_matches[0].group(1))
        y1 = int(coord_matches[0].group(2))
        x2 = int(coord_matches[1].group(1))
        y2 = int(coord_matches[1].group(2))

        dx = x2 - x1
        dy = y2 - y1

        if dx == 0:
            return _format_clean_fix(
                "The line is vertical, so the slope is undefined.",
                f"({x1}, {y1}) to ({x2}, {y2}) gives Δx = 0, so slope is undefined.",
                "undefined",
            )

        slope_val = dy / dx
        slope_text = fmt_num(slope_val)

        return _format_clean_fix(
            "Slope is change in y over change in x, not the numbers written in the student's fraction by themselves.",
            f"slope = ({y2} - {y1}) / ({x2} - {x1})\n"
            f"slope = {dy} / {dx}\n"
            f"slope = {slope_text}",
            slope_text,
        )


    m = re.search(r"simplify\s+(-?\d+)\s*/\s*(-?\d+)", source, re.IGNORECASE)
    if not m:
        m = re.search(r"(-?\d+)\s*/\s*(-?\d+)", source)

    if m:
        num = int(m.group(1))
        den = int(m.group(2))

        if den == 0:
            return _format_clean_fix(
                "A fraction cannot have a denominator of 0.",
                f"{num}/{den} is undefined.",
                "undefined",
            )

        g = math.gcd(abs(num), abs(den))
        simp_num = num // g
        simp_den = den // g

        if g == 1:
            return _format_clean_fix(
                "The fraction is already in simplest form.",
                f"{num}/{den} stays {num}/{den}.",
                f"{num}/{den}",
            )

        return _format_clean_fix(
            f"The numerator and denominator share a common factor of {g}.",
            f"{num}/{den}\n= {num} ÷ {g} / {den} ÷ {g}\n= {simp_num}/{simp_den}",
            f"{simp_num}/{simp_den}",
        )

    expr = problem
    if not expr and work:
        m_eq = re.match(r"\s*(.+?)\s*=\s*.+", work)
        if m_eq:
            expr = m_eq.group(1).strip()

    answer = safe_eval(expr)
    if answer is not None:
        cleaned_expr = expr.strip()
        if cleaned_expr.endswith("="):
            cleaned_expr = cleaned_expr[:-1].strip()

        return _format_clean_fix(
            "The answer shown does not match the value of the expression.",
            f"{cleaned_expr} = {fmt_num(answer)}",
            fmt_num(answer),
        )

    eq_answer = solve_one_step_equation(problem)
    if eq_answer is not None:
        return _format_clean_fix(
            "The variable was not isolated correctly.",
            f"{problem}\nx = {fmt_num(eq_answer)}",
            f"x = {fmt_num(eq_answer)}",
        )

    return _format_clean_fix(
        "The shown work does not match the correct solution.",
        problem if problem else work,
        "Please try Generate Fix again.",
    )


def generate_clean_fix(problem: str, work: str, variant: str = "step") -> str:
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

st.title("AI Generate Fix PATCH TEST")
st.caption("PATCH TEST — this page is using the new Clean Fix file.")

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