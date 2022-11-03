import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";

const Section = styled(FooterSection)`
  margin-right: 120px;
  width: 84px;
`;

const Information = () => {
  return (
    <Section>
      <h2 className="section-title">資訊</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          隱私權政策
        </a>
        <a className="page-link" href="#">
          Cookie
        </a>
        <a className="page-link" href="#">
          GDPR
        </a>
      </div>
    </Section>
  );
};

export default Information;
