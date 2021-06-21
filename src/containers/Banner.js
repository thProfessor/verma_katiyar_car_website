import React, { useState } from "react";
import styled, { css } from "styled-components";
import { primary, sizes } from "../styles/pallete";
import Car from "../assets/images/car.png";
import { BsPlusCircleFill } from "react-icons/bs";
import Card from "../components/Card";
function Banner() {
  const [display, setDisplay] = useState(false);
  const displayCard = () => {
    setDisplay(!display);
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <Typography>
          Chevrolette <br />
          Corvette C3
        </Typography>
      </ContentWrapper>
      <Circle />
      <img src={Car} alt="" style={{ transform: "translate(-20%,10%)" }} />
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginLeft: "20px",
        }}
      >
        {display && <Card title="Classic C3 Car Tier" price="$20.00" />}
        <Button onClick={displayCard} />
      </div>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  position: relative;
  padding: 2vw 5vw;
  display: flex;
`;

const Typography = styled.h1`
  color: ${primary.fontColor};
  font-size: ${sizes.xlg}px;
  font-weight: 400;
  position: relative;
  display: inline-block;

  ${(props) =>
    props.h2 &&
    css`
      font-size: 12px;
    `}
`;
const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Circle = styled.div`
  /* circle making */
  height: 750px;
  width: 750px;
  border-radius: 50%;
  /* circle done */
  background: ${primary.inner};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

const Button = styled(BsPlusCircleFill)`
  font-size: 2rem;
  position: absolute;
  bottom: 60%;
  transform: translate(50%, -50%);
  right: 0;
  cursor: pointer;
`;

// button 2 --> minus icon
