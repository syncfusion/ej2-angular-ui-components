import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['axisIndex', 'axisValue', 'content', 'font', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
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
     * Specifies the index of axis.
     * @aspdefaultvalueignore 
     */
    public axisIndex: any;
    /** 
     * Specifies the value of axis.
     * @aspdefaultvalueignore 
     */
    public axisValue: any;
    /** 
     * The font of the axis labels.
     */
    public font: any;
    /** 
     * Specifies the horizontal alignment of annotation.
     * @default None
     */
    public horizontalAlignment: any;
    /** 
     * Specifies the vertical alignment of annotation.
     * @default None
     */
    public verticalAlignment: any;
    /** 
     * Specifies the position of x.
     */
    public x: any;
    /** 
     * Specifies the position of y.
     */
    public y: any;
    /** 
     * Specifies the zIndex of the annotation.
     * @default '-1'
     */
    public zIndex: any;
    /** 
     * Specifies the id of html element.
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