import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'end', 'endWidth', 'legendText', 'offset', 'opacity', 'position', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
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
     * Specifies the color of the ranges
     * @aspdefaultvalueignore 
     * @default null
     */
    public color: any;
    /** 
     * Specifies the maximum value of the range.
     * @aspdefaultvalueignore 
     * @default 0
     */
    public end: any;
    /** 
     * Specifies the end width of the ranges
     * @default '10'
     */
    public endWidth: any;
    /** 
     * Specifies the text for legend.
     * @default ''
     */
    public legendText: any;
    /** 
     * Specifies the offset value of range.
     * @default '0'
     */
    public offset: any;
    /** 
     * Specifies the opacity for ranges.
     * @default 1
     */
    public opacity: any;
    /** 
     * Specifies the position of range for an axis. 
     * * inside -  Renders inside axis. 
     * * outside - Renders outside axis. 
     * * cross - Renders on the axis. 
     * * auto - Renders based on radius.
     * @default Auto
     */
    public position: any;
    /** 
     * The radius of the range in pixels or in percentage.
     * @default null
     */
    public radius: any;
    /** 
     * Specifies the rounded corner radius for ranges.
     * @default 0
     */
    public roundedCornerRadius: any;
    /** 
     * Specifies the minimum value of the range.
     * @aspdefaultvalueignore 
     * @default 0
     */
    public start: any;
    /** 
     * Specifies the start width of the ranges
     * @default '10'
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