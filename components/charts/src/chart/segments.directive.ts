import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['color', 'dashArray', 'value'];
let outputs: string[] = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-segments>
 * <e-segment>
 * </e-segment>
 * </e-segments>
 * </e-series-collection>
 * ```
 */
@Directive({
    selector: 'e-series>e-segments>e-segment',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class SegmentDirective extends ComplexBase<SegmentDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the color of a region.
     * @default null
     */
    public color: any;
    /** 
     * Defines the pattern of dashes and gaps to stroke.
     * @default '0'
     */
    public dashArray: any;
    /** 
     * Defines the starting point of region.
     * @default null
     */
    public value: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Segment Array Directive
 * @private
 */
@Directive({
    selector: 'e-series>e-segments',
    queries: {
        children: new ContentChildren(SegmentDirective)
    },
})
export class SegmentsDirective extends ArrayBase<SegmentsDirective> {
    constructor() {
        super('segments');
    }
}