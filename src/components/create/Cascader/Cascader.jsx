import React from "react";
import "antd/dist/antd.css";
import { Cascader as AntdCascader } from "antd";

const Cascader = ({ isMultiple, options, setSelectedValues }) => {
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
