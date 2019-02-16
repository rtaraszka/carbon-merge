import React from "react";
import PropTypes from "prop-types";
import {   HeaderGlobalAction as   HeaderGlobalActionM } from "carbon-components-react/lib/components/UIShell";

function   HeaderGlobalAction(props) {
  return (
    <  HeaderGlobalActionM {...props}>
      {props.children}
    </  HeaderGlobalActionM>
  );
}

 HeaderGlobalAction.propTypes = {
     /**
   * Provide a custom icon for this global action
   */
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

export {   HeaderGlobalAction as default };
