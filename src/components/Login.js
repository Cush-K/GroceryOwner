import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    )
}

export default Login;