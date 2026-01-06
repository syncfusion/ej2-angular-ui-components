import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { StripLinesDirective } from './striplines.directive';
import { MultiLevelLabelsDirective } from './multilevellabels.directive';

let input: string[] = ['border', 'coefficient', 'columnIndex', 'crossesAt', 'crossesInAxis', 'crosshairTooltip', 'description', 'desiredIntervals', 'edgeLabelPlacement', 'enableAutoIntervalOnZooming', 'enableScrollbarOnZooming', 'enableTrim', 'enableWrap', 'interval', 'intervalType', 'isIndexed', 'isInversed', 'labelFormat', 'labelIntersectAction', 'labelPadding', 'labelPlacement', 'labelPosition', 'labelRotation', 'labelStyle', 'labelTemplate', 'lineBreakAlignment', 'lineStyle', 'logBase', 'majorGridLines', 'majorTickLines', 'maximum', 'maximumLabelWidth', 'maximumLabels', 'minimum', 'minorGridLines', 'minorTickLines', 'minorTicksPerInterval', 'multiLevelLabels', 'name', 'opposedPosition', 'placeNextToAxisLine', 'plotOffset', 'plotOffsetBottom', 'plotOffsetLeft', 'plotOffsetRight', 'plotOffsetTop', 'rangePadding', 'rowIndex', 'scrollbarSettings', 'skeleton', 'skeletonType', 'span', 'startAngle', 'startFromZero', 'stripLines', 'tabIndex', 'tickPosition', 'title', 'titlePadding', 'titleRotation', 'titleStyle', 'valueType', 'visible', 'zoomFactor', 'zoomPosition'];
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
     * Configures the appearance of the border around multi-level labels, including the color, width, and type of the border.
     */
    public border: any;
    /** 
     * The `coefficient` value adjusts the size of the polar radar chart's radius. A higher value increases the radius size, while a smaller value decreases it.
     * @default 100
     */
    public coefficient: any;
    /** 
     * Specifies the index of the column where the axis is associated when the chart area is divided into multiple plot areas using `columns`. 
     * 
     * @default 0
     */
    public columnIndex: any;
    /** 
     * Specifies the value at which the axis line intersects with the vertical axis or vice versa.
     * @default null
     */
    public crossesAt: any;
    /** 
     * Specifies the name of the axis with which the axis line should intersect.
     * @default null
     */
    public crossesInAxis: any;
    /** 
     * Options to customize the appearance and behavior of the crosshair tooltip that appears when hovering over the chart.
     */
    public crosshairTooltip: any;
    /** 
     * A description for the axis that provides additional information about its content for screen readers.
     * @default null
     */
    public description: any;
    /** 
     * The `desiredIntervals` property allows the axis to calculate intervals that are roughly equal to the specified number, promoting a more readable and evenly spaced axis.
     * @default null
     * @aspdefaultvalueignore 
     */
    public desiredIntervals: any;
    /** 
     * The `edgeLabelPlacement` property ensures that labels positioned at the edges of the axis do not overlap with the axis boundaries or other chart elements, offering several options to improve chart readability by managing edge labels effectively. 
     * Available options are: 
     * * None: No action will be performed on edge labels. 
     * * Hide: Edge labels will be hidden to prevent overlap. 
     * * Shift: Edge labels will be shifted to fit within the axis bounds without overlapping.
     * @default 'Shift'
     */
    public edgeLabelPlacement: any;
    /** 
     * If set to true, the axis interval will be calculated automatically based on the zoomed range.
     * @default true
     */
    public enableAutoIntervalOnZooming: any;
    /** 
     * If set to true, a scrollbar will appear while zooming to help navigate through the zoomed content.
     * @default true
     */
    public enableScrollbarOnZooming: any;
    /** 
     * If set to true, axis labels will be trimmed based on the `maximumLabelWidth`.
     * @default false
     */
    public enableTrim: any;
    /** 
     * Specifies whether the axis labels should be wrapped based on the specified `maximumLabelWidth`. 
     * When set to `true`, the axis labels will automatically wrap to fit within the available width defined by `maximumLabelWidth`.
     * @default false
     */
    public enableWrap: any;
    /** 
     * Specifies the interval for the axis.
     * @default null
     * @aspdefaultvalueignore 
     */
    public interval: any;
    /** 
     * The `intervalType` property defines how the intervals on a date-time axis are calculated and displayed. 
     * Available options are: 
     * * Auto: Automatically determines the interval type based on the data and chart settings. 
     * * Years: Sets the interval of the axis in years. 
     * * Months: Sets the interval of the axis in months. 
     * * Days: Sets the interval of the axis in days. 
     * * Hours: Sets the interval of the axis in hours. 
     * * Minutes: Sets the interval of the axis in minutes.
     * @default 'Auto'
     */
    public intervalType: any;
    /** 
     * If set to true, data points are rendered based on their index.
     * @default false
     */
    public isIndexed: any;
    /** 
     * If set to true, the axis will be rendered in an inversed manner.
     * @default false
     */
    public isInversed: any;
    /** 
     * Used to format the axis label. This property accepts global string formats such as `C`, `n1`, `P`, etc. 
     * It also accepts placeholders like `{value}°C`, where `{value}` represents the axis label (e.g., 20°C).
     * @default ''
     */
    public labelFormat: any;
    /** 
     * Specifies the action to take when axis labels intersect with each other. 
     * The available options are: 
     * * None: Shows all labels without any modification. 
     * * Hide: Hides the label if it intersects with another label. 
     * * Trim: Trims the label text to fit within the available space. 
     * * Wrap: Wraps the label text to fit within the available space. 
     * * MultipleRows: Displays the label text in multiple rows to avoid intersection. 
     * * Rotate45: Rotates the label text by 45 degrees to avoid intersection. 
     * * Rotate90: Rotates the label text by 90 degrees to avoid intersection.
     * @default Trim
     */
    public labelIntersectAction: any;
    /** 
     * The `labelPadding` property adjusts the distance to ensure a clear space between the axis labels and the axis line.
     * @default 5
     */
    public labelPadding: any;
    /** 
     * The `labelPlacement` property controls where the category axis labels are rendered in relation to the axis ticks. 
     * Available options are: 
     * * BetweenTicks: Renders the label between the axis ticks. 
     * * OnTicks: Renders the label directly on the axis ticks.
     * @default 'BetweenTicks'
     */
    public labelPlacement: any;
    /** 
     * The `labelPosition` property determines where the axis labels are rendered in relation to the axis line. 
     * Available options are: 
     * * Inside: Renders the labels inside the axis line. 
     * * Outside: Renders the labels outside the axis line.
     * @default 'Outside'
     */
    public labelPosition: any;
    /** 
     * The angle to which the axis label gets rotated.
     * @default 0
     */
    public labelRotation: any;
    /** 
     * This property allows defining various font settings to control how the labels are displayed on the axis.
     */
    public labelStyle: any;
    /** 
     * Specifies the template used to render axis labels, allowing for customized labels with text, images, or other UI elements. 
     * The template is provided as a string with placeholders for interpolation. Use `${label}` to insert the axis label and `${value}` for the axis label value. 
     * For security, string templates use dangerouslySetInnerHTML in React—ensure input is trusted to avoid XSS vulnerabilities. 
     * If null or undefined, the axis will render default labels. 
     * Compatible with both categorical and numerical axes.
     * @example ```html
<div id='Chart'></div>
```
```typescript
let chart: Chart = new Chart({
...
primaryXAxis: {
labelTemplate: '<div>Country: ${label}</div>'
}
...
});
chart.appendTo('#Chart');
```

     * @default null
     */
    public labelTemplate: any;
    /** 
     * Determines the alignment of labels when a line break occurs in the axis labels.
     * @default 'Center'
     */
    public lineBreakAlignment: any;
    /** 
     * Options for customizing the axis lines.
     */
    public lineStyle: any;
    /** 
     * Specifies the base value for a logarithmic axis. 
     * > Note that `valueType` must be set to `Logarithmic` for this feature to work.
     * @default 10
     */
    public logBase: any;
    /** 
     * Options for customizing major grid lines on the axis.
     */
    public majorGridLines: any;
    /** 
     * Options for customizing major tick lines on the axis.
     */
    public majorTickLines: any;
    /** 
     * Specifies the maximum value of the axis range, which sets the upper bound of the axis and defines the largest value displayed on the chart, helping to control the visible range of data.
     * @default null
     */
    public maximum: any;
    /** 
     * Specifies the maximum width of an axis label.
     * @default 34.
     */
    public maximumLabelWidth: any;
    /** 
     * Specifies the maximum number of labels per 100 pixels relative to the axis length.
     * @default 3
     */
    public maximumLabels: any;
    /** 
     * Specifies the minimum value of the axis range, which sets the lower bound of the axis and defines the smallest value that will be displayed on the chart to control the visible range of data.
     * @default null
     */
    public minimum: any;
    /** 
     * Options for customizing minor grid lines on the axis.
     */
    public minorGridLines: any;
    /** 
     * Options for customizing minor tick lines on the axis.
     */
    public minorTickLines: any;
    /** 
     * Specifies the number of minor ticks per interval.
     * @default 0
     */
    public minorTicksPerInterval: any;
    /** 
     * Multi-level labels are used to display hierarchical or grouped labels on the axis, allowing for a more detailed and structured data representation.
     */
    public multiLevelLabels: any;
    /** 
     * A unique identifier for an axis. To associate an axis with a series, set this name to the `xAxisName` or `yAxisName` properties of the series.
     * @default ''
     */
    public name: any;
    /** 
     * If set to true, the axis will render on the opposite side of its default position.
     * @default false
     */
    public opposedPosition: any;
    /** 
     * Specifies whether axis elements, such as axis labels and the axis title, should be crossed by the axis line.
     * @default true
     */
    public placeNextToAxisLine: any;
    /** 
     * Specifies the padding on the top, bottom, left and right sides of the chart area, in pixels.
     * @default 0
     */
    public plotOffset: any;
    /** 
     * Specifies the bottom padding for the chart area, in pixels.
     * @default null
     */
    public plotOffsetBottom: any;
    /** 
     * Specifies the left padding for the chart area, in pixels.
     * @default null
     */
    public plotOffsetLeft: any;
    /** 
     * Specifies the right padding for the chart area, in pixels.
     * @default null
     */
    public plotOffsetRight: any;
    /** 
     * Specifies the top padding for the chart area, in pixels.
     * @default null
     */
    public plotOffsetTop: any;
    /** 
     * The `rangePadding` property determines how padding is applied to the axis range, affecting the appearance of the chart by adjusting the minimum and maximum values of the axis. 
     * Available options are: 
     * * None: No padding is applied to the axis. 
     * * Normal: Padding is applied based on the range calculation. 
     * * Additional: The interval of the axis is added as padding to both the minimum and maximum values of the range. 
     * * Round: The axis range is rounded to the nearest possible value that is divisible by the interval.
     * @default 'Auto'
     */
    public rangePadding: any;
    /** 
     * Specifies the index of the row where the axis is associated when the chart area is divided into multiple plot areas using `rows`. 
     * 
     * @default 0
     */
    public rowIndex: any;
    /** 
     * Configures the scrollbar with options for customization, including appearance, behavior, and lazy loading settings.
     */
    public scrollbarSettings: any;
    /** 
     * Specifies the skeleton format used for processing date-time values.
     * @default ''
     */
    public skeleton: any;
    /** 
     * Specifies the format type to be used in date-time formatting.
     * @default 'DateTime'
     * @deprecated 
     */
    public skeletonType: any;
    /** 
     * Specifies the number of `columns` or `rows` that an axis spans horizontally or vertically.
     * @default 1
     */
    public span: any;
    /** 
     * Specifies the start angle for the series in a polar or radar chart, measured in degrees from the horizontal axis, determining the initial angle from which the series begins.
     * @default 0
     */
    public startAngle: any;
    /** 
     * If set to true, the axis starts from zero. 
     * If set to false, the axis starts from the minimum value of the data.
     * @default true
     */
    public startFromZero: any;
    /** 
     * Specifies the collection of strip lines for the axis, which are visual elements used to mark or highlight specific ranges.
     */
    public stripLines: any;
    /** 
     * The `tabIndex` value for the axis, determining its position in the tab order.
     * @default 2
     */
    public tabIndex: any;
    /** 
     * The `tickPosition` property determines where the axis ticks are rendered in relation to the axis line. 
     * Available options are: 
     * * Inside: Renders the ticks inside the axis line. 
     * * Outside: Renders the ticks outside the axis line.
     * @default 'Outside'
     */
    public tickPosition: any;
    /** 
     * Specifies the title of an axis, displayed along the axis to provide context about the represented data.
     * @default ''
     */
    public title: any;
    /** 
     * Specifies the padding between the axis title and the axis labels.
     * @default 5
     */
    public titlePadding: any;
    /** 
     * Defines an angle for rotating the axis title. By default, the angle is calculated based on the position and orientation of the axis.
     * @default null
     */
    public titleRotation: any;
    /** 
     * Options for customizing the appearance of the axis title, including font family, size, style, weight, and color.
     */
    public titleStyle: any;
    /** 
     * The `valueType` property defines the type of data that the axis can manage, ensuring correct rendering based on the data type. This property supports multiple data types, each suited for different kinds of data visualization. 
     * Available options include: 
     * * Double: Used for rendering a numeric axis to accommodate numeric data. 
     * * DateTime: Utilized for rendering a date-time axis to manage date-time data. 
     * * Category: Employed for rendering a category axis to manage categorical data. 
     * * Logarithmic: Applied for rendering a logarithmic axis to handle a wide range of values. 
     * * DateTimeCategory: Used to render a date-time category axis for managing business days.
     * @default 'Double'
     * @blazortype Syncfusion.EJ2.Blazor.Charts.ValueType
     * @isenumeration true
     */
    public valueType: any;
    /** 
     * If set to true, axis labels will be visible in the chart. By default, axis labels are enabled.
     * @default true
     */
    public visible: any;
    /** 
     * The axis is scaled by this factor. When `zoomFactor` is 0.5, the chart is scaled by 200% along this axis. 
     * > Note the value ranges from 0 to 1.
     * @default 1
     */
    public zoomFactor: any;
    /** 
     * Sets the position of the zoomed axis on the chart, with the `zoomPosition` property specifying the position within the zoomed range, from 0 (start) to 1 (end).
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