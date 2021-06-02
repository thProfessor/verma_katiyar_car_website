import React from "react";

const Shukla = () => {
  const arr = [
    {
      name: "Katiyar",
      place: "bhopal",
      image: "./images/ce.jpg",
    },
    {
      name: "verma",
      place: "ghaziabad",
    },
    {
      name: "shukla",
      place: "lko",
    },
  ];
  return arr.map((elem) => {
    return (
      <>
        <h1>{elem.name}</h1>
        <h2>{elem.place}</h2>
        <img src={elem.image} />
      </>
    );
  });
};

export default Shukla;
