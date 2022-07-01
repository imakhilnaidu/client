import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style.css";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const handleSubmit = (e) => {
    axios.post("http://localhost:4000/api/users/add-user", {
      name: name,
      username: username,
      password: password
    });

    alert("User created")
    setCheck(true);
    setName("");
    setUsername("");
    setPassword("");
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">SIGNUP</div>
        <hr />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="User Name"
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
        <button type="submit">Submit</button>
        { check ? (
        <button onClick={() => setCheck(false)}>
          <Link className="blb" to="/login">Back to login</Link>
        </button>
        ) : null}
      </form>
    </div>
  );
}

export default Signup;
