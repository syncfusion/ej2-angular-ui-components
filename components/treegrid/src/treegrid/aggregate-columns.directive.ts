import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['columnName', 'customAggregate', 'field', 'footerTemplate', 'format', 'type'];
let outputs: string[] = [];
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the Angular TreeGrid. 
 * ```html
 * <ejs-treegrid [dataSource]='data' allowPaging='true' allowSorting='true'> 
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
@Directive({
    selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns>e-column',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AggregateColumnDirective extends ComplexBase<AggregateColumnDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the aggregate type of a particular column. 
     * To use multiple aggregates for single column, specify the `type` as array. 
     * Types of aggregate are, 
     * * sum 
     * * average 
     * * max 
     * * min 
     * * count 
     * * falsecount 
     * * truecount 
     * * custom 
     * > Specify the `type` value as `custom` to use custom aggregation.
     * @asptype string
     * @default null
     */
    public type: any;
    /** 
     * Defines the column name to display the aggregate value. If `columnName` is not defined, 
     * then `field` name value will be assigned to the `columnName` property.
     * @default null
     */
    public columnName: any;
    /** 
     * Defines a function to calculate custom aggregate value. The `type` value should be set to `custom`. 
     * To use custom aggregate value in the template, use the key as `${custom}`. 
     * **Total aggregation**: The custom function will be called with the whole data and the current `AggregateColumn` object. 
     * **Group aggregation**: This will be called with the current group details and the `AggregateColumn` object.
     * @default null
     */
    public customAggregate: any;
    /** 
     * Defines the column name to perform aggregation.
     * @default null
     */
    public field: any;
    /** 
     * Format is applied to a calculated value before it is displayed. 
     * Gets the format from the user, which can be standard or custom 
     * [`number`](https://ej2.syncfusion.com/documentation/common/internationalization/#supported-format-string) 
     * and [`date`](https://ej2.syncfusion.com/documentation/common/internationalization/#supported-format-string-1) formats.
     * @asptype string
     * @default null
     */
    public format: any;
    /** 
     * Defines the footer cell template as a string for the aggregate column. 
     * The `type` name should be used to access aggregate values inside the template.
     * 
     * {% codeBlock src="grid/footer-template-api/index.ts" %}{% endcodeBlock %}
     *     
     * @default null
     * @asptype string

     */
    @ContentChild('footerTemplate')
    @Template()
    public footerTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * AggregateColumn Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-treegrid>e-aggregates>e-aggregate>e-columns',
    queries: {
        children: new ContentChildren(AggregateColumnDirective)
    },
})
export class AggregateColumnsDirective extends ArrayBase<AggregateColumnsDirective> {
    constructor() {
        super('columns');
    }
}