import Icon from "../Icon";
import githubIcon from "../../../assets/icons/icon_github.svg";
import youtubeIcon from "../../../assets/icons/icon_youtube.svg";
import * as S from "./style";

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrap>
        <S.Title>2022 2JAVATAYO</S.Title>
        <p>
          (주) HARDY PLANT / 공동대표 박유현, 정현진, 김남경, 주형진, 마혜경 /
          위치 서울 특별시 서초구 강남대로 337,2층 프로그래머스(서초동,
          대륭서초타워 / 고객센터 010-9858-0000
        </p>
        <p>
          <S.PrivacyPolicy>개인정보 처리방침</S.PrivacyPolicy>
          <a>이용약관</a>
        </p>
        <div>
          <S.SocialLink>
            <img src={githubIcon} alt="github 링크" />
            <img src={youtubeIcon} alt="youTube 발표 영상" />
          </S.SocialLink>
        </div>
      </S.Wrap>
    </S.Footer>
  );
};

export default Footer;
