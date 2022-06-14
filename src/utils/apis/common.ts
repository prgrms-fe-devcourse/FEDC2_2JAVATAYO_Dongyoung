import axios from "axios";
import storage from "../storage";

const baseURL = `${process.env.REACT_APP_END_POINT}:${process.env.REACT_APP_PORT}`;

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
