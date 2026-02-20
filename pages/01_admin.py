import streamlit as st
from btm_admin import require_admin_key


def main():
    require_admin_key()
    st.write("Admin OK")


if __name__ == "__main__":
    main()
