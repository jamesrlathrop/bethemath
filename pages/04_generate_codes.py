import streamlit as st
import random
import string

from btm_admin import require_admin_key

ALPHABET = string.ascii_uppercase + string.digits

def generate_code(prefix="BTM", length=6):
    chars = []
    for _ in range(length):
        chars.append(random.choice(ALPHABET))
    return prefix + "-" + "".join(chars)

require_admin_key()
st.title("Generate access codes")

count = int(st.number_input("How many codes?", min_value=1))
prefix = st.text_input("Prefix", value="BTM")
length = int(st.number_input("Code length", min_value=4))

if st.button("Generate codes"):
    codes = []
    for _ in range(count):
        code = generate_code(prefix=prefix, length=length)
        codes.append(code)
    st.code("\n".join(codes))
    st.write("Copy codes into ACCESS_CODES in Railway.")
