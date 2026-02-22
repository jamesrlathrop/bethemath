import os
import streamlit as st


# -----------------------------
# Page Config
# -----------------------------

st.set_page_config(
    page_title="BeTheMath — Error Detective",
    page_icon="🧠",
    layout="centered",
)


# -----------------------------
# Access Code System
# -----------------------------

def get_codes():
    raw = os.getenv("ACCESS_CODES") or ""
    parts = raw.replace(",", "\n").splitlines()
    codes = [p.strip() for p in parts if p.strip()]
    return codes


def require_access():
    if st.session_state.get("access_granted", False):
        return

    codes = get_codes()

    st.title("🧠 BeTheMath — Error Detective")
    st.caption("Fix mistakes fast. Learn why. Build confidence.")

    st.info(
        "Enter your BeTheMath access code to unlock the app. "
        "Codes look like **BTM-XXXX**. If you have trouble, double-check for spaces."
    )

    code_input = st.text_input("Access code", type="password")

    if st.button("Unlock"):

        if code_input in codes:
            st.session_state["access_granted"] = True
            st.success("Access granted. Welcome!")
            st.rerun()
        else:
            st.error("Invalid access code")

    st.stop()


# -----------------------------
# Require Access Before App
# -----------------------------

require_access()


# -----------------------------
# App Content
# -----------------------------

st.title("🧠 BeTheMath — Error Detective")

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
