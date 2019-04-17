import React from "react";
import PropTypes from "prop-types";
import { RadioButton as RadioButtonComponent } from "carbon-components-react";

function RadioButton(props) {
  return (
      <RadioButtonComponent {...props} />
  );
}

RadioButton.propTypes = {
  /**
   * Specify whether the <RadioButton> is currently checked
   */
  checked: PropTypes.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether the <RadioButton> should be checked by default
   */
  defaultChecked: PropTypes.bool,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: PropTypes.string,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide where label text should be placed
   */
  labelPosition: PropTypes.string,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes.string,

  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: PropTypes.func,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying <input> changes
   */
  onChange: PropTypes.func,

  /**
   * Specify the value of the <RadioButton>
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

RadioButton.defaultProps = {
  labelText: '',
  labelPosition: 'right',
  value: '',
};

export default RadioButton;
