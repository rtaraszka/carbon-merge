import React from "react";
import PropTypes from "prop-types";
import { Tabs as TabsComponent } from "carbon-components-react";

function Tabs(props) {
  return (
      <TabsComponent {...props} />
  );
}

Tabs.propTypes = {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel: PropTypes.string,

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes.string,

  /**
   * Specify whether the Tab content is hidden
   */
  hidden: PropTypes.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown: PropTypes.func,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func,

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: PropTypes.string.isRequired,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes.number,

  /**
   * Provide a description that is read out when a user visits the caret icon
   * for the dropdown menu of items
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Provide a className that is applied to the <TabContent> components
   */
  tabContentClassName: PropTypes.string,
};

Tabs.defaultProps = {
  iconDescription: 'show menu options',
  role: 'navigation',
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox',
};

export default Tabs;
