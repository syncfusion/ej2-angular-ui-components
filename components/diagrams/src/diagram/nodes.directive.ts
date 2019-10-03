import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { NodeAnnotationsDirective } from './node-annotation.directive';
import { PortsDirective } from './ports.directive';

let input: string[] = ['addInfo', 'annotations', 'backgroundColor', 'borderColor', 'borderWidth', 'branch', 'children', 'collapseIcon', 'columnIndex', 'columnSpan', 'columns', 'constraints', 'container', 'data', 'excludeFromLayout', 'expandIcon', 'flip', 'height', 'horizontalAlignment', 'id', 'isExpanded', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'offsetX', 'offsetY', 'pivot', 'ports', 'rotateAngle', 'rowIndex', 'rowSpan', 'rows', 'shadow', 'shape', 'style', 'tooltip', 'verticalAlignment', 'visible', 'width', 'wrapper', 'zIndex'];
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



     */
    public addInfo: any;
    /** 
     * Defines the collection of textual annotations of nodes/connectors



     */
    public annotations: any;
    /** 
     * Sets the background color of the shape

     */
    public backgroundColor: any;
    /** 
     * Sets the border color of the node

     */
    public borderColor: any;
    /** 
     * Sets the border width of the node


     */
    public borderWidth: any;
    /** 
     * Set the branch for the mind map



     */
    public branch: any;
    /** 
     * Defines the children of group element



     */
    public children: any;
    /** 
     * Defines the collapsed state of a node

     */
    public collapseIcon: any;
    /** 
     * Used to define a index of column in the grid



     */
    public columnIndex: any;
    /** 
     * Merge the column use the property in the grid container



     */
    public columnSpan: any;
    /** 
     * Used to define the column for the grid container



     */
    public columns: any;
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



     */
    public constraints: any;
    /** 
     * Defines the type of the container



     */
    public container: any;
    /** 
     * Sets the data source of the node
     */
    public data: any;
    /** 
     * Defines whether the node should be automatically positioned or not. Applicable, if layout option is enabled.

     */
    public excludeFromLayout: any;
    /** 
     * Defines the expanded state of a node

     */
    public expandIcon: any;
    /** 
     * Flip the element in Horizontal/Vertical directions



     */
    public flip: any;
    /** 
     * Sets the height of the node



     */
    public height: any;
    /** 
     * Sets the horizontalAlignment of the node

     */
    public horizontalAlignment: any;
    /** 
     * Represents the unique id of nodes/connectors

     */
    public id: any;
    /** 
     * Defines whether the node is expanded or not

     */
    public isExpanded: any;
    /** 
     * Defines the space to be left between the node and its immediate parent

     */
    public margin: any;
    /** 
     * Sets the maximum height of the node



     */
    public maxHeight: any;
    /** 
     * Sets the maximum width of the node



     */
    public maxWidth: any;
    /** 
     * Sets the minimum height of the node



     */
    public minHeight: any;
    /** 
     * Sets the minimum width of the node



     */
    public minWidth: any;
    /** 
     * Sets the x-coordinate of the position of the node

     */
    public offsetX: any;
    /** 
     * Sets the y-coordinate of the position of the node

     */
    public offsetY: any;
    /** 
     * Sets the reference point, that will act as the offset values(offsetX, offsetY) of a node

     */
    public pivot: any;
    /** 
     * Defines the collection of connection points of nodes/connectors



     */
    public ports: any;
    /** 
     * Sets the rotate angle of the node

     */
    public rotateAngle: any;
    /** 
     * Used to define a index of row in the grid



     */
    public rowIndex: any;
    /** 
     * Merge the row use the property in the grid container



     */
    public rowSpan: any;
    /** 
     * Used to define the rows for the grid container



     */
    public rows: any;
    /** 
     * Defines the shadow of a shape/path

     */
    public shadow: any;
    /** 
     * Defines the shape of a node


     */
    public shape: any;
    /** 
     * Sets the shape style of the node


     */
    public style: any;
    /** 
     * defines the tooltip for the node

     */
    public tooltip: any;
    /** 
     * Sets the verticalAlignment of the node

     */
    public verticalAlignment: any;
    /** 
     * Sets the visibility of the node/connector

     */
    public visible: any;
    /** 
     * Sets the width of the node



     */
    public width: any;
    /** 
     * Sets or gets the UI of a node

     */
    public wrapper: any;
    /** 
     * Defines the visual order of the node/connector in DOM

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