import React from "react";
import PropTypes from "prop-types";
import { SideNav as SideNavM } from "carbon-components-react/lib/components/UIShell";

function SideNav(props) {
  console.log(props.children);
  return <SideNavM {...props}>{props.children}</SideNavM>;
}

SideNav.propTypes = {
  children: PropTypes.node,
    /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Provide a custom function for translating all message ids within this
   * component. This function will take in two arguments: the mesasge Id and the
   * state of the component. From this, you should return a string representing
   * the label you want displayed or read by screen readers.
   */
  translateById: PropTypes.func
};

export { SideNav as default };
