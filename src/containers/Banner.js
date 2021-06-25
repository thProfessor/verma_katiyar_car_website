import React, { useState } from "react";
import styled, { css } from "styled-components";
import { primary, sizes } from "../styles/pallete";
import Car from "../assets/images/car.png";
import { BsPlusCircleFill } from "react-icons/bs";
import Card from "../components/Card";
import { mobile } from "../styles/mediaQuerries";
import { motion } from "framer-motion";
function Banner() {
  const [display, setDisplay] = useState(false);
  const displayCard = () => {
    setDisplay(!display);
  };
  return (
    <Wrapper
      transition={{
        delayChildren: 5,
        staggerDirection: -1,
      }}
    >
      <ContentWrapper>
        <Typography
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Chevrolette <br />
          Corvette C3
        </Typography>
      </ContentWrapper>
      <Circle
        initial={{ opacity: 0, x: -100, y: 100 }}
        animate={{ opacity: 1, x: -350, y: -50 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={Car}
        alt=""
        style={{ transform: "translate(-20%,10%)" }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: -50, rotate: 360 }}
        transition={{ duration: 1 }}
      />
      <div
        style={{
          position: "relative",
          display: "inline-block",
          marginLeft: "25px",
        }}
      >
        {display && <Card title="Classic C3 Car Tier" price="$20.00" />}
        <Button onClick={displayCard} />
      </div>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled(motion.div)`
  position: relative;
  padding: 2vw 5vw;
  display: flex;

  ${mobile} {
    img {
      width: 20%;
      height: auto;
    }
  }
`;

const Typography = styled(motion.h1)`
  color: ${primary.fontColor};
  font-size: ${sizes.xlg}px;
  font-weight: 400;
  position: relative;
  display: inline-block;

  ${mobile} {
    color: ${primary.inner};
    font-size: ${sizes.md}px;
  }
  ${(props) =>
    props.h2 &&
    css`
      font-size: 12px;
    `}
`;
const ContentWrapper = styled(motion.div)`
  display: flex;
  position: relative;
`;
const Circle = styled(motion.div)`
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

// framer motion --> motion.   --> bahar se ara hai () me rahega eg (motion.div)
