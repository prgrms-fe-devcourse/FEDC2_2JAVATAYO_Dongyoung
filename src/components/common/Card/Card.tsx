import React from "react";
import { ProfileImage, SkillIcon } from "..";
import { ReactComponent as HeartIcon } from "../../../assets/icons/icon_heart.svg";
import { ReactComponent as HeartFillIcon } from "../../../assets/icons/icon_heart_fill.svg";
import { IPost } from "../../../types/model";
import * as S from "./style";

type CardInterface = { post?: IPost } & { user?: string };

const Card: React.FC<CardInterface> = ({ post = dummy, user = null }) => {
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
        <S.Tag color={channelColor["front"].color}>
          {channelColor["front"].title}
        </S.Tag>
        <S.Like onClick={onClickLike}>
          {user ? (
            // 이후 ICON 컴포넌트로 변경 예정
            isClickLike ? (
              <HeartFillIcon />
            ) : (
              <HeartIcon />
            )
          ) : (
            <HeartIcon />
          )}
          {post.likes.length}
        </S.Like>
      </S.FlexBetween>
      <S.Title>{post.title}</S.Title>
      <span>모집인원: {1}</span>
      <S.SkillIcons>
        <SkillIcon key={"react"} name={"react"} alt={"react"} />
        {/* {post.skills.map((skill) => (
          <SkillIcon key={skill} name={skill} alt={skill} />
        ))} */}
      </S.SkillIcons>
      <S.FlexBetween>
        <S.profile>
          <ProfileImage size="sm" />
          <span>{post.author.fullName}</span>
        </S.profile>
        <S.Date>
          <p>프로젝트 기간: {"2022.01.01"}</p>
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

const dummy = {
  likes: [],
  comments: [],
  _id: "62a8cfb53229d934e9b64d3d",
  title: "제목이 글어지면 말줄임 으로 나오는지 테스트해볼",
  channel: {
    authRequired: false,
    posts: ["62a8cfb53229d934e9b64d3d", "62a958533229d934e9b6506e"],
    _id: "62a55eb0c882bf3a287f9623",
    name: "ios",
    description: "ios",
    createdAt: "2022-06-12T03:34:08.725Z",
    updatedAt: "2022-06-15T05:07:50.553Z",
    __v: 0
  },
  author: {
    role: "Regular",
    emailVerified: false,
    banned: false,
    isOnline: false,
    posts: [],
    likes: [],
    comments: [],
    followers: [],
    following: [],
    notifications: [],
    messages: [],
    _id: "62a6d6c977ad437a6b8f3614",
    fullName: "knk",
    email: "knk@gmail.com",
    createdAt: "2022-06-13T06:18:49.164Z",
    updatedAt: "2022-06-13T06:34:06.411Z",
    __v: 0
  },
  createdAt: "2022-06-14T18:13:09.711Z",
  updatedAt: "2022-06-14T18:18:27.673Z",
  __v: 0
};

export default Card;
