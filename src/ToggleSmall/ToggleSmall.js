import React from "react";
import PropTypes from "prop-types";
import { ToggleSmall as ToggleSmallM } from "carbon-components-react";

export default class ToggleSmall extends React.Component {
  constructor(props) {
    super();

    this.state = {
      toggled: false
    };
  }

  handleClick() {
    if (this.state.toggled === false) {
      this.setState({ toggled: true });
    } else {
      this.setState({ toggled: false });
    }
  }

  render() {
    return (
      <ToggleSmallM
        {...this.props}
        toggled={this.state.toggled}
        onChange={e => this.handleClick('', "toggle-merge", e)}
        onToggle={e => this.handleClick('', "toggle-merge", e)}
      />
    );
  }
}

ToggleSmall.propTypes = {
  /**
   * Specify a custom className to apply to the form-item node
   */
  className: PropTypes.string,

  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled: PropTypes.bool,

  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle: PropTypes.func,

  /**
   * Provide an id that unique represents the underlying <input>
   */
  id: PropTypes.string,

  /**
   * Specify whether the control is toggled
   */
  toggled: PropTypes.bool,

  /**
   * Specify the label for the "off" position
   */
  labelA: PropTypes.string,

  /**
   * Specify the label for the "on" position
   */
  labelB: PropTypes.string
};
