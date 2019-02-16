import React from "react";
import PropTypes from "prop-types";
import { SideNavMenu as SideNavMenuM } from "carbon-components-react/lib/components/UIShell";

function SideNavMenu(props) {
  return <SideNavMenuM {...props}>{props.children}</SideNavMenuM>;
}

SideNavMenu.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide <SideNavMenuItem>'s inside of the `SideNavMenu`
   */
  children: PropTypes.node,

  /**
   * Pass in a custom icon to render next to the `SideNavMenu` title
   */
  icon: PropTypes.node,

  /**
   * Specify whether the `SideNavMenu` is "active". `SideNavMenu` should be
   * considered active if one of its menu items are a link for the current
   * page.
   */
  isActive: PropTypes.bool,

  /**
   * Provide the text for the overall menu name
   */
  title: PropTypes.string,

  /**
   * Specify whether the menu should default to expanded. By default, it will
   * be closed.
   */
  defaultExpanded: PropTypes.bool
};

export { SideNavMenu as default };
