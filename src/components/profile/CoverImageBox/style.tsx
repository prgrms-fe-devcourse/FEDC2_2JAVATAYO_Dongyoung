import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const CoverImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Replacement = styled.button`
  width: 56px;
  height: 22px;
  border: 1px solid #e3e3e3;
  padding: 0;
  color: ${theme.$gray600};
  background-color: ${theme.$gray50};
  font-size: 12px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: ${theme.$gray100};
  }
`;
