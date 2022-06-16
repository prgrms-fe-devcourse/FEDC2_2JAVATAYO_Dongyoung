import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const EditWrapper = styled.div<{ bottom: string; right: string }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${theme.$gray400};
  cursor: pointer;
`;
