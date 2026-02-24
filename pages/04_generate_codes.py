import streamlit as st
import random
import string

from btm_admin import require_admin_key
from btm_db import add_access_codes, db_healthcheck, list_access_codes

ALPHABET = string.ascii_uppercase + string.digits


def generate_code(prefix="BTM", length=6):
    chars = []
    for _ in range(length):
        chars.append(random.choice(ALPHABET))
    return prefix + "-" + "".join(chars)


require_admin_key()
st.title("Generate access codes")

# --- DB status (truth lights) ---
try:
    v = db_healthcheck()
    st.success("✅ Database connected")
    with st.expander("DB details"):
        st.write(v)
except Exception as e:
    st.error(f"❌ Database not connected: {e}")

count = int(st.number_input("How many codes?", min_value=1))
prefix = st.text_input("Prefix", value="BTM")
length = int(st.number_input("Code length", min_value=4))

if st.button("Generate codes"):
    codes = []
    for _ in range(count):
        code = generate_code(prefix=prefix, length=length)
        codes.append(code)

    # Save to Postgres
    add_access_codes(codes)

    # Read-back proof
    saved = list_access_codes(10)

    st.success("✅ Codes generated and saved to database.")
    st.info(f"Latest codes in DB (up to 10): {', '.join(saved) if saved else 'NONE'}")
    st.code("\n".join(codes))
