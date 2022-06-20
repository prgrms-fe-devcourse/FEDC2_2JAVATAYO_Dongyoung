import styled from "@emotion/styled";

export const BottomSheet = styled.div`
  position: fixed;
  background-color: #fff;
  width: 600px;
  transform: translateY(100px);
  transition: transform 0.4s ease-in-out;

  .active {
    transform: translateY(0);
  }
`;

export const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 198px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: flex-end;
  justify-content: right;
  display: flex;
`;

export const elementA = styled.a`
  color: #333;
  text-decoration: none;
  height: 40px;
  display: block;
  border-bottom: 1px solid #ccc;
  padding-left: 20px;
  display: flex;
  align-items: center;
  background-color: pink;
  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;
