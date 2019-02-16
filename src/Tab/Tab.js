import React from "react";
import PropTypes from "prop-types";
import { Tab as TabM } from "carbon-components-react";

function Tab(props) {
  return <TabM {...props}>{props.children}</TabM>;
}

Tab.propTypes = {
    children: PropTypes.node,
    /**
     * Specify an optional className to be added to your Tab
     */
    className: PropTypes.string,

    /**
     * A handler that is invoked when a user clicks on the control.
     * Reserved for usage in Tabs
     */
    handleTabClick: PropTypes.func,

    /**
     * A handler that is invoked when a user presses left/right key.
     * Reserved for usage in Tabs
     */
    handleTabAnchorFocus: PropTypes.func,

    /**
     * A handler that is invoked on the key down event for the control.
     * Reserved for usage in Tabs
     */
    handleTabKeyDown: PropTypes.func,

    /**
     * Provide a string that represents the `href` of the Tab
     */
    href: PropTypes.string.isRequired,

    /**
     * The index of your Tab in your Tabs. Reserved for usage in Tabs
     */
    index: PropTypes.number,

    /**
     * Provide the contents of your Tab
     */
    label: PropTypes.string,

    /**
     * Provide an accessibility role for your Tab
     */
    role: PropTypes.string.isRequired,

    /**
     * Provide a handler that is invoked when a user clicks on the control
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Provide a handler that is invoked on the key down event for the control
     */
    onKeyDown: PropTypes.func.isRequired,

    /**
     * Whether your Tab is selected.
     * Reserved for usage in Tabs
     */
    selected: PropTypes.bool.isRequired,

    /**
     * Specify the tab index of the <a> node
     */
    tabIndex: PropTypes.number.isRequired,

    /*
     * An optional parameter to allow overriding the anchor rendering.
     * Useful for using Tab along with react-router or other client
     * side router libraries.
     **/
    renderAnchor: PropTypes.func,
};

export { Tab as default };
