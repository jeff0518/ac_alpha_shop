import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";


const Section = styled(FooterSection)`
  width: 199px;
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
            <img
              src="/icons/SocialMediaIcon.svg"
              className="page-link-app"
              alt="App"
            />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Track;
