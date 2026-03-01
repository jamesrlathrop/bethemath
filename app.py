import streamlit as st
from btm_access import require_access_code

st.set_page_config(
    page_title="BeTheMath — Access",
    page_icon="🧠",
    layout="wide",
)

# Gate handles everything (locked screen, Stripe return, unlocked button)
require_access_code(label="Access code")