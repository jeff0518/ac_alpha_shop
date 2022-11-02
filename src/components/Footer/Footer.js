import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import CustomerService from "./CustomerService";
import Information from "./Information";
import Track from "./Track";
import Logo from "../Header/Logo";
import '../../sass/BaseStyled.css'

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--footer-background-color);
  height: 284px;
  max-width: 1440px;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <CustomerService />
      <AboutUs />
      <Information />
      <Track />
    </StyledFooter>
  );
};

export default Footer;
