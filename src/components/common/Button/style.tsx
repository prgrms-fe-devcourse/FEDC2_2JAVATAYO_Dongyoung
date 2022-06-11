import styled from "@emotion/styled";

export const Button = styled.button<{
  width: number;
  height: number;
  radius: number;
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => radius}px;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({backgroundColor}) => (backgroundColor === "white" ? "2px solid" : "none")};
  border-color: ${({ borderColor }) => borderColor};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active{
    background-color: #222;
  }
`;
