import React from "react";
import ComposedModal from "../ComposedModal";
import ModalHeader from "../../ModalHeader/ModalHeader";
import PropTypes from "prop-types";

export default (
    <ComposedModal
        modalHeader={{
            className: '',
            labelClassName: '',
            titleClassName: '',
            closeClassName: '',
            closeIconClassName: '',
            label: 'Optional label',
            title: 'Example',
            children: 'Testing',
            iconDescription: 'Close',
        }}
        modalBody={{
            className: '',
            children: 'Please see ModalWrapper for more examples and demo of the functionality.',
        }}
        modalFooter={{
            className: '',
            primaryClassName: '',
            primaryButtonText: 'Save',
            primaryButtonDisabled: false,
            secondaryClassName: '',
            secondaryButtonText: '',
            children: '',
        }}
        open
        uxpId="ComposedModal0">
    </ComposedModal>
);
