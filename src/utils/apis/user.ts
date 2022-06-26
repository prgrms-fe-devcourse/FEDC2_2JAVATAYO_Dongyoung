import { unauthRequest, authRequest } from "./common";
import { IOffsetLimit } from "../../types/apis";

const userAPI = {
  getUserList: ({ offset, limit }: IOffsetLimit = {}) => {
    const hasParams = offset !== undefined && limit !== undefined;
    return hasParams
      ? unauthRequest.get("/users/get-users", { params: { offset, limit } })
      : unauthRequest.get("/users/get-users");
  },
  getOnlineUserList: () => unauthRequest.get("/users/online-users"),
  getUser: (id: string) => unauthRequest.get(`/users/${id}`),
  changeProfileImage: (formData: FormData) => {
    // 이미지 formData만 담아서 인수로 전달
    formData.append("isCover", "false");

    return authRequest.post("/users/upload-photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  changeCoverImage: (formData: FormData) => {
    formData.append("isCover", "true");

    return authRequest.post("/users/upload-photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }
};

export default userAPI;
