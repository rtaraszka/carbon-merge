import React from "react";
import PropTypes from "prop-types";
import { RadioButtonGroup as RadioButtonGroupComponent } from "carbon-components-react";

function RadioButtonGroup(props) {
  return (
      <RadioButtonGroupComponent {...props} />
  );
}

RadioButtonGroup.propTypes = {
  /**
   * Provide a collection of <RadioButton> components to render in the group
   */
  children: PropTypes.node,

  /**
   * Provide an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the <RadioButton> to be selected by default
   */
  defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify the name of the underlying <input> nodes
   */
  name: PropTypes.string.isRequired,

  /**
   * Specify whether the group is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  onChange: PropTypes.func,

  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RadioButtonGroup;
