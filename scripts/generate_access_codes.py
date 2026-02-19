import random
import string
import sys


ALPHABET = string.ascii_uppercase + string.digits


def generate_code(prefix: str = "BTM", length: int = 6) -> str:
    body = "".join(random.choice(ALPHABET) for _ in range(length))
    return f"{prefix.upper()}-{body}"


def main() -> None:
    count = int(sys.argv[1]) if len(sys.argv) > 1 else 10
    prefix = sys.argv[2] if len(sys.argv) > 2 else "BTM"

    for _ in range(count):
        print(generate_code(prefix))


if __name__ == "__main__":
    main()
