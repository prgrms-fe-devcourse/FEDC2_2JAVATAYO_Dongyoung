import { authRequest } from "./common";

const followAPI = {
  createFollow: (userId: string) =>
    authRequest.post("/follow/create", { userId }),
  deleteFollow: (followId: string) =>
    authRequest.delete("/follow/delete", { data: { id: followId } })
};

export default followAPI;
