from flask import Flask, make_response, request, send_from_directory, jsonify
from models import db, User, Product
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_restful import Resource, Api
from flask_migrate import Migrate
import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='../client/build', static_url_path="")

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI') #"sqlite:///app.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.config['SESSION_PERMANENT'] = True
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1)

migrate = Migrate(app,db)
bcrypt = Bcrypt(app)
CORS(app)
api = Api(app)

db.init_app(app)

@app.errorhandler(404)
def not_found(e):
    if request.path.startswith("/api/"):
        return jsonify({"error": "Not found"}), 404
    return send_from_directory(app.static_folder, "index.html")

@app.route('/api')
def index():
    return '<h1>Index of Freshmart Store</h1>'


class UserInfo(Resource):
    def get(self):
        users_dict = [user.to_dict() for user in User.query.all()]
        return make_response(users_dict, 200)
    
    def post(self):
        data = request.get_json()
        
        new_user = User(
            username = data['username'],
            email = data['email'],
            password = data['password']
        )
        
        try:
            db.session.add(new_user)
            db.session.commit()
            return (new_user.to_dict(only=('username', 'email'))), 201
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500


class Products(Resource):
    def get(self):
        products_dict = [product.to_dict() for product in Product.query.all()]
        return make_response(products_dict, 200)
    
def post(self):
    data = request.get_json()

    # Debugging: Log the incoming data
    print("Incoming data:", data)

    # Validate data
    if not all(key in data for key in ('name', 'description', 'price', 'quantity', 'image')):
        return {"error": "Missing required fields"}, 400

    new_product = Product(
        name=data['name'],
        description=data['description'],
        price=data['price'],
        quantity=data['quantity'],
        image=data['image']
    )

    try:
        db.session.add(new_product)
        db.session.commit()
        return (new_product.to_dict()), 201
    except Exception as e:
        # Log the error for debugging
        print(f"Error occurred: {e}")
        db.session.rollback()
        return {"error": str(e)}, 500

        
class ProductsById(Resource):
    def get(self, id):
        product = Product.query.filter_by(id=id).first()
        
        if product:
            return product.to_dict()
        return {"error": "Product not found"}, 404
    
    def delete(self, id):
        product = Product.query.filter_by(id=id).first()
        
        if product:
            db.session.delete(product)
            db.session.commit()
            return {}, 204
        

api.add_resource(UserInfo, '/api/userinfo')
api.add_resource(Products, '/api/products')
api.add_resource(ProductsById, '/api/products/<int:id>')



# if __name__ == "__main__":
    # app.run(port=5555, debug=True)
    # port = int(os.environ.get("PORT", 5555))
    # app.run(host="0.0.0.0", port=port)
