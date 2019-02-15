import * as React from "react";
import ToolbarItem from "../../ToolbarItem/ToolbarItem";
import OverflowMenu from "../../OverflowMenu/OverflowMenu";
import ToolbarTitle from "../../ToolbarTitle/ToolbarTitle";
import ToolbarOption from "../../ToolbarOption/ToolbarOption";
import Checkbox from "../../Checkbox/Checkbox";


export default (
  <ToolbarItem key="2452144221">
    <OverflowMenu floatingMenu key="405767754">
      <ToolbarTitle title="FILTER BY" key="2153764633" />
      <ToolbarOption key="3779960379">
        <Checkbox id="opt-1" labelText="Filter option 1" key="2452086573" />
      </ToolbarOption>
      <ToolbarOption key="1625786894">
        <Checkbox id="opt-2" labelText="Filter option 2" key="2517957463" />
      </ToolbarOption>
      <ToolbarOption key="4200745090">
        <Checkbox id="opt-3" labelText="Filter option 3" key="1702486876" />
      </ToolbarOption>
    </OverflowMenu>
  </ToolbarItem>
);
