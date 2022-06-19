import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const FilterWrap = styled.div`
  overflow: hidden;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RadioBox = styled.div`
  display: flex;
  @media (max-width: 700px) {
    padding-left: 30px;
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
  white-space: nowrap;
  display: block;
  margin-right: 8px;
  height: 40px;
  padding: 0 24px;
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
  padding: 0 24px;
  border-radius: 40px;
  background-color: #fff;
  border: 1px solid ${theme.$red};
  color: ${theme.$red};
  font-size: 16px;
  line-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
`;
