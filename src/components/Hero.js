import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to FreshMart Store</h1>
        <p>Discover the latest and greatest products at our store!</p>
        <Link to="/signup" className="sign-link">
          Sign UP
        </Link>
        <Link to="/login" className="hero-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Hero;
