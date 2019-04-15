import React from "react";
import PropTypes from "prop-types";
import { HeaderGlobalAction as HeaderGlobalActionComponent } from "carbon-components-react/es/components/UIShell";

function UIShellHeaderGlobalAction(props) {
    return (
        <HeaderGlobalActionComponent {...props} />
    );
}

UIShellHeaderGlobalAction.propTypes = {
    /**
     * Provide a custom icon for this global action
     */
    children: PropTypes.node.isRequired,

    /**
     * Optionally provide a custom class name that is applied to the underlying
     * button
     */
    className: PropTypes.string,

    /**
     * Optionally provide an onClick handler that is called when the underlying
     * button fires it's onclick event
     */
    onClick: PropTypes.func,

    /**
     * Specify whether the action is currently active
     */
    isActive: PropTypes.bool,

    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
};

export default UIShellHeaderGlobalAction;
