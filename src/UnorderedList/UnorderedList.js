import React from "react";
import PropTypes from "prop-types";
import { UnorderedList as UnorderedListComponent } from "carbon-components-react";

function UnorderedList(props) {
  return (
      <UnorderedListComponent {...props} />
  );
}

UnorderedList.propTypes = {
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

UnorderedList.defaultProps = {
  nested: false,
};

export default UnorderedList;
