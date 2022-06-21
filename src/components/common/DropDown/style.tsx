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
  p {
    width: 300px;
    text-align: left;
    transition: all 0.3s;
    font-weight: normal;
    line-height: 1.3;
  }
  .title {
    margin: 5px 0;
  }
  .channel {
    color: ${theme.$red};
  }
  button div {
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.$gray200};
    &:hover p {
      color: ${theme.$gray600};
    }
  }
  button:first-child div {
    padding-top: 10px;
  }
  button:last-child div {
    padding-bottom: 20px;
    border-bottom: none;
  }
  &:last-child {
    border-bottom: none;
  }
`;
