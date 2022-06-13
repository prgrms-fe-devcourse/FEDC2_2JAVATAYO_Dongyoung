import { useEffect, useState } from "react";
import Cascader from "../components/create/Cascader";
import SelectBox from "../components/create/SelectBox";
import DatePicker from "../components/create/DatePicker";
import Select from "../components/create/Select";
import PartBox from "../components/create/PartBox";

const Create: React.FC = () => {
  const options = [
    { id: 1, value: "online", label: "온라인" },
    { id: 2, value: "offline", label: "오프라인" },
    { id: 3, value: "both", label: "온오프라인 병행" },
    { id: 4, value: "notyet", label: "미정" }
  ];
  const [selectedValue, setSelectedValue] = useState("online");

  const [selectedStacks, setSelectedStacks] = useState();

  const [startDate, setStartDate] = useState("");

  return (
    <div>
      <SelectBox
        label={"진행방식"}
        defaultValue={"온라인"}
        options={options}
        canAllowClear={true}
        setSelectedValue={setSelectedValue}
      />

      <DatePicker setSelectedValue={setStartDate} />
      <PartBox />
    </div>
  );
};
export default Create;
