import AppLayout from "@components/common/AppLayout";
import Button from "@components/common/Button";
import Card from "@components/common/Card";
import Filter from "@components/home/Filter";
import React, { useState } from "react";
import * as S from "./style";

const Search: React.FC = () => {
  const [posts, setPosts] = useState([]);

  return (
    <AppLayout>
      <S.Search>
        <S.H2>{posts.length}개의 프로젝트를 찾았습니다. 🚐</S.H2>
        <Filter setPost={setPosts} />
        <S.CardBox>
          {posts.map((post, i) => (
            <Card post={post} key={i} />
          ))}
        </S.CardBox>
        <Button width="300">더보기</Button>
      </S.Search>
    </AppLayout>
  );
};
export default Search;
