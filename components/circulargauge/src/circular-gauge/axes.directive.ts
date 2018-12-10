import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { AnnotationsDirective } from './annotations.directive';
import { RangesDirective } from './ranges.directive';
import { PointersDirective } from './pointers.directive';

let input: string[] = ['annotations', 'background', 'direction', 'endAngle', 'labelStyle', 'lineStyle', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'pointers', 'radius', 'rangeGap', 'ranges', 'startAndEndRangeGap', 'startAngle'];
let outputs: string[] = [];
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
@Directive({
    selector: 'e-axes>e-axis',
    inputs: input,
    outputs: outputs,    
    queries: {
        childAnnotations: new ContentChild(AnnotationsDirective), 
        childRanges: new ContentChild(RangesDirective), 
        childPointers: new ContentChild(PointersDirective)
    }
})
export class AxisDirective extends ComplexBase<AxisDirective> {
    public childAnnotations: any;
    public childRanges: any;
    public childPointers: any;
    public tags: string[] = ['annotations', 'ranges', 'pointers'];
    /** 
     * ‘Annotation’ module is used to handle annotation action for an axis.
     */
    public annotations: any;
    /** 
     * The background color of the axis, which accepts value in hex, rgba as a valid CSS color string.
     * @default null
     */
    public background: any;
    /** 
     * Specifies the direction of an axis. They are 
     * * clockWise -  Renders the axis in clock wise direction. 
     * * antiClockWise - Renders the axis in anti-clock wise direction.
     * @default ClockWise
     */
    public direction: any;
    /** 
     * The end angle of an axis
     * @default 160
     */
    public endAngle: any;
    /** 
     * Options to customize the axis label.
     */
    public labelStyle: any;
    /** 
     * Options for customizing the axis lines.
     */
    public lineStyle: any;
    /** 
     * Options for customizing the major tick lines.
     */
    public majorTicks: any;
    /** 
     * Specifies the maximum value of an axis.
     * @aspdefaultvalueignore 
     * @default null
     */
    public maximum: any;
    /** 
     * Specifies the minimum value of an axis.
     * @aspdefaultvalueignore 
     * @default null
     */
    public minimum: any;
    /** 
     * Options for customizing the minor tick lines.
     */
    public minorTicks: any;
    /** 
     * Options for customizing the pointers of an axis
     */
    public pointers: any;
    /** 
     * Radius of an axis in pixels or in percentage.
     * @default null
     */
    public radius: any;
    /** 
     * Specifies the range gap property by pixel value.
     * @default null
     */
    public rangeGap: any;
    /** 
     * Options for customizing the ranges of an axis
     */
    public ranges: any;
    /** 
     * Specifies the start and end range gap.
     * @default false
     */
    public startAndEndRangeGap: any;
    /** 
     * The start angle of an axis
     * @default 200
     */
    public startAngle: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Axis Array Directive
 * @private
 */
@Directive({
    selector: 'ej-circulargauge>e-axes',
    queries: {
        children: new ContentChildren(AxisDirective)
    },
})
export class AxesDirective extends ArrayBase<AxesDirective> {
    constructor() {
        super('axes');
    }
}