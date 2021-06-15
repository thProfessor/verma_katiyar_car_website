import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>
          <h1>404 Page</h1>
        </Route>
      </Switch>
    </>
  );
};
export default App;
