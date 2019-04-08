import React from "react";
import OverflowMenu from "../OverflowMenu";
import OverflowMenuItem from "../../OverflowMenuItem/OverflowMenuItem";

const overflowMenuItemProps = {
    className: 'some-class',
};

export default (
    <OverflowMenu
        floatingMenu
        direction="bottom"
        uxpId="OverflowMenu0">
        <OverflowMenuItem
            {...overflowMenuItemProps}
            itemText="Option 1"
            primaryFocus
            uxpId="OverflowMenuItem0"
        />
        <OverflowMenuItem
            {...overflowMenuItemProps}
            itemText="Option 2 is an example of a really long string and how we recommend handling this"
            requireTitle
            uxpId="OverflowMenuItem1"
        />
        <OverflowMenuItem {...overflowMenuItemProps} itemText="Option 3" uxpId="OverflowMenuItem2" />
        <OverflowMenuItem {...overflowMenuItemProps} itemText="Option 4" uxpId="OverflowMenuItem3" />
        <OverflowMenuItem
            {...overflowMenuItemProps}
            itemText="Option 5"
            uxpId="OverflowMenuItem4"
        />
        <OverflowMenuItem
            {...overflowMenuItemProps}
            itemText="Danger option"
            hasDivider
            isDelete
            uxpId="OverflowMenuItem5"
        />
    </OverflowMenu>
);
