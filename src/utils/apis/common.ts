import axios from "axios";
import storage from "../storage";

const baseURL = "http://kdt.frontend.2nd.programmers.co.kr:5005";

const unauthRequest = axios.create({
  baseURL
});

const authRequest = axios.create({
  baseURL
});
authRequest.interceptors.request.use((config) => {
  config.headers.authorization = "Bearer " + storage.getItem("TOKEN", "");
  return config;
});

export { unauthRequest, authRequest };
