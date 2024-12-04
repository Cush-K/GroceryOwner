import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log(!users);

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    fetch("/api/userinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => setUsers((prevUsers) => [...prevUsers, data]))
      .catch((error) => console.error(error));

    setUsername("");
    setPassword("");
    setEmail("");
    navigate("/login");
  }
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Signup
          </button>
        </form>
        <button onClick={handleGoBack}>Back</button>
      </div>
    </div>
  );
}

export default Signup;
