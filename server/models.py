from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-created_at', '-updated_at' )
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # carts = db.relationship('Cart', foreign_keys='Cart.user_id', back_populates='user', cascade='all, delete-orphan')

    @validates('username')
    def validate_name(self, key, value):
        if not value:
            raise ValueError('Username is required')
        return value
    
    @validates('email')
    def validate_email(self, key, value):
        if not value:
            raise ValueError('Email is required')
        return value
    
    @validates('password')
    def validate_password(self, key, value):
        if not value:
            raise ValueError('Password is required')
        return value

class Stylist(db.Model, SerializerMixin):
    __tablename__ = 'stylists'
        
    # serialize_rules = ('-created_at', '-updated_at', '-location_id', )
    serialize_only = ('name', 'image', 'type', 'bio', 'locations', )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    image = db.Column(db.String)
    type = db.Column(db.Integer)
    bio = db.Column(db.String)
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())


class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    serialize_rules = ('-created_at', '-updated_at',)
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.Integer)
    image = db.Column(db.String)
    price = db.Column(db.Integer)
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

# class Cart(db.Model, SerializerMixin):
#     __tablename__ = 'carts'

#     serialize_rules = ('-created_at', '-updated_at', '-user', '-product', )

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
#     created_at = db.Column(db.DateTime, server_default=db.func.now())
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now())

#     user = db.relationship('User', foreign_keys='Cart.user_id', back_populates='carts')
#     product = db.relationship('User', foreign_keys='Cart.product_id')

class Appointment(db.Model, SerializerMixin):
    __tablename__ = 'appointments'

    serialize_only = ('user_id', 'stylist_id', 'service_id', )
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    stylist_id = db.Column(db.Integer, db.ForeignKey('stylists.id'))
    service_id = db.Column(db.Integer, db.ForeignKey('services.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', backref='appointments')
    stylist= db.relationship('Stylist', backref='appointments')
    service= db.relationship('Service', backref='services')

    @validates('stylist')
    def validate_stylist(self, key, value):
        if not value:
            raise ValueError('Please pick a stylist')
        return value
    
    @validates('service')
    def validate_service(self, key, value):
        if not value:
            raise ValueError('Please pick a service')
        return value

class Service(db.Model, SerializerMixin):
    __tablename__ = 'services'

    serialize_only = ('name','type', 'price', 'length',)
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.Integer)
    price = db.Column(db.Integer)
    length = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

class Location(db.Model, SerializerMixin):
    __tablename__ = 'locations'

    serialize_rules = ('-created_at', '-updated_at', '-stylist')
    
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String)
    address = db.Column(db.String)
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    stylist = db.relationship('Stylist', backref='locations')

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_only = ('user_id','text',)
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    text = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', backref='reviews')

    @validates('text')
    def validate_text(self, key, value):
        if not value:
            raise ValueError('Review cannot be blank')
        return value

class Inspo(db.Model, SerializerMixin):
    __tablename__ = 'inspos'

    serialize_rules = ('-created_at', '-updated_at', '-stylist_id',)
    
    id = db.Column(db.Integer, primary_key=True)
    stylist_id = db.Column(db.Integer, db.ForeignKey('stylists.id'))
    image = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    stylist= db.relationship('Stylist', backref='inspos')