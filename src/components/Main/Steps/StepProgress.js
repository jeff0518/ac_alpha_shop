import React from "react";
import styled from "styled-components";
import "../../../sass/BaseStyled.css";
import baselineCheck from "../../icons/baselineCheck.svg";
import Number2 from "../../icons/Number2.svg";
import Number3 from "../../icons/Number3.svg";

const StepProgressContainer = styled.div`
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
  }

  .div {
    width: 536px;
    display: flex;
    margin-top: 48px;
    justify-content: space-between;

    .line {
      width: 60px;
      height: 1px;
      background-color: var(--left-arrow);
      margin: auto 0;
    }

    .progressContainer {
      display: flex;

      .progressIcon {
        .text {
          font-weight: 400;
          line-height: 24px;
        }
      }

      .progressLabel {
        width: 64px;
        height: 24px;
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
            <span className="text">
              <img src={baselineCheck} alt="" className="progressIcon-img" />
            </span>
          </span>
          <span className="progressLabel">寄送地址</span>
        </section>
        <div className="line" />
        <section className="progressContainer">
          <span className="progressIcon">
            <span className="text">
              <img src={Number2} alt="" className="progressIcon-img" />
            </span>
          </span>
          <span className="progressLabel">運送方式</span>
        </section>
        <div className="line" />
        <section className="progressContainer">
          <span className="progressIcon">
            <span className="text">
              <img src={Number3} alt="" className="progressIcon-img" />
            </span>
          </span>
          <span className="progressLabel">付款資訊</span>
        </section>
      </div>
    </StepProgressContainer>
  );
};


export default StepProgress