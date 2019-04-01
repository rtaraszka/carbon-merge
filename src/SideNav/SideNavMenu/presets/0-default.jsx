import * as React from "react";
import SideNavMenu from "../SideNavMenu";
import SideNavMenuItem from "../../SideNavMenuItem/SideNavMenuItem";

export default (
  <SideNavMenu
    uxpId="6"
    defaultExpanded
    isActive
    title="Category title"
    icon={<Icon icon="iconChat" uxpId="10" />}
  >
    <SideNavMenuItem href="#" uxpId="7">
      Link
    </SideNavMenuItem>
    <SideNavMenuItem aria-current="page" href="#" uxpId="9">
      Link
    </SideNavMenuItem>
    <SideNavMenuItem href="#" uxpId="8">
      Link
    </SideNavMenuItem>
  </SideNavMenu>
);
