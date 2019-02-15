import React from "react";
import PropTypes from "prop-types";
import { TableHeader as TableHeaderM } from "carbon-components-react";

function TableHeader(props) {
  return <TableHeaderM {...props}>{props.children}</TableHeaderM>;
}

TableHeader.propTypes = {
/**
   * Provide the contents of your TableHeader.
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to your TableHeader.
   */
  className: PropTypes.string,

  /**
   * The CSS class name for the icon.
   */
  iconClassName: PropTypes.string,

  /**
   * The description for the ascending icon.
   */
  iconDescriptionAscending: PropTypes.string,

  /**
   * The description for the descending icon.
   */
  iconDescriptionDescending: PropTypes.string,

  /**
   * The sorting direction, `DESC` or `ASC`.
   */
  sortDir: PropTypes.string,
};

export { TableHeader as default };
