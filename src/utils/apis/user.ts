import { unauthRequest, authRequest } from "./common";

const userAPI = {
  getUserList: async () => {
    return unauthRequest.get("/users/get-users");
  },
  getOnlineUserList: async () => {
    return unauthRequest.get("/users/online-users");
  },
  getUser: async (id: string) => {
    return unauthRequest.get(`/users/${id}`);
  },
  changeProfileImage: async (formData: FormData) => {
    // 이미지 formData만 담아서 인수로 전달
    formData.append("isCover", "false");

    return authRequest.post("/users/upload-photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  changeCoverImage: async (formData: FormData) => {
    formData.append("isCover", "true");

    return authRequest.post("/users/upload-photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};

export default userAPI;
