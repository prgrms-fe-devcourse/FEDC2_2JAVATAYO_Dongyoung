import React from "react";
import "antd/dist/antd.css";
import { Cascader as AntdCascader } from "antd";

interface CascaderInterface {
  isMultiple: boolean;
  options: Array<object>;
  setSelectedValues: React.Dispatch<React.SetStateAction<any[]>>;
}

const Cascader: React.FC<CascaderInterface> = ({
  isMultiple,
  options,
  setSelectedValues
}) => {
  const onChange = (value) => {
    setSelectedValues(value);
  };

  return (
    <>
      <AntdCascader
        multiple={isMultiple}
        style={{
          marginTop: "10px",
          width: "100%"
        }}
        options={options}
        onChange={onChange}
        maxTagCount="responsive"
      />
    </>
  );
};
export default Cascader;
