import * as React from "react";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import HeaderMenuItem from "../../HeaderMenuItem/HeaderMenuItem";
import HeaderMenu from "../../HeaderMenu/HeaderMenu";

export default (
  <HeaderNavigation aria-label="IBM [Platform]" uxpId="3">
    <HeaderMenuItem href="#" uxpId="4">
      Catalog
    </HeaderMenuItem>
    <HeaderMenuItem href="#" uxpId="5">
      Docs
    </HeaderMenuItem>
    <HeaderMenuItem href="#" uxpId="6">
      Support
    </HeaderMenuItem>
    <HeaderMenu aria-label="Manage" uxpId="7">
      <HeaderMenuItem href="#" uxpId="8">
        Link 1
      </HeaderMenuItem>
      <HeaderMenuItem href="#" uxpId="9">
        Link 2
      </HeaderMenuItem>
      <HeaderMenuItem href="#" uxpId="10">
        Link 3
      </HeaderMenuItem>
    </HeaderMenu>
  </HeaderNavigation>
);
