import React from "react";
import Product from "./Product";
import styled from "styled-components";
import Destroy from "../../icons/Destroy.svg";
import Straight from "../../icons/Straight.svg";

const SectionCart = styled.section`
  max-width: 440px;
  width: 100%;
  height: 492px;
  background: #ffffff;
  border: 1px solid #f0f0f5;
  border-radius: 8px;
  margin-top: 86px;
  padding: 7.2% 5.5%;

  .cart-info {
    max-width: 392px;
    width: 100%;
    height: 37px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-top: 1px solid var(--undone-progress-border);
    margin-top: 32px;
  }

  @media (max-width: 1266px) {
    margin-top: 0;
  }
`;

const PRODUCTS = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

// const PRODUCTS = [
//   {
//     id: 1,
//     name: "破壞補丁修身牛仔褲",
//     price: 3999,
//     image: Destroy,
//   },
//   {
//     id: 2,
//     name: "刷色直筒牛仔褲",
//     price: 1299,
//     image: Straight,
//   },
// ];

const Cart = () => {
  // 為了計算價錢
  let count = 0
  return (
    <SectionCart>
      <h3 className="cart-title">購物籃</h3>
      <section>
        {/* 因為格式都一樣只有文字跟圖片不同，所以用渲染的方式 */}
        {PRODUCTS.map((e) => {
          count += e.price * e.quantity; 
          return (
            <Product
              key={e.id}
              price={e.price}
              image={e.img}
              name={e.name}
              quantity={e.quantity}
            />
          );
        })}
      </section>
      <section className="cart-info shipping">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total">
        <div className="text">小計</div>
        <div className="price">${count}</div>
      </section>
    </SectionCart>
  );
}

export default Cart