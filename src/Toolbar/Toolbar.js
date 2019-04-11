import React from "react";
import PropTypes from "prop-types";
import { Toolbar as ToolbarComponent } from "carbon-components-react";

function Toolbar(props) {
  return (
      <ToolbarComponent {...props} />
  );
}

Toolbar.propTypes = {
  /**
   * Specify a collection of ToolbarItem's that should render in the Toolbar
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the containing Toolbar node
   */
  className: PropTypes.string
};

export default Toolbar;
