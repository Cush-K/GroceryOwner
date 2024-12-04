import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const contextData = useOutletContext();
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5555/api/userinfo")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch user data");
        }
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        alert("Failed to load user data. Please try again later.");
      });
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    if (users.length === 0) {
      alert("User data is not loaded yet. Please try again later.");
      return;
    }

    const authenticated = users.some((user) => {
      const usernameMatch =
        user.username.trim().toLowerCase() === formData.username.trim().toLowerCase();
      const passwordMatch = user.password === formData.password;

      return usernameMatch && passwordMatch;
    });

    if (authenticated) {
      contextData.login();
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  }

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </p>
        <button onClick={handleGoBack}>Back</button>
      </div>
    </div>
  );
}

export default Login;
