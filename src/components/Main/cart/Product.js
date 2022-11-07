import React from "react";
import styled from "styled-components";
import IconPlus from "../../icons/IconPlus.svg";
import IconMinus from "../../icons/IconMinus.svg";
import "../../../sass/BaseStyled.css";

const ProductContainer = styled.div`
  width: 392px;
  height: 102px;
  display: flex;
  flex-direction: row;
  margin-top: 34px;

  .img-container {
    margin-right: 5.3%;
    width: 100px;
    height: 100px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    margin-right: 61px;

    .product-name {
      width: 158px;
      height: 27px;
      margin-bottom: 18px;
      color: var(--main-text);
    }

    .product-control {
      width: 116px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .product-count {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
      }
    }
    .rwd-price {
        display: none;
      }
    
  }

  .price {
    /* width: 52px;
    height: 22px; */
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: var(--product-action-text);
  }

  @media (max-width: 496px) {
    .product-info {
      display: flex;
      align-items: flex-end;

      .product-name {
        display: flex;
        justify-content: flex-end;
      }

      .rwd-price {
        display: unset;
        margin-top: 17px;
      }
    }

    .price {
      display: none;
    }
  }
`;

const Product = (props) => {
  return (
    <ProductContainer data-count="0" data-price="3999">
      <img className="img-container" src={props.image} />
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        {/* <div className="product-control-container"> */}
        <div className="product-control">
          <a className="product-action" href="#">
            <img src={IconMinus} alt="" className="minus" />
          </a>
          <span className="product-count">1</span>
          <a className="product-action" href="#">
            <img src={IconPlus} alt="" className="plus" />
          </a>
        </div>
        <div className="price rwd-price">{props.price}</div>
        {/* </div> */}
      </div>
      <div className="price">{props.price}</div>
    </ProductContainer>
  );
};

export default Product;
