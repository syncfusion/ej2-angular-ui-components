import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['allowDrag', 'allowDrop', 'allowToggle', 'headerText', 'isExpanded', 'keyField', 'maxCount', 'minCount', 'showAddButton', 'showItemCount', 'template', 'transitionColumns'];
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
    public directivePropList: any;
	


    /** 
     * Enable or disable column drag
     * @default true
     */
    public allowDrag: any;
    /** 
     * Enable or disable column drop
     * @default true
     */
    public allowDrop: any;
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
     * Defines the column keyField. It supports both number and string type. 
     * String type supports the multiple column keys and number type does not support the multiple column keys.
     * @default null
     */
    public keyField: any;
    /** 
     * Defines the maximum card count in column
     * @default null
     * @asptype int
     */
    public maxCount: any;
    /** 
     * Defines the minimum card count in column
     * @default null
     * @asptype int
     */
    public minCount: any;
    /** 
     * Enable or disable cell add button
     * @default false
     */
    public showAddButton: any;
    /** 
     * Enable or disable card count in column
     * @default true
     */
    public showItemCount: any;
    /** 
     * Defines the column transition
     * @default []
     */
    public transitionColumns: any;
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
        this.directivePropList = input;
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