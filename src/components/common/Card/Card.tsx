import { ProfileImage, SkillIcon } from "..";
import heartIcon from "../../../assets/icons/icon_heart.svg";
import heartFillIcon from "../../../assets/icons/icon_heart_fill.svg";
import * as S from "./style";

type like = { user: string };
interface CardInterface {
  post: {
    channel: string;
    skills: string[];
    likes: like[];
    title: string;
    people: number;
    author: string;
    expectedDate: string;
    createdAt: string;
  };
  user?: string;
}

// post에서 카드 내용을 가져옴니다. (필수)
// user는 로그인한 유저이름입니다. 좋아요를 이전에 클릭했는지 여부를 파악하기 위해서 받아오기로했습니다.
// user는 회원가입하지 않은 유저가 있어서 필수요소로 하지 않았습니다.
const Card: React.FC<CardInterface> = ({ post, user = null }) => {
  const isClickLike = post.likes.some((item) => item.user === user);

  const onClickCard = () => {
    alert("Card");
    // 관련 상세페이지로 이동
  };

  const onClickLike = (e) => {
    e.stopPropagation();
    alert("❤");
    // Like클릭
  };

  return (
    <S.Card onClick={onClickCard}>
      <S.FlexBetween>
        <S.Tag color={channelColor[post.channel].color}>
          {channelColor[post.channel].title}
        </S.Tag>
        <S.Like>
          {user ? (
            // 이후 ICON 컴포넌트로 변경 예정
            <img
              onClick={onClickLike}
              src={isClickLike ? heartFillIcon : heartIcon}
              alt="좋아요 버튼"
            />
          ) : (
            <img src={heartIcon} alt="좋아요 버튼" />
          )}
          {post.likes.length}
        </S.Like>
      </S.FlexBetween>
      <S.Title>{post.title}</S.Title>
      <span>모집인원: {post.people}</span>
      <S.SkillIcons>
        {post.skills.map((skill) => (
          <SkillIcon key={skill} name={skill} alt={skill} />
        ))}
      </S.SkillIcons>
      <S.FlexBetween>
        <S.profile>
          <ProfileImage size="sm" />
          <span>{post.author}</span>
        </S.profile>
        <S.Date>
          <p>프로젝트 기간: {post.expectedDate}</p>
          <p>{post.createdAt}</p>
        </S.Date>
      </S.FlexBetween>
    </S.Card>
  );
};

const channelColor = {
  front: {
    title: "프론트",
    color: "#FFED95"
  },
  back: {
    title: "백엔드",
    color: "#ADD8FF"
  },
  ios: {
    title: "IOS",
    color: "#FFB0B0"
  },
  android: {
    title: "안드로이드",
    color: "#8EF3BC"
  },
  ai: {
    title: "AI",
    color: "#EBBFFF"
  },
  designer: {
    title: "디자인",
    color: "#FFC997"
  },
  guitar: {
    title: "기타",
    color: "#ACFFFA"
  }
};

export default Card;
