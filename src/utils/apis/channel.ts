import { unauthRequest } from "./common";

const channelAPI = {
  getChannelList: () => unauthRequest.get("/channels"),
  getChannelInfo: (name: string) => unauthRequest.get(`/channels/${name}`)
};

export default channelAPI;
