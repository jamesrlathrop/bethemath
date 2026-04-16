import os
import streamlit as st
from btm_access import require_access_code

st.set_page_config(
    page_title="BeTheMath",
    page_icon="🧠",
    layout="wide",
    initial_sidebar_state="collapsed",
)

LOCAL_DEV_BYPASS = os.getenv("BTM_LOCAL_DEV_BYPASS", "").strip() == "1"

if not LOCAL_DEV_BYPASS:
    if not require_access_code(label="Access code"):
        st.stop()

GAME_URL = os.getenv("BTM_GAME_URL", "http://127.0.0.1:8765/index.html").strip()

st.markdown(
    """
    <style>
      header[data-testid="stHeader"] { display:none; }
      footer { display:none; }
      [data-testid="stSidebar"] { display:none; }
      .stApp, [data-testid="stAppViewContainer"] { background:#020617 !important; }
      .main .block-container { max-width:860px !important; padding:28px 18px 40px !important; }
      .btm-wrap { max-width:720px; margin:32px auto; }
      .btm-card {
        background:#0f172a;
        border:1px solid #1e293b;
        border-radius:22px;
        padding:28px 24px;
        box-shadow:0 10px 30px rgba(0,0,0,.25);
      }
      .btm-title { color:#e5eefc; font-size:30px; font-weight:800; margin:0 0 8px; }
      .btm-sub { color:#94a3b8; font-size:15px; line-height:1.55; margin:0 0 18px; }
      .btm-btn {
        display:inline-block;
        background:#0b1220;
        color:#e5eefc !important;
        border:1px solid #22c55e;
        border-radius:14px;
        padding:14px 18px;
        font-weight:700;
        text-decoration:none !important;
        margin:8px 0 14px;
      }
      .btm-btn:hover { background:#111c32; }
      .btm-note { color:#94a3b8; font-size:13px; line-height:1.5; margin-top:10px; }
      .btm-link { color:#93c5fd !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.markdown(
    f"""
    <div class="btm-wrap">
      <div class="btm-card">
        <div class="btm-title">Welcome to BeTheMath — Grades 6–8 Foundations</div>
        <div class="btm-sub">
          BeTheMath Grades 6–8 Foundations includes Operations, Reasoning, and Logic & Patterns. Your progress is saved in this browser on this device.
        </div>
        <a class="btm-btn" href="{GAME_URL}" target="_self">Open BeTheMath</a>
        <div class="btm-note">
          If the button does not open the game, use the direct link below.
        </div>
        <div class="btm-note">
          Direct game link:
          <a class="btm-link" href="{GAME_URL}" target="_self">{GAME_URL}</a>
        </div>
      </div>
    </div>
    """,
    unsafe_allow_html=True,
)
