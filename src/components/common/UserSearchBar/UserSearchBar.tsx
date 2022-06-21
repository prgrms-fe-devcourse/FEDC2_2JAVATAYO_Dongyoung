import React, { useRef, useEffect, useState } from "react";
import { userAPI } from "@utils/apis";
import * as S from "./style";
import { ReactComponent as SearchIcon } from "./icon_search.svg";
import { useNavigate } from "react-router";

interface UserSearchBarInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const UserSearchBar: React.FC<UserSearchBarInterface> = ({ onClick }) => {
  const input = useRef<HTMLInputElement>(null);
  const [userList, setUserList] = useState({});
  const navigate = useNavigate();

  return (
    <S.InputBox>
      <S.Input ref={input} placeholder="검색어를 입력해 주세요" />
      <S.SearchBtn onClick={onClick}>
        <SearchIcon />
      </S.SearchBtn>
    </S.InputBox>
  );
};

export default UserSearchBar;
