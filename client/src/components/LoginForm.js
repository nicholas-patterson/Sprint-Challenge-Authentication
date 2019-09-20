import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const LoginForm = props => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3300/api/auth/login", login).then(res => {
      console.log(res);
      props.history.push("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button>Login</button>
      <NavLink to="/">Home</NavLink>
    </form>
  );
};

export default LoginForm;
