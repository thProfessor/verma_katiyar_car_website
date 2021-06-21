import React from "react";
import styled from "styled-components";
import Tyre from "../assets/images/tyre.png";
const Card = ({ title, price }) => {
  return (
    <CardWrapper>
      <Right>
        <Heading>{title}</Heading>
        <Price>{price}</Price>
      </Right>
      <Left>
        <img src={Tyre} alt="tyre" />
      </Left>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  background-color: #d5a7ff;
  padding: 2.2rem 0;
  border-radius: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  /* &::after {
    content: "";
    width: 100px;
    height: 100px;
    background: transparent;
    border-bottom: 4px solid #352e3b;
    border-left: 4px solid #352e3b;
    transform: rotateZ(45deg);
    border-radius: 32px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
  } */
`;
const Right = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Heading = styled.h1`
  font-size: 1.4rem;
  color: #352e3b;
`;
const Price = styled.h3`
  color: #ad8dcd;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 160px;
    width: auto;
  }
`;
