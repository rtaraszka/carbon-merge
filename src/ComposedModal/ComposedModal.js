import React from "react";
import PropTypes from "prop-types";
import { ComposedModal as ComposedModalComponent } from "carbon-components-react";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";

function ComposedModal(props) {
    return (
        <ComposedModalComponent {...props}>
            <ModalHeader {...props.modalHeader} />
            <ModalBody {...props.modalBody} />
            <ModalFooter {...props.modalFooter} />
        </ComposedModalComponent>
    );
}

ComposedModal.propTypes = {
    /**
     * Specify an optional className to be applied to the modal root node
     */
    className: PropTypes.string,

    /**
     * Specify an optional className to be applied to the modal node
     */
    containerClassName: PropTypes.string,

    /**
     * Specify an optional handler for closing modal.
     * Returning `false` here prevents closing modal.
     */
    onClose: PropTypes.func,

    /**
     * Specify an optional handler for the `onKeyDown` event. Called for all
     * `onKeyDown` events that do not close the modal
     */
    onKeyDown: PropTypes.func,

    /**
     * Specify whether the Modal is currently open
     */
    open: PropTypes.bool,

    /**
     * Specify a CSS selector that matches the DOM element that should be
     * focused when the Modal opens
     */
    selectorPrimaryFocus: PropTypes.string,
    /**
     * Temporary property
     */
    modalBody: PropTypes.shape({
        children: PropTypes.node,
        className: PropTypes.string,
    }),
    modalFooter: PropTypes.shape({
        className: PropTypes.string,
        primaryClassName: PropTypes.string,
        primaryButtonText: PropTypes.string,
        primaryButtonDisabled: PropTypes.bool,
        secondaryClassName: PropTypes.string,
        secondaryButtonText: PropTypes.string,
        children: PropTypes.node,
    }),
    modalHeader: PropTypes.shape({
        className: PropTypes.string,
        labelClassName: PropTypes.string,
        titleClassName: PropTypes.string,
        closeClassName: PropTypes.string,
        closeIconClassName: PropTypes.string,
        label: PropTypes.string,
        title: PropTypes.string,
        children: PropTypes.string,
        iconDescription: PropTypes.string,
    }),
};

ComposedModal.defaultProps = {
    selectorPrimaryFocus: '[data-modal-primary-focus]',
};

export default ComposedModal;
