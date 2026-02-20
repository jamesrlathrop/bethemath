import streamlit as st
from btm_admin import require_admin_key

def main():
    require_admin_key()
    st.title("Codes (admin)")
    st.write("Coming soon: view and manage codes.")

if __name__ == "__main__":
    main()
