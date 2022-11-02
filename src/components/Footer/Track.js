import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";
import SocialMedia from "../icons/SocialMediaIcon.svg";

const Section = styled(FooterSection)`
  margin-right: 120px;
`;

const Track = () => {
  return (
    <Section>
      <h2 className="section-title">追蹤 ALPHA Shop</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          +886 02123-45678
        </a>
        <div>
          <a className="page-link" href="#">
            <img src={SocialMedia} className="page-link-app" alt="App" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Track;
