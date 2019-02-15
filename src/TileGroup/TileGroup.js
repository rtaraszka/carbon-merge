import React from "react";
import PropTypes from "prop-types";
import { TileGroup as TileGroupM } from "carbon-components-react";

function TileGroup(props) {
  return <TileGroupM {...props}>{props.children}</TileGroupM>;
}

TileGroup.propTypes = {
  /**
   * Provide a collection of <RadioTile> components to render in the group
   */
  children: PropTypes.node,

  /**
   * Provide an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the the value of <RadioTile> to be selected by default
   */
  defaultSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify the name of the underlying <input> nodes
   */
  name: PropTypes.string,

  /**
   * Specify whether the group is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  onChange: PropTypes.func,

  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { TileGroup as default };
