import * as React from "react";
import RadioButtonGroup from "../RadioButtonGroup";
import RadioButton from "../../RadioButton/RadioButton";

export default (
<RadioButtonGroup defaultSelected="react.js" name="JavaScript" uxpId="1">
  <RadioButton labelText="React.js" value="react.js" uxpId="2" />
  <RadioButton labelText="Angular" value="angular" uxpId="3" />
  <RadioButton labelText="Vue.js" value="vue" uxpId="4" />
</RadioButtonGroup>
);
