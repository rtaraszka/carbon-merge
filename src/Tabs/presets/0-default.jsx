import React from "react";
import Tabs from "../Tabs";
import Tab from "../../Tab/Tab";

const tabProps = {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
};

export default (
  <Tabs
      className="some-class"
      selected={1}
      triggerHref="#"
      role="navigation"
      iconDescription="show menu options"
      tabContentClassName="tab-content"
      uxpId="Tabs0">
      <Tab
          {...tabProps}
          label="Tab label 1"
          uxpId="Tab0">
          Content for first tab goes here.
      </Tab>
      <Tab
          {...tabProps}
          label="Tab label 2"
          uxpId="Tab1">
          Content for second tab goes here.
      </Tab>
      <Tab
          {...tabProps}
          label="Tab label 3"
          uxpId="Tab2">
          Content for third tab goes here.
      </Tab>
      <Tab
          {...tabProps}
          label="Tab label 4"
          uxpId="Tab3">
          Content for fourth tab goes here.
      </Tab>
  </Tabs>
);
