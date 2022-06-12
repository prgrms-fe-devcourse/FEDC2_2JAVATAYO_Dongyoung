import styled from "@emotion/styled";

const handleButtonType = buttonType => {
  switch(buttonType){
    case "red":
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
    case "blue":
      return `
        color: white;
        background-color: #243A73;
        border: none;

        &:hover {
          opacity: 0.8;
        }
      
        &:active {
          opacity: 0.6;
        }
      `;
    case "gray":
      return `
        color: black;
        background-color: lightgray;
        border: none;

        &:hover {
          opacity: 0.8;
        }
      
        &:active {
          opacity: 0.6;
        }
      `;
    case "red-line":
      return `
        color: red;
        background-color: white;
        border: 1.5px solid red;
        transition:0.3s ease all;

        &:hover {
          background-color: #f44336;
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
        border: 1.5px solid gray;
        transition:0.3s ease all;

        &:hover {
          background-color: gray;
          color: white;
          border: none;
          opacity: 1;
        }
      
        &:active {
          background-color: lightgray;
        }
      `;
    default:  // default style: red
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
}

export const Button = styled.button<{
  buttonType: string;
  width: string;
  height: string;
  isRound: boolean;
}>`
  width: ${({ width }) => width.includes("%") ? width.replace("%", "") + "%" : width + "px"};
  height: ${({ height }) => height}px;
  ${({buttonType}) => handleButtonType(buttonType)};
  border-radius: ${({ isRound, height }) => (isRound ? height : 5)}px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;