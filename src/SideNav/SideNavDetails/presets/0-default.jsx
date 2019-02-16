import * as React from "react";
import SideNavDetails from "../SideNavDetails";
import SideNavSwitcher from "../../SideNavSwitcher/SideNavSwitcher";

export default (
    <SideNavDetails title="Side navigation title" uxpId="2">
      <SideNavSwitcher
        uxpId="3"
        labelText="Switcher"
        options={['Option 1', 'Option 2', 'Option 3']}
      />
    </SideNavDetails>
);