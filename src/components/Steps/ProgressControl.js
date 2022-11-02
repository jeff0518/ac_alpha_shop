import React from "react";
import styled from "styled-components";
import '../../sass/BaseStyled.css'

const Control = styled.div`
  width: 540px;
  border-top: 2px solid #e6e6eb;
  margin-top: 48px;

  .buttonGroup__shipping,
  .buttonGroup__creditCard {
    transform: scale(0, 1);
  }

  .buttonGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    .next {
      background-color: var(--pink);
      width: 174px;
      height: 46px;
      border-radius: 8px;
    }

    .next1 {
      position: relative;
      left: 366px;
    }

    .prev {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const ProgressControl = () => {
  return (
    <Control>
      <section className="buttonGroup" data-phase="address">
        <button class="next next1">下一步</button>
      </section>
      <section
        className="buttonGroup buttonGroup__shipping"
        data-phase="shipping"
      >
        <button class="prev">上一步</button>
        <button class="next">下一步</button>
      </section>
      <section
        className="buttonGroup buttonGroup__creditCard"
        data-phase="credit-card"
      >
        <button class="prev">上一步</button>
        <button class="next">確認下單</button>
      </section>
    </Control>
  );
}

export default ProgressControl
