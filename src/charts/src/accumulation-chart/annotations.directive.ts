import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'y'];
let outputs: string[] = [];
/**
 * AccumulationAnnotations Directive
 * ```html
 * <e-accumulation-annotations>
 * <e-accumulation-annotation></e-accumulation-annotation>
 * </e-accumulation-annotations>
 * ```
 */
@Directive({
    selector: 'e-accumulation-annotations>e-accumulation-annotation',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AccumulationAnnotationDirective extends ComplexBase<AccumulationAnnotationDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the coordinate units of the annotation. 
     * The options are: 
     * * Pixel - Renders the annotation based on x and y pixel values. 
     * * Point - Renders the annotation based on x and y data values.
     * @default 'Pixel'
     */
    public coordinateUnits: any;
    /** 
     * A description for the annotation that provides additional information about its content for screen readers.
     * @default null
     */
    public description: any;
    /** 
     * Specifies the alignment of the annotation. 
     * The options are: 
     * * Near - Aligns the annotation element to the top side. 
     * * Far - Aligns the annotation element to the bottom side. 
     * * Center - Aligns the annotation element to the midpoint.
     * @default 'Center'
     * @deprecated 
     */
    public horizontalAlignment: any;
    /** 
     * Specifies the regions of the annotation. 
     * The options are: 
     * * Chart - Renders the annotation based on chart coordinates. 
     * * Series - Renders the annotation based on series coordinates.
     * @default 'Chart'
     */
    public region: any;
    /** 
     * Specifies the position of the annotation. 
     * The options are 
     * * Top - Aligns the annotation element to the top side. 
     * * Bottom - Aligns the annotation element to the bottom side. 
     * * Middle - Aligns the annotation element to the midpoint.
     * @default 'Middle'
     * @deprecated 
     */
    public verticalAlignment: any;
    /** 
     * If `coordinateUnit` is set to `Pixel`, x specifies the pixel value. 
     * If `coordinateUnit` is set to `Point`, x specifies the data value.
     * @default '0'
     */
    public x: any;
    /** 
     * If `coordinateUnit` is set to `Pixel`, y specifies the pixel value. 
     * If `coordinateUnit` is set to `Point`, y specifies the data value.
     * @default '0'
     */
    public y: any;
    /** 
     * The content of the annotation, which can also accept the ID of a custom element.
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
 * AccumulationAnnotation Array Directive
 * @private
 */
@Directive({
    selector: 'ej-accumulationchart>e-accumulation-annotations',
    queries: {
        children: new ContentChildren(AccumulationAnnotationDirective)
    },
})
export class AccumulationAnnotationsDirective extends ArrayBase<AccumulationAnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}