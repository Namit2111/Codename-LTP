from flask import Flask
from flask_cors import CORS

from app.linkedin import linkedin

app = Flask(__name__)
CORS(app)
app.register_blueprint(linkedin)
