import { unauthRequest } from "./common";

const channelAPI = {
  getChannelList: async () => {
    return unauthRequest.get("/channels");
  },
  getChannelInfo: async (name: string) => {
    return unauthRequest.get(`/channels/${name}`);
  }
};

export default channelAPI;
