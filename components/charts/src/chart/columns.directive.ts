import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['border', 'width'];
let outputs: string[] = [];
/**
 * Column Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
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
     * Options to customize the border of the columns.
     */
    public border: any;
    /** 
     * The width of the column as a string accepts input both as like '100px' or '100%'. 
     * If specified as '100%, column renders to the full width of its chart.
     * @default '100%'
     */
    public width: any;

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
    selector: 'ejs-chart>e-columns',
    queries: {
        children: new ContentChildren(ColumnDirective)
    },
})
export class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor() {
        super('columns');
    }
}