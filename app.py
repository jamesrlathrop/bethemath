import streamlit as st

# Import your access gate
from btm_access import require_access


# -----------------------------
# Page Config
# -----------------------------

st.set_page_config(
    page_title="BeTheMath — Error Detective",
    page_icon="🧠",
    layout="centered",
)


# -----------------------------
# Header
# -----------------------------

st.title("🧠 BeTheMath — Error Detective")
st.caption("Fix mistakes fast. Learn why. Build confidence.")


# -----------------------------
# Access Gate
# -----------------------------

st.info(
    "Enter your BeTheMath access code to unlock the app. "
    "Codes look like **BTM-XXXX**. If you have trouble, double-check for spaces."
)

# This will stop execution until valid
require_access()


# -----------------------------
# App Content (after unlock)
# -----------------------------

st.success("Access granted. Welcome!")

st.subheader("Player")

st.subheader("Student Work")
st.write("5(x + 1) = 5x + 1")

st.write("Pick the best explanation:")

options = [
    "They divided incorrectly",
    "They added incorrectly",
    "They forgot to multiply 1 by 5. Correct: 5x + 5",
    "They changed the sign",
]

choice = st.radio("Select an answer:", options)

if st.button("Submit"):
    if choice == options[2]:
        st.success("Correct! The distributive property requires multiplying both terms.")
    else:
        st.error("Not quite. Remember to distribute 5 to both x and 1.")
