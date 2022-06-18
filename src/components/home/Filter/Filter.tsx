import React, { useState } from "react";
import CHANNELS from "../../../constants/channel";
import * as S from "./style";

interface FilterInterface {
  channelChange: (_id: string) => void;
  getAllPost: () => void;
}

const Filter: React.FC<FilterInterface> = ({ channelChange, getAllPost }) => {
  const channels = Object.entries(CHANNELS);
  const [channel, setChannel] = useState<string>("front");

  return (
    <S.FilterWrap>
      <S.RadioBox>
        <S.Radio
          type="radio"
          id="all"
          name="channel"
          value="all"
          onChange={(e) => {
            setChannel(e.target.value);
            // channelChange("all");
          }}
        />
        {channel === "all" ? (
          <S.SelectLabel htmlFor="all">전체</S.SelectLabel>
        ) : (
          <S.Label htmlFor="all">전체</S.Label>
        )}
        {channels.map(([name, { _id, label }], i) => {
          return (
            <div key={i}>
              <S.Radio
                type="radio"
                id={name}
                name="channel"
                value={name}
                onChange={(e) => {
                  setChannel(e.target.value);
                  channelChange(_id);
                }}
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
    </S.FilterWrap>
  );
};

export default Filter;
