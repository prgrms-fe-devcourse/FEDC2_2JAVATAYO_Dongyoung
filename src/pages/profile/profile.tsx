import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import Card from "@components/common/Card";
import Button from "@components/common/Button";
import {
  Tab,
  ProfileImageBox,
  CoverImageBox,
  EditFullName,
  EditPassword,
  Modal
} from "@components/profile";
import * as S from "./style";
import { CardBox as SCardBox } from "../home/style";
import { postAPI, userAPI } from "@utils/apis";
import { IPost, IUser } from "src/types/model";
import axios from "axios";
import { useAuth } from "@contexts/AuthProvider";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { id: profileUserId } = useParams<Record<string, string>>();
  const { userInfo } = useAuth();

  const [profileUser, setProfileUser] = useState<IUser>();
  const [writtenPosts, setWrittenPosts] = useState<IPost[]>();
  const [likedPosts, setLikedPosts] = useState<IPost[]>();
  const isMine = userInfo.isLoggedIn ? profileUserId === userInfo._id : false;

  const getUser = async () => {
    try {
      const response = await userAPI.getUser(profileUserId);
      setProfileUser(response.data);
    } catch (error) {
      console.error(error);
      navigate("/404");
    }
  };

  const getPosts = async () => {
    try {
      const { data: posts } = await postAPI.allPost();
      const _writtenPosts = [];
      const _likedPosts = [];

      posts.forEach((post) => {
        const { author, likes } = post;
        const isWrittenPost = author._id === profileUserId;
        const isLikedPost = likes.some((like) => like.user === profileUserId);

        if (isWrittenPost) _writtenPosts.push(post);
        if (isLikedPost) _likedPosts.push(post);
      });

      setWrittenPosts(_writtenPosts);
      setLikedPosts(_likedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios.all([getUser(), getPosts()]);
  }, []);

  const [editFullNameVisible, setEditFullNameVisible] = useState(false);
  const [editPasswordVisible, setEditPasswordVisible] = useState(false);

  return (
    <>
      <Header />

      {profileUser === undefined ||
      likedPosts === undefined ||
      writtenPosts === undefined ? (
        "로딩 중..."
      ) : (
        <>
          <S.Wrapper padding="60px 0 0">
            <CoverImageBox isMine={isMine} imgSrc={profileUser.coverImage} />
          </S.Wrapper>

          <S.Layout>
            <S.Wrapper margin="-32px 0 11px">
              <ProfileImageBox
                isMine={isMine}
                imgSrc={profileUser.image}
                id={{
                  profile: profileUserId,
                  visitor: userInfo.isLoggedIn ? "" : userInfo._id
                }}
                profileFullName={profileUser.fullName}
              />
            </S.Wrapper>

            <S.FlexContainer direction="column" gap="6px">
              <S.FullName>{profileUser.fullName}</S.FullName>
              <S.Email>{profileUser.email}</S.Email>
            </S.FlexContainer>

            <S.DefinitionList>
              <S.DefinitionItem>
                <dt>팔로워</dt>
                <dd>{profileUser.followers.length}</dd>
              </S.DefinitionItem>

              <S.DefinitionItem>
                <dt>팔로잉</dt>
                <dd>{profileUser.following.length}</dd>
              </S.DefinitionItem>

              <S.DefinitionItem>
                <dt>게시글</dt>
                <dd>{profileUser.posts.length}</dd>
              </S.DefinitionItem>
            </S.DefinitionList>

            <Tab style={{ marginBottom: "30px" }}>
              <Tab.Item active title="작성한 글 목록">
                <SCardBox>
                  {writtenPosts.map((post, i) => {
                    return (
                      <Card
                        post={post}
                        key={i}
                        userId={userInfo.isLoggedIn ? userInfo._id : null}
                        clickable={false}
                      />
                    );
                  })}
                </SCardBox>
              </Tab.Item>
              <Tab.Item title="좋아요 한 글">
                <SCardBox>
                  {likedPosts.map((post, i) => (
                    <Card
                      post={post}
                      key={i}
                      userId={userInfo.isLoggedIn ? userInfo._id : null}
                      clickable={false}
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
              visible={editFullNameVisible}
              onClose={() => setEditFullNameVisible(false)}
            >
              <EditFullName />
            </Modal>
            <button onClick={() => setEditFullNameVisible(true)}>
              닉네임 변경 모달 얍
            </button>

            <Modal
              height="384px"
              visible={editPasswordVisible}
              onClose={() => setEditPasswordVisible(false)}
            >
              <EditPassword />
            </Modal>
            <button onClick={() => setEditPasswordVisible(true)}>
              비밀번호 변경 모달 얍
            </button>
          </S.Layout>
        </>
      )}

      <Footer />
    </>
  );
};

export default Profile;
