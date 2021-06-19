import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { minimal, primary, sizes } from "../styles/pallete";

function Navbar() {
  return (
    <NavbarWrapper>
      <ImageWrapper>
        <img src={Logo} alt="" />
      </ImageWrapper>
      <NavbarList>
        <NavbarItem>Sports</NavbarItem>
        <NavbarItem to="/blog">Blog</NavbarItem>
        <NavbarItem>Accessories</NavbarItem>
      </NavbarList>
      <NavbarIcons>
        <Search />
        <BagWrapper>
          <Bag />
        </BagWrapper>
      </NavbarIcons>
    </NavbarWrapper>
  );
}

export default Navbar;

const NavbarWrapper = styled.div`
  padding: 2vw 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
`;
const ImageWrapper = styled.div`
  img {
    height: 60px;
    width: auto;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  column-gap: 40px;
  list-style: none;
  transform: translateX(10%);
`;
const NavbarItem = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  cursor: pointer;
  text-transform: uppercase;
  color: ${primary.fontColor};
  text-decoration: none;
`;

const NavbarIcons = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 100;
`;

const Search = styled(BsSearch)`
  font-size: ${sizes.md}px;
  color: ${primary.fontColor};
  margin: 0 15px;
  font-weight: 300;
`;
const BagWrapper = styled.div`
  background: ${minimal.white};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  &:hover {
    background: ${primary.circle};
  }
`;
const Bag = styled(FaShoppingBag)`
  font-size: ${sizes.md}px;
  color: ${primary.fontColor};
`;
