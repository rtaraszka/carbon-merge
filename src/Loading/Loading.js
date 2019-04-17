import React from "react";
import PropTypes from "prop-types";
import { Loading as LoadingComponent } from "carbon-components-react";

function Loading(props) {
  return <LoadingComponent {...props} />;
}

Loading.propTypes = {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: PropTypes.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: PropTypes.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: PropTypes.bool,
};

export default Loading;
