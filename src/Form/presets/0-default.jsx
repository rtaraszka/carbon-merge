import React from "react";
import Form from "../Form";
import FormGroup from "../../FormGroup/FormGroup";
import Checkbox from "../../Checkbox/Checkbox";
import NumberInput from "../../NumberInput/NumberInput";
import Toggle from "../../Toggle/Toggle";
import FileUploader from "../../FileUploader/FileUploader";
import RadioButtonGroup from "../../RadioButtonGroup/RadioButtonGroup";
import RadioButton from "../../RadioButton/RadioButton";
import Search from "../../Search/Search";
import Select from "../../Select/Select";
import SelectItem from "../../SelectItem/SelectItem";
import TextInput from "../../TextInput/TextInput";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";

const additionalProps = {
    className: 'some-class',
};

const checkboxEvents = {
    className: 'some-class',
    labelText: 'Checkbox label',
};

const fieldsetCheckboxProps = {
    className: 'some-class',
    legendText: 'Checkbox heading',
};

const numberInputProps = {
    className: 'some-class',
    id: 'number-input-1',
    label: 'Number Input',
    min: 0,
    max: 100,
    value: 50,
    step: 10,
};

const toggleProps = {
    className: 'some-class',
};

const fieldsetToggleProps = {
    className: 'some-class',
    legendText: 'Toggle heading',
};

const fileUploaderEvents = {
    buttonLabel: 'Add files',
    className: 'some-class',
};

const fieldsetFileUploaderProps = {
    className: 'some-class',
    legendText: 'File Uploader',
};

const radioProps = {
    className: 'some-class',
};

const fieldsetRadioProps = {
    className: 'some-class',
    legendText: 'Radio Button heading',
};

const searchProps = {
    className: 'some-class',
};

const fieldsetSearchProps = {
    className: 'some-class',
    legendText: 'Search',
};

const selectProps = {
    className: 'some-class',
};

const TextInputProps = {
    className: 'some-class',
    id: 'test2',
    labelText: 'Text Input label',
    placeholder: 'Placeholder text',
};

const PasswordProps = {
    className: 'some-class',
    id: 'test3',
    labelText: 'Password',
};

const InvalidPasswordProps = {
    className: 'some-class',
    id: 'test4',
    labelText: 'Password',
    invalid: true,
    invalidText:
        'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
};

const textareaProps = {
    labelText: 'Text Area label',
    className: 'some-class',
    placeholder: 'Placeholder text',
    id: 'test5',
    cols: 50,
    rows: 4,
};

const buttonEvents = {
    className: 'some-class',
};

export default (
    <Form {...additionalProps} uxpId="Form0">
        <FormGroup {...fieldsetCheckboxProps} uxpId="FormGroup0">
            <Checkbox
                {...checkboxEvents}
                defaultChecked
                id="checkbox-0"
                uxpId="Checkbox0"
            />
            <Checkbox
                {...checkboxEvents}
                id="checkbox-1"
                uxpId="Checkbox1"
            />
            <Checkbox
                {...checkboxEvents}
                disabled
                id="checkbox-2"
                uxpId="Checkbox2"
            />
        </FormGroup>

        <NumberInput {...numberInputProps} uxpId="NumberInput0" />

        <FormGroup {...fieldsetToggleProps} uxpId="FormGroup1">
            <Toggle
                {...toggleProps}
                id="toggle-1"
                uxpId="Toggle0"
            />
            <Toggle
                {...toggleProps}
                disabled
                id="toggle-2"
                uxpId="Toggle1"
            />
        </FormGroup>

        <FormGroup {...fieldsetFileUploaderProps} uxpId="FormGroup2">
            <FileUploader
                {...fileUploaderEvents}
                id="file-1"
                labelDescription="Choose Files..."
                uxpId="FileUploader0"
            />
        </FormGroup>

        <FormGroup {...fieldsetRadioProps} uxpId="FormGroup3">
            <RadioButtonGroup
                name="radio-button-group"
                defaultSelected="default-selected"
                uxpId="RadioButtonGroup0">
                <RadioButton
                    {...radioProps}
                    value="standard"
                    id="radio-1"
                    labelText="Standard Radio Button"
                    uxpId="RadioButton0"
                />
                <RadioButton
                    {...radioProps}
                    value="default-selected"
                    labelText="Default Selected Radio Button"
                    id="radio-2"
                    uxpId="RadioButton1"
                />
                <RadioButton
                    {...radioProps}
                    value="blue"
                    labelText="Standard Radio Button"
                    id="radio-3"
                    uxpId="RadioButton2"
                />
                <RadioButton
                    {...radioProps}
                    value="disabled"
                    labelText="Disabled Radio Button"
                    id="radio-4"
                    disabled
                    uxpId="RadioButton3"
                />
            </RadioButtonGroup>
        </FormGroup>

        <FormGroup {...fieldsetSearchProps} uxpId="FormGroup4">
            <Search
                {...searchProps}
                id="search-1"
                labelText="Search"
                placeHolderText="Search"
                uxpId="Search0"
            />
        </FormGroup>

        <Select
            {...selectProps}
            id="select-1"
            defaultValue="placeholder-item"
            uxpId="Select0">
            <SelectItem
                disabled
                hidden
                value="placeholder-item"
                text="Choose an option"
                uxpId="SelectItem0"
            />
            <SelectItem
                value="option-1"
                text="Option 1"
                uxpId="SelectItem1"
            />
            <SelectItem
                value="option-2"
                text="Option 2"
                uxpId="SelectItem2"
            />
            <SelectItem
                value="option-3"
                text="Option 3"
                uxpId="SelectItem3"
            />
        </Select>

        <TextInput {...TextInputProps} uxpId="TextInput0" />

        <TextInput
            {...PasswordProps}
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            uxpId="TextInput1"
        />

        <TextInput
            {...InvalidPasswordProps}
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            uxpId="TextInput2"
        />

        <TextArea {...textareaProps} uxpId="TextArea0"  />

        <Button
            {...buttonEvents}
            type="submit"
            className="some-class"
            uxpId="Button0">
            Submit
        </Button>
    </Form>
);
