import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['border', 'color', 'end', 'endWidth', 'offset', 'position', 'start', 'startWidth'];
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
     * Specifies the border of axis range.
     */
    public border: any;
    /** 
     * Color of the axis range.
     */
    public color: any;
    /** 
     * End of the axis range.
     * @default 0
     */
    public end: any;
    /** 
     * Ending width of axis range.
     * @default 10
     */
    public endWidth: any;
    /** 
     * Specifies to move the axis range.
     * @default '0'
     */
    public offset: any;
    /** 
     * Specifies to position the axis range.
     * @default Outside
     */
    public position: any;
    /** 
     * Start of the axis range.
     * @default 0
     */
    public start: any;
    /** 
     * Starting width of axis range.
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