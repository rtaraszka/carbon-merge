import React from "react";
import PropTypes from "prop-types";
import { SideNavItems as SideNavItemsComponent } from "carbon-components-react/es/components/UIShell";

function UIShellSideNavItems(props) {
    return (
        <SideNavItemsComponent {...props} />
    );
}

UIShellSideNavItems.propTypes = {
    /**
     * Provide an optional class to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Provide a single icon as the child to `SideNavIcon` to render in the
     * container
     */
    children: PropTypes.node.isRequired,
};

export default UIShellSideNavItems;
