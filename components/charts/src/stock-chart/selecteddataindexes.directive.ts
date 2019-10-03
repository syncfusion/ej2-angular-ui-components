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
    selector: 'ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class StockChartSelectedDataIndexDirective extends ComplexBase<StockChartSelectedDataIndexDirective> {


    /** 
     * Specifies index of point


     */
    public point: any;
    /** 
     * Specifies index of series


     */
    public series: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * StockChartSelectedDataIndex Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-stockchart>e-stockchart-selectedDataIndexes',
    queries: {
        children: new ContentChildren(StockChartSelectedDataIndexDirective)
    },
})
export class StockChartSelectedDataIndexesDirective extends ArrayBase<StockChartSelectedDataIndexesDirective> {
    constructor() {
        super('selecteddataindexes');
    }
}