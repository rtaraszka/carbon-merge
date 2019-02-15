import React from "react";
import PropTypes from "prop-types";
import { ListItem as ListItemM } from "carbon-components-react";

function ListItem(props) {
  return <ListItemM {...props}>{props.children}</ListItemM>;
}

ListItem.propTypes = {
  /**
   * Specify the content for the ListItem
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to apply to the underlying <li> node
   */
  className: PropTypes.string
};

export { ListItem as default };
