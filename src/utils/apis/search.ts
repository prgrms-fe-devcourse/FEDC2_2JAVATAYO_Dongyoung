import { unauthRequest } from "./common";

const searchAPI = {
  searchUsers: (fullName: string) =>
    unauthRequest.get(`/search/users/${fullName}`),
  searchAll: (keyword: string) => unauthRequest.get(`/search/all/${keyword}`)
};

export default searchAPI;
