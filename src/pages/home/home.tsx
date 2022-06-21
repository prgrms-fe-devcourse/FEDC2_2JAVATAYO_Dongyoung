import React, { useEffect, useState } from "react";
import { Card, Button, Footer, Header } from "@components/common";
import HomeFilter from "@components/home/HomeFilter";
import * as S from "./style";
import { postAPI } from "@utils/apis";
import { useAuth } from "@contexts/AuthProvider";

const POST_LENGTH = 10;
const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(POST_LENGTH);
  const { userInfo } = useAuth();

  const channelChange = (id: string) => {
    channelSearch(id);
    setPage(POST_LENGTH);
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
      <S.Contents>
        <S.Banner />
        <S.Wrapper>
          <h2>이런 프로젝트가 올라왔어요</h2>
        </S.Wrapper>
        <S.FilterWrapper>
          <HomeFilter channelChange={channelChange} getAllPost={getAllPost} />
        </S.FilterWrapper>
        <S.CardWrapper>
          <S.CardBox>
            {posts.map((post, i) => {
              if (i >= page) return null;
              return <Card post={post} key={i} userId={userInfo._id} />;
            })}
          </S.CardBox>
          {posts.length > page ? (
            <Button width="300" onClick={() => setPage(page + POST_LENGTH)}>
              더보기
            </Button>
          ) : null}
        </S.CardWrapper>
      </S.Contents>
      <Footer />
    </>
  );
};

export default Home;
