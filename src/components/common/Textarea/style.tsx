import styled from "@emotion/styled";

export const Textarea = styled.textarea<{
  isIntroduction: boolean;
}>`
  width: 100%;
  max-width: 700px;
  min-width: 340px;

  height: ${({ isIntroduction }) => (isIntroduction ? "400" : "80")}px;

  border-radius: ${({ isIntroduction }) => (isIntroduction ? "0" : "10")}px;

  padding: 10px;
  @media (max-width: 700px) {
    padding: 0 18px;
    box-sizing: border-box;
  }

  overflow: ${({ isIntroduction }) => (isIntroduction ? "none" : "auto")};
  resize: none;
`;
