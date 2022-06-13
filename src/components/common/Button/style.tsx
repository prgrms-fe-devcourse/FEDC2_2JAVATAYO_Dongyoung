import styled from "@emotion/styled";

const handleButtonType = (buttonType) => {
  switch (buttonType) {
    case "red":
      return `
        color: white;
        background-color: #F55139;
        border: none;
        transition:0.3s ease all;

        &:hover {
          opacity: 0.7;
        }
      
        &:active {
          opacity: 0.5;
        }
      `;
    case "blue":
      return `
        color: white;
        background-color: #304E75;
        border: none;
        transition:0.3s ease all;

        &:hover {
          opacity: 0.8;
        }
      
        &:active {
          opacity: 0.6;
        }
      `;
    case "gray": // disabled color
      return `
        color: #808080;
        background-color: #D8D9D9;
        border: none;
      `;
    case "red-line":
      return `
        color: #F55139;
        background-color: white;
        border: 1.5px solid #F55139;
        transition:0.3s ease all;

        &:hover {
          background-color: #F55139;
          border: none;
          color: white;
          opacity: 1;
        }
      
        &:active {
          background-color: pink;
        }
      `;
    case "gray-line":
      return `
        color: black;
        background-color: white;
        border: 1.5px solid #B0B0B0;
        transition:0.3s ease all;

        &:hover {
          background-color: #505050;
          color: white;
          border: none;
          opacity: 1;
        }
      
        &:active {
          background-color: lightgray;
        }
      `;
    default: // default style: red
      return `
        color: white;
        background-color: red;
        border: none;
        transition:0.3s ease all;

        &:hover {
          opacity: 0.7;
        }
      
        &:active {
          opacity: 0.5;
        }
      `;
  }
};

export const Button = styled.button<{
  buttonType: string;
  width: string;
  height: string;
  isRound: boolean;
}>`
  ${({ buttonType }) => handleButtonType(buttonType)};
  width: ${({ width }) =>
    width.includes("%") ? width.replace("%", "") + "%" : width + "px"};
  height: ${({ height }) => height}px;

  border-radius: ${({ isRound, height }) => (isRound ? height : 5)}px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:disabled {
    opacity: 1;
    cursor: default;
  }
`;
