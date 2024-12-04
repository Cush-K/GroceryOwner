from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin as sm

db = SQLAlchemy()

class User(db.Model, sm):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    
    def __repr__(self):
        return f'<User {self.username} - {self.email}>'
    
    
class Product(db.Model, sm):
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    category = db.Column(db.String)
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)
    description = db.Column(db.String)
    image = db.Column(db.String)
    
    def __repr__(self):
        return f'<Product {self.name} - {self.price}>'
    