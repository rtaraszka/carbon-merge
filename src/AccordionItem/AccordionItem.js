import React from "react";
import PropTypes from "prop-types";
import { AccordionItem as AccordionItemComponent } from "carbon-components-react";

function AccordionItem(props) {
  return (
    <AccordionItemComponent {...props} />
  );
}

AccordionItem.propTypes = {
  /**
   * Provide the contents of your AccordionItem
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * The accordion title.
   */
  title: PropTypes.node,

  /**
   * The callback function to render the expando button.
   * Can be a React component class.
   */
  renderExpando: PropTypes.func,

  /**
   * The description of the expando icon.
   */
  iconDescription: PropTypes.string,

  /**
   * `true` to open the expando.
   */
  open: PropTypes.bool,

  /**
   * The handler of the massaged `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The handler of the massaged `click` event on the heading.
   */
  onHeadingClick: PropTypes.func,
};

export default AccordionItem;
