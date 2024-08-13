import React, {useState, useEffect} from "react";
import AddItem from "../components/AddItem";

function Seller(){
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
    
   function handleAddItem(newItem){
        setProducts([...products, newItem])
   }

  return (
    <div>
    {
        products.map(product=>(
            <AddItem 
                key={product.id}
                onAddItem = {handleAddItem}
                itemName={product.name}
                itemCategory={product.category}
                itemPrice={product.price}
                itemQuantity={product.quantity}
                itemDescription={product.description}
                itemImage={product.image}
             />
            

        ))
    }
    
     </div>
  )
}

export default Seller;