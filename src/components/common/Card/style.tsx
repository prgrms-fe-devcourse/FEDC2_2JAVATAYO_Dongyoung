import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 18px;
  background-color: #fff;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
`;

export const Tag = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 0 16px;
  border-radius: 26px;
  font-size: 14px;
  line-height: 1;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 21px;
    margin-right: 3px;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.8;
  margin-top: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SkillIcons = styled.div`
  margin: 10px 0;
  & > div {
    margin-right: 6px;
  }
`;

export const profile = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  color: ${theme.$gray400};
  line-height: 1.2;
`;