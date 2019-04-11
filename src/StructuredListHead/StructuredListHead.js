import React from "react";
import PropTypes from "prop-types";
import { StructuredListHead as StructuredListHeadComponent } from "carbon-components-react";

function StructuredListHead(props) {
    return (
        <StructuredListHeadComponent {...props} />
    );
}

StructuredListHead.propTypes = {
    /**
     * Provide the contents of your StructuredListHead
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the node
     */
    className: PropTypes.string,
};

export default StructuredListHead;
