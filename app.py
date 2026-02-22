import os
import random
import streamlit as st

# =========================
# Config
# =========================
st.set_page_config(
    page_title="BeTheMath — Error Detective",
    page_icon="🧠",
    layout="wide",
)

APP_TITLE = "🧠 BeTheMath — Error Detective"
APP_TAGLINE = "Fix mistakes fast. Learn why. Build confidence."

# =========================
# Access Gate (BTM codes)
# =========================
def _get_codes() -> set[str]:
    raw = os.getenv("ACCESS_CODES") or ""
    parts = raw.replace(",", "\n").replace(";", "\n").splitlines()
    return {p.strip() for p in parts if p.strip()}

def require_access():
    if st.session_state.get("access_granted", False):
        return

    st.title(APP_TITLE)
    st.caption(APP_TAGLINE)

    st.info(
        "Enter your BeTheMath access code to unlock the app. "
        "Customer codes look like **BTM-XXXX**. "
        "Tip: double-check for spaces at the start/end."
    )

    code_input = st.text_input("Access code", type="password", placeholder="BTM-XXXX")

    cols = st.columns([1, 2, 1])
    with cols[0]:
        unlock = st.button("Unlock", use_container_width=True)
    with cols[1]:
        st.caption("If you’re the owner: admin tools are at /manage_codes (admin code won’t work here).")
    with cols[2]:
        st.caption("")

    if unlock:
        if code_input.strip() in _get_codes():
            st.session_state["access_granted"] = True
            st.success("Access granted. Welcome!")
            st.rerun()
        else:
            st.error("Invalid access code.")

    st.stop()

# =========================
# Problem Bank
# =========================
PROBLEMS = [
    {
        "topic": "Distributive Property",
        "prompt": "Student Work: 5(x + 1) = 5x + 1",
        "question": "Pick the best explanation:",
        "choices": [
            "They divided incorrectly",
            "They added incorrectly",
            "They forgot to multiply 1 by 5. Correct: 5x + 5",
            "They changed the sign",
        ],
        "answer_index": 2,
        "explain_correct": "Correct: distribute 5 to BOTH terms inside parentheses: 5·x + 5·1 = 5x + 5.",
        "explain_wrong": "Not quite. When distributing, multiply the outside number by every term inside the parentheses.",
        "level": "Algebra",
    },
    {
        "topic": "Combining Like Terms",
        "prompt": "Student Work: 3x + 2x = 3x",
        "question": "What mistake happened?",
        "choices": [
            "They subtracted instead of adding",
            "They forgot to combine the x-terms: 3x + 2x = 5x",
            "They divided both sides by x",
            "They changed x into a number",
        ],
        "answer_index": 1,
        "explain_correct": "Correct: like terms add: 3x + 2x = (3+2)x = 5x.",
        "explain_wrong": "Remember: you can combine terms only if the variable part matches exactly.",
        "level": "Algebra",
    },
    {
        "topic": "Integer Signs",
        "prompt": "Student Work: −4 − 6 = 2",
        "question": "What is the correct result?",
        "choices": [
            "−10",
            "10",
            "2",
            "−2",
        ],
        "answer_index": 0,
        "explain_correct": "Correct: moving left 6 more from −4 gives −10.",
        "explain_wrong": "Subtracting a positive moves left on the number line.",
        "level": "Arithmetic",
    },
    {
        "topic": "One-Step Equations",
        "prompt": "Student Work: x + 7 = 12 → x = 19",
        "question": "What should they do instead?",
        "choices": [
            "Add 7 to both sides",
            "Subtract 7 from both sides: x = 5",
            "Multiply both sides by 7",
            "Divide both sides by 7",
        ],
        "answer_index": 1,
        "explain_correct": "Correct: undo +7 by subtracting 7. So x = 12 − 7 = 5.",
        "explain_wrong": "To isolate x, undo the operation attached to it.",
        "level": "Pre-Algebra",
    },
]

LEVELS = ["Mixed", "Arithmetic", "Pre-Algebra", "Algebra"]

def _filtered_problem_indices(level: str) -> list[int]:
    if level == "Mixed":
        return list(range(len(PROBLEMS)))
    return [i for i, p in enumerate(PROBLEMS) if p["level"] == level]

# =========================
# Session State Defaults
# =========================
def init_state():
    st.session_state.setdefault("profile_name", "")
    st.session_state.setdefault("profile_role", "Student")
    st.session_state.setdefault("profile_level", "Mixed")

    st.session_state.setdefault("nav", "Home")
    st.session_state.setdefault("current_idx", None)
    st.session_state.setdefault("answered", [])  # list of dicts
    st.session_state.setdefault("score_correct", 0)
    st.session_state.setdefault("score_total", 0)

def reset_session():
    for k in ["current_idx", "answered", "score_correct", "score_total"]:
        if k in st.session_state:
            del st.session_state[k]
    st.rerun()

# =========================
# UI: Sidebar (Profile + Nav)
# =========================
def sidebar():
    with st.sidebar:
        st.markdown("### Profile")
        st.session_state["profile_name"] = st.text_input(
            "Name (optional)",
            value=st.session_state.get("profile_name", ""),
            placeholder="e.g., Emma",
        )
        st.session_state["profile_role"] = st.selectbox(
            "Role",
            ["Student", "Parent/Grandparent", "Teacher"],
            index=["Student", "Parent/Grandparent", "Teacher"].index(st.session_state.get("profile_role", "Student")),
        )
        st.session_state["profile_level"] = st.selectbox(
            "Level",
            LEVELS,
            index=LEVELS.index(st.session_state.get("profile_level", "Mixed")),
        )

        st.markdown("---")
        st.markdown("### Navigation")
        st.session_state["nav"] = st.radio(
            label="Go to",
            options=["Home", "Practice", "Progress"],
            index=["Home", "Practice", "Progress"].index(st.session_state.get("nav", "Home")),
        )

        st.markdown("---")
        st.caption("Owner/Admin: manage codes at /manage_codes")
        if st.button("Reset this session", use_container_width=True):
            reset_session()

# =========================
# Logic: choose next problem
# =========================
def pick_next_problem():
    level = st.session_state.get("profile_level", "Mixed")
    pool = _filtered_problem_indices(level)
    if not pool:
        pool = list(range(len(PROBLEMS)))

    # Avoid repeating until necessary
    seen = {a["problem_index"] for a in st.session_state.get("answered", [])}
    remaining = [i for i in pool if i not in seen]
    choice_pool = remaining if remaining else pool
    st.session_state["current_idx"] = random.choice(choice_pool)

def get_current_problem():
    if st.session_state.get("current_idx") is None:
        pick_next_problem()
    return PROBLEMS[st.session_state["current_idx"]], st.session_state["current_idx"]

# =========================
# Pages
# =========================
def page_home():
    st.title(APP_TITLE)
    st.caption(APP_TAGLINE)

    name = st.session_state.get("profile_name") or "there"
    st.markdown(f"#### Welcome, **{name}** 👋")

    c1, c2, c3 = st.columns(3)
    with c1:
        st.metric("Answered", st.session_state.get("score_total", 0))
    with c2:
        correct = st.session_state.get("score_correct", 0)
        total = st.session_state.get("score_total", 0)
        pct = int((correct / total) * 100) if total else 0
        st.metric("Accuracy", f"{pct}%")
    with c3:
        st.metric("Level", st.session_state.get("profile_level", "Mixed"))

    st.markdown("---")
    st.markdown("### What you can do")
    st.markdown(
        "- **Practice**: solve problems and learn from mistakes\n"
        "- **Progress**: review answers and explanations\n"
        "- **Profile**: change level anytime (sidebar)\n"
    )

    if st.button("Start Practice", use_container_width=True):
        st.session_state["nav"] = "Practice"
        st.rerun()

def page_practice():
    st.title("Practice")
    st.caption("Choose the best explanation and learn the clean fix.")

    p, idx = get_current_problem()

    st.markdown(f"**Topic:** {p['topic']}  \n**Level:** {p['level']}")
    st.markdown("---")
    st.markdown(f"### {p['prompt']}")
    st.markdown(p["question"])

    choice = st.radio("Select an answer:", p["choices"], key=f"choice_{idx}")

    cols = st.columns([1, 1, 2])
    submit = cols[0].button("Submit", use_container_width=True)
    next_btn = cols[1].button("Next Problem", use_container_width=True)

    if next_btn:
        pick_next_problem()
        st.rerun()

    if submit:
        selected_index = p["choices"].index(choice)
        is_correct = selected_index == p["answer_index"]

        st.session_state["score_total"] = st.session_state.get("score_total", 0) + 1
        if is_correct:
            st.session_state["score_correct"] = st.session_state.get("score_correct", 0) + 1

        st.session_state["answered"].append(
            {
                "problem_index": idx,
                "topic": p["topic"],
                "level": p["level"],
                "prompt": p["prompt"],
                "selected": choice,
                "correct": p["choices"][p["answer_index"]],
                "is_correct": is_correct,
                "explain_correct": p["explain_correct"],
                "explain_wrong": p["explain_wrong"],
            }
        )

        st.markdown("---")
        if is_correct:
            st.success(p["explain_correct"])
        else:
            st.error("Not quite.")
            st.info(p["explain_wrong"])
            st.write("✅ **Correct answer:**")
            st.write(p["choices"][p["answer_index"]])

        st.markdown("---")
        if st.button("Continue", use_container_width=True):
            pick_next_problem()
            st.rerun()

def page_progress():
    st.title("Progress")
    correct = st.session_state.get("score_correct", 0)
    total = st.session_state.get("score_total", 0)
    pct = int((correct / total) * 100) if total else 0

    c1, c2, c3 = st.columns(3)
    c1.metric("Correct", correct)
    c2.metric("Total", total)
    c3.metric("Accuracy", f"{pct}%")

    st.markdown("---")

    answered = st.session_state.get("answered", [])
    if not answered:
        st.info("No answers yet. Go to **Practice** to start.")
        return

    st.markdown("### Review")
    for i, a in enumerate(reversed(answered), start=1):
        status = "✅ Correct" if a["is_correct"] else "❌ Incorrect"
        with st.expander(f"{status} — {a['topic']} ({a['level']})"):
            st.write(a["prompt"])
            st.write(f"**Your answer:** {a['selected']}")
            st.write(f"**Correct answer:** {a['correct']}")
            st.markdown("---")
            st.write("**Explanation:**")
            st.write(a["explain_correct"] if a["is_correct"] else a["explain_wrong"])

# =========================
# Run
# =========================
require_access()
init_state()
sidebar()

nav = st.session_state.get("nav", "Home")
if nav == "Home":
    page_home()
elif nav == "Practice":
    page_practice()
else:
    page_progress()
