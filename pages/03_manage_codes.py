import os
import streamlit as st
from btm_admin import require_admin_key

def get_codes():
    raw = os.environ.get("ACCESS_CODES", "")
    out = []
    for part in raw.split(","):
        t = part.strip()
        if t:
            out.append(t.upper())
    return out

def main():
    require_admin_key()
    st.title("Codes (admin)")

    codes = get_codes()
    st.write("Codes configured:", len(codes))

    if codes:
        st.code("\n".join(codes))
    else:
        st.warning("No access codes found (ENV ACCESS_CODES).")

if __name__ == "__main__":
    main()
