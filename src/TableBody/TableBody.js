import React from "react";
import PropTypes from "prop-types";
import { TableBody as TableBodyM } from "carbon-components-react";

function TableBody(props) {
  return <TableBodyM {...props}>{props.children}</TableBodyM>;
}

TableBody.propTypes = {
  /**
   * Provide the contents of your TableBody
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableBody
   */
  className: PropTypes.string
};

export { TableBody as default };
