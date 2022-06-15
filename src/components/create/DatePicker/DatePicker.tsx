import React from "react";
import "antd/dist/antd.css";
import { DatePicker as AntdDatePicker } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

interface DatePickerInterface {
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

//TODO : moment 현재 날짜값으로 수정 (이 부분은 모듈로 만드는게 어떠실련지..)
const DatePicker: React.FC<DatePickerInterface> = ({ setSelectedValue }) => {
  const onChange = (date, dateString) => {
    setSelectedValue(dateString);
  };
  return (
    <AntdDatePicker
      defaultValue={moment("2022/06/11", dateFormat)}
      onChange={onChange}
      format={dateFormat}
      style={{ width: "100%" }}
    />
  );
};

export default DatePicker;
