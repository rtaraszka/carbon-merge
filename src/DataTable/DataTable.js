import React from "react";
import PropTypes from "prop-types";
import { DataTable as DataTableComponent } from "carbon-components-react";

function DataTable(props) {
  return <DataTableComponent {...props} />;
}

DataTable.propTypes = {
  /**
   * The `rows` prop is where you provide us with a list of all the rows that
   * you want to render in the table. The only hard requirement is that this
   * is an array of objects, and that each object has a unique `id` field
   * available on it.
   */
  rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
  ).isRequired,

  /**
   * The `headers` prop represents the order in which the headers should
   * appear in the table. We expect an array of objects to be passed in, where
   * `key` is the name of the key in a row object, and `header` is the name of
   * the header.
   */
  headers: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        header: PropTypes.node.isRequired,
      })
  ).isRequired,

  /**
   * Optional hook to manually control filtering of the rows from the
   * TableToolbarSearch component
   */
  filterRows: PropTypes.func,

  /**
   * Provide a string for the current locale
   */
  locale: PropTypes.string,

  /**
   * Optional method that takes in a message id and returns an
   * internationalized string. See `DataTable.translationKeys` for all
   * available message ids.
   */
  translateWithId: PropTypes.func,

  /**
   * Optional boolean to create a short data table.
   */
  short: PropTypes.bool,

  /**
   * Optional boolean to remove borders from data table.
   */
  shouldShowBorder: PropTypes.bool,

  /**
   * Specify whether the control should be a radio button or inline checkbox
   */
  radio: PropTypes.bool,
};

DataTable.defaultProps = {
  locale: 'en',
  short: false,
  shouldShowBorder: true,
};

export default DataTable;
