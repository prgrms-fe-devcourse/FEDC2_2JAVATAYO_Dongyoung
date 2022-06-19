import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import Card from "@components/common/Card";
import Button from "@components/common/Button";
import {
  Tab,
  ProfileImageBox,
  CoverImageBox,
  EditFullName,
  Modal
} from "@components/profile";
import * as S from "./style";
import { CardBox as SCardBox } from "../home/style";

const Profile: React.FC = () => {
  const { id } = useParams<Record<string, string>>();
  const user = DUMMY_USER;

  const [isMine, setIsMine] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header />
      <S.Wrapper padding="60px 0 0">
        <CoverImageBox isMine={isMine} imgSrc={user.coverImage} />
      </S.Wrapper>

      <S.Layout>
        <S.Wrapper margin="-32px 0 11px">
          <ProfileImageBox isMine={isMine} imgSrc={user.image} />
        </S.Wrapper>

        <button onClick={() => setIsMine(!isMine)}>
          {isMine ? "다른 사람인 척" : "내 프로필인 척"}
        </button>

        <S.FlexContainer direction="column" gap="6px">
          <S.FullName>{user.fullName}</S.FullName>
          <S.Email>{user.email}</S.Email>
        </S.FlexContainer>

        <S.DefinitionList>
          <S.DefinitionItem>
            <dt>팔로워</dt>
            <dd>{user.followers.length}</dd>
          </S.DefinitionItem>

          <S.DefinitionItem>
            <dt>팔로워</dt>
            <dd>{user.following.length}</dd>
          </S.DefinitionItem>

          <S.DefinitionItem>
            <dt>게시글</dt>
            <dd>{user.posts.length}</dd>
          </S.DefinitionItem>
        </S.DefinitionList>

        <Tab style={{ marginBottom: "30px" }}>
          <Tab.Item active title="작성한 글 목록">
            <SCardBox>
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  post={{
                    ...DUMMY_POST,
                    title: JSON.stringify(DUMMY_POST.title)
                  }}
                  key={i}
                />
              ))}
            </SCardBox>
          </Tab.Item>
          <Tab.Item title="좋아요 한 글">
            <SCardBox>
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  post={{
                    ...DUMMY_POST,
                    title: JSON.stringify(DUMMY_POST.title)
                  }}
                  key={i}
                />
              ))}
            </SCardBox>
          </Tab.Item>
        </Tab>

        <S.Wrapper margin="52px 0 0">
          <Button
            buttonType="red"
            width="300"
            onClick={() => {
              alert("onClick!");
            }}
          >
            더보기
          </Button>
        </S.Wrapper>

        <Modal
          height="294px"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <EditFullName />
        </Modal>

        <button onClick={() => setVisible(true)}>모달 얍</button>
      </S.Layout>

      <Footer />
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
    "https://res.cloudinary.com/learnprogrammers/image/upload/v1655428928/user/7128b331-10d5-4771-b33f-afa6448b64bd.png",
  imagePublicId: "user/6ecb4177-78ea-4362-96a4-e95903a6e84a",
  coverImage:
    "https://res.cloudinary.com/learnprogrammers/image/upload/v1655058503/user/99bff83a-15db-4b49-bedc-7ae907aebbbe.jpg",
  coverImagePublicId: "user/99bff83a-15db-4b49-bedc-7ae907aebbbe"
};

const DUMMY_POST = {
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
    parts: { channel: "front", people: "5", skills: [["html5"], ["nextJs"]] }
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
