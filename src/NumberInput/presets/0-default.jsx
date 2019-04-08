import React from "react";
import NumberInput from "../NumberInput";

export default (
  <NumberInput
      className="some-class"
      id="tj-input"
      label="Number Input label"
      min={0}
      max={100}
      value={50}
      step={10}
      invalidText="Number is not valid"
      helperText="Optional helper text."
      numberInputArrowTranslationIds={{
        'increment.number': 'Increment number',
        'decrement.number': 'Decrement number',
      }}
      uxpId="NumberInput0"
  />
);
