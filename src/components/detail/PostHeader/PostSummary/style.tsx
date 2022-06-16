import styled from "@emotion/styled";

export const PostSummary = styled.table`
  width: 100%;
  border-top: 2px solid #ffd613;
  border-bottom: hidden;
  border-collapse: collapse;
  td {
    border-bottom: 1px solid #d8d9d9;
    padding: 10px;
    text-align: left;
  }
  tr {
    padding: 5px;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  gap: 5px;
`;
