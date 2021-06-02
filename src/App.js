import React, { useState } from "react";
import Verma from "./Verma";
import Shukla from "./Shukla";
import Button from "./Button";
import "./App.css";

const App = () => {
  const [name, setName] = useState(1);
  const clicked = () => {
    setName(name + 2);
  };
  return (
    <>
      <Shukla />
      <Button color2="blue" click={clicked}>
        {name}
      </Button>
      <button onClick={clicked}>{name}</button>
    </>
  );
};
export default App;
