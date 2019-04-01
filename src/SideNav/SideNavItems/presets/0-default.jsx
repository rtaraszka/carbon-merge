import * as React from "react";
import SideNavItems from "../SideNavItems";
import SideNavLink from "../../SideNavLink/SideNavLink";
import SideNavMenu from "../../SideNavMenu/SideNavMenu";
import SideNavMenuItem from "../../SideNavMenuItem/SideNavMenuItem";

export default (
  <SideNavItems uxpId="4">
    <SideNavLink href="#" uxpId="5">
      Link
    </SideNavLink>
    <SideNavMenu
      uxpId="6"
      defaultExpanded
      isActive
      title="Category title"
      icon={<Icon icon="iconChat" uxpId="10" />}
    >
      <SideNavMenuItem href="#" uxpId="7">Link</SideNavMenuItem>
      <SideNavMenuItem aria-current="page" href="#" uxpId="9">
        Link
      </SideNavMenuItem>
      <SideNavMenuItem href="#" uxpId="8">Link</SideNavMenuItem>
    </SideNavMenu>
  </SideNavItems>
);
