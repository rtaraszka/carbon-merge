import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalComponent } from "carbon-components-react";

function Modal(props) {
    return (
        <ModalComponent {...props} />
    );
}

Modal.propTypes = {
    /**
     * Provide the contents of your Modal
     */
    children: PropTypes.node,

    /**
     * Specify an optional className to be applied to the modal root node
     */
    className: PropTypes.string,

    /**
     * Specify whether the modal should be button-less
     */
    passiveModal: PropTypes.bool,

    /**
     * Specify a handler for closing modal.
     * The handler should care of closing modal, e.g. changing `open` prop.
     */
    onRequestClose: PropTypes.func,

    /**
     * Specify the DOM element ID of the top-level node.
     */
    id: PropTypes.string,

    /**
     * Specify the content of the modal header title.
     */
    modalHeading: PropTypes.string,
    /**
     * Specify the content of the modal header label.
     */
    modalLabel: PropTypes.node,

    /**
     * Specify a label to be read by screen readers on the modal root node
     */
    modalAriaLabel: PropTypes.string,

    /**
     * Specify the text for the secondary button
     */
    secondaryButtonText: PropTypes.string,

    /**
     * Specify the text for the primary button
     */
    primaryButtonText: PropTypes.string,

    /**
     * Specify whether the Modal is currently open
     */
    open: PropTypes.bool,

    /**
     * Specify a handler for "submitting" modal.
     * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
     */
    onRequestSubmit: PropTypes.func,

    onKeyDown: PropTypes.func,

    /**
     * Provide a description for "close" icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Specify whether the Button should be disabled, or not
     */
    primaryButtonDisabled: PropTypes.bool,

    /**
     * Specify a handler for the secondary button.
     * Useful if separate handler from `onRequestClose` is desirable
     */
    onSecondarySubmit: PropTypes.func,

    /**
     * Specify whether the Modal is for dangerous actions
     */
    danger: PropTypes.bool,

    /**
     * Specify if Enter key should be used as "submit" action
     */
    shouldSubmitOnEnter: PropTypes.bool,

    /**
     * Specify CSS selectors that match DOM elements working as floating menus.
     * Focusing on those elements won't trigger "focus-wrap" behavior
     */
    selectorsFloatingMenus: PropTypes.arrayOf(PropTypes.string),

    /**
     * Specify a CSS selector that matches the DOM element that should
     * be focused when the Modal opens
     */
    selectorPrimaryFocus: PropTypes.string,

    /**
     * Specify whether the modal should be a focus trap. NOTE: by default
     * this is true
     */
    focusTrap: PropTypes.bool,
};

Modal.defaultProps = {
    primaryButtonDisabled: false,
    passiveModal: false,
    iconDescription: 'close the modal',
    modalHeading: '',
    modalLabel: '',
    selectorPrimaryFocus: '[data-modal-primary-focus]',
    focusTrap: true,
};

export default Modal;
