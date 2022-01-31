from flask import request,redirect,session,flash
# from flask_app.models import user_model#enter model name`
from flask_app import app, bcrypt
from flask_app.config.helper import new_user_validation
from flask_cors import cross_origin
from flask_app.models import user_model
from flask_jwt_extended import (JWTManager,
create_access_token,create_refresh_token,
get_jwt_identity,
jwt_required)
@app.route('/api/logged/in')
@cross_origin()
def logged_in (): 
    # print(session['user_id']) 
    # if 'user_id' in session:
    #     print(session['user_id'])
    #     return {"result" : "success"}
    return {'error' : "Not Logged In"}


@app.route('/logout')
# @login_required
def log_out():
    session.clear()
    return redirect('/')

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
    

@app.post('/api/register')
@cross_origin()
def register():
    validation = new_user_validation(request.json)
    print (validation)
    if validation != "good":
        return {'errors' : validation}
    print (request.json)
    new_user = user_model.User.add_user(request.json)
    access_token=create_access_token(identity=new_user)
    refresh_token=create_refresh_token(identity=new_user)
    
    return {"access_token":access_token,"refresh_token":refresh_token}
    

# @app.post('/login/user')
# def login_user():
#     user = user_model.User.get_one(email=request.form['email'])
#     if not user:
#         flash("Invalid Email/Password")
#         return redirect("/login")
#     if not bcrypt.check_password_hash(user.password, request.form['password']):
#         flash("Invalid Email/Password")
#         return redirect('/login')
#     session['user_id'] = user.id
#     if user.admin == 1:
#         session['admin'] = True
#     else:
#         session['admin'] = False
#     print(session['admin'])
#     return redirect('/')

# @app.post('/add/user')
# # @new_user_validation
# def add_new_user():
#     if not new_user_validation(request.form):
#         return redirect('/register/user')
#     user=user_model.User.add_user(request.form)
#     session['user_id'] = user
#     session['admin'] = False
#     return redirect('/dashboard')

# @app.post('/edit/user/account')
# def update_user_account():
#     if not update_user_validate():
#         return redirect('/edit/user')
#     user_model.User.update_user(request.form)
#     return redirect('/dashboard')

