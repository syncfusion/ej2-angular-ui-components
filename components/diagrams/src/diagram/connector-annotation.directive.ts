import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['addInfo', 'alignment', 'annotationType', 'constraints', 'content', 'displacement', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'segmentAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
let outputs: string[] = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * ```
 */
@Directive({
    selector: 'e-connector>e-connector-annotations>e-connector-annotation',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ConnectorAnnotationDirective extends ComplexBase<ConnectorAnnotationDirective> {
    public directivePropList: any;
	


    /** 
     * Sets the type of the annotation 
     *  * Shape - Sets the annotation type as Shape 
     *  * Path - Sets the annotation type as Path
     * @default 'Shape'
     */
    public type: any;
    /** 
     * Allows the user to save custom information/data about an annotation 
     * 
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public addInfo: any;
    /** 
     * Sets the segment alignment of annotation 
     *  * Center - Aligns the annotation at the center of a connector segment 
     *  * Before - Aligns the annotation before a connector segment 
     *  * After - Aligns the annotation after a connector segment
     * @default Center
     */
    public alignment: any;
    /** 
     *  Defines the type of annotation template 
     * String -  Defines annotation template to be in string 
     * Template - Defines annotation template to be in html content
     * @default 'String'
     */
    public annotationType: any;
    /** 
     * Enables or disables the default behaviors of the label. 
     * * ReadOnly - Enables/Disables the ReadOnly Constraints 
     * * InheritReadOnly - Enables/Disables the InheritReadOnly Constraints
     * @default 'InheritReadOnly'
     * @aspnumberenum 
     */
    public constraints: any;
    /** 
     * Sets the textual description of the node/connector
     * @default ''
     */
    public content: any;
    /** 
     * Sets the displacement of an annotation from its actual position
     * @aspdefaultvalueignore 
     * @blazordefaultvalueignore 
     * @default undefined
     */
    public displacement: any;
    /** 
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(20,20,20,20)
     */
    public dragLimit: any;
    /** 
     * Sets the height of the text
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public height: any;
    /** 
     * Sets the horizontal alignment of the text with respect to the parent node/connector 
     * * Stretch - Stretches the diagram element throughout its immediate parent 
     * * Left - Aligns the diagram element at the left of its immediate parent 
     * * Right - Aligns the diagram element at the right of its immediate parent 
     * * Center - Aligns the diagram element at the center of its immediate parent 
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent
     * @default 'Center'
     */
    public horizontalAlignment: any;
    /** 
     * Sets the hyperlink of the label 
     * 
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public hyperlink: any;
    /** 
     * Defines the unique id of the annotation
     * @default ''
     */
    public id: any;
    /** 
     * Sets the space to be left between an annotation and its parent node/connector
     * @default new Margin(0,0,0,0)
     */
    public margin: any;
    /** 
     * Sets the segment offset of annotation
     * @default 0.5
     */
    public offset: any;
    /** 
     * Sets the rotate angle of the text
     * @default 0
     */
    public rotateAngle: any;
    /** 
     * Enable/Disable the angle based on the connector segment
     * @default false
     */
    public segmentAngle: any;
    /** 
     * Defines the appearance of the text
     * @default new TextStyle()
     */
    public style: any;
    /** 
     * Sets the textual description of the node/connector
     * @default 'undefined'
     */
    public template: any;
    /** 
     * Sets the vertical alignment of the text with respect to the parent node/connector 
     * * Stretch - Stretches the diagram element throughout its immediate parent 
     * * Top - Aligns the diagram element at the top of its immediate parent 
     * * Bottom - Aligns the diagram element at the bottom of its immediate parent 
     * * Center - Aligns the diagram element at the center of its immediate parent 
     * * Auto - Aligns the diagram element based on the characteristics of its immediate parent
     * @default 'Center'
     */
    public verticalAlignment: any;
    /** 
     * Defines the visibility of the label
     * @default true
     */
    public visibility: any;
    /** 
     * Sets the width of the text
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * ConnectorAnnotation Array Directive
 * @private
 */
@Directive({
    selector: 'e-connector>e-connector-annotations',
    queries: {
        children: new ContentChildren(ConnectorAnnotationDirective)
    },
})
export class ConnectorAnnotationsDirective extends ArrayBase<ConnectorAnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}