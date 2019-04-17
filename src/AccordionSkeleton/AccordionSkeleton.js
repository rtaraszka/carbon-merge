import React from "react";
import PropTypes from "prop-types";
import { AccordionSkeleton as AccordionSkeletonComponent } from "carbon-components-react";

function AccordionSkeleton(props) {
    return (
        <AccordionSkeletonComponent {...props} />
    );
}

AccordionSkeleton.propTypes = {
    /**
     * `false` to not display the first item opened
     */
    open: PropTypes.bool,

    /**
     * Set number of items to render
     */
    count: PropTypes.number,

    /**
     * Set unique identifier to generate unique item keys
     */
    uid: PropTypes.any,
};

AccordionSkeleton.defaultProps = {
    open: true,
    count: 4,
    uid: '',
};

export default AccordionSkeleton;
