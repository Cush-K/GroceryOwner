import React, { useState } from "react"

function AddItem({onAddItem, itemName, itemCategory, itemPrice, itemQuantity, itemDescription, itemImage}) {
    const[name, setName]=useState('')
    const[category, setCategory]=useState('Select Category')
    const[price, setPrice]=useState('')
    const[quantity, setQuantity]=useState('')
    const[description, setDescription]=useState('')
    const[image, setImage]=useState('')
    
   
    
    function handleSubmit(e){
        e.preventDefault();
        const newItem={
        name:name , 
        category:category,
        price:price,
        quantity:quantity,
        description:description,
        image:image,

        }

        fetch ('http://localhost:4000/products',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newItem)
        })
        .then(response => response.json() )
        .then(data => onAddItem(data))

    }

   


    return (
        <form onSubmit={handleSubmit}>
        
            <label htmlFor="name" >Name</label>
            <input type="text" placeholder="Name" name="name"  onChange={(e) => setName(e.target.value)}  />
{/* 
            <label htmlFor="category" >Category</label>
            <select name="category" value={itemCategory} onChange={(e) => setCategory(e.target.value)} >
                <option value="Select Category">Select Category</option>
            {itemCategory.map((category, index) =>(
                <option key={index}>{category}</option>
            ) )}
            </select> */}

            

            <label htmlFor="price" >Price</label>
            <input type="text" placeholder="Price" name="price"  onChange={(e) => setPrice(e.target.value)}  />

            <label htmlFor="quantity" >Quantity</label>
            <input type="text" placeholder="Quantity" name="quantity"  onChange={(e) => setQuantity(e.target.value)} />

            <label htmlFor="description" >Description</label>
            <input type="text" placeholder="Description" name="description"  onChange={(e) => setDescription(e.target.value)}  />

            <label htmlFor="image" >Image</label>
            <input type="text" placeholder="Image" name="image"  onChange={(e) => setImage(e.target.value)} /> 

            <button type="submit">AddItem</button>
        </form>

    )
}

export default AddItem;

