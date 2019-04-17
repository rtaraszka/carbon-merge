import React from "react";
import PropTypes from "prop-types";
import { NumberInputSkeleton as NumberInputSkeletonComponent } from "carbon-components-react";

function NumberInputSkeleton(props) {
    return (
        <NumberInputSkeletonComponent {...props} />
    );
}

NumberInputSkeleton.propTypes = {
    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,
};

export default NumberInputSkeleton;
