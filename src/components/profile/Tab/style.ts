import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const TabItem = styled.div<{ active: boolean }>`
  width: 150px;
  border-bottom: 2px solid
    ${({ active }) => (active ? theme.$red : theme.$gray200)};
  padding: 4px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
`;

export const TabWrapper = styled.div`
  display: inline-flex;
`;
