import React from "react";
import { Label } from "../../common/Label/style";
import Cascader from "../Cascader";
import SelectBox from "../SelectBox";
import skillOptions from "../../../constants/skill";
import * as S from "./style";

const PartBox = () => {
  const channelOption = [
    { id: 1, value: "front", label: "프론트엔드" },
    { id: 2, value: "back", label: "백엔드" },
    { id: 3, value: "ios", label: "ios" },
    { id: 4, value: "android", label: "android" },
    { id: 5, value: "designer", label: "디자인" },
    { id: 6, value: "AI", label: "AI" }
  ];

  const peopleOption = [
    { id: 1, value: "1", lable: "1" },
    { id: 2, value: "2", lable: "2" },
    { id: 3, value: "3", lable: "3" },
    { id: 4, value: "4", lable: "4" },
    { id: 5, value: "5", lable: "5" },
    { id: 6, value: "wantmany", label: "6명이상" },
    { id: 7, value: "notyet", label: "미정" }
  ];

  const [channel, setChannel] = React.useState("front");
  const [people, setPeople] = React.useState("1");
  const [stackOptions, setStackOptions] = React.useState(
    skillOptions[0].options
  );
  const [stacks, setStacks] = React.useState(null);

  React.useEffect(() => {
    console.log("channel", channel);
    console.log("people", people);
    console.log("stacks", stacks);
  }, [channel, people, stacks]);

  const getSkillOptions = (channel) => {
    let idx = skillOptions.findIndex(
      (skillOption) => skillOption.channel === channel
    );
    setStackOptions(skillOptions[idx].options);
  };

  React.useEffect(() => {
    getSkillOptions(channel);
  }, [channel]);

  return (
    <S.PartBox>
      <S.Wrapper>
        <div style={{ flexGrow: 1 }}>
          <SelectBox
            label={"모집분야"}
            defaultValue={"front"}
            canAllowClear={false}
            options={channelOption}
            setSelectedValue={setChannel}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <SelectBox
            label={"모집인원"}
            defaultValue={"1"}
            canAllowClear={false}
            options={peopleOption}
            setSelectedValue={setPeople}
          />
        </div>
      </S.Wrapper>
      <Label>기술 스택</Label>
      <Cascader
        isMultiple={true}
        options={stackOptions}
        setSelectedValues={setStacks}
      />
    </S.PartBox>
  );
};
export default PartBox;
