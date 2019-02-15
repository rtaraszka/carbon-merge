import * as React from "react";
import DatePicker from "../DatePicker";
import DatePickerInput from "../../DatePickerInput/DatePickerInput";

export default (
  <DatePicker
    key="1"
    id="date-picker"
    placeholder="mm/dd/yyyy"
    datePickerType="single"
  >
    <DatePickerInput key="2" id="date-picker-input" />
  </DatePicker>
);
