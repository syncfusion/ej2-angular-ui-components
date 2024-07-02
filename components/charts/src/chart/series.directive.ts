import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { TrendlinesDirective } from './trendlines.directive';
import { SegmentsDirective } from './segments.directive';

let input: string[] = ['animation', 'bearFillColor', 'binInterval', 'border', 'boxPlotMode', 'bullFillColor', 'cardinalSplineTension', 'close', 'colorName', 'columnFacet', 'columnSpacing', 'columnWidth', 'columnWidthInPixel', 'connector', 'cornerRadius', 'dashArray', 'dataSource', 'dragSettings', 'drawType', 'emptyPointSettings', 'enableComplexProperty', 'enableSolidCandles', 'enableTooltip', 'errorBar', 'fill', 'groupName', 'high', 'intermediateSumIndexes', 'isClosed', 'legendImageUrl', 'legendShape', 'low', 'marker', 'maxRadius', 'minRadius', 'name', 'negativeFillColor', 'nonHighlightStyle', 'opacity', 'open', 'paretoOptions', 'pointColorMapping', 'query', 'segmentAxis', 'segments', 'selectionStyle', 'showMean', 'showNormalDistribution', 'size', 'splineType', 'stackingGroup', 'step', 'sumIndexes', 'summaryFillColor', 'tooltipFormat', 'tooltipMappingName', 'trendlines', 'type', 'unSelectedStyle', 'visible', 'volume', 'width', 'xAxisName', 'xName', 'yAxisName', 'yName', 'zOrder'];
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
     * The type of the series are: 
     * * Line 
     * * Column 
     * * Area 
     * * Bar 
     * * Histogram 
     * * StackingColumn 
     * * StackingArea 
     * * StackingBar 
     * * StepLine 
     * * StepArea 
     * * Scatter 
     * * Spline 
     * * StackingColumn100 
     * * StackingBar100 
     * * StackingArea100 
     * * RangeColumn 
     * * Hilo 
     * * HiloOpenClose 
     * * Waterfall 
     * * RangeArea 
     * * SplineRangeArea 
     * * Bubble 
     * * Candle 
     * * Polar 
     * * Radar 
     * * BoxAndWhisker 
     * * Pareto
     * @default 'Line'
     */
    public type: any;
    /** 
     * Options for customizing animation for the series.
     */
    public animation: any;
    /** 
     * This property is used in financial charts to visualize the price movements in stock. 
     * It defines the color of the candle/point, when the opening price is less than the closing price.
     * @default null
     */
    public bearFillColor: any;
    /** 
     * The bin interval of each histogram point.
     * @default null
     * @aspdefaultvalueignore 
     */
    public binInterval: any;
    /** 
     * Options for customizing the border of the series. This is applicable only for `Column` and `Bar` type series.
     */
    public border: any;
    /** 
     * The mode of the box and whisker char series. They are, 
     * Exclusive 
     * Inclusive 
     * Normal
     * @default 'Normal'
     */
    public boxPlotMode: any;
    /** 
     * This property is used in financial charts to visualize the price movements in stock. 
     * It defines the color of the candle/point, when the opening price is higher than the closing price.
     * @default null
     */
    public bullFillColor: any;
    /** 
     * It defines tension of cardinal spline types.
     * @default 0.5
     */
    public cardinalSplineTension: any;
    /** 
     * The DataSource field that contains the close value of y. 
     * It is applicable for both series and technical indicators
     * @default ''
     */
    public close: any;
    /** 
     * The DataSource field that contains the color mapping value. 
     * It is applicable for range color mapping properly.
     */
    public colorName: any;
    /** 
     * Defines the shape of the data in a column and bar chart. 
     * * Rectangle: Displays the data in a column and bar chart in a rectangle shape. 
     * * Cylinder: Displays the data in a column and bar chart in a cylinder shape.
     * @default 'Rectangle'
     */
    public columnFacet: any;
    /** 
     * To render the column series points with particular column spacing. It takes value from 0 - 1.
     * @default 0
     */
    public columnSpacing: any;
    /** 
     * Render the column series points with a particular column width. If the series type is histogram the 
     * default value is 1 otherwise 0.7.
     * @default null
     * @aspdefaultvalueignore 
     * @blazordefaultvalue Double.NaN
     */
    public columnWidth: any;
    /** 
     * To render the column series points with particular column width as pixel.
     * @default null
     * @aspdefaultvalueignore 
     * @blazordefaultvalue Double.NaN
     */
    public columnWidthInPixel: any;
    /** 
     * Defines the appearance of line connecting adjacent points in waterfall charts.
     */
    public connector: any;
    /** 
     * To render the column series points with particular rounded corner.
     */
    public cornerRadius: any;
    /** 
     * Defines the pattern of dashes and gaps to stroke the lines in `Line` type series.
     * @default ''
     */
    public dashArray: any;
    /** 
     * Specifies the data source for the series. It can be an array of JSON objects or an instance of DataManager. 
     * 
     * @default ''
     */
    public dataSource: any;
    /** 
     * Options to customize the drag settings for series
     */
    public dragSettings: any;
    /** 
     * Type of series to be drawn in radar or polar series. They are: 
     * * 'Line' 
     * * 'Column' 
     * * 'Area' 
     * * 'Scatter' 
     * * 'Spline' 
     * * 'StackingColumn' 
     * * 'StackingArea' 
     * * 'RangeColumn' 
     * * 'SplineArea'
     * @default 'Line'
     */
    public drawType: any;
    /** 
     * Options to customize the empty points in series.
     */
    public emptyPointSettings: any;
    /** 
     * This property is used to improve chart performance via data mapping for series dataSource.
     * @default false
     */
    public enableComplexProperty: any;
    /** 
     * This property is applicable for candle series. 
     * It enables/disables to visually compare the current values with the previous values in stock.
     * @default false
     */
    public enableSolidCandles: any;
    /** 
     * Enable tooltip for the chart series.
     * @default true
     */
    public enableTooltip: any;
    /** 
     * Options for displaying and customizing error bar for individual points in a series.
     */
    public errorBar: any;
    /** 
     * The fill color for the series, which can accept values in hex or rgba as a valid CSS color string. 
     * It also represents the color of the signal lines in technical indicators. 
     * For technical indicators, the default value is 'blue' and for series, it is null.
     * @default null
     */
    public fill: any;
    /** 
     * Defines the name that specifies the chart series are mutually exclusive and can be overlaid. 
     * The axis in the same group shares the same baseline and location on the corresponding axis.
     * @default ''
     */
    public groupName: any;
    /** 
     * The DataSource field that contains the high value of y. 
     * It is applicable for both series and technical indicators.
     * @default ''
     */
    public high: any;
    /** 
     * Defines the collection of indexes of the intermediate summary columns in waterfall charts.
     * @default []
     * @asptype int[]
     */
    public intermediateSumIndexes: any;
    /** 
     * Specifies whether to join the start and end point of a line/area series used in polar/radar chart to form a closed path.
     * @default true
     */
    public isClosed: any;
    /** 
     * The URL for the image that is to be displayed as a legend icon.  It requires `legendShape` value to be an `Image`.
     * @default ''
     */
    public legendImageUrl: any;
    /** 
     * The shape of the legend. Each series has its own legend shape, which can be one of the following: 
     * * Circle 
     * * Rectangle 
     * * Triangle 
     * * Diamond 
     * * Cross 
     * * HorizontalLine 
     * * VerticalLine 
     * * Pentagon 
     * * InvertedTriangle 
     * * SeriesType 
     * * Image
     * @default 'SeriesType'
     */
    public legendShape: any;
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
     * Specifies the maximum radius.
     * @default 3
     */
    public maxRadius: any;
    /** 
     * Specifies the minimum radius.
     * @default 1
     */
    public minRadius: any;
    /** 
     * The name of the series as displayed in the legend.
     * @default ''
     */
    public name: any;
    /** 
     * Defines the visual representation of the negative changes in waterfall charts.
     * @default '#C64E4A'
     */
    public negativeFillColor: any;
    /** 
     * Custom style for the non-highlighted series or points.
     * @default null
     */
    public nonHighlightStyle: any;
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
     * Options for customizing the pareto line series.
     */
    public paretoOptions: any;
    /** 
     * The DataSource field that contains the color value of a point. 
     * It is applicable for series.
     * @default ''
     */
    public pointColorMapping: any;
    /** 
     * Specifies a query to select data from the DataSource. This property is applicable only when the DataSource is an `ej.DataManager`.
     * @default ''
     */
    public query: any;
    /** 
     * Defines the axis, based on which the line series will be split.
     */
    public segmentAxis: any;
    /** 
     * Defines the collection of regions that helps to differentiate a line series.
     */
    public segments: any;
    /** 
     * Custom style for the selected series or points.
     * @default null
     */
    public selectionStyle: any;
    /** 
     * If set to true, the mean value for box and whisker will be visible.
     * @default true
     */
    public showMean: any;
    /** 
     * The normal distribution of histogram series.
     * @default false
     */
    public showNormalDistribution: any;
    /** 
     * The DataSource field that contains the size value of y.
     * @default ''
     */
    public size: any;
    /** 
     * Defines the type of spline to be rendered.
     * @default 'Natural'
     */
    public splineType: any;
    /** 
     * This property allows grouping of series in `stacked column / bar` charts. 
     * Any string value can be provided to the stackingGroup property. 
     * If any two or more series have the same value, those series will be grouped together.
     * @default ''
     */
    public stackingGroup: any;
    /** 
     * Defines the position for the steps in the step line, step area, and step range area chart types. 
     * * Left: Steps start from the left side of the 2nd point. 
     * * Center: Steps start between the data points. 
     * * Right: Steps start from the right side of the 1st point.
     * @default 'Left'
     */
    public step: any;
    /** 
     * Defines the collection of indexes of the overall summary columns in waterfall charts.
     * @default []
     * @asptype int[]
     */
    public sumIndexes: any;
    /** 
     * Defines the visual representation of the summaries in waterfall charts.
     * @default '#4E81BC'
     */
    public summaryFillColor: any;
    /** 
     * Format of the tooltip content.
     * @default ''
     */
    public tooltipFormat: any;
    /** 
     * The data source field that contains the tooltip value.
     * @default ''
     */
    public tooltipMappingName: any;
    /** 
     * Defines the collection of trendlines that are used to predict the trend.
     */
    public trendlines: any;
    /** 
     * Custom style for the deselected series or points.
     * @default null
     */
    public unSelectedStyle: any;
    /** 
     * Specifies the visibility of the series.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the data source field that contains the volume value in candle charts. 
     * It is applicable for both financial series and technical indicators
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
     * 
     * @default null
     */
    public xAxisName: any;
    /** 
     * The DataSource field that contains the x value. 
     * It is applicable for both series and technical indicators.
     * @default ''
     */
    public xName: any;
    /** 
     * The name of the vertical axis associated with the series. It requires `axes` of the chart. 
     * It is applicable for series and technical indicators 
     * 
     * @default null
     */
    public yAxisName: any;
    /** 
     * The DataSource field that contains the y value.
     * @default ''
     */
    public yName: any;
    /** 
     * The z order of the series.
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