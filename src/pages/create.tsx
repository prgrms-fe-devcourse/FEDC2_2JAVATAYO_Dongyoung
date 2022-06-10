import { useEffect, useState } from "react";
import Cascader from "../components/create/Cascader";
import Select from "../components/create/Select";

const Create: React.FC = () => {
  const options = [
    { id: 1, value: "online", label: "온라인" },
    { id: 2, value: "offline", label: "오프라인" },
    { id: 3, value: "both", label: "온오프라인 병행" },
    { id: 4, value: "notyet", label: "미정" }
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
  const [selectedValue, setSelectedValue] = useState("online");

  const [selectedStacks, setSelectedStacks] = useState();

  useEffect(() => {
    console.log(selectedStacks);
  }, [selectedStacks]);
  return (
    <div>
      <Select
        defaultValue={"온라인"}
        options={options}
        canAllowClear={true}
        setSelectedValue={setSelectedValue}
      />
      <Cascader
        isMultiple={true}
        options={stackOptions}
        setSelectedValues={setSelectedStacks}
      />
    </div>
  );
};
export default Create;
