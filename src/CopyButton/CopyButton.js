import React from "react";
import PropTypes from "prop-types";
import { CopyButton as CopyButtonM } from "carbon-components-react";

function CopyButton(props) {
  return (
    <div style={{"position": "relative", "width": "40px", "height": "40px", "margin": "0"}}>
      <CopyButtonM {...props} />
    </div>
  );
}

CopyButton.propTypes = {
  /**
   * Specify an optional className to be applied to the underlying <button>
   */
  className: PropTypes.string,

  /**
   * Provide a description for the icon representing the copy action that can
   * be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify the string that is displayed when the button is clicked and the
   * content is copied
   */
  feedback: PropTypes.string,

  /**
   * Specify the time it takes for the feedback message to timeout
   */
  feedbackTimeout: PropTypes.number,

  /**
   * Specify an optional `onClick` handler that is called when the underlying
   * <button> is clicked
   */
  onClick: PropTypes.func
};

export { CopyButton as default };
