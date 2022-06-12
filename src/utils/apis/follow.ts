import { authRequest } from "./common";

const followAPI = {
  createFollow: async (userId: string) => {
    return authRequest.post("/follow/create", { userId });
  },
  deleteFollow: async (userId: string) => {
    return authRequest.delete("/follow/delete", { data: { id: userId } });
  }
};

export default followAPI;
