import React from "react";
import PropTypes from "prop-types";
import { TabContent as TabContentM } from "carbon-components-react";

function TabContent(props) {
  return <TabContentM {...props}>{props.children}</TabContentM>;
}

TabContent.propTypes = {
  /**
   * Specify whether the TabContent is selected
   */
  selected: PropTypes.bool,

  /**
   * Pass in content to render inside of the TabContent
   */
  children: PropTypes.node,
};

export { TabContent as default };
