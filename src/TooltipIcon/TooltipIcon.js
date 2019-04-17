import React from "react";
import PropTypes from "prop-types";
import { TooltipIcon as TooltipIconComponent } from "carbon-components-react";

function TooltipIcon(props) {
    return (
        <TooltipIconComponent {...props} />
    );
}

TooltipIcon.propTypes = {
    /**
     * Specify an icon as children that will be used as the tooltip trigger. This
     * can be an icon from our Icon component, or a custom SVG element.
     */
    children: PropTypes.node.isRequired,

    /**
     * Specify the direction of the tooltip. Can be either bottom or top.
     */
    direction: PropTypes.oneOf(['bottom', 'top']).isRequired,

    /**
     * Provide the text that will be displayed in the tooltip when it is rendered.
     */
    tooltipText: PropTypes.node.isRequired,
};

TooltipIcon.defaultProps = {
    direction: 'bottom',
};

export default TooltipIcon;
