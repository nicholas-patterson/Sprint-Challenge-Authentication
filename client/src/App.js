import React from "react";
import { Route } from "react-router-dom";
import JokeList from "./components/JokeList";
import SignUp from "./components/SignUp";
import Login from "./components/LoginForm";

const App = props => {
  return (
    <>
      <Route exact path="/" component={JokeList} />
      <Route path="/register" {...props} component={SignUp} />
      <Route path="/login" {...props} component={Login} />
    </>
  );
};

export default App;
