import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigation as HeaderNavigationM } from "carbon-components-react/lib/components/UIShell";

function HeaderNavigation(props) {
  return <HeaderNavigationM {...props}>{props.children}</HeaderNavigationM>;
}

HeaderNavigation.propTypes = {
  /**
   * Optionally provide a custom class to apply to the underlying <nav> node
   */
  className: PropTypes.string,

  /**
   * Provide valid children of HeaderNavigation, for example `HeaderMenuItem`
   * or `HeaderMenu`
   */
  children: PropTypes.node
};

export { HeaderNavigation as default };
