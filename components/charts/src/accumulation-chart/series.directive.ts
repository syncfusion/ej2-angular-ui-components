import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['animation', 'border', 'dataLabel', 'dataSource', 'emptyPointSettings', 'enableTooltip', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'gapRatio', 'groupMode', 'groupTo', 'height', 'innerRadius', 'legendShape', 'name', 'neckHeight', 'neckWidth', 'opacity', 'palettes', 'pointColorMapping', 'pyramidMode', 'query', 'radius', 'selectionStyle', 'startAngle', 'tooltipMappingName', 'type', 'visible', 'width', 'xName', 'yName'];
let outputs: string[] = [];
/**
 * AccumulationSeries Directive
 * ```html
 * <e-accumulation-series-collection>
 * <e-accumulation-series></e-accumulation-series>
 * </e-accumulation-series-collection>
 * ```
 */
@Directive({
    selector: 'e-accumulation-series-collection>e-accumulation-series',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AccumulationSeriesDirective extends ComplexBase<AccumulationSeriesDirective> {


    /** 
     * Specify the type of the series in accumulation chart.

     */
    public type: any;
    /** 
     * Options for customizing the animation for series.
     */
    public animation: any;
    /** 
     * Options for customizing the border of the series.
     */
    public border: any;
    /** 
     * The data label for the series.
     */
    public dataLabel: any;
    /** 
     * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager. 
     * 

     */
    public dataSource: any;
    /** 
     * options to customize the empty points in series
     */
    public emptyPointSettings: any;
    /** 
     * To enable or disable tooltip for a series.

     */
    public enableTooltip: any;
    /** 
     * End angle for a series.

     */
    public endAngle: any;
    /** 
     * If set true, series points will be exploded on mouse click or touch.

     */
    public explode: any;
    /** 
     * If set true, all the points in the series will get exploded on load.

     */
    public explodeAll: any;
    /** 
     * Index of the point, to be exploded on load.


     */
    public explodeIndex: any;
    /** 
     * Distance of the point from the center, which takes values in both pixels and percentage.

     */
    public explodeOffset: any;
    /** 
     * Defines the distance between the segments of a funnel/pyramid series. The range will be from 0 to 1

     */
    public gapRatio: any;
    /** 
     * AccumulationSeries y values less than groupMode are combined into single slice named others

     */
    public groupMode: any;
    /** 
     * AccumulationSeries y values less than groupTo are combined into single slice named others

     */
    public groupTo: any;
    /** 
     * Defines the height of the funnel/pyramid with respect to the chart area

     */
    public height: any;
    /** 
     * When the innerRadius value is greater than 0 percentage, a donut will appear in pie series. It takes values only in percentage.

     */
    public innerRadius: any;
    /** 
     * The shape of the legend. Each series has its own legend shape. They are 
     * * Circle - Renders a circle. 
     * * Rectangle - Renders a rectangle. 
     * * Triangle - Renders a triangle. 
     * * Diamond - Renders a diamond. 
     * * Cross - Renders a cross. 
     * * HorizontalLine - Renders a horizontalLine. 
     * * VerticalLine - Renders a verticalLine. 
     * * Pentagon - Renders a pentagon. 
     * * InvertedTriangle - Renders a invertedTriangle. 
     * * SeriesType -Render a legend shape based on series type.

     */
    public legendShape: any;
    /** 
     * Specifies the series name

     */
    public name: any;
    /** 
     * Defines the height of the funnel neck with respect to the chart area

     */
    public neckHeight: any;
    /** 
     * Defines the width of the funnel neck with respect to the chart area

     */
    public neckWidth: any;
    /** 
     * The opacity of the series.

     */
    public opacity: any;
    /** 
     * Palette for series points.

     */
    public palettes: any;
    /** 
     * The DataSource field that contains the color value of point 
     * It is applicable for series

     */
    public pointColorMapping: any;
    /** 
     * Defines how the values have to be reflected, whether through height/surface of the segments

     */
    public pyramidMode: any;
    /** 
     * Specifies Query to select data from dataSource. This property is applicable only when the dataSource is `ej.DataManager`.

     */
    public query: any;
    /** 
     * Radius of the pie series and its values in percentage.

     */
    public radius: any;
    /** 
     * Custom style for the selected series or points.

     */
    public selectionStyle: any;
    /** 
     * Start angle for a series.

     */
    public startAngle: any;
    /** 
     * The provided value will be considered as a Tooltip Mapping name

     */
    public tooltipMappingName: any;
    /** 
     * Specifies the series visibility.

     */
    public visible: any;
    /** 
     * Defines the width of the funnel/pyramid with respect to the chart area

     */
    public width: any;
    /** 
     * The DataSource field which contains the x value.

     */
    public xName: any;
    /** 
     * The DataSource field which contains the y value.

     */
    public yName: any;
    @ContentChild('dataLabelTemplate')
    @Template()
    public dataLabel_template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * AccumulationSeries Array Directive
 * @private
 */
@Directive({
    selector: 'ej-accumulationchart>e-accumulation-series-collection',
    queries: {
        children: new ContentChildren(AccumulationSeriesDirective)
    },
})
export class AccumulationSeriesCollectionDirective extends ArrayBase<AccumulationSeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}