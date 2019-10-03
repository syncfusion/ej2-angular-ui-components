import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['allowEditing', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSorting', 'clipMode', 'columns', 'commands', 'customAttributes', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showCheckbox', 'showColumnMenu', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'];
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


    /** 
     * Defines the data type of the column.



     */
    public type: any;
    /** 
     * If `allowEditing` set to false, then it disables editing of a particular column. 
     * By default all columns are editable.

     */
    public allowEditing: any;
    /** 
     * If `allowFiltering` set to false, then it disables filtering option and filter bar element of a particular column. 
     * By default all columns are filterable.

     */
    public allowFiltering: any;
    /** 
     * If `allowReordering` set to false, then it disables reorder of a particular column. 
     * By default all columns can be reorder.

     */
    public allowReordering: any;
    /** 
     * If `allowResizing` set to false, it disables resize option of a particular column.

     */
    public allowResizing: any;
    /** 
     * If `allowSorting` set to false, then it disables sorting option of a particular column. 
     * By default all columns are sortable.

     */
    public allowSorting: any;
    /** 
     * Defines the cell content's overflow mode. The available modes are 
     * * `Clip` -  Truncates the cell content when it overflows its area. 
     * * `Ellipsis` -  Displays ellipsis when the cell content overflows its area. 
     * * `EllipsisWithTooltip` - Displays ellipsis when the cell content overflows its area 
     * also it will display tooltip while hover on ellipsis applied cell.




     */
    public clipMode: any;
    /** 
     * Used to render multiple header rows(stacked headers) on TreeGrid header.

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

     */
    public commands: any;
    /** 
     * The CSS styles and attributes of the content cells of a particular column can be customized.

     */
    public customAttributes: any;
    /** 
     * Defines default values for the component when adding a new record to the TreeGrid.


     */
    public defaultValue: any;
    /** 
     * If `disableHtmlEncode` is set to true, it encodes the HTML of the header and content cells.

     */
    public disableHtmlEncode: any;
    /** 
     * If `displayAsCheckBox` is set to true, it displays the column value as a check box instead of Boolean value.

     */
    public displayAsCheckBox: any;
    /** 
     * Defines the `IEditCell` object to customize default edit cell.

     */
    public edit: any;
    /** 
     * Defines the type of component for editing.



     */
    public editType: any;
    /** 
     * Defines the field name of column which is mapped with mapping name of DataSource. 
     * The bounded columns can be sort, filter etc., 
     * The `field` name must be a valid JavaScript identifier, 
     * the first character must be an alphabet and should not contain spaces and special characters.

     */
    public field: any;
    /** 
     *  Defines the filter options to customize filtering for the particular column. 

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

     */
    public filterBarTemplate: any;
    /** 
     * It is used to change display value with the given format and does not affect the original data. 
     * Gets the format from the user which can be standard or custom 
     * [`number`](../../../common/internationalization/#supported-format-string) 
     * and [`date`](../../../common/internationalization/#supported-format-string-1) formats.



     */
    public format: any;
    /** 
     * Defines the method which is used to achieve custom formatting from an external function. 
     * This function triggers before rendering of each cell.

     */
    public formatter: any;
    /** 
     * Defines the header text of column which is used to display in column header. 
     * If `headerText` is not defined, then field name value will be assigned to header text.

     */
    public headerText: any;
    /** 
     * Define the alignment of column header which is used to align the text of column header.






     */
    public headerTextAlign: any;
    /** 
     * Column visibility can change based on [`Media Queries`](http://cssmediaqueries.com/what-are-css-media-queries.html). 
     * `hideAtMedia` accepts only valid Media Queries.

     */
    public hideAtMedia: any;
    /** 
     * You can use this property to freeze selected columns in grid.

     */
    public isFrozen: any;
    /** 
     * If `isIdentity` is set to true, then this column is considered as identity column.

     */
    public isIdentity: any;
    /** 
     * If `isPrimaryKey` is set to true, considers this column as the primary key constraint.

     */
    public isPrimaryKey: any;
    /** 
     * If `lockColumn` set to true, then it disables Reordering of a particular column. 
     * The locked column will be moved to first position.

     */
    public lockColumn: any;
    /** 
     * Defines the maximum width of the column in pixels or percentage, which will restrict resizing beyond this pixels or percentage.

     */
    public maxWidth: any;
    /** 
     * Defines the minimum width of the column in pixels or percentage.

     */
    public minWidth: any;
    /** 
     * If `showCheckbox` set to true, then the checkboxes will be displayed in particular column.

     */
    public showCheckbox: any;
    /** 
     * If `showColumnMenu` set to false, then it disable the column menu of a particular column. 
     * By default column menu will show for all columns

     */
    public showColumnMenu: any;
    /** 
     * Defines the sort comparer property.

     */
    public sortComparer: any;
    /** 
     * Defines the alignment of the column in both header and content cells.




     */
    public textAlign: any;
    /** 
     * Gets the unique identifier value of the column. It is used to get the object.

     */
    public uid: any;
    /** 
     * Defines rules to validate data before creating and updating.

     */
    public validationRules: any;
    /** 
     * Defines the method used to apply custom cell values from external function and display this on each cell rendered.

     */
    public valueAccessor: any;
    /** 
     * If `visible` is set to false, hides the particular column. By default, columns are displayed.

     */
    public visible: any;
    /** 
     * Defines the width of the column in pixels or percentage.

     */
    public width: any;
    /** 
     * Defines the column template that renders customized element in each cell of the column. 
     * It accepts either [template string](../../../common/template-engine/) or HTML element ID.

     */
    @ContentChild('template')
    @Template()
    public template: any;
    /** 
     * Defines the header template as string or HTML element ID which is used to add customized element in the column header.

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

     */
    @ContentChild('editTemplate')
    @Template()
    public editTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
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