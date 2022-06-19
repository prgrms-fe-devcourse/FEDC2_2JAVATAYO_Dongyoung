import AppLayout from "@components/common/AppLayout";
import Button from "@components/common/Button";
import Card from "@components/common/Card";
import SearchFilter from "@components/search/SearchFilter";
import { authAPI, searchAPI } from "@utils/apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IPost } from "src/types/model";
import * as S from "./style";

const Search: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filterPost, setFilterPost] = useState<IPost[]>([]);
  const params = useParams();

  // contextAPI로 변경 (로그인확인부분)
  const [userId, setUserId] = useState("");
  const checkUser = async () => {
    const { data } = await authAPI.checkAuthUser();
    setUserId(data._id);
  };
  useEffect(() => {
    checkUser();
  }, []);
  // contextAPI로 변경 (로그인확인부분)

  const search = async () => {
    try {
      const { data } = await searchAPI.searchAll(params.keyword);
      searchPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchPosts = (data) => {
    const result = data.filter((post) => {
      const { title } = JSON.parse(post.title);
      return title.toLowerCase().includes("백엔드");
    });
    setPosts(result);
    setFilterPost(result);
  };

  useEffect(() => {
    search();
  }, [params]);

  return (
    <AppLayout banner>
      <S.Search>
        <S.H2>{filterPost.length}개의 프로젝트를 찾았습니다. 🚐</S.H2>
        <SearchFilter posts={posts} setFilterPost={setFilterPost} />
        <S.CardBox>
          {filterPost.map((post, i) => (
            <Card post={post} key={i} userId={userId} />
          ))}
        </S.CardBox>
        <Button width="300">더보기</Button>
      </S.Search>
    </AppLayout>
  );
};
export default Search;
