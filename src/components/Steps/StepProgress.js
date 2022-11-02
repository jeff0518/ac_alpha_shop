import React from "react";
import styled from "styled-components";
import "../../sass/BaseStyled.css";
const StepProgressContainer = styled.div`

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }

  .div {
    display: flex;
    margin-top: 48px;

    .progressContainer {
      margin-right: 156px;

      .progressIcon {
        .text {
          font-weight: 400;
          line-height: 24px;
        }
      }

      .progressLabel {
        width: 64px;
        height: 24px;
        border: 1px solid #555;
      }
    }
  }
`;

const StepProgress = () => {
  return (
    <StepProgressContainer>
      <h2>結帳</h2>
      <div className="div">
        <section className="progressContainer">
          <span className="progressIcon">
            <span className="text">1</span>
          </span>
          <span className="progressLabel">寄送地址</span>
        </section>
        <section className="progressContainer">
          <span className="progressIcon">
            <span className="text">2</span>
          </span>
          <span className="progressLabel">運送方式</span>
        </section>
        <section className="progressContainer">
          <span className="progressIcon">
            <span className="text">3</span>
          </span>
          <span className="progressLabel">付款資訊</span>
        </section>
      </div>
    </StepProgressContainer>
  );
};


export default StepProgress