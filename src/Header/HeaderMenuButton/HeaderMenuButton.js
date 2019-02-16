import React from "react";
import PropTypes from "prop-types";
import { HeaderMenuButton as HeaderMenuButtonM } from "carbon-components-react/lib/components/UIShell";

function HeaderMenuButton(props) {
  return <HeaderMenuButtonM {...props}>{props.children}</HeaderMenuButtonM>;
}

HeaderMenuButton.propTypes = {
  children: PropTypes.node,
    /**
   * Optionally provide a custom class name that is applied to the underlying
   * button
   */
  className: PropTypes.string,

  /**
   * Optionally provide an onClick handler that is called when the underlying
   * button fires it's onclick event
   */
  onClick: PropTypes.func,

  /**
   * Specify whether the action is currently active
   */
  isActive: PropTypes.bool
};

export { HeaderMenuButton as default };
