import React from "react";
import UIShellSideNavItems from "../UIShellSideNavItems";
import UIShellSideNavLink from "../../UIShellSideNavLink/UIShellSideNavLink";
import UIShellSideNavMenuItem from "../../UIShellSideNavMenuItem/UIShellSideNavMenuItem";
import UIShellSideNavMenu from "../../UIShellSideNavMenu/UIShellSideNavMenu";

export default (
    <UIShellSideNavItems uxpId="UIShellSideNavItems0">
        <UIShellSideNavLink iconName="iconUser" href="javascript:void(0)" uxpId="UIShellSideNavLink0">
            Link
        </UIShellSideNavLink>
        <UIShellSideNavMenu
            defaultExpanded
            iconName="iconUser"
            isActive
            title="Category title"
            uxpId="UIShellSideNavMenu0">
            <UIShellSideNavMenuItem href="javascript:void(0)" uxpId="UIShellSideNavMenuItem0">Link</UIShellSideNavMenuItem>
            <UIShellSideNavMenuItem aria-current="page" href="javascript:void(0)" uxpId="UIShellSideNavMenuItem1">
                Link
            </UIShellSideNavMenuItem>
            <UIShellSideNavMenuItem href="javascript:void(0)" uxpId="UIShellSideNavMenuItem2">Link</UIShellSideNavMenuItem>
        </UIShellSideNavMenu>
    </UIShellSideNavItems>
);
