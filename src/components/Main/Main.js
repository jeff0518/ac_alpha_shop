import React from "react";
import styled from "styled-components";
import Step1 from './Steps/Step1'
import StepProgress from './Steps/StepProgress'
import ProgressControl from './Steps/ProgressControl'
import Cart from "./cart/cart";

const MainStyled = styled.main`
  margin-top: 140px;
  display: grid;
  grid-template-columns: repeat(12, 92.5px);
  grid-gap: 30px;

  .left-Container {
    grid-column: 1 / 6;
  }

  .right-Container {
    grid-column: 8 / 12;
  }
`;

const Main = () => {
  return (
    <MainStyled>
      <div className="left-Container">
        <StepProgress />
        <Step1 />
        <ProgressControl />
      </div>
      <div className="right-Container">
        <Cart />
      </div>
    </MainStyled>
  );
}

export default Main