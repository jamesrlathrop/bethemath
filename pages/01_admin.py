import streamlit as st
from btm_admin import require_admin_key


def main():
    st.title("Admin Panel")
    require_admin_key()

    st.markdown(
        """
        ## Admin tools (coming soon)
        Once enabled, this panel will help you:

        - generate new access codes
        - add/remove codes
        - view usage stats

        For now, this page simply proves admin authentication works.
        """
    )


if __name__ == "__main__":
    main()
