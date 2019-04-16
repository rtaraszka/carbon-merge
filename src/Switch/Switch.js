import React from "react";
import PropTypes from "prop-types";
import { Switch as SwitchComponent } from "carbon-components-react";

function Switch(props) {
  return (
    <SwitchComponent {...props} />
  );
}

Switch.propTypes = {
  /**
   * Specify an optional className to be added to your Switch
   */
  className: PropTypes.string,

  /**
   * The index of your Switch in your ContentSwitcher that is used for event handlers.
   * Reserved for usage in ContentSwitcher
   */
  index: PropTypes.number,

  /**
   * Specify whether the <Switch> should be used as a <button> element or an <a> element
   */
  kind: PropTypes.oneOf(['button', 'anchor']),

  /**
   * Provide the name of your Switch that is used for event handlers
   */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in ContentSwitcher
   */
  onClick: PropTypes.func,

  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in ContentSwitcher
   */
  onKeyDown: PropTypes.func,

  /**
   * Whether your Switch is selected. Reserved for usage in ContentSwitcher
   */
  selected: PropTypes.bool,

  /**
   * Provide the contents of your Switch
   */
  text: PropTypes.string,

  /**
   * Specify an icon to include in your Switch
   */
  icon: PropTypes.element,

  /**
   * Optional string representing the link location for the Switch,
   * if Switch is used as an <a> element
   */
  href: PropTypes.string,
};

export default Switch;
