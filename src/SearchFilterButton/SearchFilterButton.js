import React from "react";
import PropTypes from "prop-types";
import { SearchFilterButton as SearchFilterButtonM } from "carbon-components-react";

function SearchFilterButton(props) {
  return <SearchFilterButtonM {...props} />;
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

export { SearchFilterButton as default };
