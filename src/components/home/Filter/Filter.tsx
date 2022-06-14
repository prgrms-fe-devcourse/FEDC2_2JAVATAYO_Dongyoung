import React, { useEffect, useState } from "react";
import { postAPI } from "../../../utils/apis";
import * as S from "./style";

const CHANNEL = {
  front: {
    _id: "62a55d95c882bf3a287f9618",
    label: "프론트"
  },
  back: {
    _id: "62a55de1c882bf3a287f961c",
    label: "백엔드"
  },
  ios: {
    _id: "62a55eb0c882bf3a287f9623",
    label: "ios"
  },
  ai: {
    _id: "62a6d99777ad437a6b8f362c",
    label: "AI"
  }
};

interface FilterInterface {
  setPost: (value: object) => void;
}

const Filter: React.FC<FilterInterface> = ({ setPost }) => {
  const channels = Object.entries(CHANNEL);
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
    channelSearch(CHANNEL.front._id);
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
