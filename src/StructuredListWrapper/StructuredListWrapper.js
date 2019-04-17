import React from "react";
import PropTypes from "prop-types";
import { StructuredListWrapper as StructuredListWrapperComponent } from "carbon-components-react";

function StructuredListWrapper(props) {
    return (
        <StructuredListWrapperComponent {...props} />
    );
}

StructuredListWrapper.propTypes = {
    /**
     * Provide the contents of your StructuredListWrapper
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify whether a border should be added to your StructuredListWrapper
     */
    border: PropTypes.bool,

    /**
     * Specify whether your StructuredListWrapper should have selections
     */
    selection: PropTypes.bool,

    /**
     * Specify a label to be read by screen readers on the container node
     */
    ariaLabel: PropTypes.string,
};

StructuredListWrapper.defaultProps = {
    border: false,
    selection: false,
    ariaLabel: 'Structured list section',
};

export default StructuredListWrapper;
