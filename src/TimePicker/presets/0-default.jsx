import React from "react";
import TimePicker from "../TimePicker";
import TimePickerSelect from "../../TimePickerSelect/TimePickerSelect";
import SelectItem from "../../SelectItem/SelectItem";

const selectProps = {
    hideLabel: true,
    labelText: 'Please select',
    iconDescription: 'open list of options',
};

export default (
  <TimePicker
    id="time-picker"
    pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)"
    placeholder="hh:mm"
    labelText="Select a time"
    invalidText="A valid value is required"
    maxLength={5}
    uxpId="TimePicker0">
    <TimePickerSelect
        {...selectProps}
        id="time-picker-select-1"
        uxpId="TimePickerSelect0">
      <SelectItem
          value="AM"
          text="AM"
          uxpId="SelectItem0"
      />
      <SelectItem
          value="PM"
          text="PM"
          uxpId="SelectItem1"
      />
    </TimePickerSelect>
    <TimePickerSelect
        {...selectProps}
        id="time-picker-select-2"
        uxpId="TimePickerSelect1">
      <SelectItem
          value="Time zone 1"
          text="Time zone 1"
          uxpId="SelectItem2"
      />
      <SelectItem
          value="Time zone 2"
          text="Time zone 2"
          uxpId="SelectItem3"
      />
    </TimePickerSelect>
  </TimePicker>
);
