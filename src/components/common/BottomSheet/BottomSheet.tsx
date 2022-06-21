import * as S from "./style";
import React, { useRef, useEffect, useState } from "react";
import { userAPI } from "@utils/apis";
import UserSearchBar from "../UserSearchBar";
import User from "../User";

const BottomSheet = () => {
  const input = useRef<HTMLInputElement>(null);
  const [userList, setUserList] = useState([]);
  let paramUserId;
  let paramUserFullName;
  let paramUserImage;
  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = async () => {
    const { data } = await userAPI.getUserList({
      offset: 0,
      limit: 999
    });
    setUserList(data);
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
  const showBottomSheet = () => {
    const container = document.querySelector("#bottomSheetContainer");
    const bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );
    container.classList.add("active");
    setTimeout(() => {
      bottomSheet.classList.add("active");
    }, 1);
  };
  const hideBottomSheet = () => {
    const container = document.querySelector("#bottomSheetContainer");
    const bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );
    bottomSheet.classList.remove("active");

    setTimeout(() => {
      container.classList.remove("active");
    }, 400);
  };
  return (
    <div>
      <S.BottomSheetWrapper
        id="bottomSheetContainer"
        onClick={hideBottomSheet}
        /* style={{ height: "200px" }} */
      >
        <S.BottomSheet id="bottomSheet">
          <S.BottomSheetHeader>
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
                ▲
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
              <UserSearchBar onClick={search} />
            </S.Content>
            {userList.map((user) => {
              let prop;
              console.log(user);
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
                />
              );
            })}
          </S.BottomSheetContents>
        </S.BottomSheet>
      </S.BottomSheetWrapper>
    </div>
  );
};

export default BottomSheet;
