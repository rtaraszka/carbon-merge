import React from "react";
import PropTypes from "prop-types";
import { OrderedList as OrderedListM } from "carbon-components-react";

function OrderedList(props) {
  return <OrderedListM {...props}>{props.children}</OrderedListM>;
}

OrderedList.propTypes = {
  /**
   * Provide list items to be rendered in the ordered list
   */
  children: PropTypes.node,

  /**
   * Provide an optional className to be applied to the containing <ol> node
   */
  className: PropTypes.string,

  /**
   * Specify whether this ordered list is nested inside of another nested list
   */
  nested: PropTypes.bool,
};

export { OrderedList as default };
