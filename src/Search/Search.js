import React from "react";
import PropTypes from "prop-types";
import { Search as SearchM } from "carbon-components-react";

function Search(props) {
  return <SearchM {...props} />;
}

Search.propTypes = {
     /**
     * Specify an optional className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Optional prop to specify the type of the `<input>`
     */
    type: PropTypes.string,

    /**
     * Specify whether the Search should be a small variant
     */
    small: PropTypes.bool,

    /**
     * Provide an optional placeholder text for the Search
     */
    placeHolderText: PropTypes.string,

    /**
     * Provide an optional label text for the Search icon
     */
    labelText: PropTypes.node,

    /**
     * Specify a custom `id` for the input
     */
    id: PropTypes.string,

    /**
     * Specify a label to be read by screen readers on the "close" button
     */
    closeButtonLabelText: PropTypes.string,

    /**
     * `true` to use the light version.
     */
    light: PropTypes.bool,
};

export { Search as default };
