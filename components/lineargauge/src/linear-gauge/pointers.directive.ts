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

     */
    public type: any;
    /** 
     * Specifies the animating duration of pointer in milliseconds.

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

     */
    public description: any;
    /** 
     * Specifies the enable or disable the pointer drag.

     */
    public enableDrag: any;
    /** 
     * Specifies the height of pointer.

     */
    public height: any;
    /** 
     * Specifies the path of image.

     */
    public imageUrl: any;
    /** 
     * Specifies the marker shape in pointer.

     */
    public markerType: any;
    /** 
     * Specifies to move the pointer.

     */
    public offset: any;
    /** 
     * Specifies the opacity for pointer.

     */
    public opacity: any;
    /** 
     * Specifies the place of the pointer.

     */
    public placement: any;
    /** 
     * Specifies the corner radius for rounded rectangle.

     */
    public roundedCornerRadius: any;
    /** 
     * Specifies value of the pointer.


     */
    public value: any;
    /** 
     * Specifies the width of pointer.

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