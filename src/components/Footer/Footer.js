import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import CustomerService from "./CustomerService";
import Information from "./Information";
import Track from "./Track";
import Logo from "../Header/Logo";
import '../../sass/BaseStyled.css'

const StyledFooter = styled.div`
  background-color: var(--footer-background-color);
  height: 284px;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  .container {
    width: var(--width);
    display: flex;

  }
  .logo {
    display: flex;
    align-items: center;

  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 64px;
    padding-left: 109px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="content">
          <CustomerService />
          <AboutUs />
          <Information />
          <Track />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
