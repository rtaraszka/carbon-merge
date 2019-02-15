import React from "react";
import PropTypes from "prop-types";
import { ProgressStep as ProgressStepM } from "carbon-components-react";

function ProgressStep(props) {
  return <ProgressStepM {...props} />;
}

ProgressStep.propTypes = {
/**
   * Provide the label for the <ProgressStep>
   */
  label: PropTypes.node,

  /**
   * Provide an optional className to be applied to the containing <li> node
   */
  className: PropTypes.string,

  /**
   * Specify whether the step is the current step
   */
  current: PropTypes.bool,

  /**
   * Specify whether the step has been completed
   */
  complete: PropTypes.bool,

  /**
   * Provide a description for the <ProgressStep>
   */
  description: PropTypes.string,
};

export { ProgressStep as default };
