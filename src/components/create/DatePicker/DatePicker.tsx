import React from "react";
import "antd/dist/antd.css";
import { DatePicker as AntdDatePicker } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

interface DatePickerInterface {
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const DatePicker: React.FC<DatePickerInterface> = ({ setSelectedValue }) => {
  const onChange = (date, dateString) => {
    setSelectedValue(dateString);
  };
  return (
    <AntdDatePicker
      defaultValue={moment(Date(), dateFormat)}
      onChange={onChange}
      format={dateFormat}
      style={{
        width: "100%"
      }}
    />
  );
};

export default DatePicker;
