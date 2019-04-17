import React from "react";
import UIShellSideNavMenu from "../UIShellSideNavMenu";
import UIShellSideNavMenuItem from "../../UIShellSideNavMenuItem/UIShellSideNavMenuItem";

export default (
    <UIShellSideNavMenu
        defaultExpanded
        iconName="iconUser"
        isActive
        title="Category title"
        uxpId="UIShellSideNavMenu0">
        <UIShellSideNavMenuItem href="javascript:void(0)" uxpId="UIShellSideNavMenuItem0">Link</UIShellSideNavMenuItem>
        <UIShellSideNavMenuItem
            aria-current="page"
            href="javascript:void(0)"
            uxpId="UIShellSideNavMenuItem1">
            Link
        </UIShellSideNavMenuItem>
        <UIShellSideNavMenuItem href="javascript:void(0)" uxpId="UIShellSideNavMenuItem2">Link</UIShellSideNavMenuItem>
    </UIShellSideNavMenu>
);
