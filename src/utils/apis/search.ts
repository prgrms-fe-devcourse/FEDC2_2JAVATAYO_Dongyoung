import { unauthRequest } from "./common";

const searchAPI = {
  searchUsers: async (fullName: string) => {
    return unauthRequest.get(`/search/users/${fullName}`);
  },
  searchAll: async (keyword: string) => {
    return unauthRequest.get(`/search/all/${keyword}`);
  }
};

export default searchAPI;
