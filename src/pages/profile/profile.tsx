import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { CoverImage, EditIcon, Tab } from "@components/profile";
import { ProfileImage } from "@components/common";
import * as S from "./style";

const Profile: React.FC = () => {
  const { id } = useParams<Record<string, string>>();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = DUMMY_USER;

  return (
    <>
      <h1>Profile id_: {id}</h1>

      <S.CoverImageWrapper>
        <CoverImage
          imgSrc={user.coverImage}
          imgAlt={`${user.fullName}님의 커버 이미지`}
        />
        {isLoggedIn ? (
          <EditIcon bottom="9px" right="20%" onClick={() => alert("Click!")} />
        ) : null}
      </S.CoverImageWrapper>

      <S.ProfileImageWrapper>
        <ProfileImage imgSrc={user.image} size="lg" />
        {isLoggedIn ? (
          <EditIcon right="-3px" onClick={() => alert("Click!")} />
        ) : null}
      </S.ProfileImageWrapper>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "로그아웃되는 척" : "로그인되는 척"}
      </button>

      <div style={{ display: "inline-flex" }}>
        <Tab>
          <Tab.Item active title="작성한 글 목록" index={0}>
            작성한 글 목록 컨텐츠
          </Tab.Item>
          <Tab.Item title="좋아요 한 글" index={1}>
            좋아요 한 글 목록 컨텐츠
          </Tab.Item>
        </Tab>
      </div>
    </>
  );
};

export default Profile;

const DUMMY_USER = {
  role: "Regular",
  emailVerified: false,
  banned: false,
  isOnline: false,
  posts: [],
  likes: ["62a62a42c882bf3a287f9c99"],
  comments: [],
  followers: [],
  following: [],
  notifications: [],
  messages: [],
  _id: "62a0cf0bc882bf3a287f907c",
  fullName: "유현naver",
  email: "puh0128@naver.com",
  createdAt: "2022-06-08T16:32:11.434Z",
  updatedAt: "2022-06-12T18:29:22.721Z",
  __v: 0,
  username: "유현naver",
  image:
    "https://res.cloudinary.com/learnprogrammers/image/upload/v1655058232/user/6ecb4177-78ea-4362-96a4-e95903a6e84a.png",
  imagePublicId: "user/6ecb4177-78ea-4362-96a4-e95903a6e84a",
  coverImage:
    "https://res.cloudinary.com/learnprogrammers/image/upload/v1655058503/user/99bff83a-15db-4b49-bedc-7ae907aebbbe.jpg",
  coverImagePublicId: "user/99bff83a-15db-4b49-bedc-7ae907aebbbe"
};
