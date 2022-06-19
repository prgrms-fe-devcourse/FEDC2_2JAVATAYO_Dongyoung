import { unauthRequest, authRequest } from "./common";
import { IOffsetLimit } from "src/types/apis";

const postAPI = {
  getChannelPostList: (
    channelId: string,
    { offset, limit }: IOffsetLimit = {}
  ) => {
    const hasParams = offset !== undefined && limit !== undefined;
    return hasParams
      ? unauthRequest.get(`/posts/channel/${channelId}`, {
          params: { offset, limit }
        })
      : unauthRequest.get(`/posts/channel/${channelId}`);
  },
  getUserPostList: (authorId: string, { offset, limit }: IOffsetLimit = {}) => {
    const hasParams = offset !== undefined && limit !== undefined;
    return hasParams
      ? unauthRequest.get(`/posts/author/${authorId}`, {
          params: { offset, limit }
        })
      : unauthRequest.get(`/posts/author/${authorId}`);
  },
  createPost: (formData: FormData) =>
    authRequest.post("/posts/create", formData),
  getPostDetail: (postId: string) => unauthRequest.get(`/posts/${postId}`),
  updatePost: (formData: FormData) =>
    authRequest.put("/posts/update", formData),
  deletePost: (postId: string) =>
    authRequest.delete("/posts/delete", { data: { id: postId } }),
  allPost: () => unauthRequest.get("/posts")
};

export default postAPI;
