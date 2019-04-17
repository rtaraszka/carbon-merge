import React from "react";
import PropTypes from "prop-types";
import { ModalFooter as ModalFooterComponent } from "carbon-components-react";

function ModalFooter(props) {
    return (
        <ModalFooterComponent {...props} />
    );
}

ModalFooter.propTypes = {
    /**
     * Specify a custom className to be applied to the Modal Footer container
     */
    className: PropTypes.string,

    /**
     * Specify a custom className to be applied to the primary button
     */
    primaryClassName: PropTypes.string,

    /**
     * Specify the text for the primary button
     */
    primaryButtonText: PropTypes.string,

    /**
     * Specify whether the primary button should be disabled
     */
    primaryButtonDisabled: PropTypes.bool,

    /**
     * Specify a custom className to be applied to the secondary button
     */
    secondaryClassName: PropTypes.string,

    /**
     * Specify the text for the secondary button
     */
    secondaryButtonText: PropTypes.string,

    /**
     * Specify an optional function for when the modal is requesting to be
     * closed
     */
    onRequestClose: PropTypes.func,

    /**
     * Specify an optional function for when the modal is requesting to be
     * submitted
     */
    onRequestSubmit: PropTypes.func,

    /**
     * Specify an optional function that is called whenever the modal is closed
     */
    closeModal: PropTypes.func,

    /**
     * Pass in content that will be rendered in the Modal Footer
     */
    children: PropTypes.node,
};

export default ModalFooter;
