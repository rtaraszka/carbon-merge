import * as React from "react";
import Tooltip from "../Tooltip";

export default (
  <Tooltip
    uxpId="1"
    className="tooltip--class"
    triggerClassName="tooltip--trigger-class"
    triggerText="Tooltip"
    direction="bottom"
    menuOffset={{ left: 10, top: 15 }}
    showIcon={false}
    open={true}
  >
    Tooltip label
  </Tooltip>
);
