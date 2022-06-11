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
  border-radius:${({ radius }) => radius}px;
  color: ${({ fontColor }) => fontColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`;