import React from "react";
import "antd/dist/antd.css";
import { Cascader as AntdCascader } from "antd";

const Cascader = ({ stacks, isMultiple, options, setSelectedValues }) => {
  const onChange = (value) => {
    setSelectedValues(value);
  };

  return (
    <>
      <AntdCascader
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
