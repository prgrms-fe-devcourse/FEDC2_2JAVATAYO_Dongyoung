import { authRequest } from "./common";
import { ICreateNotification } from "../../types/apis";

const notificationAPI = {
  getNotificationList: async () => {
    return authRequest.get("/notifications");
  },
  seenNotification: async () => {
    return authRequest.get("/notifications/seen");
  },
  createNotification: async (payload: ICreateNotification) => {
    return authRequest.post("/notifications/create", payload);
  }
};

export default notificationAPI;
