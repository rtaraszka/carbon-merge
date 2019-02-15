import React from "react";
import PropTypes from "prop-types";
import { Notification as NotificationM } from "carbon-components-react";

function Notification(props) {
  return <NotificationM {...props} />;
}

Notification.propTypes = {
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify what state the notification represents
   */
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * Specify the title
   */
  title: PropTypes.string,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.string,

  /**
   * Specify the caption
   */
  caption: PropTypes.string,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool,
};

export { Notification as default };
