import React from "react";
import PropTypes from "prop-types";
import { TableHead as TableHeadM } from "carbon-components-react";

function TableHead(props) {
  return <TableHeadM {...props}>{props.children}</TableHeadM>;
}

TableHead.propTypes = {
  /**
   * Provide the contents of your TableHead
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableHead
   */
  className: PropTypes.string
};

export { TableHead as default };
