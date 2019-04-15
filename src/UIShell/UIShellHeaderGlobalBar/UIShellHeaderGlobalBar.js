import React from "react";
import PropTypes from "prop-types";
import { HeaderGlobalBar as HeaderGlobalBarComponent } from "carbon-components-react/es/components/UIShell";

function UIShellHeaderGlobalBar(props) {
    return (
        <HeaderGlobalBarComponent {...props} />
    );
}

UIShellHeaderGlobalBar.propTypes = {
    children: PropTypes.node,
};

export default UIShellHeaderGlobalBar;
