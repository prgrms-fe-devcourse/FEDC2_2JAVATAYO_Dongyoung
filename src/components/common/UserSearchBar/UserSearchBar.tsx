import React, { useRef, useEffect, useState } from "react";
import { userAPI } from "@utils/apis";
import * as S from "./style";
import { ReactComponent as SearchIcon } from "@assets/icons/icon_search.svg";
import { useNavigate } from "react-router";

interface UserSearchBarInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  setUserList?: React.Dispatch<React.SetStateAction<any[]>>;
}

const UserSearchBar: React.FC<UserSearchBarInterface> = ({
  setUserList,
  onClick
}) => {
  const input = useRef<HTMLInputElement>(null);
  //const [userList, setUserList] = useState({});
  const search = () => {
    console.log(input.current.value);
    if (input.current.value.length < 2) {
      alert("2자 이상 입력해주세요");
      return;
    }
  };

  return (
    <S.InputBox>
      <S.Input ref={input} placeholder="검색어를 입력해 주세요" />
      <S.SearchBtn onClick={search}>
        <SearchIcon />
      </S.SearchBtn>
    </S.InputBox>
  );
};

export default UserSearchBar;
