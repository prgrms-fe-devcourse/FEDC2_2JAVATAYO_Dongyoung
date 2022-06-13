import { authRequest } from "./common";

const followAPI = {
  createFollow: (userId: string) =>
    authRequest.post("/follow/create", { userId }),
  deleteFollow: (userId: string) =>
    authRequest.delete("/follow/delete", { data: { id: userId } })
};

export default followAPI;
