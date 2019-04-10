import React from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import RadioButton from "../../RadioButton/RadioButton";

const radioProps = {
    className: 'some-class',
    labelText: 'Radio button label',
};

export default (
    <RadioButtonGroup
        defaultSelected="default-selected"
        legend="Group Legend"
        name="radio-button-group"
        valueSelected="default-selected"
        uxpId="RadioButtonGroup0">
      <RadioButton value="standard" id="radio-1" {...radioProps} uxpId="RadioButton0" />
      <RadioButton
          value="default-selected"
          id="radio-2"
          {...radioProps}
          uxpId="RadioButton1"
      />
      <RadioButton value="disabled" id="radio-3" {...radioProps} uxpId="RadioButton2" />
    </RadioButtonGroup>
);
