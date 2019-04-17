import React from "react";
import PropTypes from "prop-types";
import { ToolbarTitle as ToolbarTitleComponent } from "carbon-components-react";

function ToolbarTitle(props) {
  return (
      <ToolbarTitleComponent {...props} />
  );
}

ToolbarTitle.propTypes = {
  /**
   * Specify the title of the Toolbar
   */
  title: PropTypes.string,
};

export default ToolbarTitle;
