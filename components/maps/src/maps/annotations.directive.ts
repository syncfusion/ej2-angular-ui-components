import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs: string[] = [];
/**
 * Annotation Directive
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
     * Sets and gets the annotation element to be aligned horizontally.
     * @default None
     */
    public horizontalAlignment: any;
    /** 
     * Sets and gets the annotation element to be aligned vertically.
     * @default None
     */
    public verticalAlignment: any;
    /** 
     * Sets and gets the x position of the annotation in maps component.
     */
    public x: any;
    /** 
     * Sets and gets the y position of the annotation in maps component.
     */
    public y: any;
    /** 
     * Sets and gets the z-index of the annotation in maps component.
     * @default '-1'
     */
    public zIndex: any;
    /** 
     * Sets and gets the content for the annotation in maps component.
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