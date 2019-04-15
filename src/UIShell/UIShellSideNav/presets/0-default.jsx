import React from "react";
import UIShellSideNav from "../UIShellSideNav";
import UIShellSideNavHeader from "../../UIShellSideNavHeader/UIShellSideNavHeader";
import UIShellSideNavDetails from "../../UIShellSideNavDetails/UIShellSideNavDetails";
import UIShellSideNavSwitcher from "../../UIShellSideNavSwitcher/UIShellSideNavSwitcher";
import UIShellSideNavItems from "../../UIShellSideNavItems/UIShellSideNavItems";
import UIShellSideNavLink from "../../UIShellSideNavLink/UIShellSideNavLink";
import UIShellSideNavMenu from "../../UIShellSideNavMenu/UIShellSideNavMenu";
import UIShellSideNavMenuItem from "../../UIShellSideNavMenuItem/UIShellSideNavMenuItem";

export default (
    <UIShellSideNav aria-label="Side navigation" uxpId="UIShellSideNav0">
        <UIShellSideNavHeader iconName="iconUser" uxpId="UIShellSideNavHeader0">
            <UIShellSideNavDetails title="Side navigation title" uxpId="UIShellSideNavDetails0">
                <UIShellSideNavSwitcher
                    labelText="Switcher"
                    options={['Option 1', 'Option 2', 'Option 3']}
                    uxpId="UIShellSideNavSwitcher0"
                />
            </UIShellSideNavDetails>
        </UIShellSideNavHeader>
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
    </UIShellSideNav>
);
