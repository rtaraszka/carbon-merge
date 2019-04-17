import React from "react";
import PropTypes from "prop-types";
import { SelectItem as SelectItemComponent } from "carbon-components-react";

function SelectItem(props) {
  return <SelectItemComponent {...props} />;
}

SelectItem.propTypes = {
  /**
   * Specify the value of the <SelectItem>
   */
  value: PropTypes.string.isRequired,

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
  text: PropTypes.string.isRequired,
};

export default SelectItem;
