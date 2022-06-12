import { authRequest } from "./common";

const likeAPI = {
  createLike: async (postId: string) => {
    return authRequest.post("/likes/create", { postId });
  },
  deleteLike: async (postId: string) => {
    return authRequest.delete("/likes/delete", { data: { id: postId } });
  }
};

export default likeAPI;
