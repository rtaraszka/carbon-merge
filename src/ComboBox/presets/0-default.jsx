import * as React from 'react';
import ComboBox from '../ComboBox';

const items = [
  {
    id: "option-1",
    text: "Option 1",
    label: "Option 1"
  },
  {
    id: "option-2",
    text: "Option 2",
    label: "Option 2"
  },
  {
    id: "option-3",
    text: "Option 3",
    label: "Option 3"
  },
  {
    id: "option-4",
    text: "Option 4",
    label: "Option 4"
  }
];

export default (
  <ComboBox items={items} placeholder="Filter..." uxpId="ComboBox0" />
);

