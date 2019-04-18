import React from "react";
import PropTypes from "prop-types";
import { TextInputSkeleton as TextInputSkeletonComponent } from "carbon-components-react";

function TextInputSkeleton(props) {
    return (
        <TextInputSkeletonComponent {...props} />
    );
}

TextInputSkeleton.propTypes = {
    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,
};

export default TextInputSkeleton;
