import * as React from "react";
import SideNavHeader from "../SideNavHeader";
import SideNavDetails from "../../SideNavDetails/SideNavDetails";
import SideNavSwitcher from "../../SideNavSwitcher/SideNavSwitcher";


export default (
  <SideNavHeader uxpId="1" icon={<Icon icon="iconDevops" uxpId="4" />}>
    <SideNavDetails title="Side navigation title" uxpId="2">
      <SideNavSwitcher
        uxpId="3"
        labelText="Switcher"
        options={['Option 1', 'Option 2', 'Option 3']}
      />
    </SideNavDetails>
  </SideNavHeader>
);
