import os
from dotenv import load_dotenv

load_dotenv()

l_username = os.getenv("L_USERNAME")
l_pass = os.getenv("PASS")
prod = os.getenv("PROD")
port = os.getenv("PORT")
