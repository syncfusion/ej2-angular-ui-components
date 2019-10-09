import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animationDuration', 'border', 'color', 'description', 'enableDrag', 'height', 'imageUrl', 'markerType', 'offset', 'opacity', 'placement', 'roundedCornerRadius', 'type', 'value', 'width'];
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
     * Specifies the type of pointer.
     * @default Marker
     */
    public type: any;
    /** 
     * Specifies the animating duration of pointer in milliseconds.
     * @default 0
     */
    public animationDuration: any;
    /** 
     * Specifies the border of pointer.
     */
    public border: any;
    /** 
     * Specifies the color of the pointer.
     */
    public color: any;
    /** 
     * Description of the pointer.
     * @default null
     */
    public description: any;
    /** 
     * Specifies the enable or disable the pointer drag.
     * @default false
     */
    public enableDrag: any;
    /** 
     * Specifies the height of pointer.
     * @default 20
     */
    public height: any;
    /** 
     * Specifies the path of image.
     * @default null
     */
    public imageUrl: any;
    /** 
     * Specifies the marker shape in pointer.
     * @default InvertedTriangle
     */
    public markerType: any;
    /** 
     * Specifies to move the pointer.
     * @default 0
     */
    public offset: any;
    /** 
     * Specifies the opacity for pointer.
     * @default 1
     */
    public opacity: any;
    /** 
     * Specifies the place of the pointer.
     * @default Far
     */
    public placement: any;
    /** 
     * Specifies the corner radius for rounded rectangle.
     * @default 10
     */
    public roundedCornerRadius: any;
    /** 
     * Specifies value of the pointer.
     * @blazordefaultvalue 0
     * @default null
     */
    public value: any;
    /** 
     * Specifies the width of pointer.
     * @default 20
     */
    public width: any;

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
    selector: 'ej-linear-gauge>e-axes>e-axis>e-pointers',
    queries: {
        children: new ContentChildren(PointerDirective)
    },
})
export class PointersDirective extends ArrayBase<PointersDirective> {
    constructor() {
        super('pointers');
    }
}