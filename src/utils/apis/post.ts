import { unauthRequest, authRequest } from "./common";

const postAPI = {
  getChannelPostList: (channelId: string) =>
    unauthRequest.get(`/posts/channel/${channelId}`),
  getUserPostList: (authorId: string, payload) =>
    unauthRequest.get(`/posts/author/${authorId}`, payload),
  createPost: (formData: FormData) =>
    authRequest.post("/posts/create", formData),
  getPostDetail: (postId: string) => unauthRequest.get(`/posts/${postId}`),
  updatePost: (formData: FormData) =>
    authRequest.put("/posts/update", formData),
  deletePost: (postId: string) =>
    authRequest.delete("/posts/delete", { data: { id: postId } }),
  allPost: () => authRequest.get("/posts")
};

export default postAPI;
