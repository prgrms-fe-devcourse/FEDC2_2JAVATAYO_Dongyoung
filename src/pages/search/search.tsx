import { PageLoading } from "@components/common";
import AppLayout from "@components/common/AppLayout";
import Button from "@components/common/Button";
import Card from "@components/common/Card";
import SearchFilter from "@components/search/SearchFilter";
import { useAuth } from "@contexts/AuthProvider";
import { searchAPI } from "@utils/apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IPost } from "src/types/model";
import * as S from "./style";

const Search: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filterPost, setFilterPost] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const params = useParams();
  const { userInfo } = useAuth();

  const search = async () => {
    try {
      const { data } = await searchAPI.searchAll(params.keyword);
      searchPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPageLoading(false);
    }
  };

  const searchPosts = (data) => {
    const result = data.filter((post) => {
      const { title } = JSON.parse(post.title);
      return title.toLowerCase().includes(params.keyword);
    });
    setPosts(result);
    setFilterPost(result);
  };

  useEffect(() => {
    search();
  }, [params]);

  const clickMoreBtn = () => {
    setPage(page + 1);
  };

  return (
    <AppLayout banner>
      <S.Search>
        <S.H2>{filterPost.length}개의 프로젝트를 찾았습니다. 🚐</S.H2>
        <SearchFilter posts={posts} setFilterPost={setFilterPost} />
        <S.CardBox>
          {filterPost.map((post, i) => {
            if (i >= page * 10) return;
            return <Card post={post} key={i} userId={userInfo._id} />;
          })}
        </S.CardBox>
        {filterPost.length > page * 10 ? (
          <Button width="300" onClick={clickMoreBtn}>
            더보기
          </Button>
        ) : null}
      </S.Search>
      <PageLoading isLoading={isPageLoading} />
    </AppLayout>
  );
};
export default Search;
