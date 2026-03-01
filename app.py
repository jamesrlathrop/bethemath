import streamlit as st
import streamlit.components.v1 as components

from btm_access import require_access_code

# -----------------------------
# Config
# -----------------------------
st.set_page_config(
    page_title="BeTheMath — Lifetime Access",
    page_icon="🧠",
    layout="wide",
)

BEAUTIFUL_APP_URL = "https://jamesrlathrop.github.io/mathquest-errors-to-insight/"

# -----------------------------
# Gate first (Stripe/code access)
# -----------------------------
require_access_code(label="Access code")


# -----------------------------
# After access: show the beautiful app
# -----------------------------
st.markdown("## 🧠 BeTheMath")
st.caption("You’re unlocked ✅ If the app doesn’t load, use the button below.")

c1, c2 = st.columns([1, 3])
with c1:
    st.link_button("Open full-screen", BEAUTIFUL_APP_URL)

st.divider()

# Make the iframe tall so it feels like the real app (not a tiny embed)
components.iframe(BEAUTIFUL_APP_URL, height=900, scrolling=True)