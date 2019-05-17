/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import { TableCell as TableCellComponent } from "carbon-components-react";

function TableCell(props) {
  return (
    <TableCellComponent {...props} />
  );
}

TableCell.propTypes = {
  /**
   * Specify the content of your TableCell
   */
  children: PropTypes.node,
}

export default TableCell;
