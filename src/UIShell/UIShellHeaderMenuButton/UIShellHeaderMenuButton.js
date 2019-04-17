import React from "react";
import PropTypes from "prop-types";
import { HeaderMenuButton as HeaderMenuButtonComponent } from "carbon-components-react/es/components/UIShell";

function UIShellHeaderMenuButton(props) {
    return (
        <HeaderMenuButtonComponent {...props} />
    );
}

UIShellHeaderMenuButton.propTypes = {
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

export default UIShellHeaderMenuButton;
