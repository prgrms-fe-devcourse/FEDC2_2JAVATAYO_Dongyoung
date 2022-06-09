import styled from "@emotion/styled";

export const Layout = styled.div`
  max-width: 700px;
  min-width: 340px;
  margin: auto;
  @media (max-width: 700px) {
    padding: 0 18px;
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  height: 60px;
  background-color: #f5f5f5;
`;
export const Footer = styled.div`
  height: 196px;
  background-color: #f5f5f5;
`;