import React from "react";
import PropTypes from "prop-types";
import { Link as LinkComponent } from "carbon-components-react";

function Link(props) {
  return <LinkComponent {...props} />;
}

Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: PropTypes.string,
};

export default Link;
