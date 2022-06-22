import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Box = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  padding: 14px 4px 0 4px;
  font-weight: 700;
  color: ${theme.$gray800};
  background-color: #fefefe;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);

  span {
    font-size: 13px;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  position: absolute;
  bottom: 4px;
  right: 4px;
`;

export const ExceptionIcon = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0;
`;
