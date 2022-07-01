import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">LOGIN</div>
        <hr />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>
          Didn't have account? <Link to="/signup">signup</Link>
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
