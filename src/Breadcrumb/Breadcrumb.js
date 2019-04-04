import React from "react";
import PropTypes from "prop-types";
import { Breadcrumb as BreadcrumbComponent } from "carbon-components-react";

function Breadcrumb(props) {
  return (
    <BreadcrumbComponent {...props} />
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

export default Breadcrumb;
