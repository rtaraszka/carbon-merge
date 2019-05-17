/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
   * Specify the content of your TableRow
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,
}

export default TableRow;
