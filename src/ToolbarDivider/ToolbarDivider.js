import React from "react";
import PropTypes from "prop-types";
import { ToolbarDivider as ToolbarDividerM } from "carbon-components-react";

function ToolbarDivider(props) {
  return <ToolbarDividerM {...props}>{props.children}</ToolbarDividerM>;
}

ToolbarDivider.propTypes = {
};

export { ToolbarDivider as default };
