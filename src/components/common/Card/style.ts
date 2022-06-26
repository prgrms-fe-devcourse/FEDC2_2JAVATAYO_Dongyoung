import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";

const ellipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    ${ellipsis}
  }
`;

export const Card = styled.div`
  width: calc(700px / 2 - 15px / 2);
  height: 260px;
  margin-top: 15px;
  border-radius: 8px;
  padding: 21px;
  background-color: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 18px;
  }
`;

export const Tag = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 8px 16px;
  border-radius: 26px;
  line-height: 1;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  &:hover img {
    transform: scale(1.1);
  }
  img {
    width: 21px;
    margin-right: 5px;
    transition: transform 0.3s;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.8;
  margin: 10px 0 4px;

  ${ellipsis}
`;

export const SkillIcons = styled.div`
  margin: 20px 0 30px;
  height: 41px;
  & > div {
    margin-right: 6px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin-left: 10px;
    width: 100px;
    @media (max-width: 400px) {
      width: 100px;
    }
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  color: ${theme.$gray400};
  line-height: 1.2;
  text-align: right;
`;
