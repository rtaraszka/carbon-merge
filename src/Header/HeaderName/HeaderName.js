import React from "react";
import PropTypes from "prop-types";
import { HeaderName as HeaderNameM } from "carbon-components-react/lib/components/UIShell";

function HeaderName(props) {
  return <HeaderNameM {...props}>{props.children}</HeaderNameM>;
}

HeaderName.propTypes = {
  /**
   * Pass in children that are either a string or can be read as a string by
   * screen readers
   */
  children: PropTypes.node.isRequired,

  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Optionally specify a prefix to your header name. Useful for companies, for
   * example: IBM [Product Name] versus solely [Product Name]
   */
  prefix: PropTypes.string,

  /**
   * Provide an href for the name to link to
   */
  href: PropTypes.string
};

export { HeaderName as default };
