import React from 'react';
import ContentSwitcher from '../ContentSwitcher';
import Switch from '../../Switch/Switch';

export default (
    <ContentSwitcher uxpId="ContentSwitcher0">
        <Switch
            name="one"
            text="First section"
            kind="anchor"
            uxpId="Switch0"
        />
        <Switch
            name="two"
            text="Second section"
            kind="anchor"
            uxpId="Switch1"
        />
        <Switch
            name="three"
            text="Third section"
            kind="anchor"
            uxpId="Switch2"
        />
    </ContentSwitcher>
);
