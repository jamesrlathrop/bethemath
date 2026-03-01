import os
import streamlit as st

from btm_access import require_access_code

# -----------------------------
# Page config
# -----------------------------
st.set_page_config(
    page_title="BeTheMath — Access",
    page_icon="🧠",
    layout="wide",
)

BEAUTIFUL_APP_URL = os.getenv(
    "BEAUTIFUL_APP_URL",
    "https://jamesrlathrop.github.io/mathquest-errors-to-insight/",
)

# -----------------------------
# Gate first (Stripe/code access)
# -----------------------------
require_access_code(label="Access code")

# If we got here, the user is unlocked (because require_access_code stops otherwise)
st.success("✅ You’re unlocked.")
st.markdown("### Open BeTheMath")

st.link_button("Open BeTheMath", BEAUTIFUL_APP_URL)

st.caption("Tip: Bookmark BeTheMath after you open it.")