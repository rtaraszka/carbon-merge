import React from "react";
import ToolbarItem from "../../ToolbarItem/ToolbarItem";
import OverflowMenu from "../../OverflowMenu/OverflowMenu";
import ToolbarTitle from "../../ToolbarTitle/ToolbarTitle";
import ToolbarOption from "../../ToolbarOption/ToolbarOption";
import OverflowMenuItem from "../../OverflowMenuItem/OverflowMenuItem";
import ToolbarDivider from "../../ToolbarDivider/ToolbarDivider";
import RadioButton from "../../RadioButton/RadioButton";

const inputProps = {
  className: 'some-class',
};

export default (
  <ToolbarItem uxpId="ToolbarItem2">
    <OverflowMenu floatingMenu uxpId="OverflowMenu1">
      <OverflowMenuItem itemText="Refresh table" uxpId="OverflowMenuItem1" />
      <ToolbarDivider uxpId="ToolbarDivider0" />
      <ToolbarTitle title="ROW HEIGHT" uxpId="ToolbarTile1" />
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
      <ToolbarOption uxpId="ToolbarOption4">
        <RadioButton
            {...inputProps}
            value="tall"
            id="radio-2"
            name="toolbar-radio"
            labelText="Tall"
            uxpId="RadioButton1"
        />
      </ToolbarOption>
    </OverflowMenu>
  </ToolbarItem>
);
