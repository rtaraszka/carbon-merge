import React from "react";
import PropTypes from "prop-types";
import { SideNavLinkText as SideNavLinkTextM } from "carbon-components-react/lib/components/UIShell";

function SideNavLinkText(props) {
  return <SideNavLinkTextM {...props}>{props.children}</SideNavLinkTextM>;
}

SideNavLinkText.propTypes = {
  /**
   * Provide the content for the link text
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string
};

export { SideNavLinkText as default };
