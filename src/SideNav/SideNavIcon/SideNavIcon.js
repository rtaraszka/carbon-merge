import React from "react";
import PropTypes from "prop-types";
import { SideNavIcon as SideNavIconM } from "carbon-components-react/lib/components/UIShell";

function SideNavIcon(props) {
  return <SideNavIconM {...props}>{props.children}</SideNavIconM>;
}

SideNavIcon.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: PropTypes.node.isRequired,

  /**
   * Specify whether the icon should be placed in a smaller bounding box
   */
  small: PropTypes.bool.isRequired
};

export { SideNavIcon as default };
