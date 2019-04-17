import React from "react";
import PropTypes from "prop-types";
import { ToolbarOption as ToolbarOptionComponent } from "carbon-components-react";

function ToolbarOption(props) {
  return (
      <ToolbarOptionComponent {...props} />
  );
}

ToolbarOption.propTypes = {
  /**
   * Specify the contents of the ToolbarOption
   */
  children: PropTypes.node,
};

export default ToolbarOption;
