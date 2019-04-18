import React from "react";
import PropTypes from "prop-types";
import { SearchSkeleton as SearchSkeletonComponent } from "carbon-components-react";

function SearchSkeleton(props) {
    return (
        <SearchSkeletonComponent {...props} />
    );
}

SearchSkeleton.propTypes = {
    /**
     * Specify whether the Search should be a small variant
     */
    small: PropTypes.bool,
};

SearchSkeleton.defaultProps = {
    small: false,
};

export default SearchSkeleton;
