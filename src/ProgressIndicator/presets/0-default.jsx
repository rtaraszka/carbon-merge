import React from "react";
import ProgressIndicator from "../ProgressIndicator";
import ProgressStep from "../../ProgressStep/ProgressStep";

export default (
    <ProgressIndicator currentIndex={1} uxpId="ProgressIndicator0">
      <ProgressStep
          label="First step"
          description="Step 1: Getting started with Carbon Design System"
          secondaryLabel="Optional label"
          uxpId="ProgressStep0"
      />
      <ProgressStep
          label="Second step"
          description="Step 2: Getting started with Carbon Design System"
          uxpId="ProgressStep1"
      />
      <ProgressStep
          label="Third step"
          description="Step 3: Getting started with Carbon Design System"
          uxpId="ProgressStep2"
      />
      <ProgressStep
          label="Fourth step"
          description="Step 4: Getting started with Carbon Design System"
          invalid
          secondaryLabel="Example invalid step"
          uxpId="ProgressStep3"
      />
      <ProgressStep
          label="Fifth step"
          description="Step 5: Getting started with Carbon Design System"
          disabled
          uxpId="ProgressStep4"
      />
    </ProgressIndicator>
);
