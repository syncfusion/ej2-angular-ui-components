var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BpmnDiagrams, ComplexHierarchicalTree, ConnectorBridging, ConnectorEditing, DataBinding, Diagram, DiagramContextMenu, HierarchicalTree, LayoutAnimation, LineRouting, MindMap, Overview, PrintAndExport, RadialTree, Snapping, SymbolPalette, SymmetricLayout, UndoRedo } from '@syncfusion/ej2-diagrams';
import { CommonModule } from '@angular/common';
var input = ['addInfo', 'id', 'lock', 'objects', 'visible', 'zIndex'];
var outputs = [];
/**
 * Layers Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
var LayerDirective = /** @class */ (function (_super) {
    __extends(LayerDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function LayerDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return LayerDirective;
}(ComplexBase));
LayerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layers>e-layer',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
LayerDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Layer Array Directive
 */
var LayersDirective = /** @class */ (function (_super) {
    __extends(LayersDirective, _super);
    function LayersDirective() {
        return _super.call(this, 'layers') || this;
    }
    return LayersDirective;
}(ArrayBase));
LayersDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-diagram>e-layers',
                queries: {
                    children: new ContentChildren(LayerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
LayersDirective.ctorParameters = function () { return []; };
var input$1 = ['action', 'cursor'];
var outputs$1 = [];
/**
 * Cursor Maps Directive
 * ```html
 * <e-cusrsormaps>
 * <e-cursormap></e-cursormap>
 * </e-cursormaps>
 * ```
 */
var CustomCursorDirective = /** @class */ (function (_super) {
    __extends(CustomCursorDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function CustomCursorDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return CustomCursorDirective;
}(ComplexBase));
CustomCursorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-cursormaps>e-cursormap',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
CustomCursorDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * CustomCursor Array Directive
 */
var CustomCursorsDirective = /** @class */ (function (_super) {
    __extends(CustomCursorsDirective, _super);
    function CustomCursorsDirective() {
        return _super.call(this, 'customcursor') || this;
    }
    return CustomCursorsDirective;
}(ArrayBase));
CustomCursorsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-diagram>e-cursormaps',
                queries: {
                    children: new ContentChildren(CustomCursorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CustomCursorsDirective.ctorParameters = function () { return []; };
var input$2 = ['addInfo', 'alignment', 'constraints', 'content', 'displacement', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'segmentAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
var outputs$2 = [];
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
var ConnectorAnnotationDirective = /** @class */ (function (_super) {
    __extends(ConnectorAnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ConnectorAnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return ConnectorAnnotationDirective;
}(ComplexBase));
ConnectorAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-connector>e-connector-annotations>e-connector-annotation',
                inputs: input$2,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ConnectorAnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * ConnectorAnnotation Array Directive
 */
var ConnectorAnnotationsDirective = /** @class */ (function (_super) {
    __extends(ConnectorAnnotationsDirective, _super);
    function ConnectorAnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return ConnectorAnnotationsDirective;
}(ArrayBase));
ConnectorAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-connector>e-connector-annotations',
                queries: {
                    children: new ContentChildren(ConnectorAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ConnectorAnnotationsDirective.ctorParameters = function () { return []; };
var input$3 = ['addInfo', 'annotations', 'bridgeSpace', 'collapseIcon', 'constraints', 'cornerRadius', 'excludeFromLayout', 'expandIcon', 'flip', 'hitPadding', 'id', 'isExpanded', 'margin', 'ports', 'segments', 'shape', 'sourceDecorator', 'sourceID', 'sourcePadding', 'sourcePoint', 'sourcePortID', 'style', 'targetDecorator', 'targetID', 'targetPadding', 'targetPoint', 'targetPortID', 'tooltip', 'type', 'visible', 'wrapper', 'zIndex'];
var outputs$3 = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * ```
 */
var ConnectorDirective = /** @class */ (function (_super) {
    __extends(ConnectorDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ConnectorDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['annotations'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return ConnectorDirective;
}(ComplexBase));
ConnectorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-connectors>e-connector',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childAnnotations: new ContentChild(ConnectorAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ConnectorDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Connector Array Directive
 */
var ConnectorsDirective = /** @class */ (function (_super) {
    __extends(ConnectorsDirective, _super);
    function ConnectorsDirective() {
        return _super.call(this, 'connectors') || this;
    }
    return ConnectorsDirective;
}(ArrayBase));
ConnectorsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-diagram>e-connectors',
                queries: {
                    children: new ContentChildren(ConnectorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ConnectorsDirective.ctorParameters = function () { return []; };
var input$4 = ['addInfo', 'constraints', 'content', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
var outputs$4 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-annotations>
 * <e-node-annotation>
 * </e-node-annotation>
 * </e-node-annotations>
 * </e-node>
 * </e-nodes>
 * ```
 */
var NodeAnnotationDirective = /** @class */ (function (_super) {
    __extends(NodeAnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function NodeAnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return NodeAnnotationDirective;
}(ComplexBase));
NodeAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-node>e-node-annotations>e-node-annotation',
                inputs: input$4,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
NodeAnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * NodeAnnotation Array Directive
 */
var NodeAnnotationsDirective = /** @class */ (function (_super) {
    __extends(NodeAnnotationsDirective, _super);
    function NodeAnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return NodeAnnotationsDirective;
}(ArrayBase));
NodeAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-node>e-node-annotations',
                queries: {
                    children: new ContentChildren(NodeAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
NodeAnnotationsDirective.ctorParameters = function () { return []; };
var input$5 = ['addInfo', 'constraints', 'height', 'horizontalAlignment', 'id', 'margin', 'offset', 'pathData', 'shape', 'style', 'verticalAlignment', 'visibility', 'width'];
var outputs$5 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * ```
 */
var PortDirective = /** @class */ (function (_super) {
    __extends(PortDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function PortDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        return _this;
    }
    return PortDirective;
}(ComplexBase));
PortDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-node>e-node-ports>e-node-port',
                inputs: input$5,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PortDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Port Array Directive
 */
var PortsDirective = /** @class */ (function (_super) {
    __extends(PortsDirective, _super);
    function PortsDirective() {
        return _super.call(this, 'ports') || this;
    }
    return PortsDirective;
}(ArrayBase));
PortsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-node>e-node-ports',
                queries: {
                    children: new ContentChildren(PortDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PortsDirective.ctorParameters = function () { return []; };
var input$6 = ['addInfo', 'annotations', 'backgroundColor', 'borderColor', 'borderWidth', 'branch', 'children', 'collapseIcon', 'columnIndex', 'columnSpan', 'columns', 'constraints', 'container', 'data', 'excludeFromLayout', 'expandIcon', 'flip', 'height', 'horizontalAlignment', 'id', 'isExpanded', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'offsetX', 'offsetY', 'pivot', 'ports', 'rotateAngle', 'rowIndex', 'rowSpan', 'rows', 'shadow', 'shape', 'style', 'tooltip', 'verticalAlignment', 'visible', 'width', 'wrapper', 'zIndex'];
var outputs$6 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * ```
 */
var NodeDirective = /** @class */ (function (_super) {
    __extends(NodeDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function NodeDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['annotations', 'ports'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$6);
        return _this;
    }
    return NodeDirective;
}(ComplexBase));
NodeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-nodes>e-node',
                inputs: input$6,
                outputs: outputs$6,
                queries: {
                    childAnnotations: new ContentChild(NodeAnnotationsDirective),
                    childPorts: new ContentChild(PortsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
NodeDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Node Array Directive
 */
var NodesDirective = /** @class */ (function (_super) {
    __extends(NodesDirective, _super);
    function NodesDirective() {
        return _super.call(this, 'nodes') || this;
    }
    return NodesDirective;
}(ArrayBase));
NodesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-diagram>e-nodes',
                queries: {
                    children: new ContentChildren(NodeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
NodesDirective.ctorParameters = function () { return []; };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width'];
var outputs$7 = ['animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'historyChange', 'historyStateChange', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
var twoWays = [''];
/**
 * Diagram Component
 * ```html
 * <ej-diagram></ej-diagram>
 * ```
 */
var DiagramComponent = /** @class */ (function (_super) {
    __extends(DiagramComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DiagramComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['layers', 'customCursor', 'connectors', 'nodes'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DiagramsHierarchicalTree');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('DiagramsMindMap');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('DiagramsRadialTree');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('DiagramsComplexHierarchicalTree');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('DiagramsDataBinding');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('DiagramsSnapping');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('DiagramsPrintAndExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('DiagramsBpmnDiagrams');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('DiagramsSymmetricLayout');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('DiagramsConnectorBridging');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            var mod = _this.injector.get('DiagramsUndoRedo');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            var mod = _this.injector.get('DiagramsLayoutAnimation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            var mod = _this.injector.get('DiagramsDiagramContextMenu');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            var mod = _this.injector.get('DiagramsLineRouting');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            var mod = _this.injector.get('DiagramsConnectorEditing');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        _this.registerEvents(outputs$7);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterContentChecked = function () {
    };
    return DiagramComponent;
}(Diagram));
DiagramComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-diagram',
                inputs: inputs,
                outputs: outputs$7,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childLayers: new ContentChild(LayersDirective),
                    childCustomCursor: new ContentChild(CustomCursorsDirective),
                    childConnectors: new ContentChild(ConnectorsDirective),
                    childNodes: new ContentChild(NodesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
DiagramComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DiagramComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DiagramComponent);
/**
 * NgModule definition for the Diagram component.
 */
var DiagramModule = /** @class */ (function () {
    function DiagramModule() {
    }
    return DiagramModule;
}());
DiagramModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DiagramComponent,
                    LayerDirective,
                    LayersDirective,
                    CustomCursorDirective,
                    CustomCursorsDirective,
                    ConnectorAnnotationDirective,
                    ConnectorAnnotationsDirective,
                    ConnectorDirective,
                    ConnectorsDirective,
                    NodeAnnotationDirective,
                    NodeAnnotationsDirective,
                    PortDirective,
                    PortsDirective,
                    NodeDirective,
                    NodesDirective
                ],
                exports: [
                    DiagramComponent,
                    LayerDirective,
                    LayersDirective,
                    CustomCursorDirective,
                    CustomCursorsDirective,
                    ConnectorAnnotationDirective,
                    ConnectorAnnotationsDirective,
                    ConnectorDirective,
                    ConnectorsDirective,
                    NodeAnnotationDirective,
                    NodeAnnotationsDirective,
                    PortDirective,
                    PortsDirective,
                    NodeDirective,
                    NodesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DiagramModule.ctorParameters = function () { return []; };
var HierarchicalTreeService = { provide: 'DiagramsHierarchicalTree', useValue: HierarchicalTree };
var MindMapService = { provide: 'DiagramsMindMap', useValue: MindMap };
var RadialTreeService = { provide: 'DiagramsRadialTree', useValue: RadialTree };
var ComplexHierarchicalTreeService = { provide: 'DiagramsComplexHierarchicalTree', useValue: ComplexHierarchicalTree };
var DataBindingService = { provide: 'DiagramsDataBinding', useValue: DataBinding };
var SnappingService = { provide: 'DiagramsSnapping', useValue: Snapping };
var PrintAndExportService = { provide: 'DiagramsPrintAndExport', useValue: PrintAndExport };
var BpmnDiagramsService = { provide: 'DiagramsBpmnDiagrams', useValue: BpmnDiagrams };
var SymmetricLayoutService = { provide: 'DiagramsSymmetricLayout', useValue: SymmetricLayout };
var ConnectorBridgingService = { provide: 'DiagramsConnectorBridging', useValue: ConnectorBridging };
var UndoRedoService = { provide: 'DiagramsUndoRedo', useValue: UndoRedo };
var LayoutAnimationService = { provide: 'DiagramsLayoutAnimation', useValue: LayoutAnimation };
var DiagramContextMenuService = { provide: 'DiagramsDiagramContextMenu', useValue: DiagramContextMenu };
var LineRoutingService = { provide: 'DiagramsLineRouting', useValue: LineRouting };
var ConnectorEditingService = { provide: 'DiagramsConnectorEditing', useValue: ConnectorEditing };
/**
 * NgModule definition for the Diagram component with providers.
 */
var DiagramAllModule = /** @class */ (function () {
    function DiagramAllModule() {
    }
    return DiagramAllModule;
}());
DiagramAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DiagramModule],
                exports: [
                    DiagramModule
                ],
                providers: [
                    HierarchicalTreeService,
                    MindMapService,
                    RadialTreeService,
                    ComplexHierarchicalTreeService,
                    DataBindingService,
                    SnappingService,
                    PrintAndExportService,
                    BpmnDiagramsService,
                    SymmetricLayoutService,
                    ConnectorBridgingService,
                    UndoRedoService,
                    LayoutAnimationService,
                    DiagramContextMenuService,
                    LineRoutingService,
                    ConnectorEditingService
                ]
            },] },
];
/**
 * @nocollapse
 */
DiagramAllModule.ctorParameters = function () { return []; };
var input$7 = ['expanded', 'height', 'iconCss', 'id', 'symbols', 'title'];
var outputs$8 = [];
/**
 * Palette Directive
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
var PaletteDirective = /** @class */ (function (_super) {
    __extends(PaletteDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function PaletteDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$8);
        return _this;
    }
    return PaletteDirective;
}(ComplexBase));
PaletteDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-palettes>e-palette',
                inputs: input$7,
                outputs: outputs$8,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PaletteDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * Palette Array Directive
 */
var PalettesDirective = /** @class */ (function (_super) {
    __extends(PalettesDirective, _super);
    function PalettesDirective() {
        return _super.call(this, 'palettes') || this;
    }
    return PalettesDirective;
}(ArrayBase));
PalettesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-symbolpalette>e-palettes',
                queries: {
                    children: new ContentChildren(PaletteDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PalettesDirective.ctorParameters = function () { return []; };
var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$1 = ['accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width'];
var outputs$9 = ['paletteSelectionChange'];
var twoWays$1 = [''];
/**
 * SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
var SymbolPaletteComponent = /** @class */ (function (_super) {
    __extends(SymbolPaletteComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SymbolPaletteComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['palettes'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('DiagramsBpmnDiagrams');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$9);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngAfterContentChecked = function () {
    };
    return SymbolPaletteComponent;
}(SymbolPalette));
SymbolPaletteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-symbolpalette',
                inputs: inputs$1,
                outputs: outputs$9,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childPalettes: new ContentChild(PalettesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
SymbolPaletteComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
SymbolPaletteComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SymbolPaletteComponent);
/**
 * NgModule definition for the SymbolPalette component.
 */
var SymbolPaletteModule = /** @class */ (function () {
    function SymbolPaletteModule() {
    }
    return SymbolPaletteModule;
}());
SymbolPaletteModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SymbolPaletteComponent,
                    PaletteDirective,
                    PalettesDirective
                ],
                exports: [
                    SymbolPaletteComponent,
                    PaletteDirective,
                    PalettesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SymbolPaletteModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the SymbolPalette component with providers.
 */
var SymbolPaletteAllModule = /** @class */ (function () {
    function SymbolPaletteAllModule() {
    }
    return SymbolPaletteAllModule;
}());
SymbolPaletteAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, SymbolPaletteModule],
                exports: [
                    SymbolPaletteModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SymbolPaletteAllModule.ctorParameters = function () { return []; };
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$2 = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'];
var outputs$10 = ['created'];
var twoWays$2 = [''];
/**
 * Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
var OverviewComponent = /** @class */ (function (_super) {
    __extends(OverviewComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function OverviewComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = [''];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$10);
        _this.addTwoWay.call(_this, twoWays$2);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngAfterContentChecked = function () {
    };
    return OverviewComponent;
}(Overview));
OverviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-overview',
                inputs: inputs$2,
                outputs: outputs$10,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
OverviewComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
OverviewComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], OverviewComponent);
/**
 * NgModule definition for the Overview component.
 */
var OverviewModule = /** @class */ (function () {
    function OverviewModule() {
    }
    return OverviewModule;
}());
OverviewModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    OverviewComponent
                ],
                exports: [
                    OverviewComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
OverviewModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Overview component with providers.
 */
var OverviewAllModule = /** @class */ (function () {
    function OverviewAllModule() {
    }
    return OverviewAllModule;
}());
OverviewAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverviewModule],
                exports: [
                    OverviewModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
OverviewAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorDirective, ConnectorsDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, NodeDirective, NodesDirective, DiagramComponent, DiagramModule, DiagramAllModule, HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, LineRoutingService, ConnectorEditingService, PaletteDirective, PalettesDirective, SymbolPaletteComponent, SymbolPaletteModule, SymbolPaletteAllModule, OverviewComponent, OverviewModule, OverviewAllModule, inputs as ɵa, outputs$7 as ɵb, inputs$2 as ɵe, outputs$10 as ɵf, inputs$1 as ɵc, outputs$9 as ɵd };
export { Diagram, PrintAndExport, Size, Rect, MatrixTypes, Matrix, identityMatrix, transformPointByMatrix, transformPointsByMatrix, rotateMatrix, scaleMatrix, translateMatrix, multiplyMatrix, Point, PortVisibility, SnapConstraints, SelectorConstraints, ConnectorConstraints, AnnotationConstraints, NodeConstraints, ElementAction, ThumbsConstraints, DiagramConstraints, DiagramTools, Transform, RenderMode, KeyModifiers, Keys, DiagramAction, RendererAction, RealAction, NoOfSegments, DiagramEvent, PortConstraints, contextMenuClick, contextMenuOpen, contextMenuBeforeItemRender, Thickness, Margin, Shadow, Stop, Gradient, LinearGradient, RadialGradient, ShapeStyle, StrokeStyle, TextStyle, DiagramElement, PathElement, ImageElement, TextElement, Container, Canvas, GridPanel, RowDefinition, ColumnDefinition, GridRow, GridCell, StackPanel, findConnectorPoints, swapBounds, findAngle, findPoint, getIntersection, getIntersectionPoints, orthoConnection2Segment, getPortDirection, getOuterBounds, getOppositeDirection, processPathData, parsePathData, getRectanglePath, getPolygonPath, pathSegmentCollection, transformPath, updatedSegment, scalePathData, splitArrayCollection, getPathString, getString, randomId, cornersPointsBeforeRotation, getBounds, cloneObject, getInternalProperties, cloneArray, extendObject, extendArray, textAlignToString, wordBreakToString, bBoxText, middleElement, overFlow, whiteSpaceToString, rotateSize, rotatePoint, getOffset, getFunction, completeRegion, findNodeByName, findObjectType, setSwimLaneDefaults, setUMLActivityDefaults, setConnectorDefaults, findNearestPoint, isDiagramChild, groupHasType, updateDefaultValues, updateLayoutValue, isPointOverConnector, intersect3, intersect2, getLineSegment, getPoints, getTooltipOffset, sort, getAnnotationPosition, getOffsetOfConnector, getAlignedPosition, alignLabelOnSegments, getBezierDirection, removeChildNodes, serialize, deserialize, upgrade, updateStyle, updateHyperlink, updateShapeContent, updateShape, updateContent, updateUmlActivityNode, getUMLFinalNode, getUMLActivityShapes, removeGradient, removeItem, updateConnector, getUserHandlePosition, canResizeCorner, canShowCorner, checkPortRestriction, findAnnotation, findPort, getInOutConnectPorts, findObjectIndex, getObjectFromCollection, scaleElement, arrangeChild, insertObject, getElement, getCollectionChangeEventArguements, getDropEventArguements, getPoint, getObjectType, flipConnector, updatePortEdges, alignElement, updatePathElement, findPath, findDistance, cloneBlazorObject, checkBrowserInfo, CanvasRenderer, DiagramRenderer, DataBinding, getBasicShape, getPortShape, getDecoratorShape, getIconShape, getFlowShape, Hyperlink, Annotation, ShapeAnnotation, PathAnnotation, Port, PointPort, menuClass, DiagramContextMenu, Shape, Path, Native, Html, Image, Text, BasicShape, FlowShape, BpmnGateway, BpmnDataObject, BpmnTask, BpmnEvent, BpmnSubEvent, BpmnTransactionSubProcess, BpmnSubProcess, BpmnActivity, BpmnAnnotation, BpmnShape, UmlActivityShape, MethodArguments, UmlClassAttribute, UmlClassMethod, UmlClass, UmlInterface, UmlEnumerationMember, UmlEnumeration, UmlClassifierShape, Node, Header, Lane, Phase, SwimLane, ChildContainer, Selector, BpmnDiagrams, getBpmnShapePathData, getBpmnTriggerShapePathData, getBpmnGatewayShapePathData, getBpmnTaskShapePathData, getBpmnLoopShapePathData, Decorator, Vector, ConnectorShape, ActivityFlow, BpmnFlow, ConnectorSegment, StraightSegment, BezierSegment, OrthogonalSegment, getDirection, isEmptyVector, getBezierPoints, getBezierBounds, bezierPoints, MultiplicityLabel, ClassifierMultiplicity, RelationShip, Connector, ConnectorBridging, Snapping, UndoRedo, DiagramTooltip, initTooltip, updateTooltip, LayoutAnimation, UserHandle, ToolBase, SelectTool, ConnectTool, MoveTool, RotateTool, ResizeTool, NodeDrawingTool, ConnectorDrawingTool, TextDrawingTool, ZoomPanTool, ExpandTool, LabelTool, PolygonDrawingTool, PolyLineDrawingTool, LabelDragTool, LabelResizeTool, LabelRotateTool, DiagramEventHandler, CommandHandler, findToolToActivate, findPortToolToActivate, contains, hasSelection, hasSingleConnection, isSelected, getCursor, ConnectorEditing, updateCanvasBounds, removeChildInContainer, findBounds, createHelper, renderContainerHelper, checkParentAsContainer, checkChildNodeInContainer, addChildToContainer, updateLaneBoundsAfterAddChild, renderStackHighlighter, moveChildInStack, LineRouting, CrudAction, ConnectionDataSource, DataSource, Gridlines, SnapSettings, KeyGesture, Command, CommandManager, ContextMenuSettings, CustomCursorAction, DataMappingItems, Layout, MindMap, HierarchicalTree, RadialTree, GraphForceNode, SymmetricLayout, GraphLayoutManager, ComplexHierarchicalTree, Palette, SymbolPreview, SymbolPalette, Ruler, Overview } from '@syncfusion/ej2-diagrams';
//# sourceMappingURL=ej2-angular-diagrams.es5.js.map
