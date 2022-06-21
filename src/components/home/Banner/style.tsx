import styled from "@emotion/styled";
import BannerImg from "@assets/imgs/main_banner.png";

export const Banner = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 350px;
  background-color: #fff4c2;
  box-sizing: content-box;
  @media (max-width: 700px) {
    height: 300px;
  }
`;

export const Wrap = styled.div`
  max-width: 900px;
  height: 350px;
  padding: 0 20px;
  margin: auto;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-position: 90%;
  /* background-size: 300px; */
  @media (max-width: 700px) {
    background-position: 90%;
    background-size: 300px;
    height: 300px;
  }
  @media (max-width: 600px) {
    background-image: none;
  }
`;

export const MainText = styled.div`
  padding-top: 60px;
  p {
    font-size: 40px;
    line-height: 1.3;
  }
  strong {
    font-weight: bold;
    font-size: 40px;
  }
  @media (max-width: 700px) {
    padding-top: 50px;
    p {
      font-size: 30px;
    }
  }
`;

export const SubText = styled.div`
  margin-top: 10px;
  p {
    line-height: 1.5;
    font-size: 18px;
  }
  @media (max-width: 700px) {
    p {
      font-size: 14px;
    }
  }
`;

export const Text = styled.p`
  margin-left: 50px;
`;
