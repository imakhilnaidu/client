import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "../style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    axios.post("http://localhost:4000/api/users/login", {
      username: username,
      password: password
    }).then((res) => {
      if(res.data.status === "success") {
        navigate("/");
        console.log(res.data.data.user)
      }
    })


    alert("User created")
    setUsername("");
    setPassword("");

    e.preventDefault();
  };


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
