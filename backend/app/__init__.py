from flask import Flask

from app.linkedin import linkedin

app = Flask(__name__)
app.register_blueprint(linkedin)
