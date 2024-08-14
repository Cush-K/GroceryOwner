import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Our Online Store</h1>
        <p>Discover the latest and greatest products at our store!</p>
        <Link to="/signup">Sign UP</Link>
        <Link to="/login" className="hero-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Hero;
