import React from "react";
import PropTypes from "prop-types";
import { IconSkeleton as IconSkeletonComponent } from "carbon-components-react";

function IconSkeleton(props) {
    return (
        <IconSkeletonComponent {...props} />
    );
}

IconSkeleton.propTypes = {
    /**
     * The CSS styles.
     */
    style: PropTypes.object,
};

export default IconSkeleton;
