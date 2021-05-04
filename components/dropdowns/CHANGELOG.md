# Changelog

## [Unreleased]

## 19.1.59 (2021-05-04)

### ListBox

#### Bug Fixes

- `#317293` - Listbox event properties descriptions added.

### MultiSelect

#### Bug Fixes

- `#I323182` - Issue with "grouping headers are duplicated and overlapped with popup items while scrolling the popup after selecting the first popup item" has been resolved.

## 19.1.57 (2021-04-20)

### ListBox

#### Bug Fixes

- `#311323` - Issue with 'No Records Found' text occurred twice has been resolved.

### MultiSelect

#### Bug Fixes

- `#I320251` - Issue with "previously selected value is shown in the popup while removing the value using backspace rapidly in the custom value enabled component" has been resolved.

## 19.1.56 (2021-04-13)

### ListBox

#### Bug Fixes

- `#316046` - Action complete event not triggered when sort order property is given issue is fixed.
- `#311323` - DataSource missing while filtering is applied issue has been resolved.
- `#163935` - Previous index is wrong in drag and drop event has been fixed.

## 19.1.54 (2021-03-30)

### Dropdown Tree

#### Bug Fixes

`#317088` - The issue with "The popup is not opened for the second time in the Dropdown Tree component when it is rendered inside the Dialog" has been resolved.


## 18.4.47 (2021-03-09)

### MultiSelect

#### Bug Fixes

`#317598` - Issue with "selected values are not posted properly while clicking on the select all option with predefined value" has been resolved.


## 18.4.44 (2021-02-23)

### MultiSelect

#### New Features

- `#283275`, `#289148`, `#296652` - Now, selection and deselection performance is improved while providing the large data to the component.

## 18.4.43 (2021-02-16)

### Dropdown Tree

#### Bug Fixes

- `#310244` - The issue on changing the `treeSettings.autoCheck` property dynamically in the `Box` mode has been resolved in the Dropdown Tree component.

### MultiSelect

#### Bug Fixes

- `#310590` - Now, chip will create in focused multiselect component while updating the value property on dynamically.

## 18.4.35 (2021-01-19)

### DropDownList

#### Bug Fixes

- `#310665` - Issue with "`select` event is triggered twice while preventing the value selection" has been resolved.

## 18.4.34 (2021-01-12)

### ListBox

#### Bug Fixes

- Issue with remote data has been fixed.

### ComboBox

#### Bug Fixes

- `#F159036` - Issue with "popup doesn't show the entire data source when render component with item template and clearing the filtered value" has been resolved.

## 18.4.32 (2020-12-29)

### AutoComplete

#### Bug Fixes

- `#308003` - Issue with 'highlight search is not working while rendering component along with `iconCss` property' has been resolved.

### DropDownList

#### Bug Fixes

- `#304837` - Issue with "value property is not updated properly while rendering dropdown with select tag and list has empty string as field value" has been resolved.

## 18.4.31 (2020-12-22)

### ListBox

#### Bug Fixes

- Issue with 'drag and drop' has been fixed.
- Issue with toolbar option has been fixed.

### DropDownList

#### Bug Fixes

- `#305245` - Now, popup values reset back to full data while clicking on the clear icon in the filter input.
- `#305962` - Now, `sortOrder` property works for data source with `Array` type.
- `#304595` - Issue with "dynamic value changes is not updated to the component after performing the filtering action" has been resolved.
- `#305983` - Issue with "unable to select dropdown items after calling `refresh` method" has been resolved.

### MultiSelect

#### Bug Fixes

- `#305461` - Issue with "popup is not closed when render multiple multiselect dropdown with checkbox mode" has been resolved.
- `#302393` - Issue with "the focus class is maintained in the previous multiselect after move the focus to another multiselect component" has been resolved.

## 18.3.52 (2020-12-01)

### DropDownList

#### Bug Fixes

- `#304117`,`#304560` - EJ1 and EJ2 controls theme compatibility issue resolved.

### MultiSelect

#### Bug Fixes

- `#304117`,`#304560` - EJ1 and EJ2 controls theme compatibility issue resolved.

### ComboBox

#### Bug Fixes

- `#304117`,`#304560` - EJ1 and EJ2 controls theme compatibility issue resolved.

### AutoComplete

#### Bug Fixes

- `#304117`,`#304560` - EJ1 and EJ2 controls theme compatibility issue resolved.

### ListBox

#### Bug Fixes

- Issue with 'removeItem' method has been fixed.

## 18.3.44 (2020-10-27)

### MultiSelect

#### Bug Fixes

- `#292479` - Issue with "beforeOpen event is triggered while rendering the component with initial value" has been resolved.

### DropDownList

#### Bug Fixes

- `#F158340` - Issue with "popup is not getting refreshed after filtering while updating the remote data dynamically " has been resolved.

## 18.3.42 (2020-10-20)

### Dropdown Tree

#### Bug Fixes

- `F155642` - The issue with "the two-way binding is not working while enabling checkbox support in the Dropdown Tree component" has been resolved.

### ListBox

#### Bug Fixes

- Issue with 'dragStart' event has been fixed.

### MultiSelect

#### Bug Fixes

- `#289874` - Issue with "invalid predefined value is added to the control while disabling the custom value" has been resolved.
- `#291608` - Issue with "spinner icon is overlapped with clear icon while fetching data from server" has been resolved.

## 18.3.40 (2020-10-13)

### MultiSelect

#### Bug Fixes

- `#291884` - Issue with "clear icon overlaps the selected value" has been resolved.

- `#F158089` - Issue with "misplacement of footer template for checkbox mode" has been resolved.
- `#F157575` - Issue with "value selection by using the space key at the popup opening on second time" has been resolved.

## 18.3.35 (2020-10-01)

### ListBox

#### Bug Fixes

- compatibility issues with EJ1 has been fixed.

## 18.2.58 (2020-09-15)

### ListBox

#### Bug Fixes

- 'moveAll' is not working after applied grouping has been fixed.

### MultiSelect

#### Bug Fixes

- `#289874` - Issue with "invalid value is added to the control while providing the invalid value to the value property" has been resolved.

## 18.2.54 (2020-08-18)

### Dropdown Tree

#### Breaking Changes

- `#273325` - Provided the option to customize the Dropdown Tree’s input height when the content is increased.

### MultiSelect

#### Bug Fixes

- `#275308` - Performance issue will no longer occurs when render the multiselect with checkbox.

### DropDownList

#### Bug Fixes

- `#285069` - Issue with "popup is not opened when focus out the component before loading the remote data" has been resolved.

## 18.2.48 (2020-08-04)

### ListBox

#### New Features

- `#285392` - Enable / disable list items based on unique value support provided.

### Dropdown Tree

#### Bug Fixes

- The accessibility issue with “The Dropdown Tree text is not reading properly when enabling the multi-selection support” has been resolved.

### MultiSelect

#### Bug Fixes

- `#282905`, `#273055` - Now, Cross-Site Scripting issues will no longer occurs.
- `#285164`, `#277294` - Issue with "First list item got selected while pressing space key in the MultiSelect along with checkbox mode and remote data" has been resolved.

## 18.2.47 (2020-07-28)

### DropDownList

#### Bug Fixes

- `#277503` - Issue with "sort order is not working for filtering dropdown after adding new item using addItem method" has been resolved.

### ListBox

#### Bug Fixes

- Filtering is not working in IE browser has been fixed.

### AutoComplete

#### Bug Fixes

- `#276842` - Issue with "list data is not updated properly while pressing alt+down key in auto filling autocomplete" has been resolved.

## 18.1.59 (2020-06-23)

### MultiSelect

#### Bug Fixes

-`#F154635` - Issue with "floating label is not floated properly while rendering with filter and outline theme appearance" has been resolved.


- `#278902` - Issue with "incorrect count displayed in the multiselect input field when selecting the  multiple items" has been resolved.

### DropDownList

#### Bug Fixes

-`#278736` -Now, search action is performed properly while rendering multiple dropdown and selecting the value using keyboard.


## 18.1.57 (2020-06-16)

### ComboBox

#### Bug Fixes

- `#279216` - Now, you can set empty data source dynamically.

### MultiSelect

#### Bug Fixes

- `#277467`- Issue with "some items in the dropdown hides when using the header template in the mobile mode" has been resolved.
- `#278201`- Issue with "multiSelect component in mobile mode with initial value page not scrolled" has been resolved.

## 18.1.56 (2020-06-09)

### ComboBox

#### Bug Fixes

- Issue with "select event is not triggered while doing first selection with autofill" has been resolved.

-`#278135`- Issue with "Item data is not loaded with asynchronous data when allowCustom is set to false" has been resolved.


### DropDownList

#### Bug Fixes

- `#280052`- Issue with "localization is not working for dropdown components" has been resolved.

## 18.1.55 (2020-06-02)

### MultiSelect

#### Bug Fixes

-`#273796` - Now, e-outline class is added to the filter input


### Dropdown Tree

#### Bug Fixes

- `#276800` - The issue with “The selected item is maintained in DOM after clearing the item using clear icon in the Dropdown Tree component” has been resolved.
- `#278072` - The issue with “The Dropdown Tree selected values are not received in the form post back” has been resolved.
- `#274468` - The issue with “The Dropdown Tree popup element is incorrectly positioned when it is rendered inside the Bootstrap dialog” has been fixed.

#### New Features

- `#277378` - Provided the support to reset the values in the Dropdown Tree component when the form reset method is called.

### DropDownList

#### Bug Fixes

-`#277821` - Now, changed the no record template hint message.


## 18.1.53 (2020-05-19)

### MultiSelect

#### Bug Fixes

- `#273796` - Now, filtering works properly when paste the value in the input element.

### Dropdown Tree

#### Bug Fixes

- `#274351` - The issue with "The Dropdown Tree initialized value which is not getting it in the form post" has been resolved.

### ListBox

#### New Features

- Provided Placeholder support to filterbar in listbox.

#### Bug Fixes

- Move to and move from throws script error when listbox rendered with item template issue fixed.

## 18.1.52 (2020-05-13)

### ListBox

#### Bug Fixes

- Move to and move from throws script error when listbox rendered with item template issue fixed.

## 18.1.48 (2020-05-05)

### MultiSelect

#### Bug Fixes

- `#273796` - Issue with clear icon misalignment in the material outline has been resolved.

### ListBox

#### Bug Fixes

- Issue with drag and drop in empty listbox has been fixed.

## 18.1.46 (2020-04-28)

### Dropdown Tree

#### Bug Fixes

- The issue with `The Dropdown Tree placeholder hides while opening the popup, when enabling the checkbox support` has been fixed.

### ListBox

#### Bug Fixes

- Issue with 'enabled' properly when listbox have toolbar option has been fixed.
- Issue with Filter element when the scrolling has enabled in listbox.

## 18.1.43 (2020-04-07)

### ListBox

#### Bug Fixes

- `moveTo` method is not working properly when listbox have disabled items has been fixed.

## 18.1.36-beta (2020-03-19)

### Common

#### Breaking Changes

The newly added `Dropdown Tree` component in dropdowns package requires `Navigations` dependency, so now it is mandatory to include the `ej2-navigations.umd.min.js` in `system.js` configuration if you are using the system.js module loader.
Update the system.js configuration while going with this version and above.


### Dropdown Tree

The Dropdown Tree control allows you to select single or multiple values from hierarchical data in a tree-like structure. It has several out-of-the-box features, such as data binding, check boxes, templates, UI customization, accessibility, and preselected values. The available key features are


- **Data binding** - Bind and access a hierarchical list of items from a local or server-side data source.
- **Check boxes** - Select more than one item in the Dropdown Tree control without affecting the UI appearance.
- **Multiple selection** - Select more than one item in the control.
- **Sorting** - Display the Dropdown Tree items in ascending or descending order.
- **Template** - Customize the Dropdown Tree items, header, footer, action failure content, and no records content.
- **Accessibility** - Provide access to all the Dropdown Tree control features through keyboard interaction, on-screen readers, and other assistive technology devices.

### ListBox

#### Bug Fixes

- Dynamic show checkBox not working in grouping has been fixed.

## 17.4.51 (2020-02-25)

### MultiSelect

#### Bug Fixes

- `#263579` - Issue with "the performance issue while clear the selected items using clear button" issue has been resolved.

## 17.4.50 (2020-02-18)

### ListBox

#### Bug Fixes

- `#261827` - Issue when ListBox and menu component in a same page has been resolved.

### ComboBox

#### Bug Fixes

- `#261005` - Now, `isInteracted` argument updated properly in the change event while entering the `autofill` value.

## 17.4.49 (2020-02-11)

### DropDownList

#### Bug Fixes

- `#261901` - Issue with "cascade dropdown previous value maintained while enabled the filtering" has been resolved.

### ComboBox

#### Bug Fixes

- `#261005` - Now, `isInteracted` argument is updated properly after manually deleting all characters followed by focus out the control.

### MultiSelect

#### Bug Fixes

- `#263399` - Issue with "change event is not triggered while enabling `checkbox` selection in IE11 browser" has been resolved.

## 17.4.47 (2020-02-05)

### ListBox

#### Bug Fixes

- `#F151029` - Checkbox selection not updated on initial load, while rendering the ListBox with `iconCss` issue fixed.
- Provided 'actionBegin' and 'actionComplete' event when moving items.

## 17.4.46 (2020-01-30)

### MultiSelect

#### Bug Fixes

- `#261574` - Now, `isInteracted` argument updated properly in the change event while focusout.

- `#258514` - Issue with "addItem method is not working while binding empty data source" has been resolved.
- `#259861` - Issue with "filtering not working after selecting the item in the popup" has been resolved.

### ComboBox

#### Bug Fixes

- `#261005` - Now, `isInteracted` argument updated properly in the change event while entering the custom value.

## 17.4.44 (2021-01-21)

### ListBox

#### Bug Fixes

- `#260635` - Sorted datasource not updated properly in ListBox has been fixed.

## 17.4.43 (2020-01-14)

### ListBox

#### Bug Fixes

- `#F150435` - Script error occurs during disabled toolbar button click has been resolved.

## 17.4.41 (2020-01-07)

### ListBox

#### Bug Fixes

- `#255830` - filter and grouping are not working on drag and drop and toolbar button states not updated properly has been resolved.

## 17.4.40 (2019-12-24)

### DropDownList

#### Bug Fixes

- `#255255` - Issue with "JAWS screen reader does not read the pre-selected value" has been resolved.

- `#257336` - Issue with "fixed header shown twice while scrolling the items in the popup and reopen the popup again" has been resolved.

### ListBox

#### Bug Fixes

- Issue with Drag and Drop is fixed.

## 17.4.39 (2019-12-17)

### ComboBox

#### Bug Fixes

- `#256098` - The mobile device ENTER key selection issue in the focused item issue has resolved.

### MultiSelect

#### Bug Fixes

- `#255765` - Issue with "dynamically added item not displayed initially in box mode when control in focus state" has been resolved.

### DropDownList

#### Bug Fixes

- `#256908` - Issue with "script error throws while pressing the escape key after filter the items in the popup" has been resolved.

### ListBox

#### New Features

- Provided public methods for `toolbar` actions.
- Provided `getDataByValues` method for getting array of data objects.

#### Bug Fixes

- `#252496` - Checkbox selection not maintained after removing filter has been fixed.
- `#F147087` - script error "contains of undefined in ListBox" while rendering the ListBox and multi select in the same router page has been fixed.

### AutoComplete

#### Bug Fixes

- `#236361` - Now, filtering works properly in mobile Firefox.

## 17.3.29 (2019-11-26)

### AutoComplete

#### New Features

- `#254473` - Now, you can clear the selected values using `clear` method.

### ComboBox

#### New Features

- `#254473` - Now, you can clear the selected values using `clear` method.

### DropDownList

#### New Features

- `#254473` - Now, you can clear the selected values using `clear` method.

### MultiSelect

#### New Features

- `#254473` - Now, you can clear the selected values using `clear` method.

#### Bug Fixes

- `#F149046` - Issue with "popup not opened after clearing the all selected values" has been resolved.

## 17.3.28 (2019-11-19)

### MultiSelect

#### Bug Fixes

- `#F148867` , `#254713` - The issue with "rendering the `itemTemplate` when value is bound to the control" has been resolved.

- `#251564` - Issue with "new item is not added to respective group while adding items using addItem method" has been resolved.

## 17.3.21 (2019-10-30)

### ComboBox

#### Bug Fixes

- `#251466` - Now, you can set width property in `em` unit.
- `#251650` - Issue with 'filtered list item is not getting focused when set filter type as contains' has been resolved.
- `#251325` - Issue with "once combobox popup open is prevented by setting args.cancel as true in open event then you can't remove the prevent a popup opening using open event" has been resolved.

### DropDownList

#### Bug Fixes

- `#251466` - Now, you can set width property in `em` unit.

### MultiSelect

#### Bug Fixes

- `#251466` - Now, you can set width property in `em` unit.

- `#252117` , `#248511` - Issue with "floating label not positioned properly when set floatLabelType value as Always" has been resolved.

### ListBox

#### Bug Fixes

- `#F147087` - script error "class List of undefined" while grouping has been fixed.
- `#F147408` - Move To toolbar button not working when loading the list box using `remote data` has been resolved.
- `#249771` - script error while performing the toolbar actions in dual ListBox with `data manager` in `EJ2 MVC` has been resolved

## 17.3.19 (2019-10-22)

### ListBox

- Drag Event returns null value issue is fixed

### DropDownList

#### Bug Fixes

- `#246853` - Now, popup will close when input element is hidden from viewport.

## 17.3.17 (2019-10-15)

### MultiSelect

#### Bug Fixes

- `#250710` - Now, you can filter the data while render the component using `select` element.

- `#246802` - Now, the change event fires on value selection and remove while disabled the `changeOnBlur` property.
- `#F147650` - Now SelectAll method works properly when set `enableGroupCheckBox` as true.
- `#251276`- Now, the change event fires on click the clear icon and updates the model value.

## 17.3.16 (2019-10-09)

### ListBox

#### Bug Fixes

- Adding common cssClass for wrapper.

### MultiSelect

#### New Features

- Provided `Material2 outline layout` for multiselect.

#### Bug Fixes

- `#248395`, `#F148059` - Now SelectAll works properly when limit the selection using `maximumSelectionLength` property.

## 17.3.14 (2019-10-03)

### AutoComplete

#### Bug Fixes

- `#248193` - Issue with "once autocomplete popup open is prevented by setting args.cancel as true in beforeOpen event then you can't remove the prevent a popup opening using beforeOpen event" has been resolved.

### MultiSelect

#### Bug Fixes

- `#248288` - Issue with "console error thrown when set the openOnClick property as false in checkbox mode" has been resolved.

- `#247340` - Issue with "list items not loaded while change the data source dynamically in checkbox mode" has been resolved.
- `#247922` - Issue with "group header is not changed as fixed element when reopening the popup" has been fixed.

### DropDownList

#### Bug Fixes

- `#248511` - Issue with floating label misalignment in the outline mode has been resolved.
- `#F147708` - Issue with "template data not populated in filtering dropdownlist when open the dropdown popup on second time" has been resolved.

## 17.2.49 (2019-09-04)

### MultiSelect

#### Bug Fixes

- `#245849` - Issue with "Dropdown popup moves down while initial value selection on popup" has been resolved.

## 17.2.46 (2019-08-22)

### ListBox

#### New Features

- `#237694` - provided maximum selection limit option for ListBox.

## 17.2.41 (2019-08-14)

### MultiSelect

#### Bug Fixes

- `#144756`- Issue with "custom value added to the list after args.cancel is set to true in custom value section event" has been resolved.

### DropDownList

#### Bug Fixes

- `#244335` - Issue with "clear icon shown in read-only dropdown list" has been resolved.

## 17.2.40 (2019-08-06)

### MultiSelect

#### New Features

- `#F146233` - Now, you can specify type of filter using `filterType` property.

### ComboBox

#### New Features

- `#F146233` - Now, you can specify type of filter using `filterType` property.

### DropDownList

#### New Features

- `#F146233` - Now, you can specify type of filter using `filterType` property.

## 17.2.39 (2019-07-30)

### ListBox

#### Bug Fixes

- `#240597` - Dual ListBox causes an error when filtering is activated and disable the checkbox selection settings issue is fixed.
- `#240594` - Form submit occurs while click toolbar item issue is fixed.

## 17.2.36 (2019-07-24)

### MultiSelect

#### Bug Fixes

- `#241578` - Issue with “Checkbox selection is not updated properly in the popup list items when set filtering as false” has been resolved.

### AutoComplete

#### Bug Fixes

- `#F146110` - Now, Resolved the console error thrown when first character is type using `MinLength` property.

### DropDownList

#### Bug Fixes

- `#F146110` - Now, Resolved the console error thrown when first character is type using `MinLength` property.

## 17.2.34 (2019-07-11)

### ComboBox

#### Bug Fixes

- `#233488`, `#239802` - Issue with "throws error while set the field value as null" has been resolved.

### MultiSelect

#### Bug Fixes

- `#226512` - Now, SelectAll checkbox shows when more than one items present in the filtered list.

### DropDownList

#### Bug Fixes

- `#239351` - Now, Select event triggers when selecting the value through interaction.
- `#F145367` - Issue with "filtering is not working with item template" has been resolved.

### ListBox

#### Bug Fixes

- `#240594` - Form submit occurs while click toolbar item issue is fixed.

## 17.2.28-beta (2019-06-27)

### ListBox

#### New Features

- Checkbox position support provided.
- Filter support provided.
- #234507 - Provided support for drag and dropping the single list item when more than one list item is selected by setting `false` to `dragSelected` argument in `dragStart` event.

#### Bug Fixes

- #236715 - Drag and dropping the list item is not sorted when `sortOrder` enabled issue is fixed.

#### Breaking Changes

- Event `select` is removed instead `change` event is provided.

### DropDownList

#### Bug Fixes

- #235631 - Issue with "updating default value after form reset" has been resolved.
- #239136 - Now, you can change `allowFiltering` property value dynamically.

### MultiSelect

#### Bug Fixes

- #235699 - Change event not happening after the control has lost focus issue has been fixed.

#### New Features

- `#F142089`, `#225476`, `#231094`, `#234377` - Now, you can render grouping with checkbox using enableGroupCheckBox property.

## 17.1.49 (2019-05-29)

### MultiSelect

#### New Features

- #236816 - Provided method for `focusIn` and `focusOut`.

#### Bug Fixes

- #231920 - In IE browser, script error throws when calling getItems method has been fixed.

## 17.1.48 (2019-05-21)

### ListBox

#### New Features

- Provided change event for ListBox.

## 17.1.44 (2019-05-07)

### MultiSelect

#### Bug Fixes

- #235167 - Multiselect dropdown jump down when the `showDropDownIcon` is set to true issue has been resolved.
- #209393 - Change event not fired during tab key navigation issue has been resolved.

### DropDownList

#### Bug Fixes

- #234846 - The popup collision issue has been resolved while enable the filtering.

### ListBox

#### Bug Fixes

- #234350 - SelectAll checkbox not displayed with dynamic data issue fixed.

## 17.1.43 (2019-04-30)

### ComboBox

#### Bug Fixes

- #233483 - The List not generated properly while clear the value using clear button issue has been resolved.
- #234100 - The search not working on enabling read only in the control initialization issue has been resolved.
- #233137 - The combobox is not focused when click the tab key at single time issue has been resolved.

### DropDownList

#### Bug Fixes

- #231680 - The data source is observable using Async Pipe with pre select value not updated issue has been resolved.
- #230651 - Eval function security issue has been resolved.

## 17.1.42 (2019-04-23)

### MultiSelect

#### Bug Fixes

- #232673 - Issue with prevent the first value when clear value using clear button has been fixed.
- #233432 - The group template text not updated while enable the allow filtering issue has been fixed.

## 17.1.41 (2019-04-16)

### MultiSelect

#### Bug Fixes

- #232673 - Issue with browser freeze when clear value using clear button has been fixed.
- #231997 - Issue with duplicate placeholder on multiselect issue has been fixed.
- #232218 - The popup open downward when select the items after scroll the page issue has been resolved.
- #231920 - The Custom value with pre select value not updated when set empty data source issue has been resolved.
- F143612 - Dropdown icon disappeared when set the lengthy placeholder issue has been fixed.

### DropDownList

#### Bug Fixes

- #142944 - Item template not loaded, when change the datasource dynamically issue has been resolved.

### ComboBox

#### Bug Fixes

- #225254, #227938 - Template interpolated data not updated while filtering issue has been resolved.

### ListBox

#### Bug Fixes

- Value type changed from `number` to `string` on selecting items in reactive form control issue fixed.

## 17.1.40 (2019-04-09)

### ListBox

#### Bug Fixes

- Value property passed on form submit issue fixed.

### DropDownList

#### Bug Fixes

- Issue with value selection on disabled dropdown using incremental search has been fixed.
- Clear icon shown when change the value dynamically issue has been fixed.

### MultiSelect

#### Bug Fixes

- Placeholder is not updated properly when unselect all the value issue has been resolved.

## 17.1.38 (2019-03-29)

### ListBox

The ListBox is a graphical user interface component used to display a list of items. Users can select one or more items in the list using a checkbox or by keyboard selection. It supports sorting, grouping, reordering, and drag and drop of items. The available key features are:


- **Data binding**: Binds and accesses the list of items from local or server-side data source.
- **Dual ListBox**: Allows transferring and reordering the list item between two ListBoxes.
- **Drag and Drop**: Allows drag and drop the list item with the same/multiple ListBox.
- **Grouping**: Groups the logically related items under a single or specific category.
- **Templates**: Customizes the list items.
- **Sorting**: Sorts the list items in alphabetical order (either ascending or descending).
- **Accessibility**: Provided with built-in accessibility support that helps to access all the ListBox component features using the keyboard, screen readers, or other assistive technology devices.

### MultiSelect

#### Bug Fixes

- Placeholder is not updated properly when removed the value issue has been resolved.

## 17.1.32-beta (2019-03-13)

### DropDownList

#### Bug Fixes

- Issue with change event trigger multiple times when clear value using clear button has been fixed.

### MultiSelect

#### New Features

- Provided customized filtering support for checkbox mode also.

### AutoComplete

#### Bug Fixes

- Filtered value is not maintained while using model value issue has been resolved.

### ComboBox

#### Bug Fixes

- List's selection is not removed when remove a selected value using clear button issue has been resolved.

## 16.4.55 (2019-02-27)

### DropDownList

#### Bug Fixes

- Pre-select value is not selected when its not present in the list issue fixed.
- Reset text based initial value in form reset action behavior has been changed.

### AutoComplete

#### Bug Fixes

- Reset text based initial value in form reset action behavior has been changed.

### ComboBox

#### Bug Fixes

- Reset text based initial value in form reset action behavior has been changed.

### MultiSelect

#### Bug Fixes

- List selection throws exception while using quotes within string data issue has been resolved.
- Select all operation's performance issue has been resolved.

## 16.4.54 (2019-02-19)

### DropDownList

#### Bug Fixes

- When page scroll, grouping template is hiding issue has been resolved.
- Reset the initial value in form reset action behavior has been changed.

### AutoComplete

#### Bug Fixes

- Reset the initial value in form reset action behavior has been changed.

### ComboBox

#### Bug Fixes

- Reset the initial value in form reset action behavior has been changed.

### MultiSelect

#### Bug Fixes

- Now, you can enter special characters inside MultiSelect using virtual keyboard.
- Reset the initial value in form reset action behavior has been changed.

## 16.4.53 (2019-02-13)

### DropDownList

- ItemData parameter supports `object` collection in select and change event.
- Filtering is not working when rendered control by using select element issue has been resolved.

### MultiSelect

#### Bug Fixes

- Lengthy placeholder breaks UI issue has been resolved.
- Values are not cleared in mobile devices issue has been resolved.
- Values are not selected based on selected attribute in select element rendering issue has been resolved.

## 16.4.52 (2019-02-05)

### ComboBox

#### Bug Fixes

- The model value is not updated by selecting a value using tab key with autofill combination issue has been resolved.

### MultiSelect

#### Bug Fixes

- Blur event prevents other actions issue has been resolved.

## 16.4.48 (2019-01-22)

### AutoComplete

#### Bug Fixes

- Custom value is not maintain after reload the data issue has been resolved.

### MultiSelect

#### Bug Fixes

- `en-US` locale JSON file not generated issue has been resolved.

## 16.4.47 (2019-01-16)

### MultiSelect

#### Bug Fixes

- server side validation is not working issue has been resolved.

## 16.4.46 (2019-01-08)

### MultiSelect

#### Bug Fixes

- Value is updated in reverse while using select all option in checkbox selection issue has been resolved.

### ComboBox

#### Bug Fixes

- Change event is not trigger when focus out the control using tab key issue has been resolved.

## 16.4.44 (2018-12-24)

### MultiSelect

#### Bug Fixes

- Item template with checkbox combination is not working issue has been resolved.
- Value update with checkbox selection issue in reactive form has been resolved.

## 16.3.34 (2018-11-21)

### MultiSelect

#### Bug Fixes

- Checkbox's selection is not removed when uncheck the `selectAll` checkbox issue has been resolved.

## 16.3.33 (2018-11-20)

### DropDownList

#### Bug Fixes

- DropDownList locale added in `config Json` file.

## 16.3.32 (2018-11-13)

### DropDownList

#### Bug Fixes

- Data related attributes are added to input element instead of select element has been fixed.
- Console error thrown as maximum call stack when set the empty `dataSource` that issue has been fixed.

### MultiSelect

#### Bug Fixes

- Original event argument does not get in `selectedAll` event argument that issue has been fixed.

### ComboBox

#### Bug Fixes

- ComboBox `focus` event argument issue has been resolved.

## 16.3.29 (2018-10-31)

### MultiSelect

#### Bug Fixes

- MultiSelect filtering is shown incorrect result when using remote datasource issue has been resolved.

### AutoComplete

#### Bug Fixes

- AutoComplete `minLength` property is not perform when use custom filtering event has been resolved.

## 16.3.27 (2018-10-23)

### MultiSelect

#### Bug Fixes

- ngModel is not updated when select all value using SelectAll option has been fixed.

### DropDownList

#### Bug Fixes

- null exception handled in getItems method.

## 16.3.25 (2018-10-15)

### MultiSelect

#### Bug Fixes

- Duplicate values are listed while fetching data with UrlAdaptor when `allowCustom` value is set to true, that issue has been fixed.

### DropDownList

#### Bug Fixes

- DropDownList `valueTemplate` selected value is changed now, while changing data source.

### ComboBox

#### Bug Fixes

- ComboBox `readonly` enabled clear button is shown issue has been resolved.

## 16.3.23 (2018-10-03)

### MultiSelect

#### Bug Fixes

- MultiSelect values are cleared after performing add operation in Grid, that issue has been fixed.
- Item disappears from popup list after pressing the backspace key, that issue has been fixed.

### DropDownList

#### Bug Fixes

- DropDownList `ItemTemplate` with `addItem` method template issue has been resolved.

## 16.3.17 (2018-09-12)

### DropDownList

#### Bug Fixes

- Restricted multiple request when no data returned from server issue has been resolved.

### MultiSelect

#### Bug Fixes

- Change event is now triggered for MultiSelect components, when focused out.

#### Breaking Changes

- Renamed the `selectAll` event argument `IsChecked` to `isChecked`.
- Renamed the `selectAll` event argument `e` to `event`.

## 16.2.49 (2018-08-21)

### MultiSelect

#### Bug Fixes

- View encapsulation support given for checkbox selection.
- Cleared values are not added back to MultiSelect popup issue has been resolved.
- View encapsulation support given for spinner element.

### DropDownList

#### Bug Fixes

- View encapsulation support given for spinner element.

### ComboBox

#### Bug Fixes

- View encapsulation support given for spinner element.

## 16.2.48 (2018-08-14)

### MultiSelect

#### Bug Fixes

- create input method addition argument added.

### DropDownList

#### Bug Fixes

- DropDownList `cssClass` updated dynamically changes issue has been resolved.
- create input method addition argument added.

### AutoComplete

#### Bug Fixes

- create input method addition argument added.

### ComboBox

#### Bug Fixes

- create input method addition argument added.

## 16.2.47 (2018-08-07)

### DropDownList

#### Bug Fixes

- Provided view encapsulation support.

### MultiSelect

#### Bug Fixes

- Provided view encapsulation support.

### AutoComplete

#### Bug Fixes

- Provided view encapsulation support.

### ComboBox

#### Bug Fixes

- Provided view encapsulation support.

## 16.2.46 (2018-07-30)

### DropDownList

#### Bug Fixes

- We have provided public methods spinner show and hides.

### MultiSelect

#### Bug Fixes

- Pre-selected item disappears from popup list when removed selected items in clear button issue has been resolved.
- We have provided public methods spinner show and hides.

### AutoComplete

- We have provided public methods spinner show and hides.

### ComboBox

- ComboBox filtering update data method field argument issue has been resolved.
- We have provided public methods spinner show and hides.

## 16.2.45 (2018-07-17)

### DropDownList

#### Bug Fixes

- DropDownList same value selection, value not cleared issue has been resolved.
- DropDownList `scss` variable override issue has been resolved.

### MultiSelect

#### Bug Fixes

- Multiselect clear button issue has been resolved.
- Multiselect restore value not maintained in `IE` issue has been resolved.
- Multiselect popup not open when update a data via update data.

## 16.2.43 (2018-07-03)

### MultiSelect

#### Bug Fixes

- Multiselect pre selected value not updated issue has been resolved.

## 16.2.42 (2018-06-27)

### Multiselect

#### Bug Fixes

- Provided support for selected all event.
- Value is not selected when ending with space.

## 16.2.41 (2018-06-25)

### AutoComplete

#### Bug Fixes

- Html elements are shown during filtering when highlight property is set to true.

- Value typed in the autocomplete gets removed when data source is bound in the filtering event.


### DropDownList

#### Bug Fixes

- Provided support for before open event.

### ComboBox

#### Bug Fixes

- Popup items is not same as initially after filtering in combobox.

### MultiSelect

#### Bug Fixes

- Data is not repopulated when selecting and removing all items from Multiselect.
- Multiselect is not focused when tab key is pressed if it already focused in the filterbar.

## 16.1.46 (2018-05-29)

### MultiSelect

#### Bug Fixes

- Changed control height for MultiSelect component in Material theme to match other dropdown components.

## 16.1.45 (2018-05-23)

### MultiSelect

#### Bug Fixes

- Allow to set the value in MultiSelect when it is re-rendered.

## 16.1.42 (2018-05-15)

### AutoComplete

#### Bug Fixes

- The getDataByValue method is not working properly in Autocomplete's issue has been fixed.

### DropDownList

#### Bug Fixes

- Value property set through the model is now maintained, even after changing the data.
- Change event is now triggered for DropDown components, when `showClearButton` is clicked.

## 16.1.40 (2018-05-08)

### ComboBox

#### Bug Fixes

- Prevented the native HTML select and change events in angular.

### DropDownList

#### Bug Fixes

- Prevented the validation message from triggering on components initial render.
- Added support for HTML autofocus attribute in DropDown components.

### MultiSelect

#### Bug Fixes

- MultiSelect component's varying selection behaviour for keyboard and mouse event, has been fixed.

## 16.1.38 (2018-05-02)

### AutoComplete

#### Bug Fixes

- The issue, Value property in Autocomplete is not properly updated in two way binding after the initial load has been fixed.
- The issue, Autocomplete displays the suggestions list even if the focus is lost for related component, has been fixed.

### MultiSelect

#### Bug Fixes

- The issue, MultiSelect component is not updating the popup correctly during the initial time, has been fixed.

## 16.1.35 (2018-04-17)

### AutoComplete

#### Bug Fixes

- The issue, Value is not updated correctly when the words in the suggestion list contains white spaces has been fixed.

### MultiSelect

#### New Features

- Float Label support has been given for MultiSelect

#### Bug Fixes

- custom value support has been given in MultiSelect when the filtering is enabled instead of 'no records found' template.
- The issue, 'Input is rendered again  on typing while resetting value from null with remote data and custom value as true.' has been fixed.
- The issue, 'Enable persistence is not working properly when all the items in the list are selected.' has been fixed.

## 16.1.34 (2018-04-10)

### AutoComplete

#### Bug Fixes

- The issue, Value is not updated correctly when diacritics words are used in AutoComplete has been fixed.

## 16.1.33 (2018-04-03)

### MultiSelect

#### Bug Fixes

- Chip width is longer than the input wrapper when the custom longer text selected, issue has been fixed.

## 16.1.30 (2018-03-20)

### MultiSelect

#### Bug Fixes

- custom value maintained while disabled `closePopupOnSelect`, this issue has been fixed.

### DropDownList

#### Bug Fixes

- Dynamic value change support for `showClearButton`.

## 16.1.29 (2018-03-13)

### MultiSelect

#### Bug Fixes

- Change event not trigger while remove chip in keyboard, this issue has been fixed.

### AutoComplete

#### Bug Fixes

- Initial value not set while using remote data in autocomplete issue has been fixed.

## 16.1.28 (2018-03-09)

### MultiSelect

#### Bug Fixes

- Text property not working properly while selected text, this issue has been fixed.

### DropDownList

#### Bug Fixes

- Filtering with Template issue has been fixed in DropDownList and ComboBox.

### ComboBox

#### Bug Fixes

- Filtering with Template issue has been fixed in DropDownList and ComboBox.

## 16.1.24 (2018-02-22)

### AutoComplete

#### Breaking Changes

- Changed the filtering event argument types to `FilteringEventArgs`.

### Common

#### Breaking Changes

- Locale key changed from `dropdownlist` to `dropdowns`.
- Changed the fields property type as `FieldSettingsModel`.
- Changed the Angular component selector, component name prefix with `ejs` e.g : `ejs-dropdownlist`.

#### New Features

- Given in-built filtering support without using `filtering` event.
- Diacritics filtering works on enabling the `ignoreAccent`.
- Provided the `zIndex` property to set custom `zIndex` value.
- High contrast theme support.

### MultiSelect

#### New Features

- CheckBox support.
- Prevent the Popup open on component click while `openOnClick` property set as false.
- Provided `chipSelect` event for chip selection action.

#### Breaking Changes

- Pascal casing change to mode property values (`Default`, `Box`, `Delimiter`, `CheckBox`).
- Changed the `maximumSelectionLength` behaviour.

#### Bug Fixes

- Value preselect not working in remote data, this issue has been fixed.

### DropDownList

#### Bug Fixes

- Console error thrown while navigating the angular routing in DropDownList change event, this issue has been fixed.

## 15.4.27-preview (2018-01-30)

### DropDownList

#### Bug Fixes

- DropDownList value property gets as an object if selected value as 0, this issue has been fixed.

## 15.4.26-preview (2018-01-23)

### AutoComplete

#### Bug Fixes

- The Change event argument `isInteraction` is returned properly when clear button is clicked.

### DropDownList

#### Bug Fixes

- Clear button is not visible, this issue has been fixed.
- Angular reactive form resetting not worked in DropDownList component, this issue has been fixed.

### MultiSelect

#### Bug Fixes

- Popup does not open while component render with empty data source, this issue has been fixed.

## 15.4.24-preview (2018-01-10)

### MultiSelect

#### Breaking Changes

- Changed the default value of `hideSelectedItems` property as true.

#### Bug Fixes

- Custom value dose not allow while component render with empty data source, this issue has been fixed.

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (`dist/global/index.d.ts`).

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling.

### DropDownList

#### Bug Fixes

- Popup repositions not worked while scroll on the fixed element, this has been fixed.

### MultiSelect

#### Bug Fixes

- Popup repositions not worked while scroll on the fixed element, this has been fixed.

### ComboBox

#### Bug Fixes

- Popup repositions not worked while scroll on the fixed element, this has been fixed.

### AutoComplete

#### Bug Fixes

- Popup repositions not worked while scroll on the fixed element, this has been fixed.

## 15.4.21-preview (2017-12-08)

### MultiSelect

#### Bug Fixes

- Popup left and right collision issue fixed.
- MultiSelect custom value with template issue fixed.

### AutoComplete

#### Breaking Changes

- Home and End key behaviour changes.

### ComboBox

#### Breaking Changes

- Home and End key behaviour changes.

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2.

### DropDownList

#### Bug Fixes

- DropDownList component value cleared while change the value through react setState method issue fixed.
- Empty string value not selected in DropDownList issue fixed.

## 15.4.19-preview (2017-11-23)

### AutoComplete

#### Bug Fixes

- When we Change the data source the value is empty issue fixed.

### DropDownList

#### Bug Fixes

- Expected is 'Object' instead of 'object' issue fixed.

## 15.4.17-preview (2017-11-13)

### MultiSelect

MultiSelect component contains a list of predefined values from which a multiple value can be chosen. The functionality of MultiSelect resembles the SELECT form element of HTML. The available key features are


- **Data binding** - Allows to bind and access the list of items from the local or server-side data source.
- **Grouping** - Supports grouping the logically related items under single or specific category.
- **Templates** - Allows customizing the list items, selected value, header, footer, category group header, and no records content.
- **Sorting** - Supports sorting of list items in an alphabetical order (either ascending or descending).
- **Filtering** - Allow filtering the list items based on a character typed in component.
- **Custom Value** - Allows user to select a new custom value.
- **Accessibility** - Provided with built-in accessibility support which helps to access all the MultiSelect component features through  the keyboard, screen readers, or other assistive technology devices.

### ComboBox

ComboBox component allows the user to type a value or choose an option from the list of predefined options. When an arrow icon accompanied with this component is pressed, the dropdown displays a list of values, from which the user can select one. The available key features are


- **Data binding** - Allows binding and accessing the list of items from local or server-side data source.
- **Custom values** - Allows setting user-defined values that is not in the popup list.
- **Grouping** - Supports grouping of logically related items under a single or specific category.
- **Sorting** - Supports sorting of list items in an alphabetical order (either ascending or descending).
- **Filtering** - Allows filtering of list items based on a character typed in the component.
- **Templates** - Allows customizing the list items, selected value, header, footer, category group header, and no records content.
- **Accessibility** - Provided with built-in accessibility support that helps to access all the ComboBox component features through the keyboard, screen readers, or other assistive technology devices.

### AutoComplete

AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one. The available key features are


- **Data binding** - Allows binding and accessing the list of items from local or server-side data source.
- **Grouping** - Supports grouping of logically related items under a single or specific category.
- **Sorting** - Supports sorting of list items in an alphabetical order (either ascending or descending).
- **Highlight search** - Supports highlighting the typed text in the suggestion list.
- **Templates** - Allows customizing the list item, header, footer, category group header, no records and action failure content.
- **Accessibility** - Provided with built-in accessibility support that helps to access all the AutoComplete component features through keyboard, on-screen readers, or other assistive technology devices.

### DropDownList

DropDownList component contains a list of predefined values from which a single value can be chosen. The functionality of DropDownList resembles the SELECT form element of HTML. When an arrow icon accompanied with this component is pressed, the dropdown displays a list of values from which you can select one. The available key features are


- **Data binding** - Allows to bind and access the list of items from the local or server-side data source.
- **Grouping** - Supports grouping the logically related items under single or specific category.
- **Sorting** - Supports sorting of list items in an alphabetical order (either ascending or descending).
- **Filtering** - Allow filtering the list items based on a character typed onto the search box.
- **Templates** - Allows customizing the list items, selected value, header, footer, category group header, and no records content.
- **Accessibility** - Provided with built-in accessibility support which helps to access all the DropDownList component features through the keyboard, screen readers, or other assistive technology devices.


## 19.1.58 (2021-04-27)

### MultiSelect

#### Bug Fixes

- `#I323805` - Issue with "pasted content is partially visible in the input element while pasting long text content" has been resolved.

## 19.1.55 (2021-04-06)

### ComboBox

#### Bug Fixes

- `#319099` - Issue with "dirty and pristine is not updated properly while performing the disable and reset the form simultaneously" has been resolved.

## 18.4.42 (2021-02-09)

### ComboBox

#### Bug Fixes

- `#311416` - Issue with "form value is not updated while clicking clear icon after patching the value" has been resolved.

## 18.4.41 (2021-02-02)

### MultiSelect

#### Bug Fixes

- `#311499` - Issue with "console error is thrown in the filtering and custom value multiselect while choosing existing value" has been resolved.

## 18.4.30 (2020-12-17)

### DropDownList

#### Bug Fixes

- `#304890`, `#304801` - Issue with "`model value` is not updated inside form while changing the value at first time" has been resolved.

### MultiSelect

#### Bug Fixes

- `#304890`, `#304801` - Issue with "`model value` is not updated inside form while changing the value at first time" has been resolved.

## 18.3.53 (2020-12-08)

### DropDownList

#### Bug Fixes

- `#F159477` - Issue with "highlight search is not working properly when using item template with filter type as `StartsWith` and `EndsWith` in dropdownlist" has been resolved.

### MultiSelect

#### Bug Fixes

- `#F159477` - Issue with "highlight search is not working properly when using item template with filter type as `StartsWith` and `EndsWith` in multiselect" has been resolved.
- `#304185` - Issue with "SelectAll checkbox is not displayed while changing the data source dynamically" has been resolved.
- `#303760` - Issue with "popup is displayed with two scrollbar in the bootstrap theme while resizing the browser window" has been resolved.

### AutoComplete

#### Bug Fixes

- `#F159477` - Issue with "highlight search is not working properly when using item template with filter type as `StartsWith` and `EndsWith` in autocomplete" has been resolved.

### ComboBox

#### Bug Fixes

- `#F159477` - Issue with "highlight search is not working properly when using item template with filter type as `StartsWith` and `EndsWith` in combobox" has been resolved.

## 18.3.51 (2020-11-24)

### AutoComplete

#### Bug Fixes

- `#300567`, `#299294`- Issue with "dirty and pristine is not updated properly while resetting the form with values" has been resolved.

#### Breaking Changes

- While setting the autocomplete value programmatically, the `change` event will not trigger.

### ComboBox

#### Bug Fixes

- `#300567`, `#299294`- Issue with "dirty and pristine is not updated properly while resetting the form with values" has been resolved.

#### Breaking Changes

- While setting the combobox value programmatically, the `change` event will not trigger.

### DropDownList

#### Bug Fixes

- `#300567`, `#299294`- Issue with "dirty and pristine is not updated properly while resetting the form with values" has been resolved.

#### Breaking Changes

- While setting the dropdownlist value programmatically, the `change` event will not trigger.

### MultiSelect

#### Bug Fixes

- `#300567`, `#299294`- Issue with "dirty and pristine is not updated properly while resetting the form with values" has been resolved.

#### Breaking Changes

- While setting the multiselect value programmatically, the `change` event will not trigger.

## 18.3.48 (2020-11-11)

### MultiSelect

#### Bug Fixes

- `#298297` - Now, proper selected item count is updated in the remaining template.

## 18.2.57 (2020-09-08)

### ComboBox

#### Bug Fixes

- `#288033` - Issue with "value is not set to the component when assign the respective ID to the value property" has been resolved.

## 18.2.55 (2020-08-25)

### Multiselect

#### Bug Fixes

- `#285661` - Issue with "maximum call stack size exceeded issue raised when enable filtering and custom value in the Multiselect" has been resolved.

## 18.2.45 (2020-07-14)

### MultiSelect

#### Bug Fixes

- `#283346` - Issue with "chip content is not displayed in bootstrap4 theme when disable the control" has been resolved.

## 18.1.54 (2020-05-26)

### MultiSelect

#### Bug Fixes

- `#274970` - Issue with "popup values are not updated when change the query dynamically" has been resolved.

## 18.1.45 (2020-04-21)

### AutoComplete

#### Bug Fixes

- `#269229` - Now, you can use highlight API along with ng-template.

## 18.1.44 (2020-04-14)

### MultiSelect

#### Bug Fixes

- Now, getDataByValue method return the valid items in the change event.

## 17.3.27 (2019-11-12)

### ComboBox

#### Bug Fixes

- `#227938` - Now, item template works properly when enable the filtering.

### MultiSelect

#### Bug Fixes

- `#F148696` - Issue with "`return arrow button` doesn't appear at the top in mobile mode" has been resolved.

