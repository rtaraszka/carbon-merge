import React from "react";
import PropTypes from "prop-types";
import { TimePicker as TimePickerComponent } from "carbon-components-react";

function TimePicker(props) {
  return (
      <TimePickerComponent {...props} />
  );
}

TimePicker.propTypes = {
   /**
    * Pass in the children that will be rendered next to the form control
    */
   children: PropTypes.node,

   /**
    * Specify an optional className to be applied to the container node
    */
   className: PropTypes.string,

   /**
    * Specify a custom `id` for the <input>
    */
   id: PropTypes.string.isRequired,

   /**
    * Provide the text that will be read by a screen reader when visiting this
    * control
    */
   labelText: PropTypes.node,

   /**
    * Optionally provide an `onClick` handler that is called whenever the
    * <input> is clicked
    */
   onClick: PropTypes.func,

   /**
    * Optionally provide an `onChange` handler that is called whenever <input>
    * is updated
    */
   onChange: PropTypes.func,

   /**
    * Optionally provide an `onBlur` handler that is called whenever the
    * <input> loses focus
    */
   onBlur: PropTypes.func,

   /**
    * Specify the type of the <input>
    */
   type: PropTypes.string,

   /**
    * Specify the regular expression working as the pattern of the time string in <input>
    */
   pattern: PropTypes.string,

   /**
    * Specify the placeholder attribute for the <input>
    */
   placeholder: PropTypes.string,

   /**
    * Specify the maximum length of the time string in <input>
    */
   maxLength: PropTypes.number,

   /**
    * Specify whether the control is currently invalid
    */
   invalid: PropTypes.bool,

   /**
    * Provide the text that is displayed when the control is in an invalid state
    */
   invalidText: PropTypes.string,

   /**
    * Specify whether you want the underlying label to be visually hidden
    */
   hideLabel: PropTypes.bool,

   /**
    * Specify whether the <input> should be disabled
    */
   disabled: PropTypes.bool,

   /**
    * Specify the value of the <input>
    */
   value: PropTypes.string,

   /**
    * `true` to use the light version.
    */
   light: PropTypes.bool,
};

TimePicker.defaultProps = {
   type: 'text',
   pattern: '(1[012]|[1-9]):[0-5][0-9](\\s)?(?i)',
   placeholder: 'hh:mm',
   maxLength: 5,
   invalidText: 'Invalid time format.',
   invalid: false,
   disabled: false,
   light: false,
};

export default TimePicker;
