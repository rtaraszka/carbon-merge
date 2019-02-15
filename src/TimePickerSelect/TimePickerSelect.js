import React from "react";
import PropTypes from "prop-types";
import { TimePickerSelect as TimePickerSelectM } from "carbon-components-react";

function TimePickerSelect(props) {
  return <TimePickerSelectM {...props}>{props.children}</TimePickerSelectM>;
}

TimePickerSelect.propTypes = {
  /**
     * Provide the contents of your TimePickerSelect
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the node containing the label and the select box
     */
    className: PropTypes.string,

    /**
     * Specify a custom `id` for the `<select>`
     */
    id: PropTypes.string,

    /**
     * Specify whether you want the inline version of this control
     */
    inline: PropTypes.bool,

    /**
     * Specify whether the control is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Optionally provide the default value of the `<select>`
     */
    defaultValue: PropTypes.any,

    /**
     * Provide a description for the twistie icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Specify whether the label should be hidden, or not
     */
    hideLabel: PropTypes.bool,

    /**
     * Provide label text to be read by screen readers when interacting with the
     * control
     */
    labelText: PropTypes.node,
};

export { TimePickerSelect as default };
