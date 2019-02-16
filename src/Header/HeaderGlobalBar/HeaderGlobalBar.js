import React from "react";
import PropTypes from "prop-types";
import { HeaderGlobalBar as HeaderGlobalBarM } from "carbon-components-react/lib/components/UIShell";

function HeaderGlobalBar(props) {
  return <HeaderGlobalBarM>{props.children}</HeaderGlobalBarM>;
}

HeaderGlobalBar.propTypes = {
  children: PropTypes.node
};

export { HeaderGlobalBar as default };
