import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['customAttributes', 'displayAsCheckBox', 'field', 'format', 'header', 'headerTemplate', 'template', 'textAlign', 'width'];
let outputs: string[] = [];
/**
 * `e-column` directive represent a column of the Angular MultiColumnComboBox. 
 * It must be contained in a MultiColumnComboBox component(`ejs-multicolumncombobox`). 
 * ```html
 * <ejs-multicolumncombobox [dataSource]='data'>
 *   <e-columns>
 *    <e-column field='ID' width='100'></e-column>
 *    <e-column field='name' header='Name' width='100'></e-column>
 *   </e-columns>
 * </ejs-multicolumncombobox>
 * ```
 */
@Directive({
    selector: 'ejs-multicolumncombobox>e-columns>e-column',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {
    public directivePropList: any;
	


    /** 
     * The CSS styles and attributes of the content cells of a particular column can be customized.
     * @default null
     */
    public customAttributes: any;
    /** 
     * If `displayAsCheckBox` is set to true, it displays the column value as a check box instead of Boolean value.
     * @default false
     */
    public displayAsCheckBox: any;
    /** 
     * Defines the name of the field whose data will be displayed in the column.
     * @default ''
     */
    public field: any;
    /** 
     * It is used to change display value with the given format and does not affect the original data. 
     * Gets the format from the user which can be standard or custom `number` and `date` formats.
     * @default null
     * @asptype string
     */
    public format: any;
    /** 
     * Defines the header text of column which is used to display in column header. 
     * If headerText is not defined, then field name value will be assigned to header text.
     * @default ''
     */
    public header: any;
    /** 
     * Defines the alignment of the column in both header and content cells.
     * @default Left
     */
    public textAlign: any;
    /** 
     * Defines the width of the column in pixels or percentage.
     * @default ''
     */
    public width: any;
    /** 
     * Defines the column template that renders customized element in each cell of the column. 
     * It accepts either template or HTML element ID.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('template')
    @Template()
    public template: any;
    /** 
     * Defines the column template as string or HTML element ID which is used to add customized element in the column header.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;

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
    selector: 'ejs-multicolumncombobox>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}