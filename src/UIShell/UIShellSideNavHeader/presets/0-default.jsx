import React from "react";
import UIShellSideNavHeader from "../UIShellSideNavHeader";
import UIShellSideNavDetails from "../../UIShellSideNavDetails/UIShellSideNavDetails";
import UIShellSideNavSwitcher from "../../UIShellSideNavSwitcher/UIShellSideNavSwitcher";

export default (
    <UIShellSideNavHeader iconName="iconUser" uxpId="UIShellSideNavHeader0">
        <UIShellSideNavDetails title="Side navigation title" uxpId="UIShellSideNavDetails0">
            <UIShellSideNavSwitcher
                labelText="Switcher"
                options={['Option 1', 'Option 2', 'Option 3']}
                uxpId="UIShellSideNavSwitcher0"
            />
        </UIShellSideNavDetails>
    </UIShellSideNavHeader>
);
