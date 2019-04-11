import React from "react";
import Tooltip from "../Tooltip";

export default (
  <Tooltip
    className="tooltip--class"
    triggerClassName="tooltip--trigger-class"
    triggerText="Tooltip"
    direction="bottom"
    menuOffset={{ left: 10, top: 15 }}
    showIcon={false}
    open
    uxpId="Tooltip0">
    Tooltip label
  </Tooltip>
);
