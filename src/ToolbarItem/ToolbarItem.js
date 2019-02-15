import React from "react";
import PropTypes from "prop-types";
import { ToolbarItem as ToolbarItemM } from "carbon-components-react";

function ToolbarItem(props) {
  return <ToolbarItemM {...props}>{props.children}</ToolbarItemM>;
}

ToolbarItem.propTypes = {
  /**
   * Specify the contents of the ToolbarItem
   */
  children: PropTypes.node,

  /**
   * Specify the type of the ToolbarItem. The `search` type will render a
   * `ToolbarSearch` component
   */
  type: PropTypes.string,

  /**
   * Specify the placeholder text for the ToolbarSearch component. Useful if
   * `type` is set to 'search'
   */
  placeHolderText: PropTypes.string,
};

export { ToolbarItem as default };
