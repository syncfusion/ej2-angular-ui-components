import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'freeze', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
let outputs: string[] = [];
/**
 * `e-column` directive represent a column of the Angular TreeGrid. 
 * It must be contained in a TreeGrid component(`ejs-treegrid`). 
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
@Directive({
    selector: 'ejs-treegrid>e-columns>e-column',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the data type of the column.
     * @default null
     */
    public type: any;
    /** 
     * If `allowEditing` set to false, then it disables editing of a particular column. 
     * By default all columns are editable.
     * @default true
     */
    public allowEditing: any;
    /** 
     * If `allowFiltering` set to false, then it disables filtering option and filter bar element of a particular column. 
     * By default all columns are filterable.
     * @default true
     */
    public allowFiltering: any;
    /** 
     * If `allowReordering` set to false, then it disables reorder of a particular column. 
     * By default all columns can be reorder.
     * @default true
     */
    public allowReordering: any;
    /** 
     * If `allowResizing` set to false, it disables resize option of a particular column.
     * @default true
     */
    public allowResizing: any;
    /** 
     * If `allowSorting` set to false, then it disables sorting option of a particular column. 
     * By default all columns are sortable.
     * @default true
     */
    public allowSorting: any;
    /** 
     * Defines the cell content's overflow mode. The available modes are 
     * * `Clip` -  Truncates the cell content when it overflows its area. 
     * * `Ellipsis` -  Displays ellipsis when the cell content overflows its area. 
     * * `EllipsisWithTooltip` - Displays ellipsis when the cell content overflows its area 
     * also it will display tooltip while hover on ellipsis applied cell.
     * @default Syncfusion.EJ2.Grids.ClipMode.Ellipsis
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.ClipMode
     */
    public clipMode: any;
    /** 
     * Used to render multiple header rows(stacked headers) on TreeGrid header.
     * @default null
     */
    public columns: any;
    /** 
     * `commands` provides an option to display command buttons in every cell. 
     * The available built-in command buttons are 
     * * Edit - Edit the record. 
     * * Delete - Delete the record. 
     * * Save - Save the record. 
     * * Cancel - Cancel the edit state.
     * 
     * The following code example implements the custom command column.
     *```html
     *<style type="text/css" class="cssStyles">
     *.details-icon:before
     *{
     *   content:"\e74d";
     *}
     *</style>
     *<div id="TreeGrid"></div>
     *```
     *```typescript
     *var gridObj = new TreeGrid({
     *datasource: window.gridData,
     *columns : [
     * { field: 'CustomerID', headerText: 'Customer ID' },
     * { field: 'CustomerName', headerText: 'Customer Name' },
     * {commands: [{buttonOption:{content: 'Details', click: onClick, cssClass: details-icon}}], headerText: 'Customer Details'}
     *]
     *gridObj.appendTo("#TreeGrid");
     *```
     *     
     * @default null
     */
    public commands: any;
    /** 
     * The CSS styles and attributes of the content cells of a particular column can be customized.
     * @default null
     */
    public customAttributes: any;
    /** 
     * Defines default values for the component when adding a new record to the TreeGrid.
     * @default null
     */
    public defaultValue: any;
    /** 
     * If `disableHtmlEncode` is set to true, it encodes the HTML of the header and content cells.
     * @default true
     */
    public disableHtmlEncode: any;
    /** 
     * If `displayAsCheckBox` is set to true, it displays the column value as a check box instead of Boolean value.
     * @default false
     */
    public displayAsCheckBox: any;
    /** 
     * Defines the `IEditCell` object to customize default edit cell.
     * @default {}
     */
    public edit: any;
    /** 
     * Defines the type of component for editing.
     * @default 'stringedit'
     */
    public editType: any;
    /** 
     * Defines the field name of column which is mapped with mapping name of DataSource. 
     * The bounded columns can be sort, filter etc., 
     * The `field` name must be a valid JavaScript identifier, 
     * the first character must be an alphabet and should not contain spaces and special characters.
     * @default 'undefined'
     */
    public field: any;
    /** 
     *  Defines the filter options to customize filtering for the particular column.
     * 
     *  @default null
     *     
     */
    public filter: any;
    /** 
     * The `filterBarTemplate` is used to add a custom component instead of default input component for filter bar. 
     * It have create and read functions. 
     * * create: It is used for creating custom components. 
     * * read: It is used to perform custom filter action.
     * 
     * ```html
     *<div id="TreeGrid"></div>
     *```
     *```typescript
     *let gridObj: TreeGrid = new TreeGrid({
     *dataSource: filterData,
     *columns: [
     *  { field: 'OrderID', headerText: 'Order ID' },
     *  {
     *     field: 'EmployeeID', filterBarTemplate: {
     *        create: (args: { element: Element, column: Column }) => {
     *             let input: HTMLInputElement = document.createElement('input');
     *             input.id = 'EmployeeID';
     *             input.type = 'text';
     *             return input;
     *        },
     *        write: (args: { element: Element, column: Column }) => {
     *            args.element.addEventListener('input', args.column.filterBarTemplate.read as EventListener);
     *        },
     *        read: (args: { element: HTMLInputElement, columnIndex: number, column: Column }) => {
     *            gridObj.filterByColumn(args.element.id, 'equal', args.element.value);
     *       }
     *    }
     * }],
     *  allowFiltering: true
     *});
     *gridObj.appendTo('#TreeGrid');
     *```
     *     
     * @default null
     */
    public filterBarTemplate: any;
    /** 
     * It is used to change display value with the given format and does not affect the original data. 
     * Gets the format from the user which can be standard or custom 
     * [`number`](../../../common/internationalization/#supported-format-string) 
     * and [`date`](../../../common/internationalization/#supported-format-string-1) formats.
     * @default null
     * @asptype string
     */
    public format: any;
    /** 
     * Defines the method which is used to achieve custom formatting from an external function. 
     * This function triggers before rendering of each cell.
     * @default null
     */
    public formatter: any;
    /** 
     * Defines which side the column need to freeze
     * @default Syncfusion.EJ2.Grids.FreezeDirection.None
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.FreezeDirection
     */
    public freeze: any;
    /** 
     * Defines the header text of column which is used to display in column header. 
     * If `headerText` is not defined, then field name value will be assigned to header text.
     * @default 'undefined'
     */
    public headerText: any;
    /** 
     * Define the alignment of column header which is used to align the text of column header.
     * @default null
     * @aspdefaultvalueignore 
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.TextAlign
     */
    public headerTextAlign: any;
    /** 
     * Column visibility can change based on [`Media Queries`](http://cssmediaqueries.com/what-are-css-media-queries.html). 
     * `hideAtMedia` accepts only valid Media Queries.
     * @default 'undefined'
     */
    public hideAtMedia: any;
    /** 
     * You can use this property to freeze selected columns in grid.
     * @default false
     */
    public isFrozen: any;
    /** 
     * If `isIdentity` is set to true, then this column is considered as identity column.
     * @default false
     */
    public isIdentity: any;
    /** 
     * If `isPrimaryKey` is set to true, considers this column as the primary key constraint.
     * @default false
     */
    public isPrimaryKey: any;
    /** 
     * If `lockColumn` set to true, then it disables Reordering of a particular column. 
     * The locked column will be moved to first position.
     * @default false
     */
    public lockColumn: any;
    /** 
     * Defines the maximum width of the column in pixels or percentage, which will restrict resizing beyond this pixels or percentage.
     * @default 'undefined'
     */
    public maxWidth: any;
    /** 
     * Defines the minimum width of the column in pixels or percentage.
     * @default 'undefined'
     */
    public minWidth: any;
    /** 
     * If `showCheckbox` set to true, then the checkboxes will be displayed in particular column.
     * @default false
     */
    public showCheckbox: any;
    /** 
     * If `showColumnMenu` set to false, then it disable the column menu of a particular column. 
     * By default column menu will show for all columns
     * @default true
     */
    public showColumnMenu: any;
    /** 
     * If `showInColumnChooser` set to false, then hide the particular column in column chooser. 
     *  By default all columns are displayed in column Chooser.
     * @default true
     */
    public showInColumnChooser: any;
    /** 
     * Defines the sort comparer property.
     * @default 'undefined'
     */
    public sortComparer: any;
    /** 
     * Defines the alignment of the column in both header and content cells.
     * @default Syncfusion.EJ2.Grids.TextAlign.Left
     * @isenumeration true
     * @asptype Syncfusion.EJ2.Grids.TextAlign
     */
    public textAlign: any;
    /** 
     * Gets the unique identifier value of the column. It is used to get the object.
     * @default 'undefined'
     */
    public uid: any;
    /** 
     * Defines rules to validate data before creating and updating.
     * @default null
     */
    public validationRules: any;
    /** 
     * Defines the method used to apply custom cell values from external function and display this on each cell rendered.
     * @default null
     */
    public valueAccessor: any;
    /** 
     * If `visible` is set to false, hides the particular column. By default, columns are displayed.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the width of the column in pixels or percentage.
     * @default 'undefined'
     */
    public width: any;
    /** 
     * Defines the column template that renders customized element in each cell of the column. 
     * It accepts either [template string](../../../common/template-engine/) or HTML element ID.
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;
    /** 
     * Defines the header template as string or HTML element ID which is used to add customized element in the column header.
     * @default null
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;
    @ContentChild('filterItemTemplate')
    @Template()
    public filter_itemTemplate: any;
    /** 
     * Defines the filter template/UI that is used as filter for a particular column. 
     * It accepts either template string or HTML element ID.
     * @aspignore 
     */
    @ContentChild('filterTemplate')
    @Template()
    public filterTemplate: any;
    @ContentChild('commandsTemplate')
    @Template()
    public commandsTemplate: any;
    /** 
     * Defines the cell edit template that used as editor for a particular column. 
     * It accepts either template string or HTML element ID.
     * @aspignore 
     */
    @ContentChild('editTemplate')
    @Template()
    public editTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Column Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-treegrid>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}