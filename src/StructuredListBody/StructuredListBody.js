import React from "react";
import PropTypes from "prop-types";
import { StructuredListBody as StructuredListBodyComponent } from "carbon-components-react";

function StructuredListBody(props) {
    return (
        <StructuredListBodyComponent {...props} />
    );
}

StructuredListBody.propTypes = {
    /**
     * Provide the contents of your StructuredListBody
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    head: PropTypes.bool,

    /**
     * Provide a handler that is invoked on the key down event for the control
     */
    onKeyDown: PropTypes.func,
};

export default StructuredListBody;
