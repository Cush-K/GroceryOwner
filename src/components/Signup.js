import React from "react";

function Signup(){
    return(
        <div className="signup">
            <h1>Signup</h1>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Signup</button>
        </div>
    )
}

export default Signup;