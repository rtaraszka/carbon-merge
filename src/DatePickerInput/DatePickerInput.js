import React from "react";
import PropTypes from "prop-types";
import { DatePickerInput as DatePickerInputComponent } from "carbon-components-react";

function DatePickerInput(props) {
  return <DatePickerInputComponent {...props} />;
}

DatePickerInput.propTypes = {
  /**
   * Specify an id that unique identifies the <input>
   */
  id: PropTypes.string.isRequired,

  /**
   * The description of the calendar icon.
   */
  iconDescription: PropTypes.string,
};

DatePickerInput.defaultProps = {
  pattern: '\\d{1,2}\\/\\d{1,2}\\/\\d{4}',
  type: 'text',
  disabled: false,
  invalid: false,
  labelText: '',
};

export default DatePickerInput;
