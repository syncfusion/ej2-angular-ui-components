import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['border', 'color', 'end', 'endWidth', 'linearGradient', 'offset', 'position', 'radialGradient', 'start', 'startWidth'];
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
    public directivePropList: any;
	


    /** 
     * Sets and gets the options to customize the color and width of the border for the axis range.
     */
    public border: any;
    /** 
     * Sets and gets the color of the axis range.
     */
    public color: any;
    /** 
     * Sets and gets the end value for the range in axis.
     * @default 0
     */
    public end: any;
    /** 
     * Sets and gets the width of the end of the range in axis.
     * @default 10
     */
    public endWidth: any;
    /** 
     * Sets and gets the properties to render a linear gradient for the range. 
     * If both linear and radial gradient is set, then the linear gradient will be rendered in the range.
     * @default null
     */
    public linearGradient: any;
    /** 
     * Sets and gets the value to position the range in the axis.
     * @default '0'
     */
    public offset: any;
    /** 
     * Sets and gets the position to place the ranges in the axis.
     * @default Outside
     */
    public position: any;
    /** 
     * Sets and gets the properties to render a radial gradient for the range.
     * @default null
     */
    public radialGradient: any;
    /** 
     * Sets and gets the start value for the range in axis.
     * @default 0
     */
    public start: any;
    /** 
     * Sets and gets the width of the start of the range in axis.
     * @default 10
     */
    public startWidth: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Range Array Directive
 * @private
 */
@Directive({
    selector: 'ej-lineargauge>e-axes>e-axis>e-ranges',
    queries: {
        children: new ContentChildren(RangeDirective)
    },
})
export class RangesDirective extends ArrayBase<RangesDirective> {
    constructor() {
        super('ranges');
    }
}