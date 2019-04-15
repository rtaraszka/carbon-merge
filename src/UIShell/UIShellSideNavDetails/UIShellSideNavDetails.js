import React from "react";
import PropTypes from "prop-types";
import { SideNavDetails as SideNavDetailsComponent } from "carbon-components-react/es/components/UIShell";

function UIShellSideNavDetails(props) {
    return (
        <SideNavDetailsComponent {...props} />
    );
}

UIShellSideNavDetails.propTypes = {
    /**
     * Optionally provide a custom class to apply to the underlying <li> node
     */
    className: PropTypes.string,

    /**
     * Provide optional children to render in `SideNavDetails`. Useful for
     * rendering the `SideNavSwitcher` component.
     */
    children: PropTypes.node,

    /**
     * Provide the text that will be rendered as the title in the component
     */
    title: PropTypes.string.isRequired,
};

export default UIShellSideNavDetails;
