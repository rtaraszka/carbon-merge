import React from "react";
import PropTypes from "prop-types";
import { Copy as CopyM } from "carbon-components-react";

function Copy(props) {
  return <CopyM {...props}>{props.children}</CopyM>;
}

Copy.propTypes = {
  /**
   * Pass in content to be rendred in the underlying <button>
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the underlying <button>
   */
  className: PropTypes.string,

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

export { Copy as default };
