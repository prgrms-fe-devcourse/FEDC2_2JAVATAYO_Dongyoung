import React, { useState, Dispatch, SetStateAction } from "react";
import Select from "../Select/Select";
import * as S from "./style";

interface SelectInterface {
  defaultValue: string;
  options: Array<object>;
  canAllowClear: boolean;
  setSelectedValue: Dispatch<SetStateAction<string>>;
  label: string;
}

const SelectBox: React.FC<SelectInterface> = ({
  defaultValue,
  options,
  canAllowClear,
  setSelectedValue,
  label
}) => {
  return (
    <S.SelectBox>
      <S.Label>{label}</S.Label>
      <Select
        options={options}
        defaultValue={defaultValue}
        setSelectedValue={setSelectedValue}
        canAllowClear={canAllowClear}
      />
    </S.SelectBox>
  );
};
export default SelectBox;
