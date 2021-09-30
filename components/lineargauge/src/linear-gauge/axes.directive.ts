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
     * Enables or disables the inversed axis.
     */
    public isInversed: any;
    /** 
     * Sets and gets the options for customizing the appearance of the label in axis.
     */
    public labelStyle: any;
    /** 
     * Sets and gets the options for customizing the axis line.
     */
    public line: any;
    /** 
     * Sets and gets the options for customizing the major tick lines.
     */
    public majorTicks: any;
    /** 
     * Sets and gets the maximum value for the axis.
     * @default 100
     */
    public maximum: any;
    /** 
     * Sets and gets the minimum value for the axis.
     * @default 0
     */
    public minimum: any;
    /** 
     * Sets and gets the options for customizing the minor tick lines.
     */
    public minorTicks: any;
    /** 
     * Enables or disables the opposed position of the axis in the linear gauge.
     */
    public opposedPosition: any;
    /** 
     * Sets and gets the options for customizing the pointers of an axis.
     */
    public pointers: any;
    /** 
     * Sets and gets the options for customizing the ranges of an axis.
     */
    public ranges: any;
    /** 
     * Shows or hides the last label in the axis of the linear gauge.
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