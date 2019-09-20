import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const JokeList = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3300/api/jokes").then(res => {
      setJokes(res.data);
    });
  });

  return (
    <>
      <h3>Joke List</h3>
      <NavLink to="/login">Login</NavLink>
      {"  "} <NavLink to="/register">Sign Up</NavLink>
      {jokes.map(joke => {
        return (
          <>
            <li>{joke.joke}</li>
          </>
        );
      })}
    </>
  );
};

export default JokeList;
