import { useEffect, useState } from "react";
import Select from "../components/create/Select";

const Create: React.FC = () => {
  //todo : type으로 빼야함 + value 형진님과 논의!
  const options = [
    { id: 1, value: "online", label: "온라인" },
    { id: 2, value: "offline", label: "오프라인" },
    { id: 3, value: "both", label: "온오프라인 병행" },
    { id: 4, value: "notyet", label: "미정" }
  ];

  const [selectedValue, setSelectedValue] = useState("online");

  return (
    <div>
      <Select
        defaultValue={"온라인"}
        options={options}
        canAllowClear={true}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};
export default Create;
