import React, { useEffect, useState } from "react";
import { Card, Button, Footer, Header } from "@components/common";
import HomeFilter from "@components/home/HomeFilter";
import * as S from "./style";
import { postAPI } from "@utils/apis";
import { useAuth } from "@contexts/AuthProvider";

const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useAuth();

  const channelChange = (id: string) => {
    channelSearch(id);
  };

  const getAllPost = async () => {
    try {
      const { data } = await postAPI.allPost();
      setPosts(data);
    } catch (e) {
      console.error(e);
    }
  };

  const channelSearch = async (id) => {
    try {
      const { data } = await postAPI.getChannelPostList(id);
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <>
      <Header />
      <S.Banner />
      <S.Wrapper>
        <h2>이런 프로젝트가 올라왔어요</h2>
      </S.Wrapper>
      <S.FilterWrapper>
        <HomeFilter channelChange={channelChange} getAllPost={getAllPost} />
      </S.FilterWrapper>
      <S.Wrapper>
        <S.CardBox>
          {posts.map((post, i) => (
            <Card post={post} key={i} userId={userInfo._id} />
          ))}
        </S.CardBox>
        <Button width="300">더보기</Button>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Home;
