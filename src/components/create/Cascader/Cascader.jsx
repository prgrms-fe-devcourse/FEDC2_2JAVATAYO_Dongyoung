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
    setSelectedValues(value);
  };
  return (
    <>
      <AntdCascader
        defaultValue={defaultValue}
        multiple={isMultiple}
        style={{
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
