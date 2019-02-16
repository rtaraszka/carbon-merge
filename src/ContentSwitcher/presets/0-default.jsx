import * as React from 'react';
import ContentSwitcher from '../ContentSwitcher';
import Switch from '../../Switch/Switch';

export default (
<ContentSwitcher uxpId="1" selectedIndex={0}>
    <Switch uxpId="2" text="IBM Carbon" />
    <Switch uxpId="3" text="UXPin Merge" />
    <Switch uxpId="4" text="React.js" />
</ContentSwitcher>
);