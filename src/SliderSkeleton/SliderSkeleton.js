import React from "react";
import PropTypes from "prop-types";
import { SliderSkeleton as SliderSkeletonComponent } from "carbon-components-react";

function SliderSkeleton(props) {
    return (
        <SliderSkeletonComponent {...props} />
    );
}

SliderSkeleton.propTypes = {
    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,
};

export default SliderSkeleton;
