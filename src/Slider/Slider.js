import React from "react";
import PropTypes from "prop-types";
import { Slider as SliderM } from "carbon-components-react";

function Slider(props) {
  return <SliderM {...props} />;
}

Slider.propTypes = {
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes.string,

  /**
   * `true` to hide the number input box.
   */
  hideTextInput: PropTypes.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes.string,

  /**
   * The callback to get notified of change in value.
   */
  onChange: PropTypes.func,

  /**
   * The callback to get notified of value on handle release.
   */
  onRelease: PropTypes.func,

  /**
   * The value.
   */
  value: PropTypes.number,

  /**
   * The minimum value.
   */
  min: PropTypes.number,

  /**
   * The label associated with the minimum value.
   */
  minLabel: PropTypes.string,

  /**
   * The maximum value.
   */
  max: PropTypes.number,

  /**
   * The label associated with the maximum value.
   */
  maxLabel: PropTypes.string,

  /**
   * The callback to format the label associated with the minimum/maximum value.
   */
  formatLabel: PropTypes.func,

  /**
   * The label for the slider.
   */
  labelText: PropTypes.node,

  /**
   * A value determining how much the value should increase/decrease by moving the thumb by mouse.
   */
  step: PropTypes.number,

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys,
   * which will be `(max - min) / stepMuliplier`.
   */
  stepMuliplier: PropTypes.number,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * `true` to disable this slider.
   */
  disabled: PropTypes.bool,

  /**
   * The `name` attribute of the `<input>`.
   */
  name: PropTypes.bool,

  /**
   * The `type` attribute of the `<input>`.
   */
  inputType: PropTypes.string,

  /**
   * The `ariaLabel` for the `<input>`.
   */
  ariaLabelInput: PropTypes.string,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool
};

export { Slider as default };
