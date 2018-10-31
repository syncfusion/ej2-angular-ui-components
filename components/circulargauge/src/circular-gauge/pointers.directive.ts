import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animation', 'border', 'cap', 'color', 'description', 'imageUrl', 'markerHeight', 'markerShape', 'markerWidth', 'needleTail', 'pointerWidth', 'radius', 'roundedCornerRadius', 'type', 'value'];
let outputs: string[] = [];
/**
 * Pointers directive
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
@Directive({
    selector: 'e-pointers>e-pointer',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class PointerDirective extends ComplexBase<PointerDirective> {


    /** 
     * Specifies the type of pointer for an axis. 
     * * needle -  Renders a needle. 
     * * marker - Renders a marker. 
     * * rangeBar - Renders a rangeBar.
     * @default Needle
     */
    public type: any;
    /** 
     * Configures the animation of pointers.
     */
    public animation: any;
    /** 
     * Options for customizing the border of the needle.
     */
    public border: any;
    /** 
     * Options for customizing the cap
     */
    public cap: any;
    /** 
     * The color of the pointer.
     */
    public color: any;
    /** 
     * Information about pointer for assistive technology.
     * @default null
     */
    public description: any;
    /** 
     * The URL for the Image that is to be displayed as pointer. 
     * It requires marker shape value to be Image.
     * @default null
     */
    public imageUrl: any;
    /** 
     * The height of the marker in pixels.
     * @default 5
     */
    public markerHeight: any;
    /** 
     * Specifies the shape of the marker. They are 
     * * circle - Renders a circle. 
     * * rectangle - Renders a rectangle. 
     * * triangle - Renders a triangle. 
     * * diamond - Renders a diamond. 
     * * invertedTriangle - Renders a invertedTriangle. 
     * * image - Renders a image.
     * @default Circle
     */
    public markerShape: any;
    /** 
     * The width of the marker in pixels.
     * @default 5
     */
    public markerWidth: any;
    /** 
     * Options for customizing the back needle.
     */
    public needleTail: any;
    /** 
     * Width of the pointer in pixels.
     * @default 20
     */
    public pointerWidth: any;
    /** 
     * Length of the pointer in pixels or in percentage.
     * @default null
     */
    public radius: any;
    /** 
     * Specifies the rounded corner radius for pointer.
     * @default 0
     */
    public roundedCornerRadius: any;
    /** 
     * Specifies the value of the pointer.
     * @aspdefaultvalueignore 
     * @default null
     */
    public value: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Pointer Array Directive
 * @private
 */
@Directive({
    selector: 'ej-circulargauge>e-axes>e-axis>e-pointers',
    queries: {
        children: new ContentChildren(PointerDirective)
    },
})
export class PointersDirective extends ArrayBase<PointersDirective> {
    constructor() {
        super('pointers');
    }
}