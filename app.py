import streamlit as st
import random
import os

st.set_page_config(page_title="BeTheMath", layout="wide")

st.title("🧠 BeTheMath — Error Detective")
st.write("Fix mistakes fast. Learn why. Build confidence.")

def _parse_codes(raw):
    if not raw:
        return []
    if isinstance(raw, (list, tuple)):
        return [str(c).strip().upper() for c in raw if str(c).strip()]
    return [c.strip().upper() for c in str(raw).split(",") if c.strip()]

def get_access_codes():
    codes = _parse_codes(os.getenv("ACCESS_CODES"))
    if not codes and "ACCESS_CODES" in st.secrets:
        codes = _parse_codes(st.secrets["ACCESS_CODES"])
    if not codes:
        codes = ["DEMO-000"]
    return codes

def require_access_code():
    if st.session_state.get("access_granted"):
        return

    with st.form("access"):
        code = st.text_input("Access code", type="password")
        submitted = st.form_submit_button("Unlock")

    if submitted:
        if code.strip().upper() in get_access_codes():
            st.session_state["access_granted"] = True
            st.success("Access granted. Welcome!")
        else:
            st.error("Invalid code. Double-check and try again.")

    if not st.session_state.get("access_granted"):
        st.stop()

require_access_code()

# Player name
player = st.text_input("Player")
if player:
    st.caption(f"Player: {player}")

# Simple problem generator
def generate_problem():
    a = random.randint(2, 9)
    b = random.randint(1, 9)

    student = f"{a}(x + {b}) = {a}x + {b}"
    correct = f"They forgot to multiply {b} by {a}. Correct: {a}x + {a*b}"

    choices = [
        correct,
        "They added incorrectly",
        "They divided incorrectly",
        "They changed the sign",
    ]

    random.shuffle(choices)

    return student, correct, choices

if "problem" not in st.session_state:
    st.session_state.problem = generate_problem()

student, correct, choices = st.session_state.problem

st.subheader("Student Work")
st.write(student)

choice = st.radio("Pick the best explanation:", choices)

if st.button("Check"):
    if choice == correct:
        st.success("Nice catch!")
    else:
        st.error("Not quite.")
        st.info(correct)

if st.button("Next Problem"):
    st.session_state.problem = generate_problem()
    st.rerun()
