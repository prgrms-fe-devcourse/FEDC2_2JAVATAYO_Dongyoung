import { authRequest } from "./common";

const likeAPI = {
  createLike: (postId: string) => authRequest.post("/likes/create", { postId }),
  deleteLike: (likeId: string) =>
    authRequest.delete("/likes/delete", { data: { id: likeId } })
};

export default likeAPI;
