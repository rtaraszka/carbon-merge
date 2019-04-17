import React from "react";
import DatePicker from "../DatePicker";
import DatePickerInput from "../../DatePickerInput/DatePickerInput";

export default (
    <DatePicker
        id="date-picker"
        datePickerType="simple"
        uxpId="DatePicker0">
        <DatePickerInput
            className="some-class"
            iconDescription="Icon description"
            id="date-picker-input"
            invalidText="A valid value is required"
            labelText="Date Picker label"
            pattern="d{1,2}/d{4}"
            placeholder="mm/dd/yyyy"
            uxpId="DatePickerInput0"
        />
    </DatePicker>
);
