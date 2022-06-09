import React, { useState, Dispatch, SetStateAction } from "react";
import "antd/dist/antd.min.css";
import { Select as AntdSelect } from "antd";
const { Option } = AntdSelect;

interface SelectInterface {
  defaultValue: string;
  options: Array<object>;
  canAllowClear: boolean;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

const Select: React.FC<SelectInterface> = ({
  defaultValue,
  options,
  canAllowClear,
  setSelectedValue
}) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedValue(value);
  };

  return (
    <AntdSelect
      defaultValue={defaultValue}
      style={{
        width: "120px"
      }}
      onChange={handleChange}
      allowClear={canAllowClear}
    >
      {options.map((it: { id: number; value: string; label: string }) => (
        <Option key={it.id} value={it.value}>
          {it.label}
        </Option>
      ))}
    </AntdSelect>
  );
};

export default Select;
