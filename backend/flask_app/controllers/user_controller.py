from flask import request,redirect,session,flash,jsonify
# from flask_app.models import user_model#enter model name`
from flask_app import app, bcrypt
from flask_app.config.helper import new_user_validation
from flask_cors import cross_origin
from flask_app.models import user_model
from flask_jwt_extended import (JWTManager,
create_access_token,create_refresh_token,
get_jwt_identity,
jwt_required)


@app.post('/api/logged/in')
@cross_origin()
def logged_in (): 
    print(request.json)
    
    logged_in_user= user_model.User.get_one(id=request.json['sub'])
    print(logged_in_user)
    return {'user' : {'googleUser' : logged_in_user.google_user, 'id' : logged_in_user.id, 'admin' : logged_in_user.admin,
    'firstName' : logged_in_user.first_name, 'lastName' : logged_in_user.last_name,
    'email' : logged_in_user.email}}


@app.post('/api/login')
@cross_origin()
def login():
    user = user_model.User.get_one(email=request.json['email'])
    if not user:
        return {error :{msg : "Invalid Email/Password"}}
        
    if not bcrypt.check_password_hash(user.password, request.json['password']):
        
        return {error :{msg : "Invalid Email/Password"}}
    
    access_token=create_access_token(identity=user.id)
    refresh_token=create_refresh_token(identity=user.id)
    
    return {"access_token":access_token,"refresh_token":refresh_token}

@app.post('/api/google/login')
@cross_origin()
def google_login():
    print(request.json)
    user = user_model.User.get_one(email=request.json['email'])
    if user:
        access_token=create_access_token(identity=user.id)
        refresh_token=create_refresh_token(identity=user.id)
        print(user)
        return {"access_token":access_token,"refresh_token":refresh_token}
    else:
        data ={
            'first_name':request.json['givenName'],
            'last_name':request.json['familyName'],
            'email':request.json['email'],
            'password':request.json['googleId'],
            'google_user' : True
        }    
        new_user = user_model.User.add_user(data)
        access_token=create_access_token(identity=new_user)
        refresh_token=create_refresh_token(identity=new_user)
        
        return {"access_token":access_token,"refresh_token":refresh_token}


@app.post('/api/register')
@cross_origin()
def register():
    validation = new_user_validation(request.json)
    print (validation)
    if validation != "good":
        return {'errors' : validation}
    data = {
        **request.json,
        'google_user' : False
    }
    new_user = user_model.User.add_user(data)
    access_token=create_access_token(identity=new_user)
    refresh_token=create_refresh_token(identity=new_user)
    
    return {"access_token":access_token,"refresh_token":refresh_token}
    


