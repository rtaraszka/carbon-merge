import React from "react";
import PropTypes from "prop-types";
import { SelectSkeleton as SelectSkeletonComponent } from "carbon-components-react";

function SelectSkeleton(props) {
    return (
        <SelectSkeletonComponent {...props} />
    );
}

SelectSkeleton.propTypes = {
    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,
};

export default SelectSkeleton;
