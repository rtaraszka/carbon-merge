import React from "react";
import PropTypes from "prop-types";
import {  Header as  HeaderM } from "carbon-components-react/lib/components/UIShell";

function  Header(props) {
  return (
    < HeaderM {...props}>
      {props.children}
    </ HeaderM>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export {  Header as default };
