import React from "react";
import PropTypes from "prop-types";
import { OrderedList as OrderedListComponent } from "carbon-components-react";

function OrderedList(props) {
  return (
      <OrderedListComponent {...props} />
  );
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

OrderedList.defaultProps = {
  nested: false,
};

export default OrderedList;
