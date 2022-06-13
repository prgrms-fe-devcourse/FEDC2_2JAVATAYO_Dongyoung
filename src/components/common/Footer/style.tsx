import styled from "@emotion/styled";

export const Footer = styled.footer`
  background-color: #e5e5e5; //gray50
  p,
  span,
  a {
    color: #b0b0b0;
    font-size: 12px;
  }
  p {
    line-height: 20px;
    cursor: default;
  }
  a {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    padding: 0 18px;
  }
`;

export const Wrap = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 32px 0 20px;
`;

export const Title = styled.p`
  font-size: 14px !important;
  font-weight: bold;
`;

export const Content = styled.p`
  margin: 18px 0;
`;

export const PrivacyPolicy = styled.a`
  font-weight: bold !important;
  margin-right: 10px;
`;

export const SocialLink = styled.div`
  display: flex;
  justify-content: end;
  img:first-child {
    margin-right: 10px;
  }
`;
