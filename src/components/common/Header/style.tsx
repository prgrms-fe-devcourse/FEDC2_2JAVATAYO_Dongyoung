import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../../../src/styles/theme";

const dot = css`
  position: absolute;
  top: -2px;
  right: -2px;
  display: block;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${theme.$red};
  content: "";
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 60px;
  font-weight: bolder;
  background-color: #ffffff;
  box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
  width: 100%;
  position: fixed;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 200;

  svg {
    width: 180px;
    cursor: pointer;
  }

  h1 {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
  }

  @media (max-width: 700px) {
    padding: 30px;
  }
`;

export const LoggedIn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  a,
  span {
    font-size: 16px;
  }
  a {
    margin-left: 15px;
    :hover {
      color: ${theme.$gray600};
    }
  }
`;

export const Notice = styled.div<{ isGetAlarm: boolean }>`
  position: relative;
  border: none;
  margin: 0 20px;
  background-color: #fff;
  cursor: pointer;
  svg {
    width: 20px;
  }
  ::after {
    ${({ isGetAlarm }) => (isGetAlarm ? dot : null)}
  }
`;

export const LoggedOut = styled.a`
  font-size: 16px;
  line-height: 16px;
`;

export const UserFullName = styled.span`
  margin-left: 12px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    cursor: pointer;
  }
`;
