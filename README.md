# IBM Carbon React + UXPin Merge
Integration of [IBM Carbon](https://github.com/IBM/carbon-components-react) with UXPin Merge Technology.

![alt text](https://github.com/uxpin-merge/carbon-merge/blob/master/img/header.png "IBM Carbon in UXPin")

## About IBM Carbon and this repository.

[IBM Carbon](https://www.carbondesignsystem.com/) is an open-source design system created by the team at IBM. 

This repository consists of wrappers for React implementation of IBM Carbon. The wrappers are higher order React.js components and are used to integrate IBM Carbon with UXPin Merge technology.
Using wrappers (higher order components) is not necessary to integrate React.js components with UXPin, but in case of IBM Carbon, it made the integration significantly easier.


## About UXPin Merge

Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor. 
The imported components are 100% identical to components used by developers during the development process. 
It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users. 

[UXPin](http://uxpin.com) is a leading code–based design platform.

## How to use Merge integration with IBM Carbon?

Merge is currently only available for selected beta users.

1. Fork this repository and clone it to your computer.
2. Install dependencies with `npm install`
3. Log in to your UXPin beta account (approved for alpha and beta tests by UXPin Inc.)
4. Start Merge dev environment with `npm start`

If you wish to push IBM Carbon components to your UXPin account or set-up a continues integration with a CI server - contact UXPin on Merge alpha Slack community.


## Examples

![alt text](https://github.com/uxpin-merge/carbon-merge/blob/master/img/ibmcarbon_merge.gif "IBM Carbon in UXPin")
![alt text](https://github.com/uxpin-merge/carbon-merge/blob/master/img/ibm_carbon_button_dropdown.gif "IBM Carbon Dropdown in UXPin")
![alt text](https://github.com/uxpin-merge/carbon-merge/blob/master/img/ibm_carbon_table.gif "IBM Carbon Table in UXPin")

## Supported components

| Component     | Status|
| ------------- |:-----|
| Accordion | ✅ Full Support |
| Breadcrumb | ✅ Full Support |
| Button | ✅ Full Support |
| Checkbox | ✅ Full Support |
| ComboBox | ✅ Full Support |
| ComposedModal | 🔶 Partial support. Passing children doesn't work. To modify children use `modalHeader`, `modalBody`, `modalFooter` properties. |
| ContentSwitcher | ✅ Full Support |
| CopyButton | ✅ Full Support |
| DataTable | 🔶 Partial support. The highest component `DataTable` still need to be updated|
| DataPicker | 🔶 Partial support. Only `simple` mode work. |
| Dropdown | 🔻 Not Supported. Issueas with `React.cloneElement()` |
| FileUploader | ✅ Full Support |
| Form | ✅ Full Support |
| Icon | ✅ Full Support |
| InlineLoading | ✅ Full Support |
| Link | ✅ Full Support |
| Loading | ✅ Full Support |
| Modal | ✅ Full Support |
| MultiSelect | ✅ Full Support |
| Notifications | ✅ Full Support |
| NumberInput | ✅ Full Support |
| OrderedList | ✅ Full Support |
| OverflowMenu | ✅ Full Support |
| Pagination | ✅ Full Support |
| ProgressIndicator | ✅ Full Support |
| RadioButton | ✅ Full Support |
| RadioButtonGroup | ✅ Full Support |
| Search | ✅ Full Support |
| Select | ✅ Full Support |
| Slider | ✅ Full Support |
| SkeletonPlaceholder | ✅ Full Support |
| SkeletonText | ✅ Full Support |
| StructuredList | ✅ Full Support |
| Table | 🔻 Not Supported. |
| Tabs | ✅ Full Support |
| Tag | ✅ Full Support |
| TextArea | ✅ Full Support |
| TextInput | ✅ Full Support |
| Tile | ✅ Full Support |
| TimePicker | ✅ Full Support |
| Toggle | ✅ Full Support |
| ToggleSmall | ✅ Full Support |
| Toolbar | ✅ Full Support |
| Tooltip | ✅ Full Support |
| Header (UIShell experimental) | ✅ Full Support |
| SideNavigation (UIShell experimental) | 🔻 Not Supported. CSS issues. |
