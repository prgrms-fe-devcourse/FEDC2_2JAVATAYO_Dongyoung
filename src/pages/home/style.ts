import styled from "@emotion/styled";

export const Contents = styled.div`
  min-height: calc(100vh - 198px);
`;

export const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
  @media (max-width: 700px) {
    padding: 0 30px;
    box-sizing: border-box;
  }
  h2 {
    margin: 70px 0 42px;
    font-size: 32px;
    font-weight: bold;
    @media (max-width: 700px) {
      font-size: 28px;
    }
  }
`;
export const CardWrapper = styled.div`
  max-width: 700px;
  margin: auto;
  margin-bottom: 200px;
  @media (max-width: 700px) {
    padding: 0 30px;
    box-sizing: border-box;
  }
  button {
    display: block;
    margin: 50px auto 0;
  }
`;

export const FilterWrapper = styled.div`
  width: 700px;
  margin: 0 auto 40px;
  @media (max-width: 700px) {
    overflow: hidden;
    width: 100vw;
  }
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Card = styled.div`
  width: calc(700px / 2 - 15px / 2);
  height: 300px;
  background-color: gray;
  margin-top: 15px;
`;
export const NotPost = styled.p`
  font-size: 18px;
`;
