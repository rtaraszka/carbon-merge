import React from "react";
import PropTypes from "prop-types";
import { SelectItemGroup as SelectItemGroupM } from "carbon-components-react";

function SelectItemGroup(props) {
  return <SelectItemGroupM {...props}>{props.children}</SelectItemGroupM>;
}

SelectItemGroup.propTypes = {
  /**
   * Provide the contents of your <SelectItemGroup>
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the node
   */
  className: PropTypes.string,

  /**
   * Specify whether the <SelectItemGroup> should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify the label to be displayed
   */
  label: PropTypes.string
};

export { SelectItemGroup as default };
