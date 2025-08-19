import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['animation', 'dataLabel', 'dataSource', 'emptyPointSettings', 'enableTooltip', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'innerRadius', 'legendImageUrl', 'legendShape', 'name', 'opacity', 'palettes', 'pointColorMapping', 'query', 'radius', 'tooltipMappingName', 'visible', 'xName', 'yName'];
let outputs: string[] = [];
/**
 * Circular3D Series Directive
 * ```html
 * <e-circular3d-series-collection>
 * <e-circular3d-series></e-circular3d-series>
 * </e-circular3d-series-collection>
 * ```
 */
@Directive({
    selector: 'e-circularchart3d-series-collection>e-circularchart3d-series',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class CircularChart3DSeriesDirective extends ComplexBase<CircularChart3DSeriesDirective> {
    public directivePropList: any;
	


    /** 
     * Options for customizing the animation of the series.
     */
    public animation: any;
    /** 
     * The data label settings for the circular 3D series.
     */
    public dataLabel: any;
    /** 
     * Specifies the dataSource for the series. It can be an array of JSON objects or an instance of DataManager. 
     * 
     * @default ''
     */
    public dataSource: any;
    /** 
     * Options to customize the appearance of empty points in the circular 3D series.
     */
    public emptyPointSettings: any;
    /** 
     * Specifies whether the tooltip is enabled or disabled for the circular 3D series.
     * @default true
     */
    public enableTooltip: any;
    /** 
     * If set true, series points will be exploded on mouse click or touch.
     * @default false
     */
    public explode: any;
    /** 
     * If set true, all the points in the series will get exploded on load.
     * @default false
     */
    public explodeAll: any;
    /** 
     * Index of the point to be exploded on load. Set to `null` for no explosion.
     * @default null
     */
    public explodeIndex: any;
    /** 
     * Distance of the point from the center, which takes values in both pixels and percentage.
     * @default '30%'
     */
    public explodeOffset: any;
    /** 
     * When the innerRadius value is greater than 0 percentage, a donut will appear in the pie series. It takes values only in percentage.
     * @default '0'
     */
    public innerRadius: any;
    /** 
     * The URL for the image that is to be displayed as a legend icon. It requires `legendShape` value to be an `Image`.
     * @default ''
     */
    public legendImageUrl: any;
    /** 
     * The shape of the legend. Each series has its own legend shape. Available shapes: 
     * * Circle - Renders a circle. 
     * * Rectangle - Renders a rectangle. 
     * * Triangle - Renders a triangle. 
     * * Diamond - Renders a diamond. 
     * * Cross - Renders a cross. 
     * * HorizontalLine - Renders a horizontal line. 
     * * VerticalLine - Renders a vertical line. 
     * * Pentagon - Renders a pentagon. 
     * * InvertedTriangle - Renders an inverted triangle. 
     * * SeriesType -Render a legend shape based on series type. 
     * * Image - Render an image. *
     * @default 'SeriesType'
     */
    public legendShape: any;
    /** 
     * The name of the series as displayed in the legend.
     * @default ''
     */
    public name: any;
    /** 
     * The opacity of the series.
     * @default 1.
     */
    public opacity: any;
    /** 
     * Palette configuration for the points in the circular 3D series.
     * @default []
     */
    public palettes: any;
    /** 
     * The DataSource field that contains the point colors.
     * @default ''
     */
    public pointColorMapping: any;
    /** 
     * Specifies the query to select data from the dataSource. This property is applicable only when the dataSource is `ej.DataManager`.
     * @default null
     */
    public query: any;
    /** 
     * Specifies the radius of the pie series in percentage. Set to `null` for default.
     * @default null
     */
    public radius: any;
    /** 
     * The data source field that contains the tooltip value.
     * @default ''
     */
    public tooltipMappingName: any;
    /** 
     * Specifies the visibility of the series.
     * @default true
     */
    public visible: any;
    /** 
     * The DataSource field that contains the x value
     * @default ''
     */
    public xName: any;
    /** 
     * The DataSource field that contains the y value.
     * @default ''
     */
    public yName: any;
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
 * CircularChart3DSeries Array Directive
 * @private
 */
@Directive({
    selector: 'ej-circularchart3d>e-circularchart3d-series-collection',
    queries: {
        children: new ContentChildren(CircularChart3DSeriesDirective)
    },
})
export class CircularChart3DSeriesCollectionDirective extends ArrayBase<CircularChart3DSeriesCollectionDirective> {
    constructor() {
        super('series');
    }
}