import * as React from 'react';
import ContentSwitcher from '../ContentSwitcher';
import Switch from '../../Switch/Switch';

export default (
<ContentSwitcher key="1" selectedIndex={0}>
    <Switch key="2" text="IBM Carbon" />
    <Switch key="3" text="UXPin Merge" />
    <Switch key="4" text="React.js" />
</ContentSwitcher>
);