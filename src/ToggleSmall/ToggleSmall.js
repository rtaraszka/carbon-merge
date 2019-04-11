import React, { Component } from "react";
import PropTypes from "prop-types";
import { ToggleSmall as ToggleSmallComponent } from "carbon-components-react";

class ToggleSmall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: props.toggled,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({ toggled: !this.state.toggled });
    this.props.handleToggle(event);
  }

  render() {
    return (
        <ToggleSmallComponent
            {...this.props}
            id="toggle-merge"
            toggled={this.state.toggled}
            onToggle={this.handleToggle}
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

ToggleSmall.defaultProps = {
  defaultToggled: false,
  label: '',
  labelA: 'Off',
  labelB: 'On',
};

export default ToggleSmall;
