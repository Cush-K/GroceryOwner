import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar({ logout }){ 
return(
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <button onClick={logout}>Logout</button>
            </ul>
        </nav>
    )
}

export default NavBar;