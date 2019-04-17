import React from "react";
import PropTypes from "prop-types";
import { Table as TableComponent } from "carbon-components-react";

function Table(props) {
  return (
      <TableComponent {...props} />
  );
}

Table.propTypes = {
  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * `true` to add zebra striping.
   */
  zebra: PropTypes.bool,

  /**
   * `true` for short data table.
   */
  short: PropTypes.bool,

  /**
   * `false` Applies styles for data tables with sorting functionality.
   */
  isSortable: PropTypes.bool,

  /**
   * `true` for data table without borders.
   */
  shouldShowBorder: PropTypes.bool,
};

export default Table;
