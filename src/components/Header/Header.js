import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Icon from "./Icon";
import styled from "styled-components";


const Div = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 92.5px);
  grid-gap: 30px;
  align-items: center;
  justify-content: space-between;

  .header-left {
    grid-column: 1 / 5;
  }

  .header-middle {
    grid-column: 5 / 9;
  }

  .header-right {
    grid-column: 9 / 10;
  }
`;

const Header = () => {
  return (
    <Div>
      <div className="header-left">
        <Menu />
      </div>
      <div className="header-middle">
        <Logo />
      </div>
      <div className="header-right">
        <Icon />
      </div>
    </Div>
  );
};

export default Header;
