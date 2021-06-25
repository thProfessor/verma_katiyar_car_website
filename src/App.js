import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./containers/Navbar";
import styled from "styled-components";
import { primary } from "./styles/pallete";

const App = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route>
          <h1>404 Page</h1>
        </Route>
      </Switch>
    </>
  );
};
export default App;

const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${primary.background};
  position: absolute;
  z-index: -10;
`;
