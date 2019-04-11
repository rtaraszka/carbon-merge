import React from "react";
import PropTypes from "prop-types";
import { SkeletonPlaceholder as SkeletonPlaceholderComponent } from "carbon-components-react";

function SkeletonPlaceholder(props) {
    return (
        <SkeletonPlaceholderComponent {...props} />
    );
}

SkeletonPlaceholder.propTypes = {
    /**
     * the class to be applied to the component
     */
    className: PropTypes.string,
};

export default SkeletonPlaceholder;
