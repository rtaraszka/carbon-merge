import React from "react";
import ToolbarOption from "../../ToolbarOption/ToolbarOption";
import RadioButton from "../../RadioButton/RadioButton";

const inputProps = {
  className: 'some-class',
};

export default (
    <ToolbarOption uxpId="ToolbarOption3">
      <RadioButton
          {...inputProps}
          value="short"
          id="radio-1"
          name="toolbar-radio"
          labelText="Short"
          uxpId="RadioButton0"
      />
    </ToolbarOption>
);
