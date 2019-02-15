import React from "react";
import PropTypes from "prop-types";
import { OverflowMenuItem as OverflowMenuItemM } from "carbon-components-react";

function OverflowMenuItem(props) {
  return <OverflowMenuItemM {...props} />;
}

OverflowMenuItem.propTypes = {
 /**
   * The CSS class name to be placed on the button element
   */
  className: PropTypes.string,

  /**
   * The CSS class name to be placed on the wrapper list item element
   */
  wrapperClassName: PropTypes.string,

  /**
   * The text in the menu item.
   */
  itemText: PropTypes.node,

  /**
   * If given, overflow item will render as a link with the given href
   */
  href: PropTypes.string,

  /**
   * `true` to make this menu item a divider.
   */
  hasDivider: PropTypes.bool,

  /**
   * `true` to make this menu item a "danger button".
   */
  isDelete: PropTypes.bool,

  /**
   * `true` to make this menu item disabled.
   */
  disabled: PropTypes.bool,

  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,

  /**
   * A callback to tell the parent menu component that the menu should be closed.
   */
  closeMenu: PropTypes.func,

  /**
   * `true` if this menu item should get focus when the menu gets open.
   */
  primaryFocus: PropTypes.bool,

  /**
   * `true` if this menu item belongs to a floating OverflowMenu
   */
  floatingMenu: PropTypes.bool,

  /**
   * `true` if this menu item has long text and requires a browser tooltip
   */
  requireTitle: PropTypes.bool,
};

export { OverflowMenuItem as default };
