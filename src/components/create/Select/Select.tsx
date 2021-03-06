import React, { Dispatch, SetStateAction } from "react";
import "antd/dist/antd.min.css";
import { Select as AntdSelect } from "antd";
const { Option } = AntdSelect;

interface SelectInterface {
  defaultValue: string;
  options: Array<object>;
  canAllowClear: boolean;
  disabled?: boolean;
  setSelectedValue: Dispatch<SetStateAction<string>>;
}

const Select: React.FC<SelectInterface> = ({
  defaultValue,
  options,
  canAllowClear,
  disabled = false,
  setSelectedValue
}) => {
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <AntdSelect
      defaultValue={defaultValue}
      style={{
        width: "100%"
      }}
      disabled={disabled}
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
