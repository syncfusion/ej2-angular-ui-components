import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['alignment', 'cornerRadius', 'displacement', 'fill', 'handleStrokeColor', 'handleStrokeWidth', 'height', 'iconStrokeColor', 'iconStrokeWidth', 'id', 'offset', 'padding', 'pathData', 'visibility', 'width'];
let outputs: string[] = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * ```
 */
@Directive({
    selector: 'e-connector>e-connector-fixeduserhandles>e-connector-fixeduserhandle',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ConnectorFixedUserHandleDirective extends ComplexBase<ConnectorFixedUserHandleDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the segment alignment of the fixed user handle 
     *  * Center - Aligns the annotation at the center of a connector segment 
     *  * Before - Aligns the annotation before a connector segment 
     *  * After - Aligns the annotation after a connector segment
     * @default Center
     */
    public alignment: any;
    /** 
     * Specifies the cornerRadius for fixed user handle container
     * @default 0
     */
    public cornerRadius: any;
    /** 
     * Specifies the displacement of an fixed user handle from its actual position
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public displacement: any;
    /** 
     * Specifies the fill color of the fixed user handle
     * @default 'transparent'
     */
    public fill: any;
    /** 
     * Specifies the stroke color of the fixed user handle container
     * @default ''
     */
    public handleStrokeColor: any;
    /** 
     * Specifies the stroke width of the fixed user handle container
     * @default 1
     */
    public handleStrokeWidth: any;
    /** 
     * Specifies the height of the fixed user handle
     * @default 10
     */
    public height: any;
    /** 
     * Specifies the stroke color of the fixed user handle
     * @default 'transparent'
     */
    public iconStrokeColor: any;
    /** 
     * Specifies the stroke width of the fixed user handle
     * @default 0
     */
    public iconStrokeWidth: any;
    /** 
     * Specifies the unique id of the fixed user handle
     * @default ''
     */
    public id: any;
    /** 
     * Specifies the position of the connector fixed user handle
     * @default 0.5
     */
    public offset: any;
    /** 
     * Specifies the space between the fixed user handle and container
     * @default new Margin(0,0,0,0)
     */
    public padding: any;
    /** 
     * Specifies the shape information for fixed user handle
     * @default ''
     */
    public pathData: any;
    /** 
     * Specifies the visibility of the fixed user handle
     * @default true
     */
    public visibility: any;
    /** 
     * Specifies the width of the fixed user handle
     * @default 10
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
 * ConnectorFixedUserHandle Array Directive
 * @private
 */
@Directive({
    selector: 'e-connector>e-connector-fixeduserhandles',
    queries: {
        children: new ContentChildren(ConnectorFixedUserHandleDirective)
    },
})
export class ConnectorFixedUserHandlesDirective extends ArrayBase<ConnectorFixedUserHandlesDirective> {
    constructor() {
        super('fixeduserhandles');
    }
}