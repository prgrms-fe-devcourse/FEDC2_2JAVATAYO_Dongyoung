import React from "react";
import * as S from "./style";

const Banner = () => {
  return (
    <S.Banner>
      <S.Wrap>
        <S.MainText>
          <p>
            <strong>2JAVATAYO</strong>에서
          </p>
          <p>원하는 팀원을 찾아보세요</p>
        </S.MainText>
        <S.SubText>
          <p>개발자 프로젝트 구인 사이트</p>
          <S.Text>&quot;여러분을 프로젝트로 태워(burn) 드립니다.&quot;</S.Text>
        </S.SubText>
      </S.Wrap>
    </S.Banner>
  );
};

export default Banner;
