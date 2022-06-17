import { formatDate } from "@utils/Date";
import React from "react";
import { useNavigate } from "react-router";
import { IPost } from "src/types/model";
import { ProfileImage, SkillIcon } from "..";
// import LikeBtn from "../LikeBtn";
import * as S from "./style";

type CardInterface = { post?: IPost } & { userId?: string };

const Card: React.FC<CardInterface> = ({ post, userId = null }) => {
  const postTitle = post ? JSON.parse(post.title) : dummy;
  const { _id, author, image, likes } = post;
  const { title, parts, expectedDate } = postTitle;
  const navigate = useNavigate();

  const createDate = formatDate(post.createdAt, ".");

  const onClickCard = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <S.Card onClick={() => onClickCard(_id)}>
      <S.FlexBetween>
        <S.Tag color={channelColor[parts.channel].color}>
          {channelColor[parts.channel].title}
        </S.Tag>
        {/* <LikeBtn likes={likes} userId={userId} /> */}
      </S.FlexBetween>
      <S.Title>{title}</S.Title>
      <span>모집인원: {parts.people}</span>
      <S.SkillIcons>
        {parts.skills.map((skill) => (
          <SkillIcon key={skill[0]} name={skill[0]} alt={skill[0]} />
        ))}
      </S.SkillIcons>
      <S.FlexBetween>
        <S.Profile>
          <ProfileImage
            size="sm"
            imgAlt={author.fullName}
            imgSrc={author.image}
          />
          <span>{author.fullName}</span>
        </S.Profile>
        <S.Date>
          <p>프로젝트 기간: {expectedDate}</p>
          <p>{createDate}</p>
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

// 이후제거
const dummy = {
  likes: [],
  comments: [],
  _id: "62a8cfb53229d934e9b64d3d",
  title: {
    title: "✨샘플",
    introduction: "test중 입니다.",
    email: "knk@gmail.com",
    expectedDate: "1개월",
    place: "online",
    startDate: "2022/06/06",
    parts: { channel: "front", people: "5", skills: [["html5"], ["next.js"]] }
  },
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
