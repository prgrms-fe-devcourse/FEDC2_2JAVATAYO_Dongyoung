import styled from "@emotion/styled";

export const BottomSheet = styled.div`
  position: fixed;
  background-color: #fff;
  width: 350px;
  transform: translateY(0px);
  transition: transform 0.4s ease-in-out;
  margin-right: 40px;
  .active {
    transform: translateY(0);
  }
`;

export const BottomSheetHeader = styled.div`
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
  align-items: flex-end;
  justify-content: right;
  display: flex;
  border: 1px;
`;

export const Content = styled.a`
  color: #333;
  text-decoration: none;
  height: 50px;
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
