import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { ConnectorAnnotationsDirective } from './connector-annotation.directive';

let input: string[] = ['addInfo', 'annotations', 'bridgeSpace', 'collapseIcon', 'constraints', 'cornerRadius', 'excludeFromLayout', 'expandIcon', 'flip', 'hitPadding', 'id', 'isExpanded', 'margin', 'ports', 'segments', 'shape', 'sourceDecorator', 'sourceID', 'sourcePadding', 'sourcePoint', 'sourcePortID', 'style', 'targetDecorator', 'targetID', 'targetPadding', 'targetPoint', 'targetPortID', 'tooltip', 'type', 'visible', 'wrapper', 'zIndex'];
let outputs: string[] = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * ```
 */
@Directive({
    selector: 'e-connectors>e-connector',
    inputs: input,
    outputs: outputs,    
    queries: {
        childAnnotations: new ContentChild(ConnectorAnnotationsDirective)
    }
})
export class ConnectorDirective extends ComplexBase<ConnectorDirective> {
    public childAnnotations: any;
    public tags: string[] = ['annotations'];
    /** 
     * Defines the type of the connector 
     * * Straight - Sets the segment type as Straight 
     * * Orthogonal - Sets the segment type as Orthogonal 
     * * Bezier - Sets the segment type as Bezier
     * @default 'Straight'
     * @asptype Syncfusion.EJ2.Diagrams.Segments
     */
    public type: any;
    /** 
     * Allows the user to save custom information/data about a node/connector
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public addInfo: any;
    /** 
     * 
     */
    public annotations: any;
    /** 
     * Defines the bridgeSpace of connector
     * @default 10
     */
    public bridgeSpace: any;
    /** 
     * Defines the collapsed state of a node
     * @default {}
     */
    public collapseIcon: any;
    /** 
     * Defines the constraints of connector 
     * * None - Interaction of the connectors cannot be done. 
     * * Select - Selects the connector. 
     * * Delete - Delete the connector. 
     * * Drag - Drag the connector. 
     * * DragSourceEnd - Drag the source end of the connector. 
     * * DragTargetEnd - Drag the target end of the connector. 
     * * DragSegmentThump - Drag the segment thumb of the connector. 
     * * AllowDrop - Allow to drop a node. 
     * * Bridging - Creates bridge  on intersection of two connectors. 
     * * InheritBridging - Creates bridge  on intersection of two connectors. 
     * * PointerEvents - Sets the pointer events. 
     * * Tooltip - Displays a tooltip for the connectors. 
     * * InheritToolTip - Displays a tooltip for the connectors. 
     * * Interaction - Features of the connector used for interaction. 
     * * ReadOnly - Enables ReadOnly
     * @default 'None'
     * @aspnumberenum 
     */
    public constraints: any;
    /** 
     * Sets the corner radius of the connector
     * @default 0
     */
    public cornerRadius: any;
    /** 
     * Defines whether the node should be automatically positioned or not. Applicable, if layout option is enabled.
     * @default false
     */
    public excludeFromLayout: any;
    /** 
     * Defines the expanded state of a node
     * @default {}
     */
    public expandIcon: any;
    /** 
     * Flip the element in Horizontal/Vertical directions
     * @aspdefaultvalueignore 
     * @default None
     */
    public flip: any;
    /** 
     * Sets the connector padding value
     * @default 10
     */
    public hitPadding: any;
    /** 
     * Represents the unique id of nodes/connectors
     * @default ''
     */
    public id: any;
    /** 
     * Defines whether the node is expanded or not
     * @default true
     */
    public isExpanded: any;
    /** 
     * Defines the space to be left between the node and its immediate parent
     * @default {}
     */
    public margin: any;
    /** 
     * Defines the collection of connection points of nodes/connectors
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public ports: any;
    /** 
     * Defines the segments
     * @default []
     * @asptype object
     */
    public segments: any;
    /** 
     * Defines the shape of the connector
     * @default 'Bpmn'
     * @asptype object
     */
    public shape: any;
    /** 
     * Defines the source decorator of the connector
     * @default new Decorator()
     */
    public sourceDecorator: any;
    /** 
     * Sets the source node/connector object of the connector
     * @default null
     */
    public sourceID: any;
    /** 
     * Sets the source padding of the connector
     * @default 0
     */
    public sourcePadding: any;
    /** 
     * Sets the beginning point of the connector
     * @default new Point(0,0)
     */
    public sourcePoint: any;
    /** 
     * Sets the unique id of the source port of the connector
     * @default ''
     */
    public sourcePortID: any;
    /** 
     * Defines the appearance of the connection path
     * @default ''
     */
    public style: any;
    /** 
     * Defines the target decorator of the connector
     * @default new Decorator()
     */
    public targetDecorator: any;
    /** 
     * Sets the target node/connector object of the connector
     * @default null
     */
    public targetID: any;
    /** 
     * Sets the target padding of the connector
     * @default 0
     */
    public targetPadding: any;
    /** 
     * Sets the end point of the connector
     * @default new Point(0,0)
     */
    public targetPoint: any;
    /** 
     * Sets the unique id of the target port of the connector
     * @default ''
     */
    public targetPortID: any;
    /** 
     * defines the tooltip for the connector
     * @default new DiagramToolTip();
     */
    public tooltip: any;
    /** 
     * Sets the visibility of the node/connector
     * @default true
     */
    public visible: any;
    /** 
     * Defines the UI of the connector
     * @default null
     */
    public wrapper: any;
    /** 
     * Defines the visual order of the node/connector in DOM
     * @default -1
     */
    public zIndex: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}

/**
 * Connector Array Directive
 * @private
 */
@Directive({
    selector: 'ej-diagram>e-connectors',
    queries: {
        children: new ContentChildren(ConnectorDirective)
    },
})
export class ConnectorsDirective extends ArrayBase<ConnectorsDirective> {
    constructor() {
        super('connectors');
    }
}