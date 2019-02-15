import React from "react";
import PropTypes from "prop-types";
import { TooltipSimple as TooltipSimpleM } from "carbon-components-react";

function TooltipSimple(props) {
  return <TooltipSimpleM {...props}>{props.children}</TooltipSimpleM>;
}

TooltipSimple.propTypes = {
   /**
   * The content to put into the trigger UI, except the (default) tooltip icon.
   */
  children: PropTypes.node,

  /**
   * The CSS class names of the tooltip.
   */
  className: PropTypes.string,

  /**
   * Where to put the tooltip, relative to the trigger UI.
   */
  position: PropTypes.oneOf(['bottom', 'top']),

  /**
   * Contents to put into the tooltip.
   */
  text: PropTypes.string,

  /**
   * `true` to show the default tooltip icon.
   */
  showIcon: PropTypes.bool,

  /**
   * The the default tooltip icon.
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string,
    svgData: PropTypes.object,
  }),

  /**
   * The name of the default tooltip icon.
   */
  iconName: PropTypes.string,

  /**
   * The description of the default tooltip icon, to be put in its SVG `<title>` element.
   */
  iconDescription: PropTypes.string,
};

export { TooltipSimple as default };
