import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['point', 'series'];
let outputs: string[] = [];
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
@Directive({
    selector: 'e-selecteddataindexes>e-selecteddataindex',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class SelectedDataIndexDirective extends ComplexBase<SelectedDataIndexDirective> {


    /** 
     * Specifies the point index


     */
    public point: any;
    /** 
     * Specifies the series index


     */
    public series: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * SelectedDataIndex Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chart>e-selecteddataindexes',
    queries: {
        children: new ContentChildren(SelectedDataIndexDirective)
    },
})
export class SelectedDataIndexesDirective extends ArrayBase<SelectedDataIndexesDirective> {
    constructor() {
        super('selecteddataindexes');
    }
}