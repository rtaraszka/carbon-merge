import React from "react";
import PropTypes from "prop-types";
import { TextAreaSkeleton as TextAreaSkeletonComponent } from "carbon-components-react";

function TextAreaSkeleton(props) {
    return (
        <TextAreaSkeletonComponent {...props} />
    );
}

TextAreaSkeleton.propTypes = {
    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,
};

export default TextAreaSkeleton;
