import React from "react";
import PropTypes from "prop-types";
import { SearchFilterButton as SearchFilterButtonComponent } from "carbon-components-react";

function SearchFilterButton(props) {
  return <SearchFilterButtonComponent {...props} />;
}

SearchFilterButton.propTypes = {
  /**
   * The a11y label text.
   */
  labelText: PropTypes.string,

  /**
   * The icon description.
   */
  iconDescription: PropTypes.string
};

export default SearchFilterButton;
