import React from "react";
import PropTypes from "prop-types";
import { Pagination as PaginationM } from "carbon-components-react";

function Pagination(props) {
  return <PaginationM {...props} />;
}

Pagination.propTypes = {
  /**
     * The description for the backward icon.
     */
    backwardText: PropTypes.string,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * The function returning a translatable text showing where the current page is,
     * in a manner of the range of items.
     */
    itemRangeText: PropTypes.func,

    /**
     * The description for the forward icon.
     */
    forwardText: PropTypes.string,

    /**
     * The unique ID of this component instance.
     */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The translatable text indicating the number of items per page.
     */
    itemsPerPageText: PropTypes.string,

    /**
     * A variant of `itemRangeText`, used if the total number of items is unknown.
     */
    itemText: PropTypes.func,

    /**
     * The callback function called when the current page changes.
     */
    onChange: PropTypes.func,

    /**
     * The label to be read by screen readers on input box showing the current page number
     */
    pageNumberText: PropTypes.string,

    /**
     * A function returning PII showing where the current page is.
     */
    pageRangeText: PropTypes.func,

    /**
     * The translatable text showing the current page.
     */
    pageText: PropTypes.func,

    /**
     * The choices for `pageSize`.
     */
    pageSizes: PropTypes.arrayOf(PropTypes.number),

    /**
     * The total number of items.
     */
    totalItems: PropTypes.number,

    /**
     * `true` if the backward/forward buttons should be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The current page.
     */
    page: PropTypes.number,

    /**
     * The number dictating how many items a page contains.
     */
    pageSize: PropTypes.number,

    /**
     * `true` if the total number of items is unknown.
     */
    pagesUnknown: PropTypes.bool,

    /**
     * `true` if the current page should be the last page.
     */
    isLastPage: PropTypes.bool,

    /**
     * `true` if the select box to change the page should be disabled.
     */
    pageInputDisabled: PropTypes.bool,

    /**
     * The duration of debouncing `onChange` event.
     */
    onChangeInterval: PropTypes.number,

    /**
     * A function returning PII showing how many pages there are.
     */
    defaultPageText: PropTypes.func,

    /**
     * A function returning PII showing how many items there are.
     */
    defaultItemText: PropTypes.func,
};

export { Pagination as default };
