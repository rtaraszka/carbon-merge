import React from "react";
import TimePickerSelect from "../TimePickerSelect";
import SelectItem from "../../SelectItem/SelectItem";

const selectProps = {
    hideLabel: true,
    labelText: 'Please select',
    iconDescription: 'open list of options',
};

export default (
    <TimePickerSelect id="time-picker-select-1" {...selectProps} uxpId="TimePickerSelect0">
        <SelectItem value="AM" text="AM" uxpId="SelectItem0" />
        <SelectItem value="PM" text="PM" uxpId="SelectItem1" />
    </TimePickerSelect>
);
