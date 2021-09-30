import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'end', 'endWidth', 'legendText', 'linearGradient', 'offset', 'opacity', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
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
     * Sets and gets the color of the ranges in circular gauge component.
     * @aspdefaultvalueignore 
     * @default null
     */
    public color: any;
    /** 
     * Sets and gets the end value of the range in circular gauge component.
     * @aspdefaultvalueignore 
     * @default 0
     */
    public end: any;
    /** 
     * Sets and gets the width for the end of the range in the circular gauge component.
     * @default '10'
     */
    public endWidth: any;
    /** 
     * Sets and gets the text for the legend in the circular gauge component.
     * @default ''
     */
    public legendText: any;
    /** 
     * Sets and gets the properties to render a linear gradient for the range. 
     * If both linear and radial gradient is set, then the linear gradient will be rendered in the range.
     * @default null
     */
    public linearGradient: any;
    /** 
     * Sets and gets the offset value of range in circular gauge component.
     * @default '0'
     */
    public offset: any;
    /** 
     * Sets and gets the opacity for the ranges in circular gauge component.
     * @default 1
     */
    public opacity: any;
    /** 
     * Sets and gets the position of the range and pointer for an axis in circular gauge component.
     * @default Auto
     */
    public position: any;
    /** 
     * Sets and gets the properties to render a radial gradient for the range.
     * @default null
     */
    public radialGradient: any;
    /** 
     * Sets and gets the radius of the range for circular gauge component.
     * @default null
     */
    public radius: any;
    /** 
     * Sets and gets the corner radius for ranges in circular gauge component.
     * @default 0
     */
    public roundedCornerRadius: any;
    /** 
     * Sets and gets the start value of the range in circular gauge component.
     * @aspdefaultvalueignore 
     * @default 0
     */
    public start: any;
    /** 
     * Sets and gets the width for the start of the range in the circular gauge component.
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