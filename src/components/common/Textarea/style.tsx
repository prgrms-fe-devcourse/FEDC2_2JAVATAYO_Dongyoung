import styled from "@emotion/styled";

export const Textarea = styled.textarea<{
  textareaType: string
}>`
  width: 100%;
  max-width: 678px;
  min-width: 340px;

  height: ${({textareaType}) => (textareaType === "comment" ? "80" : "400")}px;

  border-radius: ${({textareaType}) => (textareaType === "comment" ? "10" : "0")}px;
  
  padding: 10px;
  @media (max-width: 700px) {
    padding: 0 18px;
    box-sizing: border-box;
  }

  overflow:${({textareaType}) => (textareaType === "comment" ? "scroll" : "none")};
  resize: none;
`;
