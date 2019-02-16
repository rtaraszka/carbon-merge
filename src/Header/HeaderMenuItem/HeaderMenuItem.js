import React from "react";
import PropTypes from "prop-types";
import { HeaderMenuItem as HeaderMenuItemM } from "carbon-components-react/lib/components/UIShell";

function HeaderMenuItem(props) {
  return <HeaderMenuItemM {...props}>{props.children}</HeaderMenuItemM>;
}

HeaderMenuItem.propTypes = {
   /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Pass in children that are either a string or can be read as a string by
   * screen readers
   */
  children: PropTypes.node.isRequired,

  /**
   * Optionally supply a role for the underlying <li> node. Useful for resetting
   * <ul> semantics for menus.
   */
  role: PropTypes.string
};

export { HeaderMenuItem as default };
