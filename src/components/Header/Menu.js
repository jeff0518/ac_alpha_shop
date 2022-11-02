import React from "react";
import styled from "styled-components";
import '../../sass/BaseStyled.css'

const Nav = styled.nav`
  ul {
    display: flex;
    margin-right: 52px;

    li {
      list-style: none;
      margin-right: 32px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      width: 32px;

      a {
        text-decoration: none;
        color: var(--nav-icon);
      }
    }
    .nav-item-fourWord {
      width: 64px;
    }
  }
`;

const Menu = () => {
  return (
    <Nav>
      <ul className="nav-list">
        <li className="nav-item nav-item-twoWord">
          <a className="nav-link" href="#">
            男款
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            女款
          </a>
        </li>
        <li className="nav-item nav-item-fourWord">
          <a className="nav-link" href="#">
            最新消息
          </a>
        </li>
        <li className="nav-item nav-item-fourWord">
          <a className="nav-link" href="#">
            客製商品
          </a>
        </li>
        <li className="nav-item nav-item-fourWord">
          <a className="nav-link" href="#">
            聯絡我們
          </a>
        </li>
      </ul>
    </Nav>
  );
}

export default Menu