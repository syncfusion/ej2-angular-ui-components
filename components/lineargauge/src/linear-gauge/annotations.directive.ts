import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['axisIndex', 'axisValue', 'content', 'font', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs: string[] = [];
/**
 * Represents the directive to render and customize the annotations in the linear gauge.
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
     * Sets and gets the axis index which places the annotation in the specified axis in the linear gauge.
     * @aspdefaultvalueignore 
     * @default null
     */
    public axisIndex: any;
    /** 
     * Sets and gets the value of axis which places the annotation near the specified axis value.
     * @aspdefaultvalueignore 
     * @default null
     */
    public axisValue: any;
    /** 
     * Sets and gets the options to customize the font of the annotation in linear gauge.
     */
    public font: any;
    /** 
     * Sets and gets the horizontal alignment of annotation.
     * @default None
     */
    public horizontalAlignment: any;
    /** 
     * Sets and gets the vertical alignment of annotation.
     * @default None
     */
    public verticalAlignment: any;
    /** 
     * Sets and gets the x position for the annotation in linear gauge.
     * @default 0
     */
    public x: any;
    /** 
     * Sets and gets the y position for the annotation in linear gauge.
     * @default 0
     */
    public y: any;
    /** 
     * Sets and gets the z-index of the annotation.
     * @default '-1'
     */
    public zIndex: any;
    /** 
     * Sets and gets the content for the annotation.
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
    selector: 'ej-linear-gauge>e-annotations',
    queries: {
        children: new ContentChildren(AnnotationDirective)
    },
})
export class AnnotationsDirective extends ArrayBase<AnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}