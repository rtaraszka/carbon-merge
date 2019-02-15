import React from "react";
import PropTypes from "prop-types";
import { RadioTile as RadioTileM } from "carbon-components-react";

function RadioTile(props) {
  return <RadioTileM {...props}>{props.children}</RadioTileM>;
}

RadioTile.propTypes = {
      /**
     * `true` if this tile should be selected.
     */
    checked: PropTypes.bool,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * `true` if the `<input>` should be checked at initialization.
     */
    defaultChecked: PropTypes.bool,

    /**
     * The ID of the `<input>`.
     */
    id: PropTypes.string,

    /**
     * The `name` of the `<input>`.
     */
    name: PropTypes.string,

    /**
     * The description of the tile checkmark icon.
     */
    iconDescription: PropTypes.string,

    /**
     * The handler of the massaged `change` event on the `<input>`.
     */
    onChange: PropTypes.func,

    /**
     * The `value` of the `<input>`.
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Specify the tab index of the wrapper element
     */
    tabIndex: PropTypes.number,
};

export { RadioTile as default };
