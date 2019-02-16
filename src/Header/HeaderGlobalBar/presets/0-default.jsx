import * as React from "react";
import HeaderGlobalBar from "../HeaderGlobalBar";
import HeaderGlobalAction from "../../HeaderGlobalAction/HeaderGlobalAction";
import Icon from "../../../Icon/Icon";

export default (
  <HeaderGlobalBar uxpId="11">
    <HeaderGlobalAction uxpId="12" aria-label="Notifications">
      <Icon icon="notification" uxpId="13" />
    </HeaderGlobalAction>
    <HeaderGlobalAction
      uxpId="14"
      aria-label="Profile"
    >
      <Icon icon="user" uxpId="15" />
    </HeaderGlobalAction>
  </HeaderGlobalBar>
);
