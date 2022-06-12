import { unauthRequest, authRequest } from "./common";
import { ISignIn, ISignUp } from "../../types/apis";
import storage from "../storage";

const authAPI = {
  signIn: (payload: ISignIn) => {
    let token = null;
    const result = unauthRequest
      .post("/login", payload)
      .then((res) => {
        if (res.status === 200) {
          token = res.data.token;
        }
        return res;
      })
      .catch((error) => error);

    storage.setItem("TOKEN", token);
    return result;
  },
  signUp: (payload: ISignUp) => {
    return unauthRequest.post("/signup", payload);
  },
  logOut: () => {
    return authRequest.post("/logout");
  },
  checkAuthUser: () => {
    return authRequest.get("/auth-user");
  }
};

export default authAPI;
