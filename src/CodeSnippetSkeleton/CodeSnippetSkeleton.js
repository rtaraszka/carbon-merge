import React from "react";
import PropTypes from "prop-types";
import { CodeSnippetSkeleton as CodeSnippetSkeletonComponent } from "carbon-components-react";

function CodeSnippetSkeleton(props) {
    return (
        <CodeSnippetSkeletonComponent {...props} />
    );
}

CodeSnippetSkeleton.propTypes = {
    /**
     * The type of code snippet
     * can be single or multi
     */
    type: PropTypes.oneOf(['single', 'multi']),

    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,
};

CodeSnippetSkeleton.defaultProps = {
    type: 'single',
};

export default CodeSnippetSkeleton;
