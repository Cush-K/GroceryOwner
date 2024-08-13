import React from "react";
import { NavLink, Link } from "react-router-dom";
function NavBar(){ 
return(
        <nav className="navbar">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <Link to="/">
                 <button type="button">Logout</button>
                </Link>
                
            </ul>
        </nav>
    )
}

export default NavBar;