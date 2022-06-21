import styled from "@emotion/styled";

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 300px;
  border-bottom: 1px solid #ddd;
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  svg {
    width: 40px;
  }
`;

export const Input = styled.input`
  height: 35px;
  border: none;
  flex-grow: 1;
  padding: 10px 7px;
  background-color: transparent;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #b0b0b0;
  }
`;
