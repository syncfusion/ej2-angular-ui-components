import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showItemCount', 'template'];
let outputs: string[] = [];
/**
 * `e-columns` directive represent a columns of the Kanban board. 
 * It must be contained in a Kanban component(`ejs-kanban`). 
 * ```html
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
 * ```
 */
@Directive({
    selector: 'e-columns>e-column',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ColumnDirective extends ComplexBase<ColumnDirective> {


    /** 
     * Enable or disable toggle column
     * @default false
     */
    public allowToggle: any;
    /** 
     * Defines the column header title
     * @default null
     */
    public headerText: any;
    /** 
     * Defines the collapsed or expandable state
     * @default true
     */
    public isExpanded: any;
    /** 
     * Defines the column keyField
     * @default null
     */
    public keyField: any;
    /** 
     * Defines the maximum card count in column
     * @default null
     */
    public maxCount: any;
    /** 
     * Defines the minimum card count in column
     * @default null
     */
    public minCount: any;
    /** 
     * Enable or disable card count in column
     * @default false
     */
    public showItemCount: any;
    /** 
     * Defines the column template
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;

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
    selector: 'ejs-kanban>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}