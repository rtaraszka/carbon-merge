import React from "react";
import PropTypes from "prop-types";
import { SideNavHeader as SideNavHeaderM } from "carbon-components-react/lib/components/UIShell";

function SideNavHeader(props) {
  return <SideNavHeaderM {...props}>{props.children}</SideNavHeaderM>;
}

SideNavHeader.propTypes = {
   /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide an icon to render in the header of the side navigation. Should be
   * an <svg> element.
   */
  icon: PropTypes.node.isRequired
}

export { SideNavHeader as default };
