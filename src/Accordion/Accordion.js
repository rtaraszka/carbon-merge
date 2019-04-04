import React from "react";
import PropTypes from "prop-types";
import { Accordion as AccordionComponent } from "carbon-components-react";

function Accordion(props) {
  return (
    <AccordionComponent {...props} />
  );
}

Accordion.propTypes = {
  /**
   * Pass in the children that will be rendered within the Accordion
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,
};

export default Accordion;
