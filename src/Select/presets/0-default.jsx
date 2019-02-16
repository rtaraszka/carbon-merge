import * as React from "react";
import Select from "../Select";
import SelectItem from "../../SelectItem/SelectItem";
import SelectItemGroup from "../../SelectItemGroup/SelectItemGroup";

export default (
<Select id="select-1" defaultValue="placeholder-item" uxpId="1">
  <SelectItem
    uxpId="2"
    disabled
    hidden
    value="placeholder-item"
    text="Choose an option"
  />
  <SelectItemGroup label="Category 1" uxpId="3">
    <SelectItem value="option-1" text="Option 1" uxpId="4" />
    <SelectItem value="option-2" text="Option 2" uxpId="5" />
  </SelectItemGroup>
  <SelectItemGroup label="Category 2" uxpId="6">
    <SelectItem value="option-3" text="Option 3" uxpId="7" />
    <SelectItem value="option-4" text="Option 4" uxpId="8" />
  </SelectItemGroup>
</Select>
);
