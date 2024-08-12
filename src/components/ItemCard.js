import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


function ItemCard(){

    const params = useParams();
    const [items, setItems] = useState({})
    const itemId = params.id

       
    fetch(`http://localhost:4000/products/${itemId}`)
    .then(resp => resp.json())
    .then(data => setItems(data))
    .catch(error => console.error(error))

    return(
        <div className="item-card">
            <h1>{items.name}</h1>
            <img src={items.image} alt="product" />
            <h2>Price: {items.price}</h2>
            <p>Description: {items.description}</p>
            <p>Category: {items.category}</p>
            <p>Quantity in Stock: {items.quantity}</p>
        </div>
    )
}

export default ItemCard;