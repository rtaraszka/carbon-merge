import React from "react";
import PropTypes from "prop-types";
import { ButtonSkeleton as ButtonSkeletonComponent } from "carbon-components-react";

function ButtonSkeleton(props) {
    return (
        <ButtonSkeletonComponent {...props} />
    );
}

ButtonSkeleton.propTypes = {
    /**
     * Specify whether the Button should be a small variant
     */
    small: PropTypes.bool,

    /**
     * Optionally specify an href for your Button to become an <a> element
     */
    href: PropTypes.string,
};

ButtonSkeleton.defaultProps = {
    small: false,
};

export default ButtonSkeleton;
