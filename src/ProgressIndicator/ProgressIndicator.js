import React from "react";
import PropTypes from "prop-types";
import { ProgressIndicator as ProgressIndicatorComponent } from "carbon-components-react";

function ProgressIndicator(props) {
  return (
      <ProgressIndicatorComponent {...props} />
  );
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
  currentIndex: PropTypes.number,

  /**
   * Optional callback called if a ProgressStep is clicked on.  Returns the index of the step.
   */
  onChange: PropTypes.func,
};

export default ProgressIndicator;
