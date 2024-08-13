import React, { useState, useEffect } from "react";
import ItemList from "../components/itemList";
import NavBar from "../components/NavBar";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((resp) => resp.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="App">
        {products.map((product) => (
          <ItemList
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>

    </div>

  );
}

export default Home;
