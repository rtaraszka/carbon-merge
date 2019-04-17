import React from "react";
import PropTypes from "prop-types";
import { SkeletonText as SkeletonTextComponent } from "carbon-components-react";

function SkeletonText(props) {
    return (
        <SkeletonTextComponent {...props} />
    );
}

SkeletonText.propTypes = {
    /**
     * will generate multiple lines of text
     */
    paragraph: PropTypes.bool,
    /**
     * the number of lines in a paragraph
     */
    lineCount: PropTypes.number,
    /**
     * width (in px or %) of single line of text or max-width of paragraph lines
     */
    width: PropTypes.string,
    /**
     * generates skeleton text at a larger size
     */
    heading: PropTypes.bool,
    /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,
};

SkeletonText.defaultProps = {
    paragraph: false,
    width: '100%',
    heading: false,
    lineCount: 3,
};

export default SkeletonText;
