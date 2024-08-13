import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
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
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div>
      {isLoggedIn ? (
        <NavBar logout={logout} />
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
