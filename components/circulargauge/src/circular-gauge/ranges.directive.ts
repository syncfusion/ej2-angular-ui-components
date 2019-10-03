import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'end', 'endWidth', 'legendText', 'opacity', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
let outputs: string[] = [];
/**
 * Ranges directive
 * ```html
 * <e-ranges><e-range></e-range></e-ranges>
 * ```
 */
@Directive({
    selector: 'e-ranges>e-range',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class RangeDirective extends ComplexBase<RangeDirective> {


    /** 
     * Specifies the color of the ranges


     */
    public color: any;
    /** 
     * Specifies the maximum value of the range.


     */
    public end: any;
    /** 
     * Specifies the end width of the ranges

     */
    public endWidth: any;
    /** 
     * Specifies the text for legend.

     */
    public legendText: any;
    /** 
     * Specifies the opacity for ranges.

     */
    public opacity: any;
    /** 
     * The radius of the range in pixels or in percentage.

     */
    public radius: any;
    /** 
     * Specifies the rounded corner radius for ranges.

     */
    public roundedCornerRadius: any;
    /** 
     * Specifies the minimum value of the range.


     */
    public start: any;
    /** 
     * Specifies the start width of the ranges

     */
    public startWidth: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Range Array Directive
 * @private
 */
@Directive({
    selector: 'ej-circulargauge>e-axes>e-axis>e-ranges',
    queries: {
        children: new ContentChildren(RangeDirective)
    },
})
export class RangesDirective extends ArrayBase<RangesDirective> {
    constructor() {
        super('ranges');
    }
}