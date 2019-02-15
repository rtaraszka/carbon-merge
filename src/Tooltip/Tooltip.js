import React from "react";
import PropTypes from "prop-types";
import { Tooltip as TooltipM } from "carbon-components-react";

function Tooltip(props) {
  return <TooltipM {...props}>{props.children}</TooltipM>;
}

Tooltip.propTypes = {
    /**
     * The ID of the trigger button.
     */
    triggerId: PropTypes.string,

    /**
     * The ID of the tooltip content.
     */
    tooltipId: PropTypes.string,

    /**
     * Open/closed state.
     */
    open: PropTypes.bool,

    /**
     * Contents to put into the tooltip.
     */
    children: PropTypes.node,

    /**
     * The CSS class names of the tooltip.
     */
    className: PropTypes.string,

    /**
     * The CSS class names of the trigger UI.
     */
    triggerClassName: PropTypes.string,

    /**
     * Where to put the tooltip, relative to the trigger UI.
     */
    direction: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),

    /**
     * The adjustment of the tooltip position.
     */
    menuOffset: PropTypes.oneOfType([
      PropTypes.shape({
        top: PropTypes.number,
        left: PropTypes.number,
      }),
      PropTypes.func,
    ]),

    /**
     * The content to put into the trigger UI, except the (default) tooltip icon.
     */
    triggerText: PropTypes.node,

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
     * The description of the default tooltip icon, to be put in its SVG 'aria-label' and 'alt' .
     */
    iconDescription: PropTypes.string,

    /**
     * The title of the default tooltip icon, to be put in its SVG `<title>` element.
     */
    iconTitle: PropTypes.string,

    /**
     * `true` if opening tooltip should be triggered by clicking the trigger button.
     */
    clickToOpen: PropTypes.bool,

    /**
     * Optional prop to specify the tabIndex of the Tooltip
     */
    tabIndex: PropTypes.number, 
};

export { Tooltip as default };
