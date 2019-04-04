import * as React from 'react';
import Accordion from '../Accordion';
import AccordionItem from '../../AccordionItem/AccordionItem';
import Select from '../../Select/Select';
import SelectItem from '../../SelectItem/SelectItem';

export default (
    <Accordion uxpId="Accordion0">
        <AccordionItem title="Section 1 title" uxpId="AccordionItem0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </AccordionItem>
        <AccordionItem title="Section 2 title" uxpId="AccordionItem1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </AccordionItem>
        <AccordionItem title="Section 3 title" uxpId="AccordionItem2">
            <Select id="select-1" defaultValue="placeholder-item" uxpId="Select0">
                <SelectItem
                    disabled
                    hidden
                    value="placeholder-item"
                    text="Choose an option"
                    uxpId="SelectItem0"
                />
                <SelectItem value="option-1" text="Option 1" uxpId="SelectItem1" />
                <SelectItem value="option-2" text="Option 2" uxpId="SelectItem2" />
                <SelectItem value="option-3" text="Option 3" uxpId="SelectItem3" />
            </Select>
        </AccordionItem>
        <AccordionItem title="Section 4 title" uxpId="AccordionItem3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </AccordionItem>
    </Accordion>
);
