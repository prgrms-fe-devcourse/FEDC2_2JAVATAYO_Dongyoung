import { authRequest } from "./common";
import { IChangInfo } from "../../types/apis";

const settingAPI = {
  changeInfo: (payload: IChangInfo) => {
    return authRequest.put("/settings/update-user", payload);
  },
  changePwd: (password: string) => {
    return authRequest.put("/settings/update-password", { password });
  }
};

export default settingAPI;
