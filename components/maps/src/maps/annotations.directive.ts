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