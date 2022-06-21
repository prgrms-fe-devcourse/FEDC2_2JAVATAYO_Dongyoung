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
  FollowIcon
} from "@components/profile";
import * as S from "./style";
import { CardBox as SCardBox } from "../home/style";
import { authAPI, postAPI, userAPI } from "@utils/apis";
import { IPost, IUser } from "../../types/model";
import axios from "axios";
import { useAuth } from "@contexts/AuthProvider";

const CARD_LIMIT = 6;
const INITIAL_POSTS = {
  posts: [],
  countClickMore: 0,
  total: 0
};

type Posts = {
  posts: IPost[];
  countClickMore: number;
  total: number;
};

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { id: profileUserId } = useParams<Record<string, string>>();
  const { userInfo, onUpdate } = useAuth();

  const [profileUser, setProfileUser] = useState<IUser>();
  const [written, setWritten] = useState<Posts>(INITIAL_POSTS);
  const [liked, setLiked] = useState<Posts>(INITIAL_POSTS);
  const isMine = userInfo.isLoggedIn ? profileUserId === userInfo._id : false;

  const handleCreateFollow = (followData) => {
    setProfileUser({
      ...profileUser,
      followers: [followData, ...profileUser.followers]
    });

    getVisitorUser();
  };

  const handleDeleteFollow = (followData) => {
    const deletedFollowers = [...profileUser.followers].filter(
      (followerData) =>
        JSON.stringify(followerData) !== JSON.stringify(followData)
    );

    setProfileUser({
      ...profileUser,
      followers: deletedFollowers
    });

    getVisitorUser();
  };

  const getVisitorUser = async () => {
    try {
      const response = await authAPI.checkAuthUser();
      onUpdate({ ...response.data });
    } catch (error) {
      console.error(error);
    }
  };

  const getProfileUser = async () => {
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
      const _writtenPosts: IPost[] = [];
      const _likedPosts: IPost[] = [];

      posts.forEach((post: IPost) => {
        const { author, likes } = post;
        const isWrittenPost = author._id === profileUserId;
        const isLikedPost = likes.some((like) => like.user === profileUserId);

        if (isWrittenPost) _writtenPosts.push(post);
        if (isLikedPost) _likedPosts.push(post);
      });

      setWritten({
        ...written,
        posts: _writtenPosts,
        total: _writtenPosts.length
      });
      setLiked({
        ...liked,
        posts: _likedPosts,
        total: _likedPosts.length
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios.all([getProfileUser(), getPosts()]);
  }, []);

  useEffect(() => {
    setWritten(INITIAL_POSTS);
    setLiked(INITIAL_POSTS);
    getPosts();
  }, [userInfo]);

  return (
    <>
      <Header />

      {profileUser === undefined ||
      written.posts === undefined ||
      liked.posts === undefined ? (
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
                updatePosts={getPosts}
              />
            </S.Wrapper>

            <S.FlexContainer direction="column" gap="6px">
              <S.FullName>{profileUser.fullName}</S.FullName>
              <S.Email>{profileUser.email}</S.Email>
            </S.FlexContainer>

            {!isMine && userInfo.isLoggedIn ? (
              <S.Wrapper margin="6px 0 10px">
                <FollowIcon
                  following={userInfo.following}
                  profileUserId={profileUserId}
                  visitorUserId={userInfo.id}
                  handleCreateFollow={handleCreateFollow}
                  handleDeleteFollow={handleDeleteFollow}
                />
              </S.Wrapper>
            ) : null}

            <S.DefinitionList existFollowIcon={!isMine && userInfo.isLoggedIn}>
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
                  {written.posts
                    .slice(0, getEndIndex(written.countClickMore))
                    .map((post, i) => {
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

                <S.Wrapper margin="52px 0 0" center>
                  {getEndIndex(written.countClickMore) < written.total ? (
                    <Button
                      buttonType="red"
                      width="300"
                      onClick={() =>
                        setWritten({
                          ...written,
                          countClickMore: written.countClickMore + 1
                        })
                      }
                    >
                      더보기
                    </Button>
                  ) : null}
                </S.Wrapper>
              </Tab.Item>
              <Tab.Item title="좋아요 한 글">
                <SCardBox>
                  {liked.posts
                    .slice(0, getEndIndex(liked.countClickMore))
                    .map((post, i) => (
                      <Card
                        post={post}
                        key={i}
                        userId={userInfo.isLoggedIn ? userInfo._id : null}
                        clickable={false}
                      />
                    ))}
                </SCardBox>

                <S.Wrapper margin="52px 0 0" center>
                  {getEndIndex(written.countClickMore) < written.total ? (
                    <Button
                      buttonType="red"
                      width="300"
                      onClick={() =>
                        setWritten({
                          ...liked,
                          countClickMore: liked.countClickMore + 1
                        })
                      }
                    >
                      더보기
                    </Button>
                  ) : null}
                </S.Wrapper>
              </Tab.Item>
            </Tab>
          </S.Layout>
        </>
      )}

      <Footer />
    </>
  );
};

const getEndIndex = (countClickMore: number): number =>
  CARD_LIMIT * (countClickMore + 1);

export default Profile;
