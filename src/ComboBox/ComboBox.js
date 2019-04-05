import React from "react";
import PropTypes from "prop-types";
import { ComboBox as ComboBoxComponent } from "carbon-components-react";

const defaultItemToString = item => {
  console.log('item', item);

  if (typeof item === 'string') {
    return item;
  }

  return item && item.label;
};

function ComboBox(props) {
  return (
    <ComboBoxComponent {...props} />
  );
}

ComboBox.propTypes = {
  /**
   * An optional className to add to the container node
   */
  className: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: PropTypes.object,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: PropTypes.array.isRequired,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list
   */
  itemToString: PropTypes.func,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component when a specific dropdown item is selected.
   * @param {{ selectedItem }}
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Used to provide a placeholder text node before a user enters any input.
   * This is only present if the control has no items selected
   */
  placeholder: PropTypes.string.isRequired,

  /**
   * Specify your own filtering logic by passing in a `shouldFilterItem`
   * function that takes in the current input and an item and passes back
   * whether or not the item should be filtered.
   */
  shouldFilterItem: PropTypes.func,

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

  /**
   * Specify a custom translation function that takes in a message identifier
   * and returns the localized string for the message
   */
  translateWithId: PropTypes.func,

  /**
   * Currently supports either the default type, or an inline variant
   */
  type: PropTypes.oneOf(['default', 'inline']),

  /**
   * Callback function to notify consumer when the text input changes.
   * This provides support to change available items based on the text.
   * @param {string} inputText
   */
  onInputChange: PropTypes.func,

  /**
   * should use "light theme" (white background)?
   */
  light: PropTypes.bool,
};

ComboBox.defaultProps = {
  disabled: false,
  shouldFilterItem: true,
  type: 'default',
  ariaLabel: 'ListBox input field',
  light: false,
};

export default ComboBox;
