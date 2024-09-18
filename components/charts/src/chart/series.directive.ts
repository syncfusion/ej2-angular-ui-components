import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { TrendlinesDirective } from './trendlines.directive';
import { SegmentsDirective } from './segments.directive';

let input: string[] = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'colorName', 'columnFacet', 'columnSpacing', 'columnWidth', 'columnWidthInPixel', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'groupName', 'high', 'intermediateSumIndexes', 'isClosed', 'legendImageUrl', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'noRisers', 'nonHighlightStyle', 'opacity', 'open', 'paretoOptions', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'step', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'unSelectedStyle', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
let outputs: string[] = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series></e-series>
 * </e-series-collection>
 * ```
 */
@Directive({
    selector: 'e-series-collection>e-series',
    inputs: input,
    outputs: outputs,    
    queries: {
        childTrendlines: new ContentChild(TrendlinesDirective), 
        childSegments: new ContentChild(SegmentsDirective)
    }
})
export class SeriesDirective extends ComplexBase<SeriesDirective> {
    public directivePropList: any;
	
    public childTrendlines: any;
    public childSegments: any;
    public tags: string[] = ['trendlines', 'segments'];
    /** 
     * The type of the series determines the visual representation of the data. 
     * Available series types include: 
     * * Line - Draws a line series. 
     * * Column - Draws a column series. 
     * * Area - Draws an area series. 
     * * Bar - Draws a bar series. 
     * * Histogram - Draws a histogram series. 
     * * StackingColumn - Draws a stacking column series. 
     * * StackingArea - Draws a stacking area series. 
     * * StackingBar - Draws a stacking bar series. 
     * * StepLine - Draws a step line series. 
     * * StepArea - Draws a step area series. 
     * * Scatter - Draws a scatter series. 
     * * Spline - Draws a spline series. 
     * * StackingColumn100 - Draws a 100% stacked column series. 
     * * StackingBar100 - Draws a 100% stacked bar series. 
     * * StackingArea100 - Draws a 100% stacked area series. 
     * * RangeColumn - Draws a range column series. 
     * * Hilo - Draws a Hilo series. 
     * * HiloOpenClose - Draws a Hilo Open Close series. 
     * * Waterfall - Draws a waterfall series. 
     * * RangeArea - Draws a range area series. 
     * * SplineRangeArea - Draws a spline range area series. 
     * * Bubble - Draws a bubble series. 
     * * Candle - Draws a candle series. 
     * * Polar - Draws a polar series. 
     * * Radar - Draws a radar series. 
     * * BoxAndWhisker - Draws a box and whisker series. 
     * * Pareto - Draws a Pareto series.
     * @default 'Line'
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
     * This property is used in financial charts to visualize price movements in stocks. 
     * It defines the color of the candle/point when the opening price is less than the closing price.
     * @default null
     */
    public bearFillColor: any;
    /** 
     * The `binInterval` property controls the width of each bin and the interval between bins for histogram points.
     * @default null
     * @aspdefaultvalueignore 
     */
    public binInterval: any;
    /** 
     * Options for customizing the border of the series. 
     * > Note that this property is applicable only for `Column` and `Bar` type series.
     */
    public border: any;
    /** 
     * Specifies the box plot mode for the box and whisker chart series. 
     * The available modes are: 
     * Exclusive - Renders the series based on the exclusive mode. 
     * Inclusive - Renders the series based on the inclusive mode. 
     * Normal - Renders the series based on the normal mode.
     * @default 'Normal'
     */
    public boxPlotMode: any;
    /** 
     * This property is used in financial charts to visualize price movements in stocks. 
     * It defines the color of the candle/point when the opening price is higher than the closing price.
     * @default null
     */
    public bullFillColor: any;
    /** 
     * Specifies the tension parameter for cardinal splines. This affects the curvature of the spline.
     * @default 0.5
     */
    public cardinalSplineTension: any;
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
     * Defines the shape of the data in a column and bar chart. 
     * Available shapes are: 
     * * Rectangle: Displays the data in a column and bar chart with a rectangular shape. 
     * * Cylinder: Displays the data in a column and bar chart with a cylindrical shape.
     * @default 'Rectangle'
     */
    public columnFacet: any;
    /** 
     * This property determines the space between columns in a column or bar chart. 
     * > Note that it takes a value from 0 to 1.
     * @default 0
     */
    public columnSpacing: any;
    /** 
     * The `columnWidth` property can be used to customize the width of the columns in a column series. 
     * > Note that if the series type is histogram, the default value is 1; otherwise, it is 0.7.
     * @default null
     * @aspdefaultvalueignore 
     * @blazordefaultvalue Double.NaN
     */
    public columnWidth: any;
    /** 
     * To render the column series points with a specific column width in pixels.
     * @default null
     * @aspdefaultvalueignore 
     * @blazordefaultvalue Double.NaN
     */
    public columnWidthInPixel: any;
    /** 
     * Specifies the appearance of the line connecting adjacent points in waterfall charts.
     */
    public connector: any;
    /** 
     * The `cornerRadius` property specifies the radius for the corners of the column series points to create a rounded appearance in the chart.
     */
    public cornerRadius: any;
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
     * Customize the drag settings for the series with this property to configure drag behavior in the chart.
     */
    public dragSettings: any;
    /** 
     * Specifies the type of series to be drawn in radar or polar charts. 
     * The available options are: 
     * * 'Line' - Renders a line series. 
     * * 'Column' - Renders a column series. 
     * * 'Area' - Renders an area series. 
     * * 'Scatter' - Renders a scatter series. 
     * * 'Spline' - Renders a spline series. 
     * * 'StackingColumn' - Renders a stacking column series. 
     * * 'StackingArea' - Renders a stacking area series. 
     * * 'RangeColumn' - Renders a range column series. 
     * * 'SplineArea' - Renders a spline area series.
     * @default 'Line'
     */
    public drawType: any;
    /** 
     * Customization options for the appearance of empty points in the series. 
     * `null` or `undefined` values are considered empty points.
     */
    public emptyPointSettings: any;
    /** 
     * This property is used to improve chart performance through data mapping for the series data source.
     * @default false
     */
    public enableComplexProperty: any;
    /** 
     * This property is applicable for the candle series. 
     * It enables or disables the visual comparison of the current values with previous values in stock charts.
     * @default false
     */
    public enableSolidCandles: any;
    /** 
     * Controls whether the tooltip for the chart series is enabled or disabled. Set to true to display tooltips on hover, or false to hide them.
     * @default true
     */
    public enableTooltip: any;
    /** 
     * Options for displaying and customizing error bars for individual points in a series.
     */
    public errorBar: any;
    /** 
     * The fill color for the series, which accepts values in hex or rgba as a valid CSS color string. 
     * It also represents the color of the signal lines in technical indicators. 
     * For technical indicators, the default value is 'blue', and for series, it is null.
     * @default null
     */
    public fill: any;
    /** 
     * Defines the name that specifies the chart series are mutually exclusive and can be overlaid. 
     * Series in the same group share the same baseline and location on the corresponding axis.
     * @default ''
     */
    public groupName: any;
    /** 
     * The data source field that contains the high value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public high: any;
    /** 
     * Defines the collection of indexes for the intermediate summary columns in waterfall charts.
     * @default []
     * @asptype int[]
     */
    public intermediateSumIndexes: any;
    /** 
     * Specifies whether to join the start and end points of a line/area series used in a polar/radar chart to form a closed path.
     * @default true
     */
    public isClosed: any;
    /** 
     * The URL for the image to be displayed as a legend icon. 
     * > Note that `legendShape` must be set to `Image`.
     * @default ''
     */
    public legendImageUrl: any;
    /** 
     * Specifies the shape of the legend icon for each series. 
     * Available shapes for legend: 
     * * Circle - Renders a circular icon. 
     * * Rectangle - Renders a rectangular icon. 
     * * Triangle - Renders a triangular icon. 
     * * Diamond - Renders a diamond-shaped icon. 
     * * Cross - Renders a cross-shaped icon. 
     * * HorizontalLine - Renders a horizontal line icon. 
     * * VerticalLine - Renders a vertical line icon. 
     * * Pentagon - Renders a pentagon-shaped icon. 
     * * InvertedTriangle - Renders an inverted triangle-shaped icon. 
     * * SeriesType - Uses the default icon shape based on the series type. 
     * * Image - Renders a custom image for the legend icon.
     * @default 'SeriesType'
     */
    public legendShape: any;
    /** 
     * The data source field that contains the low value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public low: any;
    /** 
     * Options for displaying and customizing markers for individual points in a series.
     */
    public marker: any;
    /** 
     * Specifies the maximum radius for the data points in the series.
     * @default 3
     */
    public maxRadius: any;
    /** 
     * Specifies the minimum radius for the data points in the series.
     * @default 1
     */
    public minRadius: any;
    /** 
     * The `name` property allows setting a name for the series, which will be displayed in the legend, identifying different series in the chart, especially when multiple series are present.
     * @default ''
     */
    public name: any;
    /** 
     * Defines the visual representation of negative changes in waterfall charts.
     * @default '#C64E4A'
     */
    public negativeFillColor: any;
    /** 
     * When set to true, the step series will be rendered without the vertical lines (risers) connecting the horizontal steps. 
     * > Note this property is only applicable to step series.
     * @default false
     */
    public noRisers: any;
    /** 
     * The `nonHighlightStyle` property is used to specify custom CSS styles for the non-highlighted series or points.
     * @default null
     */
    public nonHighlightStyle: any;
    /** 
     * Sets the opacity of the series, with a value between 0 and 1 where 0 is fully transparent and 1 is fully opaque.
     * @default 1
     */
    public opacity: any;
    /** 
     * The data source field that contains the open value. 
     * It is applicable for both financial series and technical indicators.
     * @default ''
     */
    public open: any;
    /** 
     * Options for customizing the Pareto line series, including its appearance and behavior in the chart.
     */
    public paretoOptions: any;
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
     * The `selectionStyle` property is used to specify custom CSS styles for the selected series or points.
     * @default null
     */
    public selectionStyle: any;
    /** 
     * If set to true, the mean value for the box and whisker plot will be visible.
     * @default true
     */
    public showMean: any;
    /** 
     * Specifies whether to display the normal distribution curve for the histogram series.
     * @default false
     */
    public showNormalDistribution: any;
    /** 
     * The data source field that contains the size value for the y-axis.
     * @default ''
     */
    public size: any;
    /** 
     * Specifies the type of spline used for rendering. 
     * Available options include: 
     * * Natural - Renders a natural spline. 
     * * Cardinal - Renders a cardinal spline. 
     * * Clamped - Renders a clamped spline. 
     * * Monotonic - Renders a monotonic spline.
     * @default 'Natural'
     */
    public splineType: any;
    /** 
     * This property allows the grouping of series in stacked column and stacked bar charts. 
     * Any string value can be assigned to the `stackingGroup` property. 
     * Series with the same `stackingGroup` value will be grouped together in the chart.
     * @default ''
     */
    public stackingGroup: any;
    /** 
     * The `step` property can be used to change the position of the steps in step line, step area, and step range area chart types. 
     * * Left: Steps start from the left side of the 2nd point. 
     * * Center: Steps start between the data points. 
     * * Right: Steps start from the right side of the 1st point.
     * @default 'Left'
     */
    public step: any;
    /** 
     * Defines the collection of indexes for the overall summary columns in waterfall charts.
     * @default []
     * @asptype int[]
     */
    public sumIndexes: any;
    /** 
     * Defines the visual representation of summaries in waterfall charts.
     * @default '#4E81BC'
     */
    public summaryFillColor: any;
    /** 
     * Use this property to define a custom format for how tooltips are displayed. 
     * 
     * @default ''
     */
    public tooltipFormat: any;
    /** 
     * The data source field that contains the value to be displayed in the tooltip.
     * @default ''
     */
    public tooltipMappingName: any;
    /** 
     * Defines the collection of trendlines used to predict the trend.
     */
    public trendlines: any;
    /** 
     * The `unSelectedStyle` property is used to specify custom CSS styles for the deselected series or points.
     * @default null
     */
    public unSelectedStyle: any;
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
    /** 
     * The data source field that contains the y value.
     * @default ''
     */
    public yName: any;
    /** 
     * The z-order of the series, which controls the stack order of the series. Higher values are drawn on top of lower values.
     * @default 0
     */
    public zOrder: any;
    @ContentChild('dataLabelTemplate')
    @Template()
    public dataLabel_template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Series Array Directive
 * @private
 */
@Directive({
    selector: 'ej-chart>e-series-collection',
    queries: {
        children: new ContentChildren(SeriesDirective)
    },
})
export class SeriesCollectionDirective extends ArrayBase<SeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}