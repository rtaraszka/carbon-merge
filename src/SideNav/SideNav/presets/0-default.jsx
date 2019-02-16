import * as React from "react";
import SideNav from "../SideNav";
import SideNavHeader from "../../SideNavHeader/SideNavHeader";
import SideNavDetails from "../../SideNavDetails/SideNavDetails";
import SideNavSwitcher from "../../SideNavSwitcher/SideNavSwitcher";
import SideNavItems from "../../SideNavItems/SideNavItems";
import SideNavLink from "../../SideNavLink/SideNavLink";
import SideNavMenu from "../../SideNavMenu/SideNavMenu";
import SideNavMenuItem from "../../SideNavMenuItem/SideNavMenuItem";

export default (
  <SideNav aria-label="Side navigation" uxpId="0">
    <SideNavHeader uxpId="1" icon={`<Icon icon="iconDevops" />`}>
      <SideNavDetails title="Side navigation title" uxpId="2">
        <SideNavSwitcher
          uxpId="3"
          labelText="Switcher"
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </SideNavDetails>
    </SideNavHeader>
    <SideNavItems uxpId="4">
      <SideNavLink href="#" uxpId="5">
        Link
      </SideNavLink>
      <SideNavMenu
        uxpId="6"
        defaultExpanded
        isActive
        title="Category title"
        icon={`<Icon icon="iconChat" />`}
      >
        <SideNavMenuItem href="#" uxpId="7">
          Link
        </SideNavMenuItem>
        <SideNavMenuItem aria-current="page" href="#">
          Link
        </SideNavMenuItem>
        <SideNavMenuItem href="#" uxpId="8">
          Link
        </SideNavMenuItem>
      </SideNavMenu>
    </SideNavItems>
  </SideNav>
);
