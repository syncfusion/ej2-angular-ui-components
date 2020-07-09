import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { StockChartTrendlinesDirective } from './trendlines.directive';

let input: string[] = ['animation', 'bearFillColor', 'border', 'bullFillColor', 'cardinalSplineTension', 'close', 'columnSpacing', 'columnWidth', 'cornerRadius', 'dashArray', 'dataSource', 'emptyPointSettings', 'enableSolidCandles', 'enableTooltip', 'fill', 'high', 'low', 'marker', 'name', 'opacity', 'open', 'pointColorMapping', 'query', 'selectionStyle', 'tooltipMappingName', 'trendlines', 'type', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName'];
let outputs: string[] = [];
/**
 * Series Directive
 * ```html
 * <e-stockchart-series-collection>
 * <e-stockchart-series></e-stockchart-series>
 * </e-stockchart-series-collection>
 * ```
 */
@Directive({
    selector: 'e-stockchart-series-collection>e-stockchart-series',
    inputs: input,
    outputs: outputs,    
    queries: {
        childTrendlines: new ContentChild(StockChartTrendlinesDirective)
    }
})
export class StockChartSeriesDirective extends ComplexBase<StockChartSeriesDirective> {
    public directivePropList: any;
    public childTrendlines: any;
    public tags: string[] = ['trendlines'];
    /** 
     * The type of the series are 
     * * Line 
     * * Column 
     * * Area 
     * * Spline 
     * * Hilo 
     * * HiloOpenClose 
     * * Candle
     * @default 'Candle'
     */
    public type: any;
    /** 
     * Options to customizing animation for the series.
     */
    public animation: any;
    /** 
     * This property is used in stock charts to visualize the price movements in stock. 
     * It defines the color of the candle/point, when the opening price is less than the closing price.
     * @default '#2ecd71'
     */
    public bearFillColor: any;
    /** 
     * Options to customizing the border of the series. This is applicable only for `Column` and `Bar` type series.
     */
    public border: any;
    /** 
     * This property is used in financial charts to visualize the price movements in stock. 
     * It defines the color of the candle/point, when the opening price is higher than the closing price.
     * @default '#e74c3d'
     */
    public bullFillColor: any;
    /** 
     * It defines tension of cardinal spline types
     * @default 0.5
     */
    public cardinalSplineTension: any;
    /** 
     * The DataSource field that contains the close value of y 
     * It is applicable for series and technical indicators
     * @default ''
     */
    public close: any;
    /** 
     * To render the column series points with particular column spacing. It takes value from 0 - 1.
     * @default 0
     */
    public columnSpacing: any;
    /** 
     * To render the column series points with particular column width. If the series type is histogram the 
     * default value is 1 otherwise 0.7.
     * @default null
     * @aspdefaultvalueignore 
     */
    public columnWidth: any;
    /** 
     * To render the column series points with particular rounded corner.
     */
    public cornerRadius: any;
    /** 
     * Defines the pattern of dashes and gaps to stroke the lines in `Line` type series.
     * @default '0'
     */
    public dashArray: any;
    /** 
     * Specifies the DataSource for the series. It can be an array of JSON objects or an instance of DataManager.
     * @default ''
     */
    public dataSource: any;
    /** 
     * options to customize the empty points in series
     */
    public emptyPointSettings: any;
    /** 
     * This property is applicable for candle series. 
     * It enables/disables to visually compare the current values with the previous values in stock.
     * @default false
     */
    public enableSolidCandles: any;
    /** 
     * If set true, the Tooltip for series will be visible.
     * @default true
     */
    public enableTooltip: any;
    /** 
     * The fill color for the series that accepts value in hex and rgba as a valid CSS color string. 
     * It also represents the color of the signal lines in technical indicators. 
     * For technical indicators, the default value is 'blue' and for series, it has null.
     * @default null
     */
    public fill: any;
    /** 
     * The DataSource field that contains the high value of y 
     * It is applicable for series and technical indicators
     * @default ''
     */
    public high: any;
    /** 
     * The DataSource field that contains the low value of y 
     * It is applicable for series and technical indicators
     * @default ''
     */
    public low: any;
    /** 
     * Options for displaying and customizing markers for individual points in a series.
     */
    public marker: any;
    /** 
     * The name of the series visible in legend.
     * @default ''
     */
    public name: any;
    /** 
     * The opacity of the series.
     * @default 1
     */
    public opacity: any;
    /** 
     * The DataSource field that contains the open value of y 
     * It is applicable for series and technical indicators
     * @default ''
     */
    public open: any;
    /** 
     * The DataSource field that contains the color value of point 
     * It is applicable for series
     * @default ''
     */
    public pointColorMapping: any;
    /** 
     * Specifies query to select data from DataSource. This property is applicable only when the DataSource is `ej.DataManager`.
     * @default null
     */
    public query: any;
    /** 
     * Custom style for the selected series or points.
     * @default null
     */
    public selectionStyle: any;
    /** 
     * The provided value will be considered as a Tooltip name
     * @default ''
     */
    public tooltipMappingName: any;
    /** 
     * Defines the collection of trendlines that are used to predict the trend
     */
    public trendlines: any;
    /** 
     * Specifies the visibility of series.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the data source field that contains the volume value in candle charts 
     * It is applicable for financial series and technical indicators
     * @default ''
     */
    public volume: any;
    /** 
     * The stroke width for the series that is applicable only for `Line` type series. 
     * It also represents the stroke width of the signal lines in technical indicators.
     * @default 1
     */
    public width: any;
    /** 
     * The name of the horizontal axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators
     * @default null
     */
    public xAxisName: any;
    /** 
     * The DataSource field that contains the x value. 
     * It is applicable for series and technical indicators
     * @default ''
     */
    public xName: any;
    /** 
     * The name of the vertical axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators
     * @default null
     */
    public yAxisName: any;
    /** 
     * The DataSource field that contains the y value.
     * @default ''
     */
    public yName: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * StockChartSeries Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-stockchart>e-stockchart-series-collection',
    queries: {
        children: new ContentChildren(StockChartSeriesDirective)
    },
})
export class StockChartSeriesCollectionDirective extends ArrayBase<StockChartSeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}