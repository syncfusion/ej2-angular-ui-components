import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { StripLinesDirective } from './striplines.directive';
import { MultiLevelLabelsDirective } from './multilevellabels.directive';

let input: string[] = ['border', 'coefficient', 'columnIndex', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableScrollbarOnZooming', 'enableTrim', 'interval', 'intervalType', 'isIndexed', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPadding', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'lineBreakAlignment', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'multiLevelLabels', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'plotOffsetBottom', 'plotOffsetLeft', 'plotOffsetRight', 'plotOffsetTop', 'rangePadding', 'rowIndex', 'scrollbarSettings', 'skeleton', 'skeletonType', 'span', 'startAngle', 'startFromZero', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titlePadding', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
let outputs: string[] = [];
/**
 * Axis Directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
@Directive({
    selector: 'e-axes>e-axis',
    inputs: input,
    outputs: outputs,    
    queries: {
        childStripLines: new ContentChild(StripLinesDirective), 
        childMultiLevelLabels: new ContentChild(MultiLevelLabelsDirective)
    }
})
export class AxisDirective extends ComplexBase<AxisDirective> {
    public directivePropList: any;
	
    public childStripLines: any;
    public childMultiLevelLabels: any;
    public tags: string[] = ['stripLines', 'multiLevelLabels'];
    /** 
     * Border of the multi level labels.
     */
    public border: any;
    /** 
     * The polar radar radius position.
     * @default 100
     */
    public coefficient: any;
    /** 
     * Specifies the index of the column where the axis is associated, 
     * when the chart area is divided into multiple plot areas by using `columns`. 
     * 
     * @default 0
     */
    public columnIndex: any;
    /** 
     * Specifies the value at which the axis line has to be intersect with the vertical axis or vice versa.
     * @default null
     */
    public crossesAt: any;
    /** 
     * Specifies axis name with which the axis line has to be crossed
     * @default null
     */
    public crossesInAxis: any;
    /** 
     * Options to customize the crosshair ToolTip.
     */
    public crosshairTooltip: any;
    /** 
     * Description for axis and its element.
     * @default null
     */
    public description: any;
    /** 
     * With this property, you can request axis to calculate intervals approximately equal to your specified interval.
     * @default null
     * @aspdefaultvalueignore 
     */
    public desiredIntervals: any;
    /** 
     * Specifies the position of labels at the edge of the axis.They are, 
     * * None: No action will be performed. 
     * * Hide: Edge label will be hidden. 
     * * Shift: Shifts the edge labels.
     * @default 'None'
     */
    public edgeLabelPlacement: any;
    /** 
     * If set to true, axis interval will be calculated automatically with respect to the zoomed range.
     * @default true
     */
    public enableAutoIntervalOnZooming: any;
    /** 
     * Enables the scrollbar for zooming.
     * @default true
     */
    public enableScrollbarOnZooming: any;
    /** 
     * Specifies the Trim property for an axis.
     * @default false
     */
    public enableTrim: any;
    /** 
     * Specifies the interval for an axis.
     * @default null
     * @aspdefaultvalueignore 
     */
    public interval: any;
    /** 
     * Specifies the types like `Years`, `Months`, `Days`, `Hours`, `Minutes`, `Seconds` in date time axis.They are, 
     * * Auto: Defines the interval of the axis based on data. 
     * * Years: Defines the interval of the axis in years. 
     * * Months: Defines the interval of the axis in months. 
     * * Days: Defines the interval of the axis in days. 
     * * Hours: Defines the interval of the axis in hours. 
     * * Minutes: Defines the interval of the axis in minutes.
     * @default 'Auto'
     */
    public intervalType: any;
    /** 
     * Specifies indexed category  axis.
     * @default false
     */
    public isIndexed: any;
    /** 
     * It specifies whether the axis to be rendered in inversed manner or not.
     * @default false
     */
    public isInversed: any;
    /** 
     * Used to format the axis label that accepts any global string format like 'C', 'n1', 'P' etc. 
     * It also accepts placeholder like '{value}°C' in which value represent the axis label, e.g, 20°C.
     * @default ''
     */
    public labelFormat: any;
    /** 
     * Specifies the actions like `None`, `Hide`, `Trim`, `Wrap`, `MultipleRows`, `Rotate45`, and `Rotate90` 
     * when the axis labels intersect with each other.They are, 
     * * None: Shows all the labels. 
     * * Hide: Hides the label when it intersects. 
     * * Trim: Trim the label when it intersects. 
     * * Wrap: Wrap the label when it intersects. 
     * * MultipleRows: Shows the label in MultipleRows when it intersects. 
     * * Rotate45: Rotates the label to 45 degree when it intersects. 
     * * Rotate90: Rotates the label to 90 degree when it intersects.
     * @default Trim
     */
    public labelIntersectAction: any;
    /** 
     * Specifies the labelPadding from axis
     * @default 5
     */
    public labelPadding: any;
    /** 
     * Specifies the placement of a label for category axis. They are, 
     * * betweenTicks: Renders the label between the ticks. 
     * * onTicks: Renders the label on the ticks.
     * @default 'BetweenTicks'
     */
    public labelPlacement: any;
    /** 
     * Specifies the placement of a labels to the axis line. They are, 
     * * inside: Renders the labels inside to the axis line. 
     * * outside: Renders the labels outside to the axis line.
     * @default 'Outside'
     */
    public labelPosition: any;
    /** 
     * The angle to which the axis label gets rotated.
     * @default 0
     */
    public labelRotation: any;
    /** 
     * Options to customize the axis label.
     */
    public labelStyle: any;
    /** 
     * It specifies alignment of the line break labels.
     * @default 'Center'
     */
    public lineBreakAlignment: any;
    /** 
     * Options for customizing axis lines.
     */
    public lineStyle: any;
    /** 
     * The base value for logarithmic axis. It requires `valueType` to be `Logarithmic`.
     * @default 10
     */
    public logBase: any;
    /** 
     * Options for customizing major grid lines.
     */
    public majorGridLines: any;
    /** 
     * Options for customizing major tick lines.
     */
    public majorTickLines: any;
    /** 
     * Specifies the maximum range of an axis.
     * @default null
     */
    public maximum: any;
    /** 
     * Specifies the maximum width of an axis label.
     * @default 34.
     */
    public maximumLabelWidth: any;
    /** 
     * The maximum number of label count per 100 pixels with respect to the axis length.
     * @default 3
     */
    public maximumLabels: any;
    /** 
     * Specifies the minimum range of an axis.
     * @default null
     */
    public minimum: any;
    /** 
     * Options for customizing minor grid lines.
     */
    public minorGridLines: any;
    /** 
     * Options for customizing minor tick lines.
     */
    public minorTickLines: any;
    /** 
     * Specifies the number of minor ticks per interval.
     * @default 0
     */
    public minorTicksPerInterval: any;
    /** 
     * Specifies the multi level labels collection for the axis
     */
    public multiLevelLabels: any;
    /** 
     * Unique identifier of an axis. 
     * To associate an axis with the series, set this name to the xAxisName/yAxisName properties of the series.
     * @default ''
     */
    public name: any;
    /** 
     * If set to true, the axis will render at the opposite side of its default position.
     * @default false
     */
    public opposedPosition: any;
    /** 
     * Specifies whether axis elements like axis labels, axis title, etc has to be crossed with axis line
     * @default true
     */
    public placeNextToAxisLine: any;
    /** 
     * Left and right padding for the plot area in pixels.
     * @default 0
     */
    public plotOffset: any;
    /** 
     * Bottom padding for the plot area in pixels.
     * @default null
     */
    public plotOffsetBottom: any;
    /** 
     * Left padding for the plot area in pixels.
     * @default null
     */
    public plotOffsetLeft: any;
    /** 
     * Right padding for the plot area in pixels.
     * @default null
     */
    public plotOffsetRight: any;
    /** 
     * Top padding for the plot area in pixels.
     * @default null
     */
    public plotOffsetTop: any;
    /** 
     * Specifies the padding for the axis range in terms of interval.They are, 
     * * none: Padding cannot be applied to the axis. 
     * * normal: Padding is applied to the axis based on the range calculation. 
     * * additional: Interval of the axis is added as padding to the minimum and maximum values of the range. 
     * * round: Axis range is rounded to the nearest possible value divided by the interval.
     * @default 'Auto'
     */
    public rangePadding: any;
    /** 
     * Specifies the index of the row where the axis is associated, when the chart area is divided into multiple plot areas by using `rows`. 
     * 
     * @default 0
     */
    public rowIndex: any;
    /** 
     * Option to customize scrollbar with lazy loading
     */
    public scrollbarSettings: any;
    /** 
     * Specifies the skeleton format in which the dateTime format will process.
     * @default ''
     */
    public skeleton: any;
    /** 
     * It specifies the type of format to be used in dateTime format process.
     * @default 'DateTime'
     * @deprecated 
     */
    public skeletonType: any;
    /** 
     * Specifies the number of `columns` or `rows` an axis has to span horizontally or vertically.
     * @default 1
     */
    public span: any;
    /** 
     * The start angle for the series.
     * @default 0
     */
    public startAngle: any;
    /** 
     * It specifies whether the axis to be start from zero.
     * @default true
     */
    public startFromZero: any;
    /** 
     * Specifies the stripLine collection for the axis
     */
    public stripLines: any;
    /** 
     * TabIndex value for the axis.
     * @default 2
     */
    public tabIndex: any;
    /** 
     * Specifies the placement of a ticks to the axis line. They are, 
     * * inside: Renders the ticks inside to the axis line. 
     * * outside: Renders the ticks outside to the axis line.
     * @default 'Outside'
     */
    public tickPosition: any;
    /** 
     * Specifies the title of an axis.
     * @default ''
     */
    public title: any;
    /** 
     * Specifies the titlePadding from axis label
     * @default 5
     */
    public titlePadding: any;
    /** 
     * Options for customizing the axis title.
     */
    public titleStyle: any;
    /** 
     * Specifies the type of data the axis is handling. 
     * * Double:  Renders a numeric axis. 
     * * DateTime: Renders a dateTime axis. 
     * * Category: Renders a category axis. 
     * * Logarithmic: Renders a log axis.
     * @default 'Double'
     * @blazortype Syncfusion.EJ2.Blazor.Charts.ValueType
     * @isenumeration true
     */
    public valueType: any;
    /** 
     * If set to true, axis label will be visible.
     * @default true
     */
    public visible: any;
    /** 
     * The axis is scaled by this factor. When zoomFactor is 0.5, the chart is scaled by 200% along this axis. Value ranges from 0 to 1.
     * @default 1
     */
    public zoomFactor: any;
    /** 
     * Position of the zoomed axis. Value ranges from 0 to 1.
     * @default 0
     */
    public zoomPosition: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Axis Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chart>e-axes',
    queries: {
        children: new ContentChildren(AxisDirective)
    },
})
export class AxesDirective extends ArrayBase<AxesDirective> {
    constructor() {
        super('axes');
    }
}