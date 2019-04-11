import React from "react";
import PropTypes from "prop-types";
import { TooltipDefinition as TooltipDefinitionComponent } from "carbon-components-react";

function TooltipDefinition(props) {
  return (
      <TooltipDefinitionComponent {...props} />
  );
}

TooltipDefinition.propTypes = {
  /**
   * Specify the tooltip trigger text that is rendered to the UI for the user to
   * interact with in order to display the tooltip.
   */
  children: PropTypes.string.isRequired,

  /**
   * Specify the direction of the tooltip. Can be either bottom or top.
   */
  direction: PropTypes.oneOf(['top', 'bottom']).isRequired,

  /**
   * Optionally specify a custom id for the tooltip. If one is not provided, we
   * generate a unique id for you.
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be displayed in the tooltip when it is rendered.
   */
  tooltipText: PropTypes.node.isRequired,
};

TooltipDefinition.defaultProps = {
  direction: 'bottom',
};

export default TooltipDefinition;
