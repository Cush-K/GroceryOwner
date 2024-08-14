import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    
    const contextData = {login: function login() {
        setIsLoggedIn(true);
    },

    logout: function logout() {
        setIsLoggedIn(false);
    }
    }
    

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/home");
        } else {
            navigate("/hero");
        }
    }, [isLoggedIn, navigate]);


    return (
        <div>
            <Outlet context={contextData}/>
        </div>

    )
}

export default App;