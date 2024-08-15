import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  const contextData = useOutletContext();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    const authenticated = users.some(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    authenticated
      ? contextData.login()
      : console.error("Input the Correct Details");
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
