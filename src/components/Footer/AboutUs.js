import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";

const Section = styled(FooterSection)`
  margin-right: 120px;
  width: 96px;
`;

const AboutUs = () => {
  return (
    <Section>
      <h2 className="section-title">關於我們</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          品牌故事
        </a>
        <a className="page-link" href="#">
          媒體聯繫
        </a>
        <a className="page-link" href="#">
          Press kit
        </a>
      </div>
    </Section>
  );
};

export default AboutUs;
