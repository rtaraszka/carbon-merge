import React from "react";
import PropTypes from "prop-types";
import { DropdownItem as DropdownItemM } from "carbon-components-react";

function DropdownItem(props) {
  return (
      <DropdownItemM {...props} />
  );
}

DropdownItem.propTypes = {
  /**
   * Specify the value of the <DropdownItem>
   */
  value: PropTypes.string,

  /**
   * Specify the content of the <DropdownItem>
   */
  itemText: PropTypes.string,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide an optional function to be called when the container node is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide an optional function to be called when a key is pressed on the <DropdownItem>
   */
  onKeyPress: PropTypes.func,

  /**
   * Optional string representing the link location for the <DropdownItem>
   */
  href: PropTypes.string,

  /**
   * Specify whether the <DropdownItem> is selected
   */
  selected: PropTypes.bool, 
};

export { DropdownItem as default };
