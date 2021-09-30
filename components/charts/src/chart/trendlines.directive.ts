import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
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
    public directivePropList: any;
	


    /** 
     * Defines the type of the trendline
     * @default 'Linear'
     */
    public type: any;
    /** 
     * Options to customize the animation for trendlines
     */
    public animation: any;
    /** 
     * Defines the period, by which the trend has to backward forecast
     * @default 0
     */
    public backwardForecast: any;
    /** 
     * Defines the pattern of dashes and gaps to stroke.
     * @default '0'
     */
    public dashArray: any;
    /** 
     * Enables/disables tooltip for trendlines
     * @default true
     */
    public enableTooltip: any;
    /** 
     * Defines the fill color of trendline
     * @default ''
     */
    public fill: any;
    /** 
     * Defines the period, by which the trend has to forward forecast
     * @default 0
     */
    public forwardForecast: any;
    /** 
     * Defines the intercept of the trendline
     * @default null
     * @aspdefaultvalueignore 
     */
    public intercept: any;
    /** 
     * Sets the legend shape of the trendline
     * @default 'SeriesType'
     */
    public legendShape: any;
    /** 
     * Options to customize the marker for trendlines
     * @deprecated 
     */
    public marker: any;
    /** 
     * Defines the name of trendline
     * @default ''
     */
    public name: any;
    /** 
     * Defines the period, the price changes over which will be considered to predict moving average trend line
     * @default 2
     */
    public period: any;
    /** 
     * Defines the polynomial order of the polynomial trendline
     * @default 2
     */
    public polynomialOrder: any;
    /** 
     * Specifies the visibility of trendline.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the width of the trendline
     * @default 1
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