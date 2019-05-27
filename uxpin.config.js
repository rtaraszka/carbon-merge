module.exports = {
  components: {
    categories: [
      {
        name: "General",
        include: [
          "src/Icon/Icon.js",
          "src/IconSkeleton/IconSkeleton.js",
          "src/Button/Button.js",
          "src/SecondaryButton/SecondaryButton.js",
          "src/ButtonSkeleton/ButtonSkeleton.js",
          "src/Link/Link.js",
          "src/FileUploader/FileUploader.js",
          "src/FileUploaderSkeleton/FileUploaderSkeleton.js",
          "src/CopyButton/CopyButton.js",
          "src/Loading/Loading.js",
          "src/SkeletonPlaceholder/SkeletonPlaceholder.js",
          "src/SkeletonText/SkeletonText.js",
          "src/Tile/Tile.js"
        ]
      },
      {
        name: "Navigation",
        include: [
          "src/Breadcrumb/Breadcrumb.js",
          "src/BreadcrumbItem/BreadcrumbItem.js",
          "src/BreadcrumbSkeleton/BreadcrumbSkeleton.js",
          "src/Tab/Tab.js",
          "src/Tabs/Tabs.js",
          "src/TabsSkeleton/TabsSkeleton.js",
          "src/TabContent/TabContent.js",
          "src/ContentSwitcher/ContentSwitcher.js",
          "src/Switch/Switch.js",
          "src/Search/Search.js",
          "src/SearchSkeleton/SearchSkeleton.js",
          "src/SearchFilterButton/SearchFilterButton.js",
          "src/SearchLayoutButton/SearchLayoutButton.js"
        ]
      },
      {
        name: "Toolbar",
        include: [
          "src/Toolbar/Toolbar.js",
          "src/ToolbarItem/ToolbarItem.js",
          "src/ToolbarTitle/ToolbarTitle.js",
          "src/ToolbarOption/ToolbarOption.js",
          "src/ToolbarDivider/ToolbarDivider.js",
          "src/OverflowMenu/OverflowMenu.js",
          "src/OverflowMenuItem/OverflowMenuItem.js"
        ]
      },
      {
        name: "Form",
        include: [
          "src/TextInput/TextInput.js",
          "src/TextInputSkeleton/TextInputSkeleton.js",
          "src/TextArea/TextArea.js",
          "src/TextAreaSkeleton/TextAreaSkeleton.js",
          "src/NumberInput/NumberInput.js",
          "src/NumberInputSkeleton/NumberInputSkeleton.js",
          "src/Checkbox/Checkbox.js",
          "src/CheckboxSkeleton/CheckboxSkeleton.js",
          "src/RadioButton/RadioButton.js",
          "src/RadioButtonGroup/RadioButtonGroup.js",
          "src/RadioButtonSkeleton/RadioButtonSkeleton.js",
          "src/Toggle/Toggle.js",
          "src/ToggleSkeleton/ToggleSkeleton.js",
          "src/ToggleSmall/ToggleSmall.js",
          "src/ToggleSmallSkeleton/ToggleSmallSkeleton.js",
          "src/ListItem/ListItem.js",
          "src/SelectItem/SelectItem.js",
          "src/SelectItemGroup/SelectItemGroup.js",
          "src/Slider/Slider.js",
          "src/SliderSkeleton/SliderSkeleton.js",
          "src/TimePicker/TimePicker.js",
          "src/TimePickerSelect/TimePickerSelect.js",
          "src/DatePicker/DatePicker.js",
          "src/DatePickerInput/DatePickerInput.js"
        ]
      },
      {
        name: "Selects and Dropdowns",
        include: [
          "src/ComboBox/ComboBox.js",
          "src/Select/Select.js",
          "src/SelectSkeleton/SelectSkeleton.js",
          "src/MultiSelect/MultiSelect.js"
        ]
      },
      {
        name: "Content",
        include: [
          "src/Accordion/Accordion.js",
          "src/AccordionItem/AccordionItem.js",
          "src/AccordionSkeleton/AccordionSkeleton.js",
          "src/OrderedList/OrderedList.js",
          "src/UnorderedList/UnorderedList.js",
          "src/CodeSnippet/CodeSnippet.js",
          "src/CodeSnippetSkeleton/CodeSnippetSkeleton.js",
          "src/Pagination/Pagination.js",
          "src/ProgressIndicator/ProgressIndicator.js",
          "src/ProgressIndicatorSkeleton/ProgressIndicatorSkeleton.js",
          "src/ProgressStep/ProgressStep.js",
          "src/InlineLoading/InlineLoading.js",
          "src/Tooltip/Tooltip.js",
          "src/TooltipDefinition/TooltipDefinition.js",
          "src/TooltipIcon/TooltipIcon.js",
          "src/Tag/Tag.js",
          "src/TagSkeleton/TagSkeleton.js"
        ]
      },
      {
        name: "Modal",
        include: ["src/ComposedModal/ComposedModal.js", "src/Modal/Modal.js"]
      },
      {
        name: "Form",
        include: [
          "src/Form/Form.js",
          "src/FormItem/FormItem.js",
          "src/FormLabel/FormLabel.js",
          "src/FormGroup/FormGroup.js"
        ]
      },
      {
        name: "StructuredListCell",
        include: [
          "src/StructuredListWrapper/StructuredListWrapper.js",
          "src/StructuredListHead/StructuredListHead.js",
          "src/StructuredListBody/StructuredListBody.js",
          "src/StructuredListRow/StructuredListRow.js",
          "src/StructuredListCell/StructuredListCell.js",
          "src/StructuredListSkeleton/StructuredListSkeleton.js"
        ]
      },
      {
        name: "UI Shell",
        include: [
          "src/UIShell/UIShellHeader/UIShellHeader.js",
          "src/UIShell/UIShellHeaderGlobalBar/UIShellHeaderGlobalBar.js",
          "src/UIShell/UIShellHeaderGlobalAction/UIShellHeaderGlobalAction.js",
          "src/UIShell/UIShellHeaderName/UIShellHeaderName.js",
          "src/UIShell/UIShellHeaderMenuButton/UIShellHeaderMenuButton.js",
          "src/UIShell/UIShellHeaderMenu/UIShellHeaderMenu.js",
          "src/UIShell/UIShellHeaderMenuItem/UIShellHeaderMenuItem.js",
          "src/UIShell/UIShellHeaderNavigation/UIShellHeaderNavigation.js",
          "src/UIShell/UIShellSideNav/UIShellSideNav.js",
          "src/UIShell/UIShellSideNavHeader/UIShellSideNavHeader.js",
          "src/UIShell/UIShellSideNavDetails/UIShellSideNavDetails.js",
          "src/UIShell/UIShellSideNavSwitcher/UIShellSideNavSwitcher.js",
          "src/UIShell/UIShellSideNavItems/UIShellSideNavItems.js",
          "src/UIShell/UIShellSideNavLink/UIShellSideNavLink.js",
          "src/UIShell/UIShellSideNavMenu/UIShellSideNavMenu.js",
          "src/UIShell/UIShellSideNavMenuItem/UIShellSideNavMenuItem.js"
        ]
      },
      {
        name: "DataTable",
        include: [
          "src/DataTable/Table/Table.js",
          "src/DataTable/TableBody/TableBody.js",
          "src/DataTable/TableCell/TableCell.js",
          "src/DataTable/TableContainer/TableContainer.js",
          "src/DataTable/TableHead/TableHead.js",
          "src/DataTable/TableHeader/TableHeader.js",
          "src/DataTable/TableRow/TableRow.js",
        ]
      }
    ]
  },
  name: "IBM Carbon"
};

/* Currently not working
"src/DataTable/DataTable/DataTable.js",
*/