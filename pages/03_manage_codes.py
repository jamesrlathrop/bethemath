# pages/03_manage_codes.py

import os
import pandas as pd
import streamlit as st
import streamlit.components.v1 as components

from btm_admin import require_admin


# -----------------------------
# Access code loading
# -----------------------------

def _get_access_codes_raw() -> str:
    """
    ACCESS_CODES source of truth:
    1) Railway env var ACCESS_CODES
    2) Streamlit secrets ACCESS_CODES
    """
    return os.getenv("ACCESS_CODES") or st.secrets.get("ACCESS_CODES", "") or ""


def _parse_codes(raw: str) -> list[str]:
    """
    Accepts codes separated by commas, whitespace, or newlines.
    Returns clean unique list (stable order).
    """
    raw = raw.replace(",", "\n").replace(";", "\n")
    parts = [p.strip() for p in raw.splitlines()]
    parts = [p for p in parts if p]

    seen = set()
    out = []

    for c in parts:
        if c not in seen:
            seen.add(c)
            out.append(c)

    return out


# -----------------------------
# Clipboard button (Streamlit 1.37 safe)
# -----------------------------

def clipboard_button(label: str, text_to_copy: str, uid: str):
    """
    Copy button using JS.
    Compatible with Streamlit 1.37 (no key arg).
    """

    safe_text = text_to_copy.replace("\\", "\\\\").replace("'", "\\'")

    html = f"""
    <button id="btn-{uid}" style="
        padding: 0.35rem 0.6rem;
        border-radius: 0.5rem;
        border: 1px solid rgba(49, 51, 63, 0.2);
        background: white;
        cursor: pointer;
        font-size: 0.9rem;
        width: 100%;
    " onclick="navigator.clipboard.writeText('{safe_text}');">
      {label}
    </button>
    """

    components.html(html, height=42)


# -----------------------------
# Main page
# -----------------------------

def main():

    require_admin()

    st.title("Codes (admin)")

    raw = _get_access_codes_raw()
    codes = _parse_codes(raw)

    st.caption(f"Codes configured: {len(codes)}")

    # -------------------------
    # Export tools
    # -------------------------

    st.divider()
    st.subheader("Export & Tools")

    if codes:

        df = pd.DataFrame({"code": codes})

        csv_bytes = df.to_csv(index=False).encode("utf-8")

        st.download_button(
            "Download codes as CSV",
            data=csv_bytes,
            file_name="bethemath_access_codes.csv",
            mime="text/csv",
            use_container_width=True,
        )

    else:
        st.info("No codes found yet. Use the generate codes page to create some.")

    # -------------------------
    # Code list with copy buttons
    # -------------------------

    st.divider()
    st.subheader("Codes (click Copy)")

    if not codes:
        st.stop()

    for i, code in enumerate(codes):

        c1, c2 = st.columns([3, 1], vertical_alignment="center")

        with c1:
            st.code(code, language=None)

        with c2:
            clipboard_button("Copy", code, uid=str(i))


# -----------------------------

if __name__ == "__main__":
    main()
