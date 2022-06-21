import React, { useEffect, useState } from "react";
import { Card, Button, Footer, Header } from "@components/common";
import HomeFilter from "@components/home/HomeFilter";
import * as S from "./style";
import { postAPI } from "@utils/apis";
import { useAuth } from "@contexts/AuthProvider";
import Banner from "@components/home/Banner";
import PageLoading from "@components/common/PageLoading";

const POST_LENGTH = 10;
const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(POST_LENGTH);
  const [isPageLoading, setIsPageLoading] = useState(true);
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
    } finally {
      setIsPageLoading(false);
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
        <Banner />
        <S.Wrapper>
          <h2>이런 프로젝트가 올라왔어요</h2>
        </S.Wrapper>
        <S.FilterWrapper>
          <HomeFilter channelChange={channelChange} getAllPost={getAllPost} />
        </S.FilterWrapper>
        <S.CardWrapper>
          <S.CardBox>
            {posts.length === 0 ? (
              <S.NotPost>검색결과가 없습니다 😱</S.NotPost>
            ) : (
              posts.map((post, i) => {
                if (i >= page) return null;
                return <Card post={post} key={i} userId={userInfo._id} />;
              })
            )}
          </S.CardBox>
          {posts.length > page ? (
            <Button width="300" onClick={() => setPage(page + POST_LENGTH)}>
              더보기
            </Button>
          ) : null}
        </S.CardWrapper>
      </S.Contents>
      <PageLoading isLoading={isPageLoading} />
      <Footer banner />
    </>
  );
};

export default Home;
