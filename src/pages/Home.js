import React from "react";
import styled from "styled-components";
import Banner from "../containers/Banner";
import Navbar from "../containers/Navbar";
import { primary } from "../styles/pallete";

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Banner />
    </>
  );
}

export default Home;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${primary.background};
  position: absolute;
  z-index: -10;
`;
