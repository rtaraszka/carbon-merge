import React from "react";
import PropTypes from "prop-types";
import { SideNavLink as SideNavLinkM } from "carbon-components-react/lib/components/UIShell";

function SideNavLink(props) {
  return <SideNavLinkM {...props}>{props.children}</SideNavLinkM>;
}

SideNavLink.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify the text content for the link
   */
  children: PropTypes.string
};

export { SideNavLink as default };
