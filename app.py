import streamlit as st
from btm_access import require_access_code

# Streamlit config MUST be first
st.set_page_config(
    page_title="BeTheMath — Error Detective",
    page_icon="🧠",
    layout="wide",
)

# Then enforce gate
require_access_code(label="Access code")

APP_TITLE = "🧠 BeTheMath — Error Detective"
APP_TAGLINE = "Fix mistakes fast. Learn why. Build confidence."

SESSION_V1 = [
    {
        "id": "q1_confidence_anchor",
        "topic": "Mental math",
        "prompt": "Compute: **8 + 15 − 9**",
        "answer": 14,
        "hint": "Try grouping: (8 + 15) − 9.",
        "explain": "Group numbers to reduce load: 8 + 15 = 23, then 23 − 9 = 14.",
        "mistake_tag": "Skipped regrouping",
    },
    {
        "id": "q2_sign_awareness",
        "topic": "Signs & integers",
        "prompt": "Compute: **−6 + 14 − 5**",
        "answer": 3,
        "hint": "Think number line: start at −6, move right 14, then left 5.",
        "explain": "−6 + 14 = 8, then 8 − 5 = 3. Watch the direction changes.",
        "mistake_tag": "Sign slip",
    },
    {
        "id": "q3_structure_oOO",
        "topic": "Order of operations",
        "prompt": "Compute: **3 + 2 × 4**",
        "answer": 11,
        "hint": "Multiplication happens before addition.",
        "explain": "2 × 4 = 8 first, then 3 + 8 = 11. Structure beats speed.",
        "mistake_tag": "Order of operations",
    },
    {
        "id": "q4_parentheses_focus",
        "topic": "Parentheses",
        "prompt": "Compute: **(12 − 3) ÷ 3**",
        "answer": 3,
        "hint": "Do the parentheses first: 12 − 3.",
        "explain": "(12 − 3) = 9, then 9 ÷ 3 = 3. Break it into steps.",
        "mistake_tag": "Missed parentheses",
    },
    {
        "id": "q5_distribution_recognition",
        "topic": "Structure (distribution)",
        "prompt": "Compute: **2(3 + 5) − 4**",
        "answer": 12,
        "hint": "2( … ) means multiply the parentheses by 2.",
        "explain": "(3 + 5) = 8, then 2 × 8 = 16, then 16 − 4 = 12.",
        "mistake_tag": "Distribution/structure",
    },
]


def init_state():
    st.session_state.setdefault("profile_name", "")
    st.session_state.setdefault("profile_role", "Student")
    st.session_state.setdefault("profile_level", "Mixed")
    st.session_state.setdefault("nav", "Home")
    st.session_state.setdefault("active_session", None)
    st.session_state.setdefault("session_history", [])


def start_new_session():
    st.session_state["active_session"] = {
        "session_id": "v1",
        "index": 0,
        "items": [
            {
                "qid": q["id"],
                "topic": q["topic"],
                "prompt": q["prompt"],
                "answer": q["answer"],
                "hint": q["hint"],
                "explain": q["explain"],
                "mistake_tag": q["mistake_tag"],
                "attempts": 0,
                "status": "unanswered",
                "user_answers": [],
                "revealed": False,
            }
            for q in SESSION_V1
        ],
        "completed": False,
    }
    st.session_state["nav"] = "Practice"
    st.rerun()


def _active():
    return st.session_state.get("active_session")


def _is_session_active():
    s = _active()
    return bool(s) and not s.get("completed", False)


def _current_item():
    s = _active()
    if not s:
        return None
    idx = s.get("index", 0)
    items = s.get("items", [])
    if idx < 0 or idx >= len(items):
        return None
    return items[idx]


def _finalize_session():
    s = _active()
    if not s:
        return

    items = s["items"]
    correct = sum(1 for it in items if it["status"] == "correct")
    total = len(items)

    mistake_tags = [it["mistake_tag"] for it in items if it["status"] != "correct"]
    pattern_note = "No major patterns detected."
    if mistake_tags:
        most = max(set(mistake_tags), key=mistake_tags.count)
        pattern_note = f"Watch for: **{most}**."

    summary = {
        "session_id": s.get("session_id", "v1"),
        "correct": correct,
        "total": total,
        "pattern_note": pattern_note,
        "items": items,
    }
    st.session_state["session_history"].append(summary)

    s["completed"] = True
    st.session_state["active_session"] = s


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
            index=["Student", "Parent/Grandparent", "Teacher"].index(
                st.session_state.get("profile_role", "Student")
            ),
        )
        st.session_state["profile_level"] = st.selectbox(
            "Level",
            ["Mixed"],
            index=0,
        )

        st.markdown("---")
        st.markdown("### Navigation")
        st.session_state["nav"] = st.radio(
            label="Go to",
            options=["Home", "Practice", "Progress"],
            index=["Home", "Practice", "Progress"].index(st.session_state.get("nav", "Home")),
        )

        st.markdown("---")
        if st.button("Start a new session", use_container_width=True):
            start_new_session()

        if st.button("Reset active session", use_container_width=True):
            st.session_state["active_session"] = None
            st.rerun()


def page_home():
    st.title(APP_TITLE)
    st.caption(APP_TAGLINE)

    name = st.session_state.get("profile_name") or "there"
    st.markdown(f"#### Welcome, **{name}** 👋")
    st.markdown(
        "This is a guided session designed to help you build skill without panic:\n"
        "- **Hint → Retry → Explain**\n"
        "- Mistakes are treated as patterns, not failures\n"
        "- Results appear **at the end**\n"
    )

    st.markdown("---")

    if _is_session_active():
        st.info("You have an active session in progress.")
        c1, c2 = st.columns([1, 1])
        if c1.button("Continue session", use_container_width=True):
            st.session_state["nav"] = "Practice"
            st.rerun()
        if c2.button("Start over (new session)", use_container_width=True):
            start_new_session()
    else:
        if st.button("Start Session (5 questions)", use_container_width=True):
            start_new_session()


def page_practice():
    st.title("Practice Session")
    st.caption("Pause → think structurally → answer. Hint and one retry are available.")

    s = _active()
    if not s:
        st.info("No active session. Start one from Home or the sidebar.")
        if st.button("Start Session (5 questions)", use_container_width=True):
            start_new_session()
        return

    if s.get("completed", False):
        st.success("Session complete.")
        page_session_complete()
        return

    item = _current_item()
    if not item:
        st.error("Session state is out of range. Start a new session.")
        return

    idx = s["index"]
    total = len(s["items"])

    st.markdown(f"**Question {idx + 1} of {total}**  \n**Topic:** {item['topic']}")
    st.markdown("---")
    st.markdown(f"### {item['prompt']}")

    key = f"ans_{item['qid']}_{idx}"
    user_in = st.text_input("Your answer", key=key, placeholder="Type a whole number, e.g. 12")

    colA, colB, _ = st.columns([1, 1, 2])
    submit = colA.button("Submit", use_container_width=True)
    show_hint = colB.button("Hint", use_container_width=True)

    if show_hint and item["status"] == "unanswered":
        st.info(item["hint"])

    if submit and item["status"] == "unanswered":
        raw = (user_in or "").strip()
        try:
            val = int(raw)
        except Exception:
            st.error("Please enter a whole number (e.g., 12).")
            return

        item["attempts"] += 1
        item["user_answers"].append(val)

        if val == item["answer"]:
            item["status"] = "correct"
            item["revealed"] = True
            st.success("Correct.")
            st.write(item["explain"])
        else:
            if item["attempts"] == 1:
                st.error("Not quite.")
                st.info(item["hint"])
                st.caption("Try once more. If it’s still off, I’ll show the clean solution.")
            else:
                item["status"] = "incorrect"
                item["revealed"] = True
                st.error("Not quite — here’s the clean solution.")
                st.write(f"✅ **Correct answer:** {item['answer']}")
                st.write(item["explain"])
                st.caption(f"Common pattern: **{item['mistake_tag']}**")

        s["items"][idx] = item
        st.session_state["active_session"] = s

    st.markdown("---")
    if item["revealed"]:
        if st.button("Continue", use_container_width=True):
            if idx + 1 < total:
                s["index"] = idx + 1
                st.session_state["active_session"] = s
                st.rerun()
            else:
                _finalize_session()
                st.rerun()


def page_session_complete():
    history = st.session_state.get("session_history", [])
    summary = history[-1] if history else None
    if not summary:
        st.info("No session summary found yet.")
        return

    st.markdown("## Session Complete")
    st.markdown(f"**Accuracy:** {summary['correct']} / {summary['total']}")
    st.markdown(summary["pattern_note"])

    st.markdown("---")
    c1, c2 = st.columns([1, 1])
    if c1.button("Review this session", use_container_width=True):
        st.session_state["nav"] = "Progress"
        st.rerun()
    if c2.button("Start next session", use_container_width=True):
        start_new_session()


def page_progress():
    st.title("Progress")
    st.caption("Review explanations and patterns. This is where learning consolidates.")

    history = st.session_state.get("session_history", [])
    if not history:
        st.info("No sessions yet. Start a session from Home.")
        return

    latest = history[-1]
    st.metric("Latest session accuracy", f"{latest['correct']} / {latest['total']}")

    st.markdown("---")
    st.markdown("### Latest Session Review")

    for i, it in enumerate(latest["items"], start=1):
        status = "✅ Correct" if it["status"] == "correct" else "❌ Incorrect"
        with st.expander(f"{status} — Q{i} ({it['topic']})"):
            st.write(it["prompt"])
            if it["user_answers"]:
                st.write(f"**Your answers:** {it['user_answers']}")
            st.write(f"**Correct answer:** {it['answer']}")
            st.markdown("---")
            st.write("**Explanation:**")
            st.write(it["explain"])
            if it["status"] != "correct":
                st.caption(f"Common pattern: **{it['mistake_tag']}**")

    st.markdown("---")
    if st.button("Start another session", use_container_width=True):
        start_new_session()


# Run
init_state()
sidebar()

nav = st.session_state.get("nav", "Home")
if nav == "Home":
    page_home()
elif nav == "Practice":
    page_practice()
else:
    page_progress()
