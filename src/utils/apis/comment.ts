import { authRequest } from "./common";
import { ICreateComment } from "../../types/apis";

const commentAPI = {
  createComment: (payload: ICreateComment) =>
    authRequest.post("/comments/create", payload),
  deleteComment: (commentId: string) =>
    authRequest.delete("/comments/delete", { data: { id: commentId } })
};

export default commentAPI;
