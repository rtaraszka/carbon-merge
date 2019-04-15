import React from "react";
import UIShellHeaderGlobalBar from "../UIShellHeaderGlobalBar";
import UIShellHeaderGlobalAction from "../../UIShellHeaderGlobalAction/UIShellHeaderGlobalAction";
import Icon from "../../../Icon/Icon";

export default (
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
);
