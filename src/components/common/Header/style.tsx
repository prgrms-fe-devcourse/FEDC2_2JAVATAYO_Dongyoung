import styled from "@emotion/styled";

export const Header = styled.header`
  padding: 18px 61px;
  display: inline-flex;
  height: 60px;
  font-weight: bolder;
  background-color: #ffffff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
  width: 100%;
  position: fixed;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 10000;
`;

export const LoggedIn = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const Loggedout = styled.div``;
