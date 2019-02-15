import React from "react";
import PropTypes from "prop-types";
import { ToolbarTitle as ToolbarTitleM } from "carbon-components-react";

function ToolbarTitle(props) {
  return <ToolbarTitleM {...props}>{props.children}</ToolbarTitleM>;
}

ToolbarTitle.propTypes = {
  /**
   * Specify the title of the Toolbar
   */
  title: PropTypes.string,
};

export { ToolbarTitle as default };
