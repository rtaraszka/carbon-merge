import React from "react";
import PropTypes from "prop-types";
import { TableData as TableDataComponent } from "carbon-components-react";

function TableData(props) {
  return (
      <TableDataComponent {...props} />
  );
}

TableData.propTypes = {
/**
   * Provide the contents of your TableData.
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableData.
   */
  className: PropTypes.string,

  /**
   * The CSS class name for the icon.
   */
  iconClassName: PropTypes.string,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string,

  /**
   * The expanded state for expando cell. `undefined` for regular cells.
   */
  expanded: PropTypes.bool,
};

export default TableData;
