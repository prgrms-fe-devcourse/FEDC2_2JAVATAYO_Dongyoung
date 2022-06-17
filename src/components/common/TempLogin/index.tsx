import styled from "@emotion/styled";
import { authAPI } from "@utils/apis";
import storage from "@utils/storage";
import React, { useEffect, useState } from "react";

const TempLogin = () => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState("");

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
    storage.setItem("TOKEN", data.token);
    setLogin(true);
    setUser(user[num].fullName);
  };

  const logOut = () => {
    authAPI.logOut();
    storage.removeItem("TOKEN");
    setLogin(false);
  };

  useEffect(() => {
    const login = storage.getItem("TOKEN", false);
    setLogin(login ? true : false);
  }, []);

  return (
    <>
      {isLogin ? (
        <div>
          <button onClick={logOut}>로그아웃</button>
          {user}
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
