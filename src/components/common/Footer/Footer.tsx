import githubIcon from "@assets/icons/icon_github.svg";
import youtubeIcon from "@assets/icons/icon_youtube.svg";
import bannerImg from "@assets/imgs/search_banner.jpg";
import * as S from "./style";

type footerInterface = { banner?: boolean };

const Footer: React.FC<footerInterface> = ({ banner }) => {
  return (
    <div>
      {banner ? (
        <S.Banner>
          <img
            src={bannerImg}
            alt="마음에 드는 사이드 프로젝트가 없나요? 프로젝트 올리기 "
          />
        </S.Banner>
      ) : null}
      <S.Footer>
        <S.Wrap>
          <S.Title>2022 2JAVATAYO</S.Title>
          <S.Content>
            (주) HARDY PLANT / 공동대표 박유현, 정현진, 김남경, 주형진, 마혜경 /
            위치 서울 특별시 서초구 강남대로 337,2층 프로그래머스(서초동,
            대륭서초타워 / 고객센터 010-9858-0000
          </S.Content>
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
    </div>
  );
};

export default Footer;
