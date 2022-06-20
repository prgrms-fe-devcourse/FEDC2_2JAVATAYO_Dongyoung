import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const DropDown = styled.div`
  position: relative;
`;
export const DropDownBtn = styled.div`
  display: inline;
`;

export const DropBox = styled.div<{
  showDropDown: boolean;
  top: number;
  left: number;
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  display: inline-flex;
  padding: 5px 0;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 50;
  transition: all 0.3s;
  visibility: ${({ showDropDown }) => (showDropDown ? "visible" : "hidden")};
  opacity: ${({ showDropDown }) => (showDropDown ? 1 : 0)};
  button {
    padding: 10px 15px;
    border: none;
    background-color: #fff;
    transition: all 0.4s;
    font-weight: bold;
    cursor: pointer;
    :hover {
      color: ${theme.$gray600};
    }
  }
`;
