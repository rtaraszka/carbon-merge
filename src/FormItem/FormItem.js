import React from "react";
import PropTypes from "prop-types";
import { FormItem as FormItemComponent } from "carbon-components-react";

function FormItem(props) {
    return (
        <FormItemComponent {...props} />
    );
}

FormItem.propTypes = {
    /**
     * Provide content to be rendered in the form item
     */
    children: PropTypes.node,

    /**
     * Provide a custom className to be applied to the containing node
     */
    className: PropTypes.string,
};

export default FormItem;
