/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import { Table as TableComponent } from "carbon-components-react";

function Table(props) {
  return (
    <TableComponent {...props} />
  );
}

Table.propTypes = {
  children: PropTypes.node,
  
  className: PropTypes.string,

  /**
   * `true` to add useZebraStyles striping.
   */
  useZebraStyles: PropTypes.bool,

  /**
   * `normal` Change the row height of table
   */
  size: PropTypes.oneOf(['compact', 'small', 'normal', 'tall']),

  /**
   * `false` If true, will use a width of 'auto' instead of 100%
   */
  useStaticWidth: PropTypes.bool,

  /**
   * `false` If true, will remove the table border
   */
  shouldShowBorder: PropTypes.bool,

  /**
   * `false` If true, will apply sorting styles
   */
  isSortable: PropTypes.bool,
};

Table.defaultProps = {
  isSortable: false,
};


export default Table;
