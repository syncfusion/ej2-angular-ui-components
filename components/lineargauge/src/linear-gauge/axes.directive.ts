import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { RangesDirective } from './ranges.directive';
import { PointersDirective } from './pointers.directive';

let input: string[] = ['isInversed', 'labelStyle', 'line', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'opposedPosition', 'pointers', 'ranges', 'showLastLabel'];
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
        childRanges: new ContentChild(RangesDirective), 
        childPointers: new ContentChild(PointersDirective)
    }
})
export class AxisDirective extends ComplexBase<AxisDirective> {
    public directivePropList: any;
    public childRanges: any;
    public childPointers: any;
    public tags: string[] = ['ranges', 'pointers'];
    /** 
     * Specifies the axis rendering direction.
     */
    public isInversed: any;
    /** 
     * Options for customizing the axis label appearance.
     */
    public labelStyle: any;
    /** 
     * Options for customizing the axis line.
     */
    public line: any;
    /** 
     * Options for customizing the major tick lines.
     */
    public majorTicks: any;
    /** 
     * Specifies the maximum value of an axis.
     * @default 100
     */
    public maximum: any;
    /** 
     * Specifies the minimum value of an axis.
     * @default 0
     */
    public minimum: any;
    /** 
     * Options for customizing the minor tick lines.
     */
    public minorTicks: any;
    /** 
     * Specifies the axis rendering position.
     */
    public opposedPosition: any;
    /** 
     * Options for customizing the pointers of an axis
     */
    public pointers: any;
    /** 
     * Options for customizing the ranges of an axis
     */
    public ranges: any;
    /** 
     * Specifies the last label to be shown
     */
    public showLastLabel: any;

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
    selector: 'ej-lineargauge>e-axes',
    queries: {
        children: new ContentChildren(AxisDirective)
    },
})
export class AxesDirective extends ArrayBase<AxesDirective> {
    constructor() {
        super('axes');
    }
}