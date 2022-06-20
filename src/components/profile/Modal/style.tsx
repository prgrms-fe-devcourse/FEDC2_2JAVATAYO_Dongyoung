import styled from "@emotion/styled";

export const BackgroundDim = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContainer = styled.div<{ height: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 461px;
  height: ${({ height }) => height};
  border-radius: 8px;
  padding: 43px 40px 59px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 38px;
  right: 40px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;
