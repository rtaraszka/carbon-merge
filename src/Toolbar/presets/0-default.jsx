import * as React from "react";
import Toolbar from "../Toolbar";
import ToolbarItem from "../../ToolbarItem/ToolbarItem";
import OverflowMenu from "../../OverflowMenu/OverflowMenu";
import OverflowMenuItem from "../../OverflowMenuItem/OverflowMenuItem";
import ToolbarTitle from "../../ToolbarTitle/ToolbarTitle";
import ToolbarOption from "../../ToolbarOption/ToolbarOption";
import Checkbox from "../../Checkbox/Checkbox";
import ToolbarDivider from "../../ToolbarDivider/ToolbarDivider";
import RadioButton from "../../RadioButton/RadioButton";


export default (
<Toolbar uxpId="3164317863" style={{"marginTop": 0}}>
  <ToolbarItem type="search" placeHolderText="Search" uxpId="3438512519" />
  <ToolbarItem uxpId="2452144221">
    <OverflowMenu floatingMenu uxpId="405767754">
      <ToolbarTitle title="FILTER BY" uxpId="2153764633" />
      <ToolbarOption uxpId="3779960379">
        <Checkbox id="opt-1" labelText="Filter option 1" uxpId="2452086573" />
      </ToolbarOption>
      <ToolbarOption uxpId="1625786894">
        <Checkbox id="opt-2" labelText="Filter option 2" uxpId="2517957463" />
      </ToolbarOption>
      <ToolbarOption uxpId="4200745090">
        <Checkbox id="opt-3" labelText="Filter option 3" uxpId="1702486876" />
      </ToolbarOption>
    </OverflowMenu>
  </ToolbarItem>
  <ToolbarItem uxpId="1025662037">
    <OverflowMenu floatingMenu uxpId="3258463596">
      <OverflowMenuItem itemText="Refresh table" uxpId="1457492530" />
      <ToolbarDivider uxpId="1088069256" />
      <ToolbarTitle title="ROW HEIGHT" uxpId="2312146344" />
      <ToolbarOption uxpId="1924571778">
        <RadioButton
          uxpId="1097397924"
          value="short"
          id="radio-1"
          name="toolbar-radio"
          labelText="Short"
        />
      </ToolbarOption>
      <ToolbarOption uxpId="2648171034">
        <RadioButton
          uxpId="154160602"
          value="tall"
          id="radio-2"
          name="toolbar-radio"
          labelText="Tall"
        />
      </ToolbarOption>
    </OverflowMenu>
  </ToolbarItem>
</Toolbar>
);
