import React, { useEffect, useState } from "react";
import CHANNELS from "../../../constants/channel";
import { postAPI } from "../../../utils/apis";
import * as S from "./style";

interface FilterInterface {
  setPost: (value: object) => void;
}

const Filter: React.FC<FilterInterface> = ({ setPost }) => {
  const channels = Object.entries(CHANNELS);
  const [channel, setChannel] = useState<string>("front");

  const channelChange = (e, id: string) => {
    setChannel(e.target.value);
    channelSearch(id);
  };

  const channelSearch = async (id) => {
    try {
      const { data } = await postAPI.getChannelPostList(id);
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    channelSearch(CHANNELS.front._id);
  }, []);

  return (
    <S.RadioBox>
      {channels.map(([name, { _id, label }], i) => {
        return (
          <div key={i}>
            <S.Radio
              type="radio"
              id={name}
              name="channel"
              value={name}
              onChange={() => channelChange(event, _id)}
            />
            {channel === name ? (
              <S.SelectLabel htmlFor={name}>{label}</S.SelectLabel>
            ) : (
              <S.Label htmlFor={name}>{label}</S.Label>
            )}
          </div>
        );
      })}
    </S.RadioBox>
  );
};

export default Filter;
