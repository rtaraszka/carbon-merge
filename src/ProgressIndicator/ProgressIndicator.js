import React from "react";
import PropTypes from "prop-types";
import { ProgressIndicator as ProgressIndicatorM } from "carbon-components-react";

function ProgressIndicator(props) {
  return <ProgressIndicatorM {...props}>{props.children}</ProgressIndicatorM>;
}

ProgressIndicator.propTypes = {
  /**
   * Provide <ProgressStep> components to be rendered in the
   * <ProgressIndicator>
   */
  children: PropTypes.node,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Optionally specify the current step array index
   */
  currentIndex: PropTypes.number
};

export { ProgressIndicator as default };
