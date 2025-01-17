import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SignUp = props => {
  const [newUser, setNewUser] = useState({ username: "", password: "" });

  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:3300/api/auth/register", newUser).then(res => {
      console.log(res.data);
      props.history.push("/login");
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
      <button>Register</button>
      <NavLink to="/">Home</NavLink>
    </form>
  );
};

export default SignUp;
