import * as React from "react";
import ProgressIndicator from "../ProgressIndicator";
import ProgressStep from "../../ProgressStep/ProgressStep";

export default (
<ProgressIndicator currentIndex={0} uxpId="1">
  <ProgressStep
    uxpId="2"
    label="label"
    description="Step 1: Understanding the revolution"
  />
  <ProgressStep
    uxpId="3"
    label="label"
    description="Step 2: Code–based design tooling"
  />
  <ProgressStep
    uxpId="4"
    label="label"
    description="Step 3: Getting started with Merge"
  />
  <ProgressStep
    uxpId="5"
    label="label"
    description="Step 4: Creating a sustainable design–dev collaboration"
  />
</ProgressIndicator>
);
