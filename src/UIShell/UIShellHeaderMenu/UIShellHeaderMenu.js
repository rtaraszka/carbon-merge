import React from "react";
import PropTypes from "prop-types";
import { HeaderMenu as HeaderMenuComponent } from "carbon-components-react/es/components/UIShell";

function UIShellHeaderMenu(props) {
    return (
        <HeaderMenuComponent {...props} />
    )
}

UIShellHeaderMenu.propTypes = {
    /**
     * Provide a custom ref handler for the menu button
     */
    focusRef: PropTypes.func,

    /**
     * Optionally provide a tabIndex for the underlying menu button
     */
    tabIndex: PropTypes.number,

    /**
     * Optional component to render instead of string
     */
    renderMenuContent: PropTypes.func,

    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
};

export default UIShellHeaderMenu;
