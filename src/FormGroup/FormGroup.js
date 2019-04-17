import React from "react";
import PropTypes from "prop-types";
import { FormGroup as FormGroupComponent } from "carbon-components-react";

function FormGroup(props) {
    return (
        <FormGroupComponent {...props} />
    );
}

FormGroup.propTypes = {
    /**
     * Provide the children form elements to be rendered inside of the <fieldset>
     */
    children: PropTypes.node,

    /**
     * Provide the text to be rendered inside of the fieldset <legend>
     */
    legendText: PropTypes.string.isRequired,

    /**
     * Provide a custom className to be applied to the containing <fieldset> node
     */
    className: PropTypes.string,

    /**
     * Specify whether the <FormGroup> is invalid
     */
    invalid: PropTypes.bool,

    /**
     * Specify whether the message should be displayed in the <FormGroup>
     */
    message: PropTypes.bool,

    /**
     * Provide the text for the message in the <FormGroup>
     */
    messageText: PropTypes.string,
};

FormGroup.defaultProps = {
    invalid: false,
    message: false,
    messageText: '',
};

export default FormGroup;
