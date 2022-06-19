import React, { useRef, useState } from "react";
import * as S from "./style";
import { ReactComponent as SearchIcon } from "./icon_search.svg";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = () => {
    if (input.current.value === "") return;
    navigate(`/search/${input.current.value}`);
  };

  return (
    <S.InputBox>
      <S.Input
        ref={input}
        onKeyDown={onKeyPress}
        placeholder="검색어를 입력해 주세요"
      />
      <S.SearchBtn onClick={() => search()}>
        <SearchIcon />
      </S.SearchBtn>
    </S.InputBox>
  );
};

export default SearchBar;
