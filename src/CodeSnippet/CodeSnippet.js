import React from "react";
import PropTypes from "prop-types";
import { CodeSnippet as CodeSnippetComponent } from "carbon-components-react";

function CodeSnippet(props) {
  return (
    <CodeSnippetComponent {...props} />
  );
}

CodeSnippet.propTypes = {
  /**
   * Provide the type of Code Snippet
   */
  type: PropTypes.oneOf(['single', 'inline', 'multi']),

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide the content of your CodeSnippet as a string
   */
  children: PropTypes.string,

  /**
   * Specify the string displayed when the snippet is copied
   */
  feedback: PropTypes.string,

  /**
   * Specify the label used for the Copy Button
   */
  copyLabel: PropTypes.string,

  /**
   * Specify the description for the Copy Button
   */
  copyButtonDescription: PropTypes.string,

  /**
   * An optional handler to listen to the `onClick` even fired by the Copy
   * Button
   */
  onClick: PropTypes.func,

  /**
   * Specify a label to be read by screen readers on the containing <textbox>
   * node
   */
  ariaLabel: PropTypes.string,

  /**
   * Specify a string that is displayed when the Code Snippet text is more
   * than 15 lines
   */
  showMoreText: PropTypes.string,

  /**
   * Specify a string that is displayed when the Code Snippet has been
   * interacted with to show more lines
   */
  showLessText: PropTypes.string,

  /**
   * Specify whether you are using the light variant of the Code Snippet,
   * typically used for inline snippest to display an alternate color
   */
  light: PropTypes.bool,
};

CodeSnippet.defaultProps = {
  type: 'single',
  showMoreText: 'Show more',
  showLessText: 'Show less',
};

export default CodeSnippet;
