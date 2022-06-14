import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const RadioBox = styled.div`
  display: flex;
  div {
  }
`;

export const Radio = styled.input`
  position: absolute;
  margin: -1px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
`;

export const SelectLabel = styled.label`
  display: block;
  margin-right: 8px;
  height: 40px;
  padding: 0 30px;
  border-radius: 40px;
  border: 1px solid ${theme.$red};
  background-color: ${theme.$red};
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Label = styled.label`
  white-space: nowrap;
  display: block;
  margin-right: 8px;
  height: 40px;
  padding: 0 30px;
  border-radius: 40px;
  background-color: #fff;
  border: 1px solid ${theme.$red};
  color: ${theme.$red};
  font-size: 16px;
  line-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
`;
