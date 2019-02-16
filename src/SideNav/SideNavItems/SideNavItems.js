import React from "react";
import PropTypes from "prop-types";
import { SideNavItems as SideNavItemsM } from "carbon-components-react/lib/components/UIShell";

function SideNavItems(props) {
  return <SideNavItemsM {...props}>{props.children}</SideNavItemsM>;
}

SideNavItems.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: PropTypes.node.isRequired
};

export { SideNavItems as default };
