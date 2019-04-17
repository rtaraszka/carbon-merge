import React from "react";
import PropTypes from "prop-types";
import { StructuredListSkeleton as StructuredListSkeletonComponent } from "carbon-components-react";

function StructuredListSkeleton(props) {
    return (
        <StructuredListSkeletonComponent {...props} />
    );
}

StructuredListSkeleton.propTypes = {
    /**
     * number of table rows
     */
    rowCount: PropTypes.number,

    /**
     * Specify whether a border should be added to your StructuredListSkeleton
     */
    border: PropTypes.bool,
};

StructuredListSkeleton.defaultProps = {
    rowCount: 5,
    border: false,
};

export default StructuredListSkeleton;
