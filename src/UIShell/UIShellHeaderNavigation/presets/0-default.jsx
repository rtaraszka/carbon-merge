import React from "react";
import UIShellHeaderNavigation from "../UIShellHeaderNavigation";
import UIShellHeaderMenuItem from "../../UIShellHeaderMenuItem/UIShellHeaderMenuItem";
import UIShellHeaderMenu from "../../UIShellHeaderMenu/UIShellHeaderMenu";

export default (
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
);
