import React from "react";
import PropTypes from "prop-types";
import { SideNav as SideNavComponent } from "carbon-components-react/es/components/UIShell";

function UIShellSideNav(props) {
    return (
        <SideNavComponent {...props} />
    );
}

UIShellSideNav.propTypes = {
    /**
     * Specify whether the side navigation is expanded or collapsed
     */
    isExpanded: PropTypes.bool,

    children: PropTypes.node,

    /**
     * Optionally provide a custom class to apply to the underlying <li> node
     */
    className: PropTypes.string,

    /**
     * Provide a custom function for translating all message ids within this
     * component. This function will take in two arguments: the mesasge Id and the
     * state of the component. From this, you should return a string representing
     * the label you want displayed or read by screen readers.
     */
    translateById: PropTypes.func,

    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
};

export default UIShellSideNav;
