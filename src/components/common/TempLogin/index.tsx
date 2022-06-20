import { useAuth } from "@contexts/AuthProvider";
import styled from "@emotion/styled";
import { authAPI } from "@utils/apis";
import React from "react";

const TempLogin = () => {
  const { onLogin, onLogOut, userInfo } = useAuth();

  const logIn = async (num) => {
    const user = [
      {
        fullName: "user1",
        email: "user1@gmail.com",
        password: "1234"
      },
      {
        fullName: "user2",
        email: "user2@gmail.com",
        password: "1234"
      },
      {
        fullName: "knk",
        email: "knk@gmail.com",
        password: "1234"
      },
      {
        fullName: "유현naver",
        email: "puh0128@naver.com",
        password: "1234"
      }
    ];

    const { data } = await authAPI.signIn(user[num]);
    onLogin(data);
  };

  return (
    <>
      {userInfo.isLoggedIn ? (
        <div>
          <button onClick={() => onLogOut()}>로그아웃</button>
        </div>
      ) : (
        <Form>
          <button onClick={() => logIn(0)}>user1</button>
          <button onClick={() => logIn(1)}>user2</button>
          <button onClick={() => logIn(2)}>knk</button>
          <button onClick={() => logIn(3)}>유현</button>
        </Form>
      )}
    </>
  );
};

const Form = styled.div`
  input {
    width: 100px;
  }
`;

export default TempLogin;
