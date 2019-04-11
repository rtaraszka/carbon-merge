import React from "react";
import PropTypes from "prop-types";
import { StructuredListCell as StructuredListCellComponent } from "carbon-components-react";

function StructuredListCell(props) {
    return (
        <StructuredListCellComponent {...props} />
    );
}

StructuredListCell.propTypes = {
    /**
     * Provide the contents of your StructuredListCell
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify whether your StructuredListCell should be used as a header cell
     */
    head: PropTypes.bool,

    /**
     * Specify whether your StructuredListCell should have text wrapping
     */
    noWrap: PropTypes.bool,
};

StructuredListCell.defaultProps = {
    head: false,
    noWrap: false,
};

export default StructuredListCell;
