import storage from "../utils/storage";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI, settingAPI } from "../utils/apis";

// 핸들러
const useHandlers = () => {
  // const navigate = useNavigate();
  const localToken = storage.getItem("TOKEN", "");
  const handleInit = async () => {
    const data = await authAPI.checkAuthUser().then((res) => {
      return res.data;
    });
    if (!data._id) {
      storage.setItem("TOKEN", "");
      storage.removeItem("TOKEN");
    }
    //navigate("/");
    return data;
  };

  const handleSignIn = async (signInData) => {
    await authAPI
      .signIn({ email: signInData.email, password: signInData.password })
      .then((res) => {
        storage.removeItem("TOKEN");
        const { user, token } = res.data;
        if (token) {
          storage.setItem("_ID", user._id);
          storage.setItem("TOKEN", token);
          //navigate("/");
        } else {
          //navigate("/signIn");
          alert("로그인 실패");
        }
        //console.log({ user: user, token: token });
        return { user: user, token: token };
      });
  };

  const handleSignUp = async (signUpData) => {
    storage.removeItem("TOKEN");
    await authAPI.signUp(signUpData).then((res) => {
      const { user, token } = res.data;
      if (token) {
        storage.setItem("_ID", user._id);
        storage.setItem("TOKEN", token);
      } else {
        //navigate("/signIn");
        alert("가입 실패");
      }
      console.log(user, token);
      return user;
    });
  };

  const handleLogOut = () => {
    storage.removeItem("TOKEN");
    storage.removeItem("_ID");
    //navigate("/signIn");
  };

  const handleUpdateUser = async (updateUserData) => {
    await settingAPI.changeInfo(updateUserData);
  };

  const handleUpdatePassword = useCallback(
    async (updatePwdData) => {
      await settingAPI.changePwd(updatePwdData);
    },
    [localToken]
  );

  return {
    handleInit,
    handleSignIn,
    handleSignUp,
    handleLogOut,
    handleUpdatePassword,
    handleUpdateUser
  };
};

export default useHandlers;
