import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Cascader as AntdCascader } from "antd";

const Cascader = ({
  defaultValue,
  stacks,
  isMultiple,
  options,
  setSelectedValues
}) => {
  const onChange = (value) => {
    console.log("value", value);
    setSelectedValues(value);
  };
  useEffect(() => {
    console.log("stacks", stacks);
  }, []);

  return (
    <>
      <AntdCascader
        defaultValue={defaultValue}
        multiple={isMultiple}
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          width: "100%"
        }}
        value={stacks}
        options={options}
        onChange={onChange}
        maxTagCount="responsive"
      />
    </>
  );
};
export default Cascader;
