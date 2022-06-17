import styled from "@emotion/styled";
import { authAPI } from "@utils/apis";
import storage from "@utils/storage";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TempLogin = () => {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState();

  const logIn = async (num) => {
    const { data } = await authAPI.signIn({
      email: `user${num}@gmail.com`,
      password: "1234"
    });
    storage.setItem("TOKEN", data.token);
    setLogin(true);
    setUser(num);
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
          <button>
            <Link to={"/profile/62a0cf0bc882bf3a287f907c"}>profile페이지</Link>
          </button>
          <button onClick={logOut}>로그아웃</button>
          user{user}
        </div>
      ) : (
        <Form>
          <button>
            <Link to={"/profile/62a0cf0bc882bf3a287f907c"}>profile페이지</Link>
          </button>
          <button onClick={() => logIn(1)}>user1</button>
          <button onClick={() => logIn(2)}>user2</button>
          <button onClick={() => logIn(3)}>user3</button>
          <button onClick={() => logIn(4)}>user4</button>
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
