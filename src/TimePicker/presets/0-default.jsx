import * as React from "react";
import TimePicker from "../TimePicker";
import TimePickerSelect from "../../TimePickerSelect/TimePickerSelect";
import SelectItem from "../../SelectItem/SelectItem";

export default (
<TimePicker id="time-picker" uxpId="1">
  <TimePickerSelect id="time-picker-select-1" uxpId="2">
    <SelectItem value="AM" text="AM" uxpId="3" />
    <SelectItem value="PM" text="PM" uxpId="4" />
  </TimePickerSelect>
  <TimePickerSelect id="time-picker-select-2" uxpId="5">
    <SelectItem value="Time zone 1" text="Time zone 1" uxpId="6" />
    <SelectItem value="Time zone 2" text="Time zone 2" uxpId="7" />
  </TimePickerSelect>
</TimePicker>
);
