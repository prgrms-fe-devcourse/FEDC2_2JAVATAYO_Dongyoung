import axios from "axios";
import storage from "../storage";

// CORS 풀리면 baseURL로 변경
const baseURL = "http://kdt.frontend.2nd.programmers.co.kr:5005";

const unauthRequest = axios.create({});
unauthRequest.interceptors.response.use(
  (config) => config,
  (error) => Promise.reject(error.response)
);
const authRequest = axios.create({});
authRequest.interceptors.request.use((config) => {
  config.headers.authorization = "Bearer " + storage.getItem("TOKEN", "");
  return config;
});

export { unauthRequest, authRequest };
