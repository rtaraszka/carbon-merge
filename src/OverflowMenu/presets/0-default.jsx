import * as React from "react";
import OverflowMenu from "../OverflowMenu";
import OverflowMenuItem from "../../OverflowMenuItem/OverflowMenuItem";

export default (
  <OverflowMenu uxpId="1">
    <OverflowMenuItem uxpId="2" itemText="Option 1" primaryFocus={true} />
    <OverflowMenuItem
      uxpId="3"
      itemText="Option 2 is an example of a really long string and how we recommend handling this"
      requireTitle
    />
    <OverflowMenuItem uxpId="4" itemText="Option 3" />
    <OverflowMenuItem uxpId="5" itemText="Option 4" />
    <OverflowMenuItem uxpId="6" itemText="Danger option" hasDivider isDelete />
  </OverflowMenu>
);
