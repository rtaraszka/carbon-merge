import React from "react";
import UIShellHeader from "../UIShellHeader";
import UIShellHeaderMenuButton from "../../UIShellHeaderMenuButton/UIShellHeaderMenuButton";
import UIShellHeaderName from "../../UIShellHeaderName/UIShellHeaderName";
import UIShellHeaderNavigation from "../../UIShellHeaderNavigation/UIShellHeaderNavigation";
import UIShellHeaderMenuItem from "../../UIShellHeaderMenuItem/UIShellHeaderMenuItem";
import UIShellHeaderMenu from "../../UIShellHeaderMenu/UIShellHeaderMenu";
import UIShellHeaderGlobalBar from "../../UIShellHeaderGlobalBar/UIShellHeaderGlobalBar";
import UIShellHeaderGlobalAction from "../../UIShellHeaderGlobalAction/UIShellHeaderGlobalAction";
import Icon from "../../../Icon/Icon";

export default (
    <UIShellHeader uxpId="UIShellHeader0">
        <UIShellHeaderMenuButton
            aria-label="Open menu"
            uxpId="UIShellHeaderMenuButton0"
        />
        <UIShellHeaderName
            href="#"
            prefix="IBM"
            uxpId="UIShellHeaderName0">
            [Platform]
        </UIShellHeaderName>
        <UIShellHeaderNavigation aria-label="IBM [Platform]" uxpId="UIShellHeaderNavigation0">
            <UIShellHeaderMenuItem href="#" uxpId="UIShellHeaderMenuItem0">Catalog</UIShellHeaderMenuItem>
            <UIShellHeaderMenuItem href="#" uxpId="UIShellHeaderMenuItem1">Docs</UIShellHeaderMenuItem>
            <UIShellHeaderMenuItem href="#" uxpId="UIShellHeaderMenuItem2">Support</UIShellHeaderMenuItem>
            <UIShellHeaderMenu aria-label="Manage" uxpId="UIShellHeaderMenu0">
                <UIShellHeaderMenuItem href="#" uxpId="UIShellHeaderMenuItem3">Link 1</UIShellHeaderMenuItem>
                <UIShellHeaderMenuItem href="#" uxpId="UIShellHeaderMenuItem4">Link 2</UIShellHeaderMenuItem>
                <UIShellHeaderMenuItem href="#" uxpId="UIShellHeaderMenuItem5">Link 3</UIShellHeaderMenuItem>
            </UIShellHeaderMenu>
        </UIShellHeaderNavigation>
        <UIShellHeaderGlobalBar uxpId="UIShellHeaderGlobalBar0">
                <UIShellHeaderGlobalAction
                aria-label="Notifications"
                uxpId="UISHellHeaderGlobalAction0">
                <Icon icon="iconNotificationOn" uxpId="Icon0" />
            </UIShellHeaderGlobalAction>
            <UIShellHeaderGlobalAction
                aria-label="Profile"
                uxpId="UISHellHeaderGlobalAction1">
                <Icon icon="iconUser" uxpId="Icon1" />
            </UIShellHeaderGlobalAction>
        </UIShellHeaderGlobalBar>
    </UIShellHeader>
);
