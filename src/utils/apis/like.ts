import { authRequest } from "./common";

const likeAPI = {
  createLike: (postId: string) => authRequest.post("/likes/create", { postId }),
  deleteLike: (postId: string) =>
    authRequest.delete("/likes/delete", { data: { id: postId } })
};

export default likeAPI;
