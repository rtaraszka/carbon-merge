import React from "react";
import PropTypes from "prop-types";
import { DatePickerInput as DatePickerInputM } from "carbon-components-react";

function DatePickerInput(props) {
  return <DatePickerInputM {...props} />;
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
  labelText: PropTypes.string,
  type: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.false,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  openCalendar: PropTypes.bool,
  placeholder: PropTypes.string
};

export { DatePickerInput as default };
