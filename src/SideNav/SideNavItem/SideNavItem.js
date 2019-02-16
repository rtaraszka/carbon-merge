import React from "react";
import PropTypes from "prop-types";
import { SideNavItem as SideNavItemM } from "carbon-components-react/lib/components/UIShell";

function SideNavItem(props) {
  return <SideNavItemM {...props}>{props.children}</SideNavItemM>;
}

SideNavItem.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: PropTypes.node
};

export { SideNavItem as default };
