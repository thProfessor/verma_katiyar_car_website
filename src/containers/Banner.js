import React from "react";
import styled from "styled-components";
import { primary, sizes } from "../styles/pallete";
import Car from "../assets/images/car.png";
function Banner() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Typography>
          Chevrolette <br /> Corvette C3
        </Typography>
      </ContentWrapper>
      <Circle />
      <img src={Car} alt="" style={{ transform: "translate(-10%,10%)" }} />
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
`;
const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Circle = styled.div`
  height: 750px;
  width: 750px;
  border-radius: 50%;
  background: ${primary.inner};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;
