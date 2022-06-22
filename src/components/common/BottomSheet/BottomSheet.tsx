import * as S from "./style";
import React, { useRef, useEffect, useState } from "react";
import { userAPI, searchAPI } from "@utils/apis";
import { useAuth } from "@contexts/AuthProvider";
import { ReactComponent as SearchIcon } from "@assets/icons/icon_search.svg";
import User from "../User";

const BottomSheet = () => {
  const input = useRef<HTMLInputElement>(null);
  const [userList, setUserList] = useState([]);
  const [saveUserList, setSaveUserList] = useState([]);
  const [isFindUser, setIsFindUser] = useState(true);
  const [isHideSheet, setIsHideSheet] = useState(true);
  const { userInfo } = useAuth();
  useEffect(() => {
    getUserList();
  }, [userInfo._id]);
  const inputOnEnterPress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  const search = async () => {
    if (input.current.value.length !== 0) {
      getUser();
    } else {
      getUserList();
    }
  };
  const getUserList = async () => {
    try {
      const { data } = await userAPI.getUserList({});
      data.sort((firstUser, secondUser) => {
        if (firstUser.isOnline > secondUser.isOnline) {
          return -1;
        }
        if (firstUser.isOnline < secondUser.isOnline) {
          return 1;
        }
        return 0;
      });
      const filterCurrentUser = (user) => user._id !== userInfo._id;
      setUserList(userInfo.isLoggedIn ? data.filter(filterCurrentUser) : data);
      setSaveUserList(
        userInfo.isLoggedIn ? data.filter(filterCurrentUser) : data
      );
      setIsFindUser(true);
    } catch (e) {
      console.error(e);
    }
  };
  const getUser = async () => {
    try {
      const { data } = await searchAPI.searchUsers(
        input.current.value.replaceAll(" ", "")
      );
      const filterCurrentUser = (user) => user._id !== userInfo._id;
      if (
        data.length > 1 ||
        (userInfo.isLoggedIn === false && data.length === 0)
      ) {
        setIsFindUser(true);
        setUserList(
          userInfo.isLoggedIn ? data.filter(filterCurrentUser) : data
        );
      } else {
        setIsFindUser(false);
        setUserList([]);
      }
    } catch (e) {
      console.error(e);
    }
  };
  const onClickBottomSheet = () => {
    const container = document.getElementById("bottomSheetContainer");
    if (isHideSheet) {
      container.style.transform = "translateY(-420px)";
      setIsHideSheet(false);
    } else {
      container.style.transform = "translateY(0px)";
      setIsHideSheet(true);
    }
  };
  return (
    <div>
      <S.BottomSheetWrapper id="bottomSheetContainer">
        <S.BottomSheet id="bottomSheet" isHideSheet={isHideSheet}>
          <S.BottomSheetHeader onClick={onClickBottomSheet}>
            <div
              style={{
                color: "white",
                fontSize: "20px",
                padding: "20px 20px 10px 30px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "20px"
                }}
              >
                같이 봉고차탈 친구 찾기!🚐
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "20px"
                }}
              >
                {isHideSheet ? "▲" : "▼"}
              </span>
            </div>
            <div
              style={{
                color: "white",
                fontSize: "16px",
                padding: "0px 0px 10px 30px"
              }}
            >
              친구 검색으로 프로젝트 팀원을 찾아봐요~
            </div>
          </S.BottomSheetHeader>
          <S.BottomSheetContents>
            <S.Content>
              <S.InputBox>
                <S.Input
                  ref={input}
                  onKeyUp={inputOnEnterPress}
                  placeholder="검색어를 입력해 주세요"
                />
                <S.SearchBtn onClick={() => search()}>
                  <SearchIcon />
                </S.SearchBtn>
              </S.InputBox>
            </S.Content>
            {isFindUser ? (
              userList.map((user) => {
                let prop;
                let paramUserId;
                let paramUserFullName;
                let paramUserImage;
                let paramIsOnline;
                for (prop in user) {
                  if (Object.prototype.hasOwnProperty.call(user, prop)) {
                    switch (prop) {
                      case "_id":
                        paramUserId = user[prop];
                        break;
                      case "fullName":
                        paramUserFullName = user[prop];
                        break;
                      case "image":
                        paramUserImage = user[prop];
                        break;
                      case "isOnline":
                        paramIsOnline = user[prop];
                        break;
                      default:
                        break;
                    }
                  }
                }
                return (
                  <User
                    key={paramUserId}
                    userId={paramUserId}
                    userFullName={paramUserFullName}
                    userImage={paramUserImage}
                    isOnline={paramIsOnline}
                  />
                );
              })
            ) : (
              <S.UserNotFind>일치하는 사용자가 없습니다.😥</S.UserNotFind>
            )}
          </S.BottomSheetContents>
        </S.BottomSheet>
      </S.BottomSheetWrapper>
    </div>
  );
};

export default BottomSheet;
