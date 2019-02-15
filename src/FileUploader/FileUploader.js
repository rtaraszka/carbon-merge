import React from "react";
import PropTypes from "prop-types";
import { FileUploader as FileUploaderM } from "carbon-components-react";

function FileUploader(props) {
  return <FileUploaderM {...props} />;
}

FileUploader.propTypes = {
  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * the <FileUploaderButton>
   */
  buttonLabel: PropTypes.string,

  /**
   * Specify the type of the <FileUploaderButton>
   */
  buttonKind: PropTypes.oneOf(['primary', 'secondary', 'danger', 'ghost', 'danger--primary', 'tertiary']),

  /**
   * Specify the status of the File Upload
   */
  filenameStatus: PropTypes.oneOf(["edit", "complete", "uploading"]).isRequired,

  /**
   * Specify the description text of this <FileUploader>
   */
  labelDescription: PropTypes.string,

  /**
   * Specify the title text of this <FileUploader>
   */
  labelTitle: PropTypes.string,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes.string,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes.arrayOf(PropTypes.string)
};

export { FileUploader as default };
