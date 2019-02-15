import * as React from "react";
import TimePicker from "../TimePicker";
import TimePickerSelect from "../../TimePickerSelect/TimePickerSelect";
import SelectItem from "../../SelectItem/SelectItem";

export default (
<TimePicker id="time-picker" key="1">
  <TimePickerSelect id="time-picker-select-1" key="2">
    <SelectItem value="AM" text="AM" key="3" />
    <SelectItem value="PM" text="PM" key="4" />
  </TimePickerSelect>
  <TimePickerSelect id="time-picker-select-2" key="5">
    <SelectItem value="Time zone 1" text="Time zone 1" key="6" />
    <SelectItem value="Time zone 2" text="Time zone 2" key="7" />
  </TimePickerSelect>
</TimePicker>
);
