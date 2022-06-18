import React, { useState } from "react";
import CHANNELS from "../../../constants/channel";
import * as S from "./style";

interface FilterInterface {
  channelChange: (_id: string) => void;
}

const Filter: React.FC<FilterInterface> = ({ channelChange }) => {
  const channels = Object.entries(CHANNELS);
  const [channel, setChannel] = useState<string>("front");

  return (
    <S.FilterWrap>
      <S.RadioBox>
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
