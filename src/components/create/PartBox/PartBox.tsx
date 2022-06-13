import React from "react";
import { Label } from "../../common/Label/style";
import Cascader from "../Cascader";
import SelectBox from "../SelectBox";
import * as S from "./style";

const PartBox: React.FC = () => {
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
    { id: 5, value: "wantmany", label: "6명이상" },
    { id: 5, value: "notyet", label: "미정" }
  ];

  const stackOptions = [
    { id: 1, value: "Html5", label: "Html5" },
    { id: 2, value: "TypeScript", label: "TypeScript" },
    { id: 3, value: "React", label: "React" },
    { id: 4, value: "Next.js", label: "Next.js" },
    { id: 5, value: "Vue", label: "Vue" },
    { id: 6, value: "Nuxt.js", label: "Nuxt.js" },
    { id: 7, value: "Svelte", label: "Svelte" },
    { id: 8, value: "Gatsby", label: "Gatsby" },
    { id: 9, value: "Angular", label: "Angular" },
    { id: 10, value: "Sass", label: "Sass" },
    { id: 11, value: "Redux", label: "Redux" },
    { id: 12, value: "Recoil", label: "Recoil" },
    { id: 13, value: "Bootstrap", label: "Bootstrap" },
    { id: 14, value: "Mui", label: "Mui" },
    { id: 15, value: "Tailwind", label: "Tailwind" }
  ];

  const [channel, setChannel] = React.useState("front");
  const [people, setPeople] = React.useState("1");
  const [selectedStacks, setSelectedStacks] = React.useState(null);

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
      <Cascader
        isMultiple={true}
        options={stackOptions}
        setSelectedValues={setSelectedStacks}
      />
    </S.PartBox>
  );
};
export default PartBox;
