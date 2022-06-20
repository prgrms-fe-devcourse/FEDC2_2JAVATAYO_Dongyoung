import Label from "@components/common/Label";
import React, { useState, Dispatch, SetStateAction } from "react";
import Select from "../Select/Select";
import * as S from "./style";

interface SelectInterface {
  defaultValue: string;
  options: Array<object>;
  canAllowClear: boolean;
  setSelectedValue: Dispatch<SetStateAction<string>>;
  label?: string;
  disabled?: boolean;
}

const SelectBox: React.FC<SelectInterface> = ({
  defaultValue,
  options,
  canAllowClear,
  setSelectedValue,
  label,
  disabled
}) => {
  return (
    <S.SelectBox>
      <Label>{label}</Label>
      <Select
        disabled={disabled}
        options={options}
        defaultValue={defaultValue}
        setSelectedValue={setSelectedValue}
        canAllowClear={canAllowClear}
      />
    </S.SelectBox>
  );
};
export default SelectBox;
