/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import PropTypes from "prop-types";
import { TableContainer as TableContainerComponent } from "carbon-components-react";

function TableContainer(props) {
  return (
    <TableContainerComponent {...props} />
  );
}

TableContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Provide a title for the Table
   */
  title: PropTypes.node,

  /**
   * Optional description text for the Table
   */
  description: PropTypes.node,
};

export default TableContainer;
