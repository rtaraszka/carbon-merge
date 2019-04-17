import React from "react";
import PropTypes from "prop-types";
import { Form as FormComponent } from "carbon-components-react";

function Form(props) {
    return (
        <FormComponent {...props} />
    );
}

Form.propTypes = {
    /**
     * Provide children to be rendered inside of the <form> element
     */
    children: PropTypes.node,

    /**
     * Provide a custom className to be applied on the containing <form> node
     */
    className: PropTypes.string,
};

export default Form;
