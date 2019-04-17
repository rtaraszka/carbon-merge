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
      <RadioButton
          {...radioProps}
          value="standard"
          id="radio-1"
          uxpId="RadioButton0"
      />
      <RadioButton
          value="default-selected"
          id="radio-2"
          {...radioProps}
          uxpId="RadioButton1"
      />
      <RadioButton
          {...radioProps}
          value="disabled"
          id="radio-3"
          uxpId="RadioButton2"
      />
    </RadioButtonGroup>
);
