import React from "react";
import PropTypes from "prop-types";
import { FormLabel as FormLabelComponent } from "carbon-components-react";

function FormLabel(props) {
    return (
        <FormLabelComponent {...props} />
    );
}

FormLabel.propTypes = {
    /**
     * Specify the content of the form label
     */
    children: PropTypes.node,

    /**
     * Provide a custom className to be applied to the containing <label> node
     */
    className: PropTypes.string,

    /**
     * Provide a unique id for the given <FormLabel>
     */
    id: PropTypes.string,
};

export default FormLabel;
