import axios from "axios";
import storage from "../storage";

const { REACT_APP_END_POINT, REACT_APP_PORT } = process.env;

const baseURL = `${REACT_APP_END_POINT}:${REACT_APP_PORT}`;

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
