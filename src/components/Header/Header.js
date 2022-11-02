import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Icon from "./Icon";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1440px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Div>
      <Menu />
      <Logo />
      <Icon />
    </Div>
  );
};

export default Header;
