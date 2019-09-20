import React from "react";
import { Route } from "react-router-dom";
import JokeList from "./components/JokeList";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <Route path="/" component={JokeList} />
      <Route path="/register" component={SignUp} />
    </>
  );
};

export default App;
