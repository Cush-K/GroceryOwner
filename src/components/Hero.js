import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function login() {
    setIsLoggedIn(true);
  }
  function logout() {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/landing");
    }
  }, [isLoggedIn]);
  return (
    <div>
      {isLoggedIn ? (
        <Home logout={logout} />
      ) : (
        <div className="hero">
          <h1>Welcome to Our Online Store</h1>
          <p>Discover the latest and greatest products at our store!</p>
          <Link to="/signup">Sign UP</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
      <Outlet context={login} />
    </div>
  );
}

export default Hero;
