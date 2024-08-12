import React from "react";
import { Link } from "react-router-dom";


function ItemList({image, name, price, id}){
    return (
        <>
         <img src={image} alt="products" />  
         <h2>{name}</h2>
         <h3>{price}</h3>
         <Link to={`/items/${id}`}>View Details</Link>
        </>
    )
}

export default ItemList;