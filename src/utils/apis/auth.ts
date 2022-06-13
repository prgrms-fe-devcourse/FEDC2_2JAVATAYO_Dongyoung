import { unauthRequest, authRequest } from "./common";
import { ISignIn, ISignUp } from "../../types/apis";
import storage from "../storage";

const authAPI = {
  signIn: (payload: ISignIn) => unauthRequest.post("/login", payload),
  signUp: (payload: ISignUp) => unauthRequest.post("/signup", payload),
  logOut: () => authRequest.post("/logout"),
  checkAuthUser: () => authRequest.get("/auth-user")
};

export default authAPI;
