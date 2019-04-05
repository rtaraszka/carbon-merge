import React from "react";
import PropTypes from "prop-types";
import { ModalHeader as ModalHeaderComponent } from "carbon-components-react"

function ModalHeader(props) {
    return (
        <ModalHeaderComponent {...props} />
    );
}

ModalHeader.propTypes = {
    /**
     * Specify an optional className to be applied to the modal header
     */
    className: PropTypes.string,

    /**
     * Specify an optional className to be applied to the modal header label
     */
    labelClassName: PropTypes.string,

    /**
     * Specify an optional className to be applied to the modal heading
     */
    titleClassName: PropTypes.string,

    /**
     * Specify an optional className to be applied to the modal close node
     */
    closeClassName: PropTypes.string,

    /**
     * Specify an optional className to be applied to the modal close icon node
     */
    closeIconClassName: PropTypes.string,

    /**
     * Specify an optional label to be displayed
     */
    label: PropTypes.string,

    /**
     * Specify an optional title to be displayed
     */
    title: PropTypes.string,

    /**
     * Specify the content to be placed in the ModalHeader
     */
    children: PropTypes.node,

    /**
     * Specify a description for the close icon that can be read by screen
     * readers
     */
    iconDescription: PropTypes.string,

    /**
     * Provide an optional function to be called when the modal is closed
     */
    closeModal: PropTypes.func,

    /**
     * Provide an optional function to be called when the close button is
     * clicked
     */
    buttonOnClick: PropTypes.func,
};

ModalHeader.defaultProps = {
    iconDescription: 'Close the modal',
};

export default ModalHeader;
