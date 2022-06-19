import React, { useEffect, useState } from "react";
import { Card, Button, Footer, Header } from "@components/common";
import Filter from "@components/home/Filter";
import * as S from "./style";
import { authAPI, postAPI } from "@utils/apis";

const Home: React.FC = () => {
  // contextAPI로 변경 (로그인확인부분)
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");
  const checkUser = async () => {
    const { data } = await authAPI.checkAuthUser();
    setUserId(data._id);
  };
  useEffect(() => {
    checkUser();
  }, []);
  // contextAPI로 변경 (로그인확인부분)

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
        <Filter channelChange={channelChange} getAllPost={getAllPost} />
      </S.FilterWrapper>
      <S.Wrapper>
        <S.CardBox>
          {posts.map((post, i) => (
            <Card post={post} key={i} userId={userId} />
          ))}
        </S.CardBox>
        <Button width="300">더보기</Button>
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Home;
