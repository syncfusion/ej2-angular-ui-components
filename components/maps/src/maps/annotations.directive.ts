import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs: string[] = [];
/**
 * Represents the directive to define the annotations in the maps.
 * ```html
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * ```
 */
@Directive({
    selector: 'e-maps-annotations>e-maps-annotation',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AnnotationDirective extends ComplexBase<AnnotationDirective> {
    public directivePropList: any;
	


    /** 
     * Gets or sets the type of the placement when the annotation is to be aligned horizontally.
     * @default None
     */
    public horizontalAlignment: any;
    /** 
     * Gets or sets the type of the placement when the annotation is to be aligned vertically.
     * @default None
     */
    public verticalAlignment: any;
    /** 
     * Gets or sets the x position of the annotation in pixel or percentage format.
     * @default '0px'
     */
    public x: any;
    /** 
     * Gets or sets the y position of the annotation in pixel or percentage format.
     * @default '0px'
     */
    public y: any;
    /** 
     * Gets or sets the z-index of the annotation in maps.
     * @default '-1'
     */
    public zIndex: any;
    /** 
     * Gets or sets the content for the annotation in maps.
     * @default ''
     */
    @ContentChild('content')
    @Template()
    public content: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Annotation Array Directive
 * @private
 */
@Directive({
    selector: 'ej-maps>e-maps-annotations',
    queries: {
        children: new ContentChildren(AnnotationDirective)
    },
})
export class AnnotationsDirective extends ArrayBase<AnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}