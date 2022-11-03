import React from "react";
import search from "../icons/IconSearch.svg";
import cart from "../icons/iconCart.svg";
import moon from "../icons/iconMoon.svg";
import styled from "styled-components";
import "../../sass/BaseStyled.css";

const IconLists = styled.div`
  .nav-list {
    display: flex;
    margin-left: 338px;

    .nav-item {
      list-style: none;
      margin-right: 32px;
      a {
        text-decoration: none;
      }
    }
  }
`;

const Icon = () => {
  return (
    <IconLists>
      <ul class="nav-list">
        {/* <!-- search --> */}
        <li class="nav-item">
          <a href="#">
            <img src={search} className="search" alt="search" />
          </a>
        </li>
        {/* <!-- cart --> */}
        <li class="nav-item">
          <a href="#">
            <img src={cart} className="cart" alt="cart" />
          </a>
        </li>
        <li id="theme-toggle" class="nav-item">
          {/* <!-- moon -->             */}
          <a href="#">
            <img src={moon} className="moon" alt="moon" />
          </a>
          {/* <!-- sun --> */}
        </li>
      </ul>
    </IconLists>
  );
};

export default Icon;
