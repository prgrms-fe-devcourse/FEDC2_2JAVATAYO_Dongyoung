import { authRequest } from "./common";
import { ICreateNotification } from "../../types/apis";

const notificationAPI = {
  getNotificationList: () => authRequest.get("/notifications"),
  seenNotification: () => authRequest.put("/notifications/seen"),
  createNotification: (payload: ICreateNotification) =>
    authRequest.post("/notifications/create", payload)
};

export default notificationAPI;
