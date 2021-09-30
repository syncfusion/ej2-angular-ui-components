import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { AnnotationsDirective } from './annotations.directive';
import { RangesDirective } from './ranges.directive';
import { PointersDirective } from './pointers.directive';

let input: string[] = ['annotations', 'background', 'direction', 'endAngle', 'hideIntersectingLabel', 'labelStyle', 'lineStyle', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'pointers', 'radius', 'rangeGap', 'ranges', 'roundingPlaces', 'showLastLabel', 'startAndEndRangeGap', 'startAngle'];
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
    public directivePropList: any;
	
    public childAnnotations: any;
    public childRanges: any;
    public childPointers: any;
    public tags: string[] = ['annotations', 'ranges', 'pointers'];
    /** 
     * Sets and gets the annotation element for an axis in circular gauge component.
     */
    public annotations: any;
    /** 
     * Sets and gets the background color of an axis. This property accepts value in hex code, rgba string as a valid CSS color string.
     * @default null
     */
    public background: any;
    /** 
     * Sets and gets the direction of an axis.
     * @default ClockWise
     */
    public direction: any;
    /** 
     * Sets and gets the end angle of an axis in circular gauge component.
     * @default 160
     */
    public endAngle: any;
    /** 
     * Enables and disables the intersecting labels to be hidden in axis.
     * @default false
     */
    public hideIntersectingLabel: any;
    /** 
     * Sets and gets the style of the axis label in circular gauge component.
     */
    public labelStyle: any;
    /** 
     * Sets and gets the style of the line in axis of circular gauge component.
     */
    public lineStyle: any;
    /** 
     * Sets and gets the major tick lines of an axis in circular gauge component.
     * @default { width: 2, height: 10 }
     */
    public majorTicks: any;
    /** 
     * Sets and gets the maximum value of an axis in the circular gauge component.
     * @aspdefaultvalueignore 
     * @default null
     */
    public maximum: any;
    /** 
     * Sets and gets the minimum value of an axis in the circular gauge component.
     * @aspdefaultvalueignore 
     * @default null
     */
    public minimum: any;
    /** 
     * Sets and gets the minor tick lines of an axis in circular gauge component.
     * @default { width: 2, height: 5 }
     */
    public minorTicks: any;
    /** 
     * Sets and gets the pointers of an axis in circular gauge component.
     */
    public pointers: any;
    /** 
     * Sets and gets the radius of an axis in circular gauge.
     * @default null
     */
    public radius: any;
    /** 
     * Sets and gets the gap between the ranges by specified value in circular gauge component.
     * @default null
     */
    public rangeGap: any;
    /** 
     * Sets and gets the ranges of an axis in circular gauge component.
     */
    public ranges: any;
    /** 
     * Sets and gets the rounding Off value in the label in an axis.
     * @default null
     */
    public roundingPlaces: any;
    /** 
     * Enables and disables the last label of axis when it is hidden in circular gauge component.
     * @default false
     */
    public showLastLabel: any;
    /** 
     * Enables and disables the start and end gap between the ranges and axis in circular gauge.
     * @default false
     */
    public startAndEndRangeGap: any;
    /** 
     * Sets and gets the start angle of an axis in circular gauge component.
     * @default 200
     */
    public startAngle: any;

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