import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb as BreadcrumbM } from "carbon-components-react";

function Breadcrumb(props) {
  return (
    <BreadcrumbM {...props}>
      {props.children}
    </BreadcrumbM>
  );
}

Breadcrumb.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: PropTypes.bool,
};

export { Breadcrumb as default };
