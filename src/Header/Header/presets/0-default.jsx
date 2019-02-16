import * as React from "react";
import Header from "../Header";
import HeaderMenuButton from "../../HeaderMenuButton/HeaderMenuButton";
import HeaderName from "../../HeaderName/HeaderName";
import HeaderNavigation from "../../HeaderNavigation/HeaderNavigation";
import HeaderMenuItem from "../../HeaderMenuItem/HeaderMenuItem";
import HeaderMenu from "../../HeaderMenu/HeaderMenu";
import HeaderGlobalBar from "../../HeaderGlobalBar/HeaderGlobalBar";
import HeaderGlobalAction from "../../HeaderGlobalAction/HeaderGlobalAction";
import Icon from "../../../Icon/Icon";

export default (
    <Header uxpId="0">
        <HeaderMenuButton
            uxpId="1"
          aria-label="Open menu"
        />
        <HeaderName href="#" prefix="IBM" uxpId="2">
          [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]" uxpId="3">
          <HeaderMenuItem href="#" uxpId="4">Catalog</HeaderMenuItem>
          <HeaderMenuItem href="#" uxpId="5">Docs</HeaderMenuItem>
          <HeaderMenuItem href="#" uxpId="6">Support</HeaderMenuItem>
          <HeaderMenu aria-label="Manage" uxpId="7">
            <HeaderMenuItem href="#" uxpId="8">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#" uxpId="9">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#" uxpId="10">Link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderNavigation>
        <HeaderGlobalBar uxpId="11">
          <HeaderGlobalAction
            uxpId="12"
            aria-label="Notifications"
          >
            <Icon icon="iconNotificationOn" uxpId="13" />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            uxpId="14"
            aria-label="Profile"
          >
            <Icon icon="iconUser" uxpId="15" />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
);