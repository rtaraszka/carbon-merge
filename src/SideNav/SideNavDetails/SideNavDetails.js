import React from "react";
import PropTypes from "prop-types";
import { SideNavDetails as SideNavDetailsM } from "carbon-components-react/lib/components/UIShell";

function SideNavDetails(props) {
  return <SideNavDetailsM {...props}>{props.children}</SideNavDetailsM>;
}

SideNavDetails.propTypes = {
  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Provide optional children to render in `SideNavDetailsDetails`. Useful for
   * rendering the `SideNavDetailsSwitcher` component.
   */
  children: PropTypes.node,

  /**
   * Provide the text that will be rendered as the title in the component
   */
  title: PropTypes.string.isRequired
};

export { SideNavDetails as default };
