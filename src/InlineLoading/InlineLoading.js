import React from "react";
import PropTypes from "prop-types";
import { InlineLoading as InlineLoadingM } from "carbon-components-react";

function InlineLoading(props) {
  return <InlineLoadingM {...props} />;
}

InlineLoading.propTypes = {
    /**
     * Specify a custom className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify whether the load was successful
     */
    success: PropTypes.bool,

    /**
     * Specify the description for the inline loading text
     */
    description: PropTypes.string,

    /**
     * Provide an optional handler to be inovked when <InlineLoading> is
     * successful
     */
    onSuccess: PropTypes.func,

    /**
     * Provide a delay for the `setTimeout` for success
     */
    successDelay: PropTypes.number,
};

export { InlineLoading as default };
