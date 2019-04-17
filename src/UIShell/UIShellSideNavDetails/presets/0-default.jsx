import React from "react";
import UIShellSideNavDetails from "../UIShellSideNavDetails";
import UIShellSideNavSwitcher from "../../UIShellSideNavSwitcher/UIShellSideNavSwitcher";

export default (
    <UIShellSideNavDetails title="Side navigation title" uxpId="UIShellSideNavDetails0">
        <UIShellSideNavSwitcher
            labelText="Switcher"
            options={['Option 1', 'Option 2', 'Option 3']}
            uxpId="UIShellSideNavSwitcher0"
        />
    </UIShellSideNavDetails>
);
