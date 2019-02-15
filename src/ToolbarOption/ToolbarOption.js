import React from "react";
import PropTypes from "prop-types";
import { ToolbarOption as ToolbarOptionM } from "carbon-components-react";

function ToolbarOption(props) {
  return <ToolbarOptionM {...props}>{props.children}</ToolbarOptionM>;
}

ToolbarOption.propTypes = {
  /**
   * Specify the contents of the ToolbarOption
   */
  children: PropTypes.node,
};

export { ToolbarOption as default };
