import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigation as HeaderNavigationComponent } from "carbon-components-react/es/components/UIShell";

function UIShellHeaderNavigation(props) {
    return (
        <HeaderNavigationComponent {...props} />
    )
}

UIShellHeaderNavigation.propTypes = {
    /**
     * Optionally provide a custom class to apply to the underlying <nav> node
     */
    className: PropTypes.string,

    /**
     * Provide valid children of HeaderNavigation, for example `HeaderMenuItem`
     * or `HeaderMenu`
     */
    children: PropTypes.node,

    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
};

export default UIShellHeaderNavigation;
