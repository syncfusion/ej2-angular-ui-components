# Changelog

## [Unreleased]

## 19.1.59 (2021-05-04)

### Pivot Table

#### Bug Fixes

- `#325971`,`#325981` - The toolbar options are now working in the server-side engine.

## 19.1.58 (2021-04-27)

### Pivot Table

#### Bug Fixes

- `#316510` - The pivot table is now scrollable in mobile devices when virtual scrolling is enabled.
- `#322256` - The pivot chart's title can now be dynamically updated.

- `#316510` - The pivot table is now scrollable in mobile devices when virtual scrolling is enabled.
- `#322256` - The pivot chart's title can now be dynamically updated.
- `#323535` - The `columnRender` event now works when the toolbar is enabled.

## 19.1.57 (2021-04-20)

### Pivot Table

#### Bug Fixes

- `#323557` - The color picker in the conditional formatting dialog now supports language translation.

## 19.1.56 (2021-04-13)

### Pivot Table

#### Bug Fixes

- `#318017`,`#318625` - Export customization set in the `beforeExport` event is now working.
- `#320952` - Members with special characters are now accepted by the member editor.
- `#F163080` - Even if the fields have special characters, calculated fields can now be created.

#### New Features

- `#321444` - Date/time values in the editing dialog can now be edited using the date/time picker.

## 19.1.54 (2021-03-30)

### Pivot Table

#### Breaking Changes

- The `chartSettings.enableMultiAxis` property is deprecated and will no longer to be used. Use `chartSettings.enableMultipleAxis` to achieve the same.

#### New Features

- `#294982`,`#F157008` - In addition to existing aggregation types, a median type has been included.
- `#293740`,`#294851`,`#295251`,`#310709`,`#F158140` - Multiple values (i.e. measures) can now be displayed in a single axis.
- Hyperlink can now be set based on caption of measure field.
- `#316689` - Data from the data manager can now be retrieved using a custom query.

#### Bug Fixes

- `#309694` - The issue in the pivot table for a particular OLAP cube has been fixed.
- `#313576` - The height calculation issue in the pivot table has been fixed.
- The issues in the field list with the defer layout update have now been fixed.

## 18.4.46

### Pivot Table

#### Bug Fixes

- Border alignment issue in "Grouping Bar" UI has been fixed.

## 18.4.30 (2020-12-17)

### Pivot Table

#### Bug Fixes

- `#300162` - The pivot chart now works properly with height as a percentage.

- `#298258` - Now the field list can be dynamically rendered without any errors.

## 18.2.56 (2020-09-01)

### Pivot Table

#### Bug Fixes

- `#289077` - Horizontal scrolling issue raised in the latest version of Firefox has been fixed.

- `#288047` - The options in the number formatting dialog are now properly maintained.
- `#288625` - The selection option in the pivot chart is now working properly.
- `#288633` - Members of the pivot chart legend are not properly segregated.

## 18.2.55 (2020-08-25)

### Pivot Table

#### Bug Fixes

- The drill through dialog now be showed the correct raw items when we filtering applied in fields in filter axis.
- The drill through dialog can now be openend when we bind measures in row axis.

#### New Features

- `#283107` - Provided template support in toolbar panel to create custom toolbar option.

## 18.2.54 (2020-08-18)

### Pivot Table

#### Bug Fixes

- Now drill-through dialog can be opened when the measures are placed in row axis.

- `#282514` - Now the first column’s width set in code-behind will be maintained.
- `#283562` - Now RGB colors can be applied in conditional formatting.

#### New Features

- `#260352`,`#276917`,`#280407`,`#281842` - Provided an option to do the aggregation in server side and the rendering part alone will be done in client side. It is to improve the performance while binding huge size of data from remote server.
- `#279727` - Provided support to sort the alphanumeric field members.
- `#F155279` - Provided an option to restrict the drill-through dialog to display.
- `#281462`,`#282526`,`#287070` - Provided an option to edit the aggregated cells directly (inline editing) without opening editing dialog.
- `#283107` - Provided template support in toolbar panel to create custom toolbar option.
- `#284800` - Introduced an event to get the edited raw data information after the editing operation.

- `#260352`,`#276917`,`#280407`,`#281842` - Provided an option to do the aggregation in server side and the rendering part alone will be done in client side. It is to improve the performance while binding huge size of data from remote server.
- `#279727` - Provided support to sort the alphanumeric field members.
- `#F155279` - Provided an option to restrict the drill-through dialog to display.
- `#281462`,`#282526`,`#287070` - Provided an option to edit the aggregated cells directly (inline editing) without opening editing dialog.
- `#284800` - Introduced an event to get the edited raw data information after the editing operation.

## 18.2.44 (2020-07-07)

### Pivot Table

#### New Features

- `#233316`,`#234648`,`#247163` - The pivot chart in the Pivot Table now has these chart types: pie, doughnut, pyramid, and funnel.
- In addition to JSON, the pivot table now supports CSV data sources, as well.

#### Bug Fixes

- `#275647` - Now the spanning issue in excel exporting has been fixed.
- `#F154285` - Now the issue in custom number formatting has been fixed.

## 18.1.44 (2020-04-14)

### Pivot Table

#### Bug Fixes

- `#266106` - Improved the data refresh on virtual scrolling.

## 18.1.36-beta (2020-03-19)

### Pivot Table

#### Breaking Changes

The appearance of the pivot table component has been improved.


#### New Features

- `#259812` - Provision has been provided to display only the required aggregation types in their context menu.
- `#262927` - Now, the drill through and editing feature can be worked in pivot chart by clicking its series.
- `#263612` - Authentication option provided to access the OLAP Cube while connecting it in a pivot table.
- `#151883` - Additional parameters are included in the cell template feature to distinguish each cells.
- Now, you can customize the each field buttons (show and hide the icons, restrict drag and drop operations) available in grouping bar and field list separately.
- Provision provided to customize the tooltip for both pivot table and pivot chart views.
- Formatting option included in the calculated field pop-up to format the calculated fields dynamically.
- Provision provided to display only the required chart types in its context menu available in toolbar panel.
- An option included in the chart types context menu to change the multiple axes option dynamically.
- An option included in the member editor to sort its members in a desired order.
- Provision provided to export the complete page when virtual scroll option is enabled.

#### Bug Fixes

- `#266452` - Now, the pivot table sample can be run in production mode of Angular framework.

## 17.4.39 (2019-12-17)

### Pivot Table

#### Bug Fixes

- `#254586` - The conditional formatting will no longer be applied in empty cells.
- The summarization text `of` in value buttons inside grouping bar and field list layout can be localized now.

- `#254586` - The conditional formatting will no longer be applied in empty cells.
- The summarization text `of` in value buttons inside grouping bar and field list layout can be localized now.
- `#247376` - The chart events under the chart settings property works now.

#### New Features

- `#252636` - Provision provided to disable the scrollbars in pivot chart.
- `#250072` - Provision provided to group and separate the grouped headers through UI.

## 17.3.26 (2019-11-05)

### Pivot Table

#### Bug Fixes

- `#251642` – Now, the defer layout update option can be enabled or disabled dynamically through field list UI.
- `#251558` – Now, the pivot chart draws with the percent of height value.

- #251642 – Now, the defer layout update option can be enabled or disabled dynamically through field list UI.
- #251558 – Now, the pivot chart draws with the percent of height value.

#### New Features

- `#248131` – Provided the conditional expression support to create calculated field.
- `#251642` – The performance of virtual scrolling while adding or removing fields and moving fields to any axis is improved.

- #248131 – Provided the conditional expression support to create calculated field.
- #251642 – The performance of virtual scrolling while adding or removing fields and moving fields to any axis is improved.

## 17.3.9-beta (2019-09-20)

### Pivot Table

#### Bug Fixes

- #244842 – Field list icon will be now placed inside the pivot table when field list option isn't included in toolbar.
- The last column of the pivot table can be displayed in Excel exported page properly.

- #247376 – The localization text for calculated fields is now displayed properly in tooltip.

#### New Features

- #245423 – Provision provided to persist and reload the pivot report.
- Provided SSAS OLAP data source support.

## 17.2.28-beta (2019-06-27)

### Pivot Table

#### Breaking Changes

- The `dataSource` and `dataSource.data` properties has now been renamed to `dataSourceSettings` and `dataSourceSettings.dataSource` respectively.

#### New Features

- #229377 – The pivot chart which is bound with pivot table allows the user to drill down and drill up now individually.
- #144382 – Unnecessary scroll bars have been removed from pivot table component.

#### Bug Fixes

- #144352 – The fields can be added dynamically for Pivot Chart control.

- `#237515` – Date grouping is now working properly with column axis.
- `#237535` – You can add fields dynamically with pivot table component in virtual scrolling mode.

## 17.1.47 (2019-05-14)

### Pivot Table

#### Bug Fixes

- #232925 - Grouping bar feature is now working fine with the combination of toolbar and pivot chart.

#### New Features

- #230489 – You can drill the pivot table headers based on the position.

## 17.1.38 (2019-03-29)

### Pivot Table

#### Bug Fixes

- Drill-down works properly for date formatted headers.

#### New Features

- Users can access grid functionalities in the drill-through pop-up.
- Option to always show the value header even with single value binding.
- Row header repeats on each page of the PDF document when exporting.
- Users can display the value zero as zero and empty cells with a custom value.
- Charts can be rendered against pivot table data independently, and users can modify their report dynamically using the field list.
- Toolbar support is provided to the pivot table, allowing users easy access to frequently used features.
- A grouping option is available for date and numbers fields.
- Users can customize or add custom templates to the Pivot Table cells.
- Cell selection allows users to select cells and access the selected cell information through the cell selection event.

## 17.1.32-beta (2019-03-13)

### Pivot Table

#### Bug Fixes

- Drill-down works properly for date formatted headers.

#### New Features

- Users can access grid functionalities in the drill-through pop-up.
- Option to always show the value header even with single value binding.
- Row header repeats on each page of the PDF document when exporting.
- Users can display the value zero as zero and empty cells with a custom value.
- Charts can be rendered against pivot table data independently, and users can modify their report dynamically using the field list.
- Toolbar support is provided to the pivot table, allowing users easy access to frequently used features.
- A grouping option is available for date and numbers fields.
- Users can customize or add custom templates to the Pivot Table cells.
- Cell selection allows users to select cells and access the selected cell information through the cell selection event.

## 17.1.1-beta (2019-01-29)

### Pivot Grid

#### New Features

- F141747- Always shows value caption in headers even having single measure.
- Cell selection now allows to select cells as row and column wise.
- Shows the filter state in the fields of filter axis.

## 16.4.42 (2018-12-14)

### Pivot Grid

#### Bug Fixes

- 219623 - Text in the field list tab gets completely displayed in mobile layout.
- 219625 - Scrolling works properly in touch mode when virtual scroll option is enabled.
- 219625 - In mobile device, virtual scrolling sample is loaded properly from the sample browser.
- 219625 - In mobile device, last column cells are displayed properly.

#### New Features

- Raw items in the control can be edited and updated at runtime.
- Provided support to list the raw items for a particular value cell.
- In the filter pop-up, provided support to set the limit the display field values and search option for refining the values from large data.
- Provided hyperlink support to perform any custom operation programmatically.
- Defer update option has been provided to refresh the control on-demand and not during every UI interaction for better performance.
- Provided support to show or hide subtotals and grand totals for rows and columns.
- More aggregation types like – Distinct Count, Product, Running Totals, Percentage of Column Total, Percentage of Parent Column Total, Population Var are added.

## 16.4.40-beta (2018-12-10)

### Pivot Grid

#### Bug Fixes

- 219623 - Text in the field list tab gets completely displayed in mobile layout.
- 219625 - Scrolling works properly in touch mode when virtual scroll option is enabled.
- 219625 - In mobile device, virtual scrolling sample is loaded properly from the sample browser.
- 219625 - In mobile device, last column cells are displayed properly.

#### New Features

- Raw items in the control can be edited and updated at runtime.
- Provided support to list the raw items for a particular value cell.
- In the filter pop-up, provided support to set the limit the display field values and search option for refining the values from large data.
- Provided hyperlink support to perform any custom operation programmatically.
- Defer update option has been provided to refresh the control on-demand and not during every UI interaction for better performance.
- Provided support to show or hide subtotals and grand totals for rows and columns.
- More aggregation types like – Distinct Count, Product, Running Totals, Percentage of Column Total, Percentage of Parent Column Total, Population Var are added.

## 16.3.21 (2018-09-22)

### Pivot Grid

#### New Features

- 208354, 211758 — Value fields can be placed in row axis now.
- **Virtual scrolling** options have been provided to load large amounts of data with high performance.
- **Conditional formatting** support allows users to define conditions and format grid cells’ font, colour etc.
- **Label and value-based filtering** options are provided that work similar to Microsoft Excel.

## 16.3.17 (2018-09-12)

### Pivot Grid

#### New Features

- 208354, 211758 — Value fields can be placed in row axis now.
- **Virtual scrolling** options have been provided to load large amounts of data with high performance.
- **Conditional formatting** support allows users to define conditions and format grid cells’ font, colour etc.
- **Label and value-based filtering** options are provided that work similar to Microsoft Excel.

## 16.2.41 (2018-06-25)

### Pivot Grid

The pivot grid is a multi-dimensional data visualization component built on top of the relational data sources. The pivot report can be managed dynamically at runtime along with other capabilities like aggregation, filtering and sorting (field and value based).


- **Data Sources** - Binds the component with an array of JavaScript objects.
- **Filtering** - Allows user to view only specific/desired records in the component.
- **Sorting** - Both member and value sorting are supported. It’s allows user to order fields and values (column) either in ascending or descending order respectively.
- **Field List & Grouping Bar** - Supports UI interaction at runtime to dynamically change the report along with sorting, filtering and remove options.
- **Aggregation** - Provides built in aggregation types like sum, average, min, max and count.
- **Calculated Field** - Users can add new value field(s) to the report dynamically using this option.
- **Adaptive Rendering** - Adapts with optimal user interfaces for mobile and desktop form-factors, thus helping the user’s application to scale elegantly across all the form-factors without any additional effort.
- **Exporting** - Provides the option to exporting records to Excel, CSV and PDF formats.


## 18.4.47 (2021-03-09)

### Pivot Table

#### Bug Fixes

- `#299730`, `#315686` - Issues in "Date Grouping" feature have been fixed.

## 18.2.58 (2020-09-15)

### Pivot Table

#### Bug Fixes

- `#289127` - The component can now be rendered by binding its report inside the asynchronous function.

## 18.2.57 (2020-09-08)

### Pivot Table

#### Bug Fixes

- `#290020` - Unwanted scrollbars will not be shown in the pivot table when exporting is allowed.
- `#F157261` - The component can now be refreshed when bind empty data source.

## 18.2.46 (2020-07-21)

### Pivot Table

#### Bug Fixes

- `#283671` - An empty pivot table is now framed while binding empty data from the remote server.
- The calculated fields can now be generated by a formula whose values are like a negative value divided by zero.

## 18.1.54 (2020-05-26)

### Pivot Table

#### Bug Fixes

- `#F154078` - The Error dialog is now clearly visible.

## 18.1.52 (2020-05-13)

### Pivot Table

#### Bug Fixes

- `#272044` - Now the localization string of the `null` value isn’t cleared on component refresh.
- `#273266` - The custom number format `#,###;(#,###)` now works in negative numbers.

## 17.2.34 (2019-07-11)

### Pivot Table

#### Bug Fixes

- `#240219` - Menu items in the toolbar now works properly.
- `#239685`, `#240221`, `#240220` - Alignment of the toolbar looks proper when the control is bound to remote data source.

