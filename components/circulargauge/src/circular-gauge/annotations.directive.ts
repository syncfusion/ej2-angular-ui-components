import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['angle', 'autoAngle', 'content', 'description', 'radius', 'textStyle', 'zIndex'];
let outputs: string[] = [];
/**
 * Represents the directive to render and customize the annotations in an axis of circular gauge.
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
     * Sets and gets the angle for annotation with respect to axis in circular gauge.
     * @default 90
     */
    public angle: any;
    /** 
     * Enables and disables the rotation of the annotation along the axis.
     * @default false
     */
    public autoAngle: any;
    /** 
     * Sets and gets the information about annotation for assistive technology.
     * @default null
     */
    public description: any;
    /** 
     * Sets and gets the radius for annotation with respect to axis in circular gauge.
     * @default '50%'
     */
    public radius: any;
    /** 
     * Sets and gets the style of the text in annotation.
     */
    public textStyle: any;
    /** 
     * Sets and gets the z-index of an annotation in an axis in the circular gauge.
     * @default '-1'
     */
    public zIndex: any;
    /** 
     * Sets and gets the content of the annotation. This property accepts the HTML string or id of the custom element.
     * @default null
     * @asptype string
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