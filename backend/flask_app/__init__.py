from flask import Flask
from flask_bcrypt import Bcrypt


app = Flask(__name__)
# DB = shoesEcommerce
bcrypt = Bcrypt(app)
app.secret_key = "supersecrect"