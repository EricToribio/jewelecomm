from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (JWTManager,
create_access_token,create_refresh_token,
get_jwt_identity,
jwt_required)
app = Flask(__name__)

jwt = JWTManager(app)
DB = 'shoesEcommerce'
bcrypt = Bcrypt(app)
app.secret_key = "supersecrect"