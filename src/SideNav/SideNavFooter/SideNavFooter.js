import React from "react";
import PropTypes from "prop-types";
import { SideNavFooter as SideNavFooterM } from "carbon-components-react/lib/components/UIShell";

function SideNavFooter(props) {
  return <SideNavFooterM {...props}>{props.children}</SideNavFooterM>;
}

SideNavFooter.propTypes = {
  /**
   * Provide text to be read to screen readers and shown as a tooltip when
   * interacting with the toggle button in the footer
   */
  assistiveText: PropTypes.string,

  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isExpanded: PropTypes.bool,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggle: PropTypes.func
};

export { SideNavFooter as default };
