import React  from "react";
import PropTypes from "prop-types";
import { ModalBody as ModalBodyComponent } from "carbon-components-react";

function ModalBody(props) {
    return (
        <ModalBodyComponent {...props} />
    );
}

ModalBody.propTypes = {
    /**
     * Specify a custom className to be applied to the Modal Body container
     */
    className: PropTypes.string,

    /**
     * Pass in content that will be rendered in the Modal Body
     */
    children: PropTypes.node,
};

export default ModalBody;
