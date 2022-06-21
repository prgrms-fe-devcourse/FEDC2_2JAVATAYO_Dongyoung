import React, { useRef, useEffect, useState } from "react";
import { userAPI } from "@utils/apis";
import * as S from "./style";
import { ReactComponent as SearchIcon } from "./icon_search.svg";
import { useNavigate } from "react-router";

const UserSearchBar = () => {
  const input = useRef<HTMLInputElement>(null);
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = async () => {
    const users = await userAPI.getUserList({
      offset: 0,
      limit: 5
    });
    console.log(users);
  };
  const search = () => {
    if (input.current.value.length < 2) {
      alert("2자 이상 입력해주세요");
      return;
    }
    getUser();
  };
  const getUser = async () => {
    console.log(input.current.value);
    const { data } = await userAPI.getUser(input.current.value);
  };

  return (
    <S.InputBox>
      <S.Input ref={input} placeholder="검색어를 입력해 주세요" />
      <S.SearchBtn onClick={() => search()}>
        <SearchIcon />
      </S.SearchBtn>
    </S.InputBox>
  );
};

export default UserSearchBar;
