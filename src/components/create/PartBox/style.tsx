import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PartBox = styled.div`
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${theme.$gray100};
  margin-bottom: 20px;
`;
