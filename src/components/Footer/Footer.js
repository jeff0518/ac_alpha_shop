import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import CustomerService from "./CustomerService";
import Information from "./Information";
import Track from "./Track";
import Logo from "../Header/Logo";

const StyledFooter = styled.div`
  display: flex;
`

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
