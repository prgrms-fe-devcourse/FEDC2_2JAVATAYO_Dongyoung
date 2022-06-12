import { unauthRequest, authRequest } from "./common";

const postAPI = {
  getChannelPostList: async (channelId: string) => {
    return unauthRequest.get(`/posts/channel/${channelId}`);
  },
  getUserPostList: async (authorId: string, payload) => {
    return unauthRequest.get(`/posts/author/${authorId}`, payload);
  },
  createPost: async (formData: FormData) => {
    return authRequest.post("/posts/create", formData);
  },
  getPostDetail: async (postId: string) => {
    return unauthRequest.get(`/posts/${postId}`);
  },
  updatePost: async (formData: FormData) => {
    return authRequest.put("/posts/update", formData);
  },
  deletePost: async (postId: string) => {
    return authRequest.delete("/posts/delete", { data: { id: postId } });
  }
};

export default postAPI;
