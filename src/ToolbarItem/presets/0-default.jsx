import * as React from "react";
import ToolbarItem from "../../ToolbarItem/ToolbarItem";
import OverflowMenu from "../../OverflowMenu/OverflowMenu";
import ToolbarTitle from "../../ToolbarTitle/ToolbarTitle";
import ToolbarOption from "../../ToolbarOption/ToolbarOption";
import Checkbox from "../../Checkbox/Checkbox";


export default (
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
);
