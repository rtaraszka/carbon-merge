import React from "react";
import PropTypes from "prop-types";
import { StructuredListRow as StructuredListRowComponent } from "carbon-components-react";

function StructuredListRow(props) {
    return (
        <StructuredListRowComponent {...props} />
    );
}

StructuredListRow.propTypes = {
    /**
     * Provide the contents of your StructuredListRow
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify whether your StructuredListRow should be used as a header row
     */
    head: PropTypes.bool,

    /**
     * Specify whether a `<label>` should be used
     */
    label: PropTypes.bool,

    /**
     * Specify the tab index of the container node, if `<label>` is in use
     */
    tabIndex: PropTypes.number,

    /**
     * Provide a handler that is invoked on the key down event for the control,
     * if `<label>` is in use
     */
    onKeyDown: PropTypes.func,
};

StructuredListRow.defaultProps = {
    head: false,
    label: false,
    tabIndex: 0,
};

export default StructuredListRow;
