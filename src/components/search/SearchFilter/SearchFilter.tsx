import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IPost } from "src/types/model";
import CHANNELS from "../../../constants/channel";
import * as S from "./style";

interface FilterInterface {
  posts: IPost[];
  setFilterPost: Dispatch<SetStateAction<object>>;
}

const Filter: React.FC<FilterInterface> = ({ posts, setFilterPost }) => {
  const channels = Object.entries(CHANNELS);
  const [channel, setChannel] = useState<string>("all");

  const filter = (id) => {
    if (id === "all") return;
    const filteredPosts = posts.filter((post) => post.channel === id);
    setFilterPost(filteredPosts);
  };

  useEffect(() => {
    filter(channel);
  }, [channel]);

  return (
    <S.FilterWrap>
      <S.RadioBox>
        <S.Radio
          type="radio"
          id="all"
          name="channel"
          value="all"
          onChange={() => {
            setChannel("all");
            setFilterPost(posts);
          }}
        />
        {channel === "all" ? (
          <S.SelectLabel htmlFor="all">전체</S.SelectLabel>
        ) : (
          <S.Label htmlFor="all">전체</S.Label>
        )}
        {channels.map(([name, { _id, label }], i) => (
          <div key={i}>
            <S.Radio
              type="radio"
              id={name}
              name="channel"
              value={name}
              onChange={() => {
                setChannel(_id);
              }}
            />
            {channel === _id ? (
              <S.SelectLabel htmlFor={name}>{label}</S.SelectLabel>
            ) : (
              <S.Label htmlFor={name}>{label}</S.Label>
            )}
          </div>
        ))}
      </S.RadioBox>
    </S.FilterWrap>
  );
};

export default Filter;
