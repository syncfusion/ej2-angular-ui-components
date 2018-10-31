import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { NodeAnnotationsDirective } from './node-annotation.directive';
import { PortsDirective } from './ports.directive';

let input: string[] = ['addInfo', 'annotations', 'backgroundColor', 'borderColor', 'borderWidth', 'children', 'collapseIcon', 'constraints', 'data', 'excludeFromLayout', 'expandIcon', 'height', 'id', 'isExpanded', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'offsetX', 'offsetY', 'pivot', 'ports', 'rotateAngle', 'shadow', 'shape', 'style', 'tooltip', 'visible', 'width', 'wrapper', 'zIndex'];
let outputs: string[] = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * ```
 */
@Directive({
    selector: 'e-nodes>e-node',
    inputs: input,
    outputs: outputs,    
    queries: {
        childAnnotations: new ContentChild(NodeAnnotationsDirective), 
        childPorts: new ContentChild(PortsDirective)
    }
})
export class NodeDirective extends ComplexBase<NodeDirective> {
    public childAnnotations: any;
    public childPorts: any;
    public tags: string[] = ['annotations', 'ports'];
    /** 
     * Allows the user to save custom information/data about a node/connector
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public addInfo: any;
    /** 
     * Defines the collection of textual annotations of nodes/connectors
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public annotations: any;
    /** 
     * Sets the background color of the shape
     * @default 'transparent'
     */
    public backgroundColor: any;
    /** 
     * Sets the border color of the node
     * @default 'none'
     */
    public borderColor: any;
    /** 
     * Sets the border width of the node
     * @default 0
     */
    public borderWidth: any;
    /** 
     * Defines the children of group element
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public children: any;
    /** 
     * Defines the collapsed state of a node
     * @default {}
     */
    public collapseIcon: any;
    /** 
     * Enables/Disables certain features of nodes 
     * * None - Disable all node Constraints 
     * * Select - Enables node to be selected 
     * * Drag - Enables node to be Dragged 
     * * Rotate - Enables node to be Rotate 
     * * Shadow - Enables node to display shadow 
     * * PointerEvents - Enables node to provide pointer  option 
     * * Delete - Enables node to delete 
     * * InConnect - Enables node to provide in connect option 
     * * OutConnect - Enables node to provide out connect option 
     * * Individual - Enables node to provide individual resize option 
     * * Expandable - Enables node to provide Expandable option 
     * * AllowDrop - Enables node to provide allow to drop option 
     * * Inherit - Enables node to inherit the interaction option 
     * * ResizeNorthEast - Enable ResizeNorthEast of the node 
     * * ResizeEast - Enable ResizeEast of the node 
     * * ResizeSouthEast - Enable ResizeSouthEast of the node 
     * * ResizeSouth - Enable ResizeSouthWest of the node 
     * * ResizeSouthWest - Enable ResizeSouthWest of the node 
     * * ResizeSouth - Enable ResizeSouth of the node 
     * * ResizeSouthWest - Enable ResizeSouthWest of the node 
     * * ResizeWest - Enable ResizeWest of the node 
     * * ResizeNorth - Enable ResizeNorth of the node 
     * * Resize - Enables the Aspect ratio fo the node 
     * * AspectRatio - Enables the Aspect ratio fo the node 
     * * Tooltip - Enables or disables tool tip for the Nodes 
     * * InheritTooltip - Enables or disables tool tip for the Nodes 
     * * ReadOnly - Enables the  ReadOnly support for Annotation
     * @default 'Default'
     * @aspnumberenum 
     */
    public constraints: any;
    /** 
     * Sets the data source of the node
     */
    public data: any;
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
     * Sets the height of the node
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public height: any;
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
     * Sets the maximum height of the node
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public maxHeight: any;
    /** 
     * Sets the maximum width of the node
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public maxWidth: any;
    /** 
     * Sets the minimum height of the node
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public minHeight: any;
    /** 
     * Sets the minimum width of the node
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public minWidth: any;
    /** 
     * Sets the x-coordinate of the position of the node
     * @default 0
     */
    public offsetX: any;
    /** 
     * Sets the y-coordinate of the position of the node
     * @default 0
     */
    public offsetY: any;
    /** 
     * Sets the reference point, that will act as the offset values(offsetX, offsetY) of a node
     * @default new Point(0.5,0.5)
     */
    public pivot: any;
    /** 
     * Defines the collection of connection points of nodes/connectors
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public ports: any;
    /** 
     * Sets the rotate angle of the node
     * @default 0
     */
    public rotateAngle: any;
    /** 
     * Defines the shadow of a shape/path
     * @default null
     */
    public shadow: any;
    /** 
     * Defines the shape of a node
     * @default Basic Shape
     * @asptype object
     */
    public shape: any;
    /** 
     * Sets the shape style of the node
     * @default new ShapeStyle()
     * @asptype object
     */
    public style: any;
    /** 
     * defines the tooltip for the node
     * @default {}
     */
    public tooltip: any;
    /** 
     * Sets the visibility of the node/connector
     * @default true
     */
    public visible: any;
    /** 
     * Sets the width of the node
     * @aspdefaultvalueignore 
     * @default undefined
     */
    public width: any;
    /** 
     * Sets or gets the UI of a node
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
 * Node Array Directive
 * @private
 */
@Directive({
    selector: 'ej-diagram>e-nodes',
    queries: {
        children: new ContentChildren(NodeDirective)
    },
})
export class NodesDirective extends ArrayBase<NodesDirective> {
    constructor() {
        super('nodes');
    }
}