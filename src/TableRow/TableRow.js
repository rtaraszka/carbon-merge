import React from "react";
import PropTypes from "prop-types";
import { TableRow as TableRowComponent } from "carbon-components-react";

function TableRow(props) {
  return (
      <TableRowComponent {...props} />
  );
}

TableRow.propTypes = {
  /**
   * Specify whether your TableRow should be used as a header row
   */
  header: PropTypes.bool,

  /**
   * Specify an optional className to be applied to your TableRow
   */
  className: PropTypes.string,

  /**
   * Provide the contents of your TableRow
   */
  children: PropTypes.node,

  /**
   * Specify whether the TableRow is at an even position
   */
  even: PropTypes.bool
};

export default TableRow;
