import React from "react";
import Select from "../Select";
import SelectItem from "../../SelectItem/SelectItem";
import SelectItemGroup from "../../SelectItemGroup/SelectItemGroup";

export default (
    <Select
        id="select"
        defaultValue="placeholder-item"
        uxpId="Select0">
      <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Choose an option"
          uxpId="SelectItem0"
      />
      <SelectItemGroup label="Category 1" uxpId="SelectItemGroup0">
        <SelectItem
            value="option-1"
            text="Option 1"
            uxpId="SelectItem1"
        />
        <SelectItem
            value="option-2"
            text="Option 2"
            uxpId="SelectItem2"
        />
      </SelectItemGroup>
      <SelectItemGroup label="Category 2" uxpId="SelectItemGroup1">
        <SelectItem
            value="option-3"
            text="Option 3"
            uxpId="SelectItem3"
        />
        <SelectItem
            value="option-4"
            text="Option 4"
            uxpId="SelectItem4"
        />
      </SelectItemGroup>
    </Select>
);
