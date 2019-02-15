import * as React from "react";
import NumberInput from "../NumberInput";

export default (
  <NumberInput
    key="1"
    min={0}
    max={100}
    id="test"
    label="Number Input"
    className="extra-class"
    invalidText="invalid text"
    helperText="testHelper"
  />
);
