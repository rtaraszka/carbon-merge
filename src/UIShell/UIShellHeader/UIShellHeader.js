import React from "react";
import PropTypes from "prop-types";
import { Header as HeaderComponent } from "carbon-components-react/es/components/UIShell";

function UIShellHeader(props) {
    return (
        <HeaderComponent {...props} />
    );
}

UIShellHeader.propTypes = {
    children: PropTypes.node,

    /**
     * Optionally provide a custom class name that is applied to the underlying <header>
     */
    className: PropTypes.string,

    'aria-label': PropTypes.string,
    'aria-labelledby': PropTypes.string,
};

export default UIShellHeader;
