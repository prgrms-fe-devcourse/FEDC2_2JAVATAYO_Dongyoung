import { authRequest } from "./common";
import { IChangInfo } from "../../types/apis";

const settingAPI = {
  changeInfo: (payload: IChangInfo) =>
    authRequest.put("/settings/update-user", payload),
  changePwd: (password: string) =>
    authRequest.put("/settings/update-password", { password })
};

export default settingAPI;
