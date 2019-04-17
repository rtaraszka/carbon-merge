import React from "react";
import PropTypes from "prop-types";
import { OverflowMenu as OverflowMenuComponent } from "carbon-components-react";

function OverflowMenu(props) {
  return (
      <OverflowMenuComponent {...props} />
  );
}

OverflowMenu.propTypes = {
  /**
   * `true` if the menu should be open.
   */
  open: PropTypes.bool,

  /**
   * The menu direction, supported only with `floatingMenu={true}`.
   */
  direction: PropTypes.oneOf(['top', 'bottom']),

  /**
   * `true` if the menu alignment should be flipped.
   */
  flipped: PropTypes.bool,

  /**
   * `true` if the menu should be floated, making the DOM of the menu body orphaned from the trigger button.
   * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
   */
  floatingMenu: PropTypes.bool,

  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * The `tabindex` attribute.
   */
  tabIndex: PropTypes.number,

  /**
   * The element ID.
   */
  id: PropTypes.string,

  /**
   * The ARIA label.
   */
  ariaLabel: PropTypes.string,

  /**
   * The event handler for the `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The event handler for the `focus` event.
   */
  onFocus: PropTypes.func,

  /**
   * The event handler for the `keydown` event.
   */
  onKeyDown: PropTypes.func,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * The icon.
   */
  icon: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox: PropTypes.string.isRequired,
    svgData: PropTypes.object.isRequired,
  }),

  /**
   * The icon name.
   */
  iconName: PropTypes.string,

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),

  /**
   * The CSS class for the icon.
   */
  iconClass: PropTypes.string,

  /**
   * Function called to override icon rendering.
   */
  renderIcon: PropTypes.object,

  /**
   * Function called when menu is closed
   */
  onClose: PropTypes.func,

  /**
   * Function called when menu is closed
   */
  onOpen: PropTypes.func,
};

OverflowMenu.defaultProps = {
  ariaLabel: 'list of options',
  iconDescription: 'open and close list of options',
  open: false,
  direction: 'bottom',
  flipped: false,
  floatingMenu: false,
  tabIndex: 0,
};

export default OverflowMenu;
