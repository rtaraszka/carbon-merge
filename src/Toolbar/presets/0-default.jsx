import React from "react";
import { iconFilter } from "carbon-icons";
import Toolbar from "../Toolbar";
import ToolbarItem from "../../ToolbarItem/ToolbarItem";
import OverflowMenu from "../../OverflowMenu/OverflowMenu";
import OverflowMenuItem from "../../OverflowMenuItem/OverflowMenuItem";
import ToolbarTitle from "../../ToolbarTitle/ToolbarTitle";
import ToolbarOption from "../../ToolbarOption/ToolbarOption";
import Checkbox from "../../Checkbox/Checkbox";
import ToolbarDivider from "../../ToolbarDivider/ToolbarDivider";
import RadioButton from "../../RadioButton/RadioButton";

const inputProps = {
  className: 'some-class',
};

export default (
  <Toolbar className="some-class" uxpId="Toolbar0">
    <ToolbarItem
        type="search"
        placeHolderText="Search"
        uxpId="ToolbarItem0"
    />
    <ToolbarItem uxpId="ToolbarItem1">
      <OverflowMenu
          icon={iconFilter}
          floatingMenu
          uxpId="OverflowMenu0">
        <ToolbarTitle
            title="FILTER BY"
            uxpId="ToolbarTile0"
        />
        <ToolbarOption uxpId="ToolbarOption0">
          <Checkbox
              {...inputProps}
              id="opt-1"
              labelText="Filter option 1"
              uxpId="Checkbox0"
          />
        </ToolbarOption>
        <ToolbarOption uxpId="ToolbarOption1">
          <Checkbox
              {...inputProps}
              id="opt-2"
              labelText="Filter option 2"
              uxpId="Checkbox1"
          />
        </ToolbarOption>
        <ToolbarOption uxpId="ToolbarOption2">
          <Checkbox
              {...inputProps}
              id="opt-3"
              labelText="Filter option 3"
              uxpId="Checkbox2"
          />
        </ToolbarOption>
      </OverflowMenu>
    </ToolbarItem>
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
  </Toolbar>
);
