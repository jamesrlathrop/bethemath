import streamlit as st
import random

st.set_page_config(page_title="BeTheMath", layout="wide")

st.title("🧠 BeTheMath — Error Detective")
st.write("Fix mistakes fast. Learn why. Build confidence.")

# Player name
player = st.text_input("Player")

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
        "They changed the sign"
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
