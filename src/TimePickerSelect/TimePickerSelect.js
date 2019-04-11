import React from "react";
import PropTypes from "prop-types";
import { TimePickerSelect as TimePickerSelectComponent } from "carbon-components-react";

function TimePickerSelect(props) {
  return (
      <TimePickerSelectComponent {...props} />
  );
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
  id: PropTypes.string.isRequired,

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
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node.isRequired,
};

TimePickerSelect.defaultProps = {
  disabled: false,
  inline: true,
  iconDescription: 'open list of options',
  hideLabel: true,
};

export default TimePickerSelect;
