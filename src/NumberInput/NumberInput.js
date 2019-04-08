import React from "react";
import PropTypes from "prop-types";
import { NumberInput as NumberInputComponent } from "carbon-components-react";

function NumberInput(props) {
  return <NumberInputComponent {...props} />;
}

NumberInput.propTypes = {
/**
     * Specify an optional className to be applied to the wrapper node
     */
    className: PropTypes.string,

    /**
     * Specify if the control should be disabled, or not
     */
    disabled: PropTypes.bool,

    /**
     * Specify whether you want the underlying label to be visually hidden
     */
    hideLabel: PropTypes.bool,

    /**
     * Provide a description for up/down icons that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Specify a custom `id` for the input
     */
    id: PropTypes.string,

    /**
     * Generic `label` that will be used as the textual representation of what
     * this field is for
     */
    label: PropTypes.node,

    /**
     * The maximum value.
     */
    max: PropTypes.number,

    /**
     * The minimum value.
     */
    min: PropTypes.number,

    /**
     * The new value is available in 'imaginaryTarget.value'
     * i.e. to get the value: evt.imaginaryTarget.value
     */
    onChange: PropTypes.func,

    /**
     * Provide an optional function to be called when the up/down button is clicked
     */
    onClick: PropTypes.func,

    /**
     * Specify how much the valus should increase/decrease upon clicking on up/down button
     */
    step: PropTypes.number,

    /**
     * Specify the value of the input
     */
    value: PropTypes.number,

    /**
     * Specify if the currently value is invalid.
     */
    invalid: PropTypes.bool,

    /**
     * Message which is displayed if the value is invalid.
     */
    invalidText: PropTypes.string,

    /**
     * Provide text that is used alongside the control label for additional help
     */
    helperText: PropTypes.node,

    /**
     * `true` to use the light version.
     */
    light: PropTypes.bool,

    /**
     * `true` to allow empty string.
     */
    allowEmpty: PropTypes.bool,
};

export default NumberInput;
