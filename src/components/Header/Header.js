import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Icon from "./Icon";
import styled from "styled-components";


const Div = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
