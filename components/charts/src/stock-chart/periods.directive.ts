import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['interval', 'intervalType', 'selected', 'text'];
let outputs: string[] = [];
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-periods>
 * <e-stockchart-period></e-stockchart-period>
 * </e-stockchart-periods>
 * ```
 */
@Directive({
    selector: 'e-stockchart-indicators>e-stockchart-period',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class StockChartPeriodDirective extends ComplexBase<StockChartPeriodDirective> {


    /** 
     * Count value for the button

     */
    public interval: any;
    /** 
     * IntervalType of button

     */
    public intervalType: any;
    /** 
     * To select the default period

     */
    public selected: any;
    /** 
     * Text to be displayed on the button

     */
    public text: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * StockChartPeriod Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-stockchart>e-stockchart-periods',
    queries: {
        children: new ContentChildren(StockChartPeriodDirective)
    },
})
export class StockChartPeriodsDirective extends ArrayBase<StockChartPeriodsDirective> {
    constructor() {
        super('periods');
    }
}