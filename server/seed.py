from models import db, Product, User
from app import app

with app.app_context():
    
    print("Clearing Database...")
    Product.query.delete()
    User.query.delete()
    
    print("Seeding Product Data..")
    
    products = [
        {
            "name": "Apples",
            "category": "Fruits",
            "price": 250,
            "quantity": 100,
            "description": "Fresh red apples",
            "image": "https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg",
        },
        {
            "name": "Potatoes",
            "category": "Fruits",
            "price": 400,
            "quantity": 200,
            "description": "Ripe bananas",
            "image": "https://cdn.pixabay.com/photo/2019/07/12/02/19/potatoes-4331742_1280.jpg",
        },
        {
            "name": "Oranges",
            "category": "Fruits",
            "price": 180,
            "quantity": 800,
            "description": "Juicy oranges",
            "image": "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg",
        },
        {
            "name": "Carrots",
            "category": "Vegetables",
            "price": 350,
            "quantity": 200,
            "description": "Fresh orange carrots",
            "image": "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg",
        },
        {
            "name": "Bananas",
            "category": "Vegetables",
            "price": 300,
            "quantity": 120,
            "description": "Nutritious potatoes",
            "image": "https://media.istockphoto.com/id/1494763483/photo/banana-concept.jpg?s=2048x2048&w=is&k=20&c=oz3Xd4SKjKrMrc2JX0pqworegOshV9YMl2GUbpVI338=",
        },
        {
            "name": "Chicken Breast",
            "category": "Meat",
            "price": 500,
            "quantity": 700,
            "description": "Tender chicken breast",
            "image": "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            "name": "Salmon",
            "category": "Seafood",
            "price": 1000,
            "quantity": 30,
            "description": "Fresh salmon",
            "image": "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            "name": "Eggs",
            "category": "Dairy",
            "price": 250,
            "quantity": 200,
            "description": "Farm fresh eggs",
            "image": "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            "name": "Milk",
            "category": "Dairy",
            "price": 100,
            "quantity": 100,
            "description": "Fresh milk",
            "image": "https://images.pexels.com/photos/799273/pexels-photo-799273.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            "name": "Cheese",
            "category": "Dairy",
            "price": 2000,
            "quantity": 20,
            "description": "A firm-textured cheese",
            "image": "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            "name": "Grapes",
            "category": "Fruits",
            "price": 190,
            "quantity": 40,
            "description": "Freshly picked grapes",
            "image": "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    ]

    for product_data in products:
            product = Product(
                name=product_data["name"],
                category=product_data["category"],
                price=product_data["price"],
                quantity=product_data["quantity"],
                description=product_data["description"],
                image=product_data["image"],
            )
            db.session.add(product)
            db.session.commit()
    
    print("Database seeded successfully!")