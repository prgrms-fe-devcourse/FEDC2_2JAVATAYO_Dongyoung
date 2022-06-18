import styled from "@emotion/styled";

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

  button {
    margin: 50px auto 200px;
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

export const Banner = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 350px;
  background-color: #fff8b8; //임시 이후 img로 변경
  box-sizing: content-box;
  @media (max-width: 700px) {
    height: 300px;
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
