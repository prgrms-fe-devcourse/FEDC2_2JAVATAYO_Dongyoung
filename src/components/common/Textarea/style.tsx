import styled from "@emotion/styled";

export const Textarea = styled.textarea<{
  isIntroduction: boolean;
}>`
  width: 100%;
  max-width: 700px;
  min-width: 340px;

  height: ${({ isIntroduction }) => (isIntroduction ? "400" : "80")}px;

  border-color: #40a9ff;
  outline-color: #096dd9;
  box-shadow: rgba(24, 144, 255, 0.2);
  border-radius: ${({ isIntroduction }) => (isIntroduction ? "0" : "10")}px;
  padding: 10px;
  line-height: 150%;
  @media (max-width: 700px) {
    padding: 0 18px;
    box-sizing: border-box;
  }

  overflow: ${({ isIntroduction }) => (isIntroduction ? "none" : "auto")};
  resize: none;
`;
