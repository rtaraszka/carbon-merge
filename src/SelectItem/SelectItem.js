import React from "react";
import PropTypes from "prop-types";
import { SelectItem as SelectItemM } from "carbon-components-react";

function SelectItem(props) {
  return <SelectItemM {...props} />;
}

SelectItem.propTypes = {
  /**
   * Specify the value of the <SelectItem>
   */
  value: PropTypes.string,

  /**
   * Specify an optional className to be applied to the node
   */
  className: PropTypes.string,

  /**
   * Specify whether the <SelectItem> should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether the <SelectItem> is hidden
   */
  hidden: PropTypes.bool,

  /**
   * Provide the contents of your <SelectItem>
   */
  text: PropTypes.string,
};

export { SelectItem as default };
