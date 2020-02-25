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
    public directivePropList: any;


    /** 
     * Angle for annotation with respect to axis.
     * @default 90
     */
    public angle: any;
    /** 
     * Rotates the annotation along the axis.
     * @default false
     */
    public autoAngle: any;
    /** 
     * Information about annotation for assistive technology.
     * @default null
     */
    public description: any;
    /** 
     * Radius for annotation with respect to axis.
     * @default '50%'
     */
    public radius: any;
    /** 
     * Options for customizing the annotation text.
     */
    public textStyle: any;
    /** 
     * Order of an annotation in an axis.
     * @default '-1'
     */
    public zIndex: any;
    /** 
     * Content of the annotation, which accepts the id of the custom element.
     * @default null
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