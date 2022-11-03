import React from "react";
import Product from "./Product";
import styled from "styled-components";
import Destroy from "../../icons/Destroy.svg";
import Straight from "../../icons/Straight.svg";

const SectionCart = styled.section`
  width: 440px;
  height: 492px;
  margin-top: 86px;

  .cart-info {
    width: 392px;
    height: 37px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-top: 1px solid var(--undone-progress-border);
    margin-top: 32px;
  }
`;

const PRODUCTS = [
  {
    id: 1,
    name: "破壞補丁修身牛仔褲",
    price: 3999,
    image: Destroy,
  },
  {
    id: 2,
    name: "刷色直筒牛仔褲",
    price: 1299,
    image: Straight,
  },
];

const Cart = () => {
  return (
    <SectionCart>
      <h3 className="cart-title">購物籃</h3>
      <section>
        {PRODUCTS.map(e => {
          return <Product key={e.id} price={e.price} image={e.image} name={e.name} />;
        })}
      </section>
      <section className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total">
        <div className="text">小計</div>
        <div className="price">$5,298</div>
      </section>
    </SectionCart>
  );
}

export default Cart