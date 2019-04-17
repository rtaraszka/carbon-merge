import React from "react";
import PropTypes from "prop-types";
import { SearchLayoutButton as SearchLayoutButtonComponent } from "carbon-components-react";

function SearchLayoutButton(props) {
  return <SearchLayoutButtonComponent {...props} />;
}

SearchLayoutButton.propTypes = {
  /**
   * The layout.
   */
  format: PropTypes.oneOf(["list", "grid"]),

  /**
   * The a11y label text.
   */
  labelText: PropTypes.string,

  /**
   * The description for the "list" icon.
   */
  iconDescriptionList: PropTypes.string,

  /**
   * The description for the "grid" icon.
   */
  iconDescriptionGrid: PropTypes.string,

  /**
   * The callback called when layout switches.
   */
  onChangeFormat: PropTypes.func
};

export default SearchLayoutButton;
