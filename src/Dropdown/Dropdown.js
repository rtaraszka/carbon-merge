import React from "react";
import PropTypes from "prop-types";
import { Dropdown as DropdownM } from "carbon-components-react";

function Dropdown(props) {
  return <DropdownM {...props}>{props.children}</DropdownM>;
}

Dropdown.propTypes = {
  /**
   * Specify a label to be read by screen readers on the container node
   */
  ariaLabel: PropTypes.string,

  /**
   * Specify the drop down items
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the text for the trigger button until a selection is made
   */
  defaultText: PropTypes.string,

  /**
   * Specify the value of the selected dropdown item
   */
  value: PropTypes.string,

  /**
   * Specify the tab index of the container node
   */
  tabIndex: PropTypes.number,

  onClick: PropTypes.func,

  /**
   * Specify an `onChange` handler that is called whenever the Dropdown
   * changes which item is selected
   */
  onChange: PropTypes.func,

  /**
   * Function called when menu is open
   */
  onOpen: PropTypes.func,

  /**
   * Function called when menu is closed
   */
  onClose: PropTypes.func,

  /**
   * Specify the text content of the selected dropdown item
   */
  selectedText: PropTypes.string,

  /**
   * `true` if the menu should be open.
   */
  open: PropTypes.bool,

  /**
   * Specify a description for the twistie icon that can be read by screen
   * readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool
};

export { Dropdown as default };
