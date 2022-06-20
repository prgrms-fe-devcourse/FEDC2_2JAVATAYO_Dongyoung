import React from "react";
import { Label } from "@components/common/Label/style";
import Button from "@components/common/Button";
import SKILL_OPTIONS from "@constants/skill";
import Cascader from "../Cascader";
import SelectBox from "../SelectBox";
import * as S from "./style";

const PartBox = ({
  initialChannel,
  initialPeople,
  initialSkills,
  handleUpdate,
  handleDelete,
  disabled
}) => {
  const channelOption = [
    { id: 1, value: "front", label: "프론트" },
    { id: 2, value: "back", label: "백엔드" },
    { id: 3, value: "ios", label: "ios" },
    { id: 4, value: "android", label: "android" },
    { id: 5, value: "designer", label: "디자인" },
    { id: 6, value: "ai", label: "AI" }
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

  const [channel, setChannel] = React.useState(
    initialChannel ? initialChannel : "front"
  );
  const [people, setPeople] = React.useState(
    initialPeople ? initialPeople : "1"
  );
  const [stackOptions, setStackOptions] = React.useState(
    SKILL_OPTIONS[0].options
  );
  const [skills, setSkills] = React.useState(initialSkills);

  React.useEffect(() => {
    handleUpdate({
      channel,
      people,
      skills
    });
  }, [channel, people, skills]);

  const getSkillOptions = (channel) => {
    let idx = SKILL_OPTIONS.findIndex(
      (skillOption) => skillOption.channel === channel
    );
    setStackOptions(SKILL_OPTIONS[idx].options);
  };

  React.useEffect(() => {
    if (!disabled) setSkills([]);
    getSkillOptions(channel);
  }, [channel]);

  return (
    <S.PartBox>
      <S.Wrapper>
        <div style={{ flexGrow: 1 }}>
          <SelectBox
            label={"모집분야"}
            disabled={disabled}
            defaultValue={channel}
            canAllowClear={false}
            options={channelOption}
            setSelectedValue={setChannel}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
          <SelectBox
            label={"모집인원"}
            defaultValue={people}
            canAllowClear={false}
            options={peopleOption}
            setSelectedValue={setPeople}
          />
        </div>
      </S.Wrapper>
      <Label>기술 스택</Label>
      <Cascader
        defaultValue={skills}
        stacks={skills}
        isMultiple={true}
        options={stackOptions}
        setSelectedValues={setSkills}
      />
      {!disabled && (
        <Button onClick={handleDelete} width="120">
          삭제
        </Button>
      )}
    </S.PartBox>
  );
};
export default PartBox;
