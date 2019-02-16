import React from "react";
import PropTypes from "prop-types";
import { HeaderMenu as HeaderMenuM } from "carbon-components-react/lib/components/UIShell";

function HeaderMenu(props) {
  return <HeaderMenuM {...props}>{props.children}</HeaderMenuM>;
}

HeaderMenu.propTypes = {
  children: PropTypes.node,
    /**
   * Provide a custom ref handler for the menu button
   */
  focusRef: PropTypes.func,

  /**
   * Optionally provide a tabIndex for the underlying menu button
   */
  tabIndex: PropTypes.number
};

export { HeaderMenu as default };
