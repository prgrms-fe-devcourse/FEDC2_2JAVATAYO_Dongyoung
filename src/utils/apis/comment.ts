import { authRequest } from "./common";
import { ICreateComment } from "../../types/apis";

const commentAPI = {
  createComment: async (payload: ICreateComment) => {
    return authRequest.post("/comments/create", payload);
  },
  deleteComment: async (commentId: string) => {
    return authRequest.delete("/comments/delete", { data: { id: commentId } });
  }
};

export default commentAPI;
