import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animation', 'backwardForecast', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'width'];
let outputs: string[] = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-trendlines>
 * <e-trendline>
 * </e-trendline>
 * </e-trendlines>
 * </e-series-collection>
 * ```
 */
@Directive({
    selector: 'e-series>e-trendlines>e-trendline',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class TrendlineDirective extends ComplexBase<TrendlineDirective> {


    /** 
     * Defines the type of the trendline

     */
    public type: any;
    /** 
     * Options to customize the animation for trendlines
     */
    public animation: any;
    /** 
     * Defines the period, by which the trend has to backward forecast

     */
    public backwardForecast: any;
    /** 
     * Enables/disables tooltip for trendlines

     */
    public enableTooltip: any;
    /** 
     * Defines the fill color of trendline

     */
    public fill: any;
    /** 
     * Defines the period, by which the trend has to forward forecast

     */
    public forwardForecast: any;
    /** 
     * Defines the intercept of the trendline


     */
    public intercept: any;
    /** 
     * Sets the legend shape of the trendline

     */
    public legendShape: any;
    /** 
     * Options to customize the marker for trendlines
     */
    public marker: any;
    /** 
     * Defines the name of trendline

     */
    public name: any;
    /** 
     * Defines the period, the price changes over which will be considered to predict moving average trend line

     */
    public period: any;
    /** 
     * Defines the polynomial order of the polynomial trendline

     */
    public polynomialOrder: any;
    /** 
     * Defines the width of the trendline

     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Trendline Array Directive
 * @private
 */
@Directive({
    selector: 'e-series>e-trendlines',
    queries: {
        children: new ContentChildren(TrendlineDirective)
    },
})
export class TrendlinesDirective extends ArrayBase<TrendlinesDirective> {
    constructor() {
        super('trendlines');
    }
}