import React from "react";
import PropTypes from "prop-types";
import { SideNavMenuItem as SideNavMenuItemComponent  } from "carbon-components-react/es/components/UIShell";

function UIShellSideNavMenuItem(props) {
    return (
        <SideNavMenuItemComponent {...props} />
    );
}

UIShellSideNavMenuItem.propTypes = {
    /**
     * Specify the childrento be rendered inside of the `SideNavMenuItem`
     */
    children: PropTypes.node,

    /**
     * Provide an optional class to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Optionally specify whether the link is "active". An active link is one that
     * has an href that is the same as the current page. Can also pass in
     * `aria-current="page"`, as well.
     */
    isActive: PropTypes.bool,
};

export default UIShellSideNavMenuItem;
