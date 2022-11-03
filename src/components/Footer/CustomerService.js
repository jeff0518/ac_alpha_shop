import React from "react";
import styled from "styled-components";
import FooterSection from "./FooterStyled";

const Section = styled(FooterSection)`
  margin-right: 120px;
  width: 96px;
`;

const CustomerService = () => {
  return (
    <Section>
      <h2 className="section-title">客戶服務</h2>
      <div className="section-content">
        <a className="page-link" href="#">
          運送說明
        </a>
        <a className="page-link" href="#">
          退換貨相關
        </a>
        <a className="page-link" href="#">
          付款資訊
        </a>
        <a className="page-link" href="#">
          FAQ
        </a>
      </div>
    </Section>
  );
};

export default CustomerService;
