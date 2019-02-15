import React from "react";
import PropTypes from "prop-types";
import { Accordion as AccordionM } from "carbon-components-react";

function Accordion(props) {
  return (
    <AccordionM {...props} onClick={props.onClick}>
      {props.children}
    </AccordionM>
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

export { Accordion as default };
