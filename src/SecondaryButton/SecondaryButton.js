import React from "react";
import PropTypes from "prop-types";
import { SecondaryButton as SecondaryButtonComponent } from "carbon-components-react";

function SecondaryButton(props) {
    return (
        <SecondaryButtonComponent {...props} kind="secondary" />
    );
}

SecondaryButton.propTypes = {
    children: PropTypes.node,
};

export default SecondaryButton;
