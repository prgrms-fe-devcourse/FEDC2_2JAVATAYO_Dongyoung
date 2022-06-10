import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 90px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding-left: 2px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  height: 40px;
  margin-top: 4px;
  padding: 4px 8px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  &:focus {
    border-color: #f55139;
    outline: none;
  }
  &.small {
    width: 300px;
  }
`;

export const ErrorMessage = styled.div`
  color: #f55139;
  margin-top: 4px;
  padding: 0 8px;
  font-size: 10px;
`;
