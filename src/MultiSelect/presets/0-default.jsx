import React from 'react';
import MultiSelect from '../MultiSelect';

const items = [
    {
        "label": "Option 1",
        "value": "Option 1",
        "field": "Option 1"
    },
    {
        "label": "Option 2",
        "value": "Option 2",
        "field": "Option 2"
    },
];

export default (
    <MultiSelect
        items={items}
        placeholder="MultiSelect Label"
        type="default"
        label="MultiSelect Label"
        invalidText="Invalid Selection"
        listBoxMenuIconTranslationIds={{
            'close.menu': 'Close menu',
            'open.menu': 'Open menu',
        }}
    />
);
