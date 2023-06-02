from flask import Flask, session, request, make_response, jsonify
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Stylist, Product, Location, Service, Appointment, Review, Inspo 
import os
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = b'\xfd\xd8\xf3\xf2\xac\x948z@>B\xa5p\xe5\xf0w\xfaX\xae\xc3\xe1\xc3\xceP'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

class Users(Resource):
    def get(self):
        users = User.query.all()
        u_dict = [u.to_dict() for u in users]
        return make_response(u_dict, 200)
    
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if not user:
            
            try:
                new_user = User(
                    username = data['username'],
                    email = data['email'],
                    password = data['password']
                )
            except Exception as ex:
                return make_response({"errors": [ex.__str__()]}, 422)
            
            db.session.add(new_user)
            db.session.commit()

            response_dict = new_user.to_dict()

            response = make_response(
                response_dict,
                201,
            )
            return response
        else:
            return make_response(user.to_dict(), 200)

class Stylists(Resource):
    def get(self):
        stylists = Stylist.query.all()
        sty_dict = [s.to_dict() for s in stylists]
        return make_response(sty_dict, 200)

class StylistsById(Resource):
    def get(self, id):
        stylist = Stylist.query.filter_by(id=id).first()
        if not stylist:
            return make_response({"error": "Stylist not found"}, 404)
        return make_response(stylist.to_dict(), 200)           

class Products(Resource):
    def get(self):
        products = Product.query.all()
        p_dict = [p.to_dict() for p in products]
        return make_response(p_dict, 200)

class ProductsById(Resource):
    def get(self, id):
        products = Product.query.filter_by(id=id).first()
        if not products:
            return make_response({"message" : "Product not found"})
        return make_response(products.to_dict(), 200) 

class Locations(Resource):
    def get(self):
        locations = Location.query.all()
        l_dict = [l.to_dict() for l in locations]
        return make_response(l_dict, 200)

class LocationsById(Resource):
    def get(self, id):
        locations = Location.query.filter_by(id=id).first()
        if not locations:
            return make_response({"error": "Location not found"}, 404)
        return make_response(locations.to_dict(), 200)           

class Services(Resource):
    def get(self):
        services = Service.query.all()
        s_dict = [s.to_dict() for s in services]
        return make_response(s_dict, 200)

class Appointments(Resource):
    def get(self):
        appointments = Appointment.query.all()
        a_dict = [a.to_dict() for a in appointments]
        return make_response(a_dict, 200)

    def post(self):
        data = request.get_json()
        print(data)
        try:
            new_appointment = Appointment(
                user_id=data['user_id'],
                stylist=data['stylist'],
                service=data['service'],
                dateTime=data['dateTime']
            )
            db.session.add(new_appointment)
            db.session.commit()
            return make_response(new_appointment.to_dict(), 201)
        except Exception as e:
            return make_response({
                "errors": [e.__str__()]}, 400)
        
class AppointmentsById(Resource):
    def get(self, id):
        appointments = Appointment.query.filter_by(id=id).first()
        if not appointments:
            return make_response({"error": "Appointment not found"}, 404)
        return make_response(appointments.to_dict(), 200)

    def delete(self, id):
        appointment = Appointment.query.filter_by(id=id).first()
        if not appointment:
            return make_response({"error": "Appointment not found"}, 404)
        db.session.delete(appointment)
        db.session.commit()
        return make_response({}, 204)

class Reviews(Resource):
    def get(self):
        reviews = Review.query.all()
        r_dict = [r.to_dict() for r in reviews]
        return make_response(r_dict, 200)
    
    def post(self):
        data = request.get_json()
        try:
            new_review = Review(
                text=data['text'],
                user_id=data['user_id']
            )
            db.session.add(new_review)
            db.session.commit()
            return make_response(new_review.to_dict(), 201)
        except Exception as e:
            return make_response({
                "errors": [e.__str__()]}, 400)
        
class ReviewsById(Resource):
    def get(self, id):
        review = Review.query.filter_by(id=id).first()
        if not review:
            return make_response({"message" : "Review not found"})
        return make_response(review.to_dict(), 200)
    
    def delete(self, id):
        review = Review.query.filter_by(id=id).first()
        if not review:
            return make_response({"message" : "Review not found"})
        db.session.delete(review)
        db.session.commit()
        return make_response({"mesage" : "Review was deleted"})

class Inspos(Resource):
    def get(self):
        inspos = Inspo.query.all()
        i_dict = [i.to_dict() for i in inspos]
        return make_response(i_dict, 200)
    
class CheckUser(Resource):
    def get(self):
        if session.get('user_id'):
            user = User.query.filter(User.id == session['user_id']).first()
            return user.to_dict(), 200
        return {'error': '401 Unauthorized'}, 401

class Signup(Resource):
    def post(self):
        username = request.json["username"]
        email = request.json["email"]
        password = request.json["password"]
 
        user_exists = User.query.filter_by(email=email).first() is not None
 
        if user_exists:
            return jsonify({"error": "Email already exists"}), 409
     
        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
 
        session["user_id"] = new_user.id
    
        return jsonify({
            "id": new_user.id,
            "email": new_user.email,
            # "password": new_user.password,
            # "username": new_user.username
        })
        
class Login(Resource):
    def post(self):
        data = request.get_json()
        email = data['email']
        username = data['username']
        password = data['password']
        print(data)
        user = User.query.filter_by(email=email).first()
        print(user)
        print(user.password == password)
        if user:
            if user.password == password:
                session['user_id'] = user.id
                return make_response(user.to_dict(), 200)
        return make_response({'error': '401 Unauthorized'}, 401)
    
class CheckSession(Resource):
    def get(self):
        user_id = session.get('user_id')
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            if user:
                return user.to_dict(), 200
        return {'message': '401: Unauthorized'}, 401

class Logout(Resource):
    def get(self):
        session.pop('user_id', None)
        return make_response({'message': 'You have been logged out!'}, 200)
    

api.add_resource(Users, '/users')
api.add_resource(Stylists, '/stylists')
api.add_resource(StylistsById, '/stylists/<int:id>')
api.add_resource(Products, '/products')
api.add_resource(ProductsById, '/products/<int:id>')
api.add_resource(Locations, '/locations')
api.add_resource(LocationsById, '/locations/<int:id>')
api.add_resource(Services, '/services')
api.add_resource(Appointments, '/appointments')
api.add_resource(AppointmentsById, '/appointments/<int:id>')
api.add_resource(Reviews, '/reviews')
api.add_resource(ReviewsById, '/reviews/<int:id>')
api.add_resource(Inspos, '/inspos')       
api.add_resource(Signup, '/signup')    
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')
api.add_resource(CheckUser, '/check_user')

if __name__ == '__main__':
    app.run(port=5555, debug=True)