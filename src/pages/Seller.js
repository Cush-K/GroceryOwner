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
    
  function handleAddItem(newItem) {
    setProducts((prevProducts) => [...prevProducts, newItem]);
  }

  return (
     <div>
      <h1>Seller Dashboard</h1>
      <AddItem onAddItem={handleAddItem} products={products}/>
      <div>
      <h2>Existing Products</h2>
      {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Description: {product.description}</p>
            {/* <img src={product.image} alt={product.name} /> */}
          </div>
        ))}
     </div>
     </div>
  )
}

export default Seller;