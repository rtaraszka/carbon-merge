import React from "react";
import PropTypes from "prop-types";
import { SideNavSwitcher as SideNavSwitcherM } from "carbon-components-react/lib/components/UIShell";

function SideNavSwitcher(props) {
  return <SideNavSwitcherM {...props}>{props.children}</SideNavSwitcherM>;
}

SideNavSwitcher.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide the label for the switcher. This will be the firt visible option
   * when someone views this control
   */
  labelText: PropTypes.string.isRequired,

  /**
   * Provide a callback function that is called whenever the switcher value is
   * updated
   */
  onChange: PropTypes.func,

  /**
   * Provide an array of options to be rendered in the switcher as an
   * `<option>`. The text value will be what is displayed to the user and is set
   * as the `value` prop for each `<option>`.
   */
  options: PropTypes.arrayOf(PropTypes.string)
};

export { SideNavSwitcher as default };
