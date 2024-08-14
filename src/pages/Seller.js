import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useOutletContext } from "react-router-dom";

function Seller() {
  const [products, setProducts] = useState([]);
  const contextData = useOutletContext();

  function onLogOut() {
    contextData.logout();
  }

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  function handleAddItem(newItem) {
    setProducts((prevProducts) => [...prevProducts, newItem]);
  }

  function handleDelete(id) {
    fetch(`http://localhost:4000/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    });
  }

  return (
    <div>
      <NavBar logout={onLogOut} />
      <h1>Seller Dashboard</h1>
      <AddItem onAddItem={handleAddItem} products={products} />
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
            <button onClick={() => handleDelete(product.id)}>
              Delete item
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Seller;
