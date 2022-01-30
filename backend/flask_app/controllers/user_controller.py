from flask import request,redirect,session,flash
# from flask_app.models import user_model#enter model name`
from flask_app import app, bcrypt
# from flask_app.config.helper import login_required,new_user_validation,update_user_validate
from flask_cors import cross_origin




@app.route('/logout')
# @login_required
def log_out():
    session.clear()
    return redirect('/')

@app.route('/login')
def login():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template("login.html")

@app.post('/api/register')
@cross_origin()
def register():
    print (request.json)

    return {"results" : "success"}
    

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

