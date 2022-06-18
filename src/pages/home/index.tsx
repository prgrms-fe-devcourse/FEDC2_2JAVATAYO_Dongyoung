import React, { useEffect, useState } from "react";
import Card from "../../../src/components/common/Card";
import Button from "../../../src/components/common/Button";
import Footer from "../../../src/components/common/Footer";
import Header from "../../../src/components/common/Header";
import Filter from "../../components/home/Filter";
import * as S from "./style";
import { authAPI } from "@utils/apis";

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

  return (
    <>
      <Header />
      <S.Banner />
      <S.Wrapper>
        <h2>이런 프로젝트가 올라왔어요</h2>
      </S.Wrapper>
      <S.FilterWrapper>
        <Filter setPost={setPosts} />
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
