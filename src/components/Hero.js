import React from "react";
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className="hero">
            <h1>Welcome to Our Online Store</h1>
            <p>Discover the latest and greatest products at our store!</p>
            <Link to={`/Signup`}>Signup</Link>
            <Link to={`/login`}>Login</Link>
        </div>
    )
}

export default Hero;