import * as React from "react";
import DatePicker from "../DatePicker";
import DatePickerInput from "../../DatePickerInput/DatePickerInput";

export default (
  <DatePicker
    uxpId="1"
    placeholder="mm/dd/yyyy"
    datePickerType="single"
  >
    <DatePickerInput uxpId="2" id="date-picker-input" />
  </DatePicker>
);
