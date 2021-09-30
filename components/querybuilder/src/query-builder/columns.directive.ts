import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['category', 'columns', 'field', 'format', 'label', 'operators', 'ruleTemplate', 'step', 'template', 'type', 'validation', 'value', 'values'];
let outputs: string[] = [];
/**
 * `e-column` directive represent a column of the Angular QueryBuilder. 
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`). 
 * ```html
 * <ejs-querybuilder [dataSource]='data'> 
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'></e-column>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'></e-column>
 *   </e-columns>
 * </ejs-querybuilder>
 * ```
 */
@Directive({
    selector: 'ejs-querybuilder>e-columns>e-column',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the types in columns field.
     * @default null
     */
    public type: any;
    /** 
     * Specifies the category for columns.
     * @default null
     */
    public category: any;
    /** 
     * Specifies the sub fields in columns.
     * @default null

     */
    public columns: any;
    /** 
     * Specifies the fields in columns.
     * @default null
     */
    public field: any;
    /** 
     * Specifies the date format for columns.
     * @asptype string
     * @blazortype string
     * @default null
     */
    public format: any;
    /** 
     * Specifies the labels name in columns.
     * @default null
     */
    public label: any;
    /** 
     * Specifies the operators in columns.
     * @default null
     */
    public operators: any;
    /** 
     * Specifies the step value(numeric textbox) for columns.
     * @default null
     */
    public step: any;
    /** 
     * Specifies the validation for columns (text, number and date).
     * @default { isRequired: true , min: 0, max: Number.MAX_VALUE }
     */
    public validation: any;
    /** 
     * Specifies the default value for columns.
     * @default null
     */
    public value: any;
    /** 
     * Specifies the values in columns or bind the values from sub controls.
     * @default null
     */
    public values: any;
    /** 
     * Specifies the rule template for the field with any other widgets.
     * @default null
     */
    @ContentChild('ruleTemplate')
    @Template()
    public ruleTemplate: any;
    /** 
     * Specifies the template for value field such as slider or any other widgets.
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;

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
    selector: 'ejs-querybuilder>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}