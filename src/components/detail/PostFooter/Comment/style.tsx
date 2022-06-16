import styled from "@emotion/styled";

export const CommentText = styled.div`
  /* font-size: 1.125rem; */
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: break-all;
  overflow-wrap: break-word;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const CenterAlignItemSpan = styled.span`
  align-items: center;
  display: flex;
  position: relative;
  gap: 10px;
`;

export const CommentHorizontalRule = styled.hr`
  margin: 20px 0 20px 0;
`;

export const DeleteCommetDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  cursor: pointer;
`;
