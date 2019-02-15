import React from "react";
import PropTypes from "prop-types";
import { Table as TableM } from "carbon-components-react";

function Table(props) {
  return <TableM {...props}>{props.children}</TableM>;
}

Table.propTypes = {
  /**
   * Provide the contents of your Table
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the <table> node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the container node
   */
  containerClassName: PropTypes.string, 
};

export { Table as default };
