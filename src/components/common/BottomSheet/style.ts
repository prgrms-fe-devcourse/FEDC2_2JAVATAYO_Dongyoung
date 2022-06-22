import styled from "@emotion/styled";

export const BottomSheet = styled.div`
  position: fixed;
  background-color: #fff;
  border-radius: 15px 15px 0px 0px;
  width: 350px;
  height: 500px;
  overflow: auto;
  transform: translateY(420px);
  transition: transform 0.4s ease-in-out;
  box-shadow: 1px 10px 10px 1px;
  margin-right: 40px;
  .active {
    transform: translateY(0);
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomSheetHeader = styled.div`
  cursor: pointer;
  height: 80px;
  background-color: #f55139;
  font-size: 20px;
  color: white;
  border-radius: 15px 15px 0px 0px;
`;

export const BottomSheetContents = styled.div`
  color: red;
`;

export const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease-in-out;
  align-items: flex-end;
  justify-content: right;
  display: flex;
  border: 1px;
`;

export const Content = styled.div`
  color: #333;
  text-decoration: none;
  height: 70px;
  display: block;
  border-bottom: 1px solid #ccc;
  padding-left: 20px;
  display: flex;
  align-items: center;
  background-color: white;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

export const UserNotFind = styled.div`
  font-size: 18px;
  text-decoration: none;
  height: 70px;
  display: block;
  padding-left: 20px;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  width: 310px;
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
