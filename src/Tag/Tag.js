import React from "react";
import PropTypes from "prop-types";
import { Tag as TagComponent } from "carbon-components-react";

function Tag(props) {
  return (
      <TagComponent {...props} />
  );
}

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: PropTypes.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: PropTypes.string,

  /**
   * Specify the type of the <Tag>
   */
  type: PropTypes.oneOf([
    "basic",
    "red",
    "magenta",
    "purple",
    "blue",
    "cyan",
    "teal",
    "green",
    "cool-gray",
    "warm-gray",
    "beta",
    "community",
    "custom",
    "dedicated",
    "experimental",
    "ibm",
    "local",
    "private",
    "third-party"
  ])
};

export default Tag;
