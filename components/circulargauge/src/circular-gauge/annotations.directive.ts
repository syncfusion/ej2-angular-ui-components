import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['angle', 'autoAngle', 'content', 'description', 'radius', 'textStyle', 'zIndex'];
let outputs: string[] = [];
/**
 * Annotation directive
 * ```html
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * ```
 */
@Directive({
    selector: 'e-annotations>e-annotation',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AnnotationDirective extends ComplexBase<AnnotationDirective> {


    /** 
     * Angle for annotation with respect to axis.

     */
    public angle: any;
    /** 
     * Rotates the annotation along the axis.

     */
    public autoAngle: any;
    /** 
     * Information about annotation for assistive technology.

     */
    public description: any;
    /** 
     * Radius for annotation with respect to axis.

     */
    public radius: any;
    /** 
     * Options for customizing the annotation text.
     */
    public textStyle: any;
    /** 
     * Order of an annotation in an axis.

     */
    public zIndex: any;
    /** 
     * Content of the annotation, which accepts the id of the custom element.

     */
    @ContentChild('content')
    @Template()
    public content: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Annotation Array Directive
 * @private
 */
@Directive({
    selector: 'ej-circulargauge>e-axes>e-axis>e-annotations',
    queries: {
        children: new ContentChildren(AnnotationDirective)
    },
})
export class AnnotationsDirective extends ArrayBase<AnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}