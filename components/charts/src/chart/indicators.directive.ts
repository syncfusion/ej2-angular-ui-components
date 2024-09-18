import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animation', 'bandColor', 'close', 'colorName', 'dPeriod', 'dashArray', 'dataSource', 'enableComplexProperty', 'fastPeriod', 'field', 'fill', 'high', 'kPeriod', 'low', 'lowerLine', 'macdLine', 'macdNegativeColor', 'macdPositiveColor', 'macdType', 'open', 'overBought', 'overSold', 'period', 'periodLine', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'seriesName', 'showZones', 'slowPeriod', 'standardDeviation', 'type', 'upperLine', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName'];
let outputs: string[] = [];
/**
 * Indicator Directive
 * ```html
 * <e-indicators>
 * <e-indicator></e-indicator>
 * </e-indicators>
 * ```
 */
@Directive({
    selector: 'e-indicators>e-indicator',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class IndicatorDirective extends ComplexBase<IndicatorDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the types of technical indicators. They are: 
     * * 'Sma' - Predicts the trend using the Simple Moving Average approach. 
     * * 'Ema' - Predicts the trend using the Exponential Moving Average approach. 
     * * 'Tma' - Predicts the trend using the Triangular Moving Average approach. 
     * * 'Atr' - Predicts the trend using the Average True Range approach. 
     * * 'AccumulationDistribution' - Predicts the trend using the Accumulation Distribution approach. 
     * * 'Momentum' - Predicts the trend using the Momentum approach. 
     * * 'Rsi' - Predicts the trend using the Relative Strength Index (RSI) approach. 
     * * 'Macd' - Predicts the trend using the Moving Average Convergence Divergence (MACD) approach. 
     * * 'Stochastic' - Predicts the trend using the Stochastic Oscillator approach. 
     * * 'BollingerBands' - Predicts the trend using the Bollinger Bands approach.
     * @default 'Sma'
     */
    public type: any;
    /** 
     * Options for customizing the animation of the series. 
     * By default, animation is enabled with a duration of 1000 milliseconds (about 1 second). It can be disabled by setting enable to `false`. 
     * The following properties are supported in animation: 
     * * enable: If set to true, the series is animated on initial loading. 
     * * duration: The duration of the animation in milliseconds. 
     * * delay: The delay before the animation starts, in milliseconds.
     */
    public animation: any;
    /** 
     * Configures the settings for customizing the Bollinger Bands in the indicator.
     * @default 'rgba(211,211,211,0.25)'
     */
    public bandColor: any;
    /** 
     * The data source field that contains the close value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public close: any;
    /** 
     * The data source field that contains the color mapping value. 
     * It is applicable for range color mapping.
     */
    public colorName: any;
    /** 
     * Defines the period over which price changes determine the %D value in stochastic indicators.
     * @default 3
     */
    public dPeriod: any;
    /** 
     * Defines the pattern of dashes and gaps used to stroke the lines in `Line` type series.
     * @default ''
     */
    public dashArray: any;
    /** 
     * Specifies the data source for the series. It can be an array of JSON objects, or an instance of DataManager. 
     * 
     * @default ''
     */
    public dataSource: any;
    /** 
     * This property is used to improve chart performance through data mapping for the series data source.
     * @default false
     */
    public enableComplexProperty: any;
    /** 
     * Sets the fast period to define the MACD line.
     * @default 26
     */
    public fastPeriod: any;
    /** 
     * Defines the field used to compare the current value with previous values.
     * @default 'Close'
     */
    public field: any;
    /** 
     * The fill color for the series, which accepts values in hex or rgba as a valid CSS color string. 
     * It also represents the color of the signal lines in technical indicators. 
     * For technical indicators, the default value is 'blue', and for series, it is null.
     * @default null
     */
    public fill: any;
    /** 
     * The data source field that contains the high value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public high: any;
    /** 
     * Defines the look-back period for price changes used to calculate the %K value in stochastic indicators.
     * @default 14
     */
    public kPeriod: any;
    /** 
     * The data source field that contains the low value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public low: any;
    /** 
     * Defines the appearance of the lower line in technical indicators.
     */
    public lowerLine: any;
    /** 
     * Defines the appearance of the MACD line in the MACD indicator.
     * @default { color: '#ff9933', width: 2 }
     */
    public macdLine: any;
    /** 
     * Specifies the color for negative bars in the MACD indicator.
     * @default '#e74c3d'
     */
    public macdNegativeColor: any;
    /** 
     * Specifies the color for positive bars in the MACD indicator.
     * @default '#2ecd71'
     */
    public macdPositiveColor: any;
    /** 
     * Defines the type of the MACD (Moving Average Convergence Divergence) indicator.
     * @default 'Both'
     */
    public macdType: any;
    /** 
     * The data source field that contains the open value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public open: any;
    /** 
     * Specifies the over-bought (threshold) values applicable for RSI and stochastic indicators.
     * @default 80
     */
    public overBought: any;
    /** 
     * Defines the over-sold (threshold) values for RSI and stochastic indicators.
     * @default 20
     */
    public overSold: any;
    /** 
     * Defines the period over which price changes are considered for trend prediction.
     * @default 14
     */
    public period: any;
    /** 
     * Defines the appearance of the period line in technical indicators.
     */
    public periodLine: any;
    /** 
     * The data source field that contains the color value of a point. 
     * It is applicable for series.
     * @default ''
     */
    public pointColorMapping: any;
    /** 
     * Specifies a query to select data from the data source. This property is applicable only when the data source is an `ej.DataManager`.
     * @default ''
     */
    public query: any;
    /** 
     * Defines the axis along which the line series will be split.
     */
    public segmentAxis: any;
    /** 
     * Specifies a collection of regions used to differentiate a line series.
     */
    public segments: any;
    /** 
     * Specifies the name of the series to be used for displaying the indicator data.
     * @default ''
     */
    public seriesName: any;
    /** 
     * Specifies whether to enable or disable the over-bought and over-sold regions.
     * @default true
     */
    public showZones: any;
    /** 
     * Sets the slow period for defining the MACD line.
     * @default 12
     */
    public slowPeriod: any;
    /** 
     * Sets the standard deviation values used to define the upper and lower Bollinger Bands.
     * @default 2
     */
    public standardDeviation: any;
    /** 
     * Defines the appearance of the upper line in technical indicators.
     */
    public upperLine: any;
    /** 
     * If set to `true`, the series will be visible. If set to `false`, the series will be hidden.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the data source field that contains the volume value in candle charts. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public volume: any;
    /** 
     * The stroke width for the series, applicable only for `Line` type series. 
     * It also represents the stroke width of the signal lines in technical indicators.
     * @default 1
     */
    public width: any;
    /** 
     * The name of the horizontal axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators. 
     * 
     * @default null
     */
    public xAxisName: any;
    /** 
     * The data source field that contains the x value. 
     * It is applicable to both series and technical indicators.
     * @default ''
     */
    public xName: any;
    /** 
     * The name of the vertical axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators. 
     * 
     * @default null
     */
    public yAxisName: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Indicator Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-indicators',
    queries: {
        children: new ContentChildren(IndicatorDirective)
    },
})
export class IndicatorsDirective extends ArrayBase<IndicatorsDirective> {
    constructor() {
        super('indicators');
    }
}