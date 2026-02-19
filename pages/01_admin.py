import streamlit as st
from btm_admin import require_admin


def main():
    st.title("Admin Panel")
    require_admin()
    st.write("Admin tools coming soon.")


if __name__ == "__main__":
    main()
