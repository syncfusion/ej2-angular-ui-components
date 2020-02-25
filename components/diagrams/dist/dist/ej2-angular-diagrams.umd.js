(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-diagrams'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-diagrams', '@angular/common'], factory) :
	(factory((global['ej2-angular-diagrams'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.diagrams,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Diagrams,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return LayerDirective;
}(ej2AngularBase.ComplexBase));
LayerDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
LayersDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-diagram>e-layers',
                queries: {
                    children: new core.ContentChildren(LayerDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return CustomCursorDirective;
}(ej2AngularBase.ComplexBase));
CustomCursorDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
CustomCursorsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-diagram>e-cursormaps',
                queries: {
                    children: new core.ContentChildren(CustomCursorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
CustomCursorsDirective.ctorParameters = function () { return []; };
var input$2 = ['addInfo', 'alignment', 'annotationType', 'constraints', 'content', 'displacement', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'segmentAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return ConnectorAnnotationDirective;
}(ej2AngularBase.ComplexBase));
ConnectorAnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ConnectorAnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-connector>e-connector-annotations',
                queries: {
                    children: new core.ContentChildren(ConnectorAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ConnectorAnnotationsDirective.ctorParameters = function () { return []; };
var input$3 = ['addInfo', 'annotations', 'bridgeSpace', 'constraints', 'cornerRadius', 'dragSize', 'excludeFromLayout', 'flip', 'hitPadding', 'id', 'margin', 'previewSize', 'segments', 'shape', 'sourceDecorator', 'sourceID', 'sourcePadding', 'sourcePoint', 'sourcePortID', 'style', 'targetDecorator', 'targetID', 'targetPadding', 'targetPoint', 'targetPortID', 'tooltip', 'type', 'visible', 'wrapper', 'zIndex'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return ConnectorDirective;
}(ej2AngularBase.ComplexBase));
ConnectorDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-connectors>e-connector',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childAnnotations: new core.ContentChild(ConnectorAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ConnectorDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ConnectorsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-diagram>e-connectors',
                queries: {
                    children: new core.ContentChildren(ConnectorDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ConnectorsDirective.ctorParameters = function () { return []; };
var input$4 = ['addInfo', 'annotationType', 'constraints', 'content', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        _this.directivePropList = input$4;
        return _this;
    }
    return NodeAnnotationDirective;
}(ej2AngularBase.ComplexBase));
NodeAnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
NodeAnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-node>e-node-annotations',
                queries: {
                    children: new core.ContentChildren(NodeAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
NodeAnnotationsDirective.ctorParameters = function () { return []; };
var input$5 = ['addInfo', 'constraints', 'height', 'horizontalAlignment', 'id', 'inEdges', 'margin', 'offset', 'outEdges', 'pathData', 'shape', 'style', 'verticalAlignment', 'visibility', 'width'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        _this.directivePropList = input$5;
        return _this;
    }
    return PortDirective;
}(ej2AngularBase.ComplexBase));
PortDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
PortsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-node>e-node-ports',
                queries: {
                    children: new core.ContentChildren(PortDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PortsDirective.ctorParameters = function () { return []; };
var input$6 = ['addInfo', 'annotations', 'backgroundColor', 'borderColor', 'borderWidth', 'branch', 'children', 'collapseIcon', 'columnIndex', 'columnSpan', 'columns', 'constraints', 'container', 'data', 'dragSize', 'excludeFromLayout', 'expandIcon', 'flip', 'height', 'horizontalAlignment', 'id', 'isExpanded', 'layoutInfo', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'offsetX', 'offsetY', 'pivot', 'ports', 'previewSize', 'rotateAngle', 'rowIndex', 'rowSpan', 'rows', 'shadow', 'shape', 'style', 'tooltip', 'verticalAlignment', 'visible', 'width', 'wrapper', 'zIndex'];
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$6);
        _this.directivePropList = input$6;
        return _this;
    }
    return NodeDirective;
}(ej2AngularBase.ComplexBase));
NodeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-nodes>e-node',
                inputs: input$6,
                outputs: outputs$6,
                queries: {
                    childAnnotations: new core.ContentChild(NodeAnnotationsDirective),
                    childPorts: new core.ContentChild(PortsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
NodeDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
NodesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-diagram>e-nodes',
                queries: {
                    children: new core.ContentChildren(NodeDirective)
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
var inputs = ['addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width'];
var outputs$7 = ['animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
var twoWays = [''];
/**
 * Diagram Component
 * ```html
 * <ej-diagram></ej-diagram>
 * ```
 */
exports.DiagramComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DiagramComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childLayers;
        if (this.childCustomCursor) {
            this.tagObjects[1].instance = ((this.childCustomCursor)).list[0].childLayers;
            for (var /** @type {?} */ d = 0; d < ((this.childCustomCursor)).list.length; d++) {
                if (((this.childCustomCursor)).list[d + 1]) {
                    this.tagObjects[1].instance.list.push(((this.childCustomCursor)).list[d + 1].childLayers.list[0]);
                }
            }
        }
        if (this.childConnectors) {
            this.tagObjects[2].instance = ((this.childConnectors)).list[0].childCustomCursor;
            for (var /** @type {?} */ d = 0; d < ((this.childConnectors)).list.length; d++) {
                if (((this.childConnectors)).list[d + 1]) {
                    this.tagObjects[2].instance.list.push(((this.childConnectors)).list[d + 1].childCustomCursor.list[0]);
                }
            }
        }
        if (this.childNodes) {
            this.tagObjects[3].instance = ((this.childNodes)).list[0].childConnectors;
            for (var /** @type {?} */ d = 0; d < ((this.childNodes)).list.length; d++) {
                if (((this.childNodes)).list[d + 1]) {
                    this.tagObjects[3].instance.list.push(((this.childNodes)).list[d + 1].childConnectors.list[0]);
                }
            }
        }
        this.context.ngAfterContentChecked(this);
    };
    return DiagramComponent;
}(ej2Diagrams.Diagram));
exports.DiagramComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-diagram',
                inputs: inputs,
                outputs: outputs$7,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childLayers: new core.ContentChild(LayersDirective),
                    childCustomCursor: new core.ContentChild(CustomCursorsDirective),
                    childConnectors: new core.ContentChild(ConnectorsDirective),
                    childNodes: new core.ContentChild(NodesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.DiagramComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DiagramComponent.propDecorators = {
    'annotationTemplate': [{ type: core.ContentChild, args: ['annotationTemplate',] },],
    'nodeTemplate': [{ type: core.ContentChild, args: ['nodeTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DiagramComponent.prototype, "annotationTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DiagramComponent.prototype, "nodeTemplate", void 0);
exports.DiagramComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DiagramComponent);
/**
 * NgModule definition for the Diagram component.
 */
var DiagramModule = /** @class */ (function () {
    function DiagramModule() {
    }
    return DiagramModule;
}());
DiagramModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DiagramComponent,
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
                    exports.DiagramComponent,
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
var HierarchicalTreeService = { provide: 'DiagramsHierarchicalTree', useValue: ej2Diagrams.HierarchicalTree };
var MindMapService = { provide: 'DiagramsMindMap', useValue: ej2Diagrams.MindMap };
var RadialTreeService = { provide: 'DiagramsRadialTree', useValue: ej2Diagrams.RadialTree };
var ComplexHierarchicalTreeService = { provide: 'DiagramsComplexHierarchicalTree', useValue: ej2Diagrams.ComplexHierarchicalTree };
var DataBindingService = { provide: 'DiagramsDataBinding', useValue: ej2Diagrams.DataBinding };
var SnappingService = { provide: 'DiagramsSnapping', useValue: ej2Diagrams.Snapping };
var PrintAndExportService = { provide: 'DiagramsPrintAndExport', useValue: ej2Diagrams.PrintAndExport };
var BpmnDiagramsService = { provide: 'DiagramsBpmnDiagrams', useValue: ej2Diagrams.BpmnDiagrams };
var SymmetricLayoutService = { provide: 'DiagramsSymmetricLayout', useValue: ej2Diagrams.SymmetricLayout };
var ConnectorBridgingService = { provide: 'DiagramsConnectorBridging', useValue: ej2Diagrams.ConnectorBridging };
var UndoRedoService = { provide: 'DiagramsUndoRedo', useValue: ej2Diagrams.UndoRedo };
var LayoutAnimationService = { provide: 'DiagramsLayoutAnimation', useValue: ej2Diagrams.LayoutAnimation };
var DiagramContextMenuService = { provide: 'DiagramsDiagramContextMenu', useValue: ej2Diagrams.DiagramContextMenu };
var LineRoutingService = { provide: 'DiagramsLineRouting', useValue: ej2Diagrams.LineRouting };
var ConnectorEditingService = { provide: 'DiagramsConnectorEditing', useValue: ej2Diagrams.ConnectorEditing };
/**
 * NgModule definition for the Diagram component with providers.
 */
var DiagramAllModule = /** @class */ (function () {
    function DiagramAllModule() {
    }
    return DiagramAllModule;
}());
DiagramAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DiagramModule],
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$8);
        _this.directivePropList = input$7;
        return _this;
    }
    return PaletteDirective;
}(ej2AngularBase.ComplexBase));
PaletteDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
PalettesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-symbolpalette>e-palettes',
                queries: {
                    children: new core.ContentChildren(PaletteDirective)
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
var inputs$1 = ['accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolDragSize', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width'];
var outputs$9 = ['paletteSelectionChange'];
var twoWays$1 = [''];
/**
 * SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
exports.SymbolPaletteComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    SymbolPaletteComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childPalettes;
        this.context.ngAfterContentChecked(this);
    };
    return SymbolPaletteComponent;
}(ej2Diagrams.SymbolPalette));
exports.SymbolPaletteComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-symbolpalette',
                inputs: inputs$1,
                outputs: outputs$9,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childPalettes: new core.ContentChild(PalettesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.SymbolPaletteComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SymbolPaletteComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SymbolPaletteComponent);
/**
 * NgModule definition for the SymbolPalette component.
 */
var SymbolPaletteModule = /** @class */ (function () {
    function SymbolPaletteModule() {
    }
    return SymbolPaletteModule;
}());
SymbolPaletteModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SymbolPaletteComponent,
                    PaletteDirective,
                    PalettesDirective
                ],
                exports: [
                    exports.SymbolPaletteComponent,
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SymbolPaletteModule],
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
exports.OverviewComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    OverviewComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return OverviewComponent;
}(ej2Diagrams.Overview));
exports.OverviewComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-overview',
                inputs: inputs$2,
                outputs: outputs$10,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.OverviewComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.OverviewComponent = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.OverviewComponent);
/**
 * NgModule definition for the Overview component.
 */
var OverviewModule = /** @class */ (function () {
    function OverviewModule() {
    }
    return OverviewModule;
}());
OverviewModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.OverviewComponent
                ],
                exports: [
                    exports.OverviewComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, OverviewModule],
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

exports.LayerDirective = LayerDirective;
exports.LayersDirective = LayersDirective;
exports.CustomCursorDirective = CustomCursorDirective;
exports.CustomCursorsDirective = CustomCursorsDirective;
exports.ConnectorAnnotationDirective = ConnectorAnnotationDirective;
exports.ConnectorAnnotationsDirective = ConnectorAnnotationsDirective;
exports.ConnectorDirective = ConnectorDirective;
exports.ConnectorsDirective = ConnectorsDirective;
exports.NodeAnnotationDirective = NodeAnnotationDirective;
exports.NodeAnnotationsDirective = NodeAnnotationsDirective;
exports.PortDirective = PortDirective;
exports.PortsDirective = PortsDirective;
exports.NodeDirective = NodeDirective;
exports.NodesDirective = NodesDirective;
exports.DiagramModule = DiagramModule;
exports.DiagramAllModule = DiagramAllModule;
exports.HierarchicalTreeService = HierarchicalTreeService;
exports.MindMapService = MindMapService;
exports.RadialTreeService = RadialTreeService;
exports.ComplexHierarchicalTreeService = ComplexHierarchicalTreeService;
exports.DataBindingService = DataBindingService;
exports.SnappingService = SnappingService;
exports.PrintAndExportService = PrintAndExportService;
exports.BpmnDiagramsService = BpmnDiagramsService;
exports.SymmetricLayoutService = SymmetricLayoutService;
exports.ConnectorBridgingService = ConnectorBridgingService;
exports.UndoRedoService = UndoRedoService;
exports.LayoutAnimationService = LayoutAnimationService;
exports.DiagramContextMenuService = DiagramContextMenuService;
exports.LineRoutingService = LineRoutingService;
exports.ConnectorEditingService = ConnectorEditingService;
exports.PaletteDirective = PaletteDirective;
exports.PalettesDirective = PalettesDirective;
exports.SymbolPaletteModule = SymbolPaletteModule;
exports.SymbolPaletteAllModule = SymbolPaletteAllModule;
exports.OverviewModule = OverviewModule;
exports.OverviewAllModule = OverviewAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$7;
exports.ɵe = inputs$2;
exports.ɵf = outputs$10;
exports.ɵc = inputs$1;
exports.ɵd = outputs$9;
exports.Diagram = ej2Diagrams.Diagram;
exports.PrintAndExport = ej2Diagrams.PrintAndExport;
exports.Size = ej2Diagrams.Size;
exports.Rect = ej2Diagrams.Rect;
exports.MatrixTypes = ej2Diagrams.MatrixTypes;
exports.Matrix = ej2Diagrams.Matrix;
exports.identityMatrix = ej2Diagrams.identityMatrix;
exports.transformPointByMatrix = ej2Diagrams.transformPointByMatrix;
exports.transformPointsByMatrix = ej2Diagrams.transformPointsByMatrix;
exports.rotateMatrix = ej2Diagrams.rotateMatrix;
exports.scaleMatrix = ej2Diagrams.scaleMatrix;
exports.translateMatrix = ej2Diagrams.translateMatrix;
exports.multiplyMatrix = ej2Diagrams.multiplyMatrix;
exports.Point = ej2Diagrams.Point;
exports.BlazorAction = ej2Diagrams.BlazorAction;
exports.PortVisibility = ej2Diagrams.PortVisibility;
exports.SnapConstraints = ej2Diagrams.SnapConstraints;
exports.SelectorConstraints = ej2Diagrams.SelectorConstraints;
exports.ConnectorConstraints = ej2Diagrams.ConnectorConstraints;
exports.AnnotationConstraints = ej2Diagrams.AnnotationConstraints;
exports.NodeConstraints = ej2Diagrams.NodeConstraints;
exports.ElementAction = ej2Diagrams.ElementAction;
exports.ThumbsConstraints = ej2Diagrams.ThumbsConstraints;
exports.DiagramConstraints = ej2Diagrams.DiagramConstraints;
exports.DiagramTools = ej2Diagrams.DiagramTools;
exports.Transform = ej2Diagrams.Transform;
exports.RenderMode = ej2Diagrams.RenderMode;
exports.KeyModifiers = ej2Diagrams.KeyModifiers;
exports.Keys = ej2Diagrams.Keys;
exports.DiagramAction = ej2Diagrams.DiagramAction;
exports.RendererAction = ej2Diagrams.RendererAction;
exports.RealAction = ej2Diagrams.RealAction;
exports.NoOfSegments = ej2Diagrams.NoOfSegments;
exports.DiagramEvent = ej2Diagrams.DiagramEvent;
exports.PortConstraints = ej2Diagrams.PortConstraints;
exports.contextMenuClick = ej2Diagrams.contextMenuClick;
exports.contextMenuOpen = ej2Diagrams.contextMenuOpen;
exports.contextMenuBeforeItemRender = ej2Diagrams.contextMenuBeforeItemRender;
exports.Thickness = ej2Diagrams.Thickness;
exports.Margin = ej2Diagrams.Margin;
exports.Shadow = ej2Diagrams.Shadow;
exports.Stop = ej2Diagrams.Stop;
exports.Gradient = ej2Diagrams.Gradient;
exports.DiagramGradient = ej2Diagrams.DiagramGradient;
exports.LinearGradient = ej2Diagrams.LinearGradient;
exports.RadialGradient = ej2Diagrams.RadialGradient;
exports.ShapeStyle = ej2Diagrams.ShapeStyle;
exports.StrokeStyle = ej2Diagrams.StrokeStyle;
exports.TextStyle = ej2Diagrams.TextStyle;
exports.DiagramShapeStyle = ej2Diagrams.DiagramShapeStyle;
exports.DiagramElement = ej2Diagrams.DiagramElement;
exports.PathElement = ej2Diagrams.PathElement;
exports.ImageElement = ej2Diagrams.ImageElement;
exports.TextElement = ej2Diagrams.TextElement;
exports.Container = ej2Diagrams.Container;
exports.Canvas = ej2Diagrams.Canvas;
exports.GridPanel = ej2Diagrams.GridPanel;
exports.RowDefinition = ej2Diagrams.RowDefinition;
exports.ColumnDefinition = ej2Diagrams.ColumnDefinition;
exports.GridRow = ej2Diagrams.GridRow;
exports.GridCell = ej2Diagrams.GridCell;
exports.StackPanel = ej2Diagrams.StackPanel;
exports.findConnectorPoints = ej2Diagrams.findConnectorPoints;
exports.swapBounds = ej2Diagrams.swapBounds;
exports.findAngle = ej2Diagrams.findAngle;
exports.findPoint = ej2Diagrams.findPoint;
exports.getIntersection = ej2Diagrams.getIntersection;
exports.getIntersectionPoints = ej2Diagrams.getIntersectionPoints;
exports.orthoConnection2Segment = ej2Diagrams.orthoConnection2Segment;
exports.getPortDirection = ej2Diagrams.getPortDirection;
exports.getOuterBounds = ej2Diagrams.getOuterBounds;
exports.getOppositeDirection = ej2Diagrams.getOppositeDirection;
exports.processPathData = ej2Diagrams.processPathData;
exports.parsePathData = ej2Diagrams.parsePathData;
exports.getRectanglePath = ej2Diagrams.getRectanglePath;
exports.getPolygonPath = ej2Diagrams.getPolygonPath;
exports.pathSegmentCollection = ej2Diagrams.pathSegmentCollection;
exports.transformPath = ej2Diagrams.transformPath;
exports.updatedSegment = ej2Diagrams.updatedSegment;
exports.scalePathData = ej2Diagrams.scalePathData;
exports.splitArrayCollection = ej2Diagrams.splitArrayCollection;
exports.getPathString = ej2Diagrams.getPathString;
exports.getString = ej2Diagrams.getString;
exports.randomId = ej2Diagrams.randomId;
exports.getIndex = ej2Diagrams.getIndex;
exports.templateCompiler = ej2Diagrams.templateCompiler;
exports.cornersPointsBeforeRotation = ej2Diagrams.cornersPointsBeforeRotation;
exports.getBounds = ej2Diagrams.getBounds;
exports.cloneObject = ej2Diagrams.cloneObject;
exports.getInternalProperties = ej2Diagrams.getInternalProperties;
exports.cloneArray = ej2Diagrams.cloneArray;
exports.extendObject = ej2Diagrams.extendObject;
exports.extendArray = ej2Diagrams.extendArray;
exports.textAlignToString = ej2Diagrams.textAlignToString;
exports.wordBreakToString = ej2Diagrams.wordBreakToString;
exports.bBoxText = ej2Diagrams.bBoxText;
exports.middleElement = ej2Diagrams.middleElement;
exports.overFlow = ej2Diagrams.overFlow;
exports.whiteSpaceToString = ej2Diagrams.whiteSpaceToString;
exports.rotateSize = ej2Diagrams.rotateSize;
exports.rotatePoint = ej2Diagrams.rotatePoint;
exports.getOffset = ej2Diagrams.getOffset;
exports.getFunction = ej2Diagrams.getFunction;
exports.completeRegion = ej2Diagrams.completeRegion;
exports.findNodeByName = ej2Diagrams.findNodeByName;
exports.findObjectType = ej2Diagrams.findObjectType;
exports.setSwimLaneDefaults = ej2Diagrams.setSwimLaneDefaults;
exports.getSpaceValue = ej2Diagrams.getSpaceValue;
exports.getInterval = ej2Diagrams.getInterval;
exports.setUMLActivityDefaults = ej2Diagrams.setUMLActivityDefaults;
exports.setConnectorDefaults = ej2Diagrams.setConnectorDefaults;
exports.findNearestPoint = ej2Diagrams.findNearestPoint;
exports.isDiagramChild = ej2Diagrams.isDiagramChild;
exports.groupHasType = ej2Diagrams.groupHasType;
exports.updateDefaultValues = ej2Diagrams.updateDefaultValues;
exports.updateLayoutValue = ej2Diagrams.updateLayoutValue;
exports.isPointOverConnector = ej2Diagrams.isPointOverConnector;
exports.intersect3 = ej2Diagrams.intersect3;
exports.intersect2 = ej2Diagrams.intersect2;
exports.getLineSegment = ej2Diagrams.getLineSegment;
exports.getPoints = ej2Diagrams.getPoints;
exports.getTooltipOffset = ej2Diagrams.getTooltipOffset;
exports.sort = ej2Diagrams.sort;
exports.getAnnotationPosition = ej2Diagrams.getAnnotationPosition;
exports.getOffsetOfConnector = ej2Diagrams.getOffsetOfConnector;
exports.getAlignedPosition = ej2Diagrams.getAlignedPosition;
exports.alignLabelOnSegments = ej2Diagrams.alignLabelOnSegments;
exports.getBezierDirection = ej2Diagrams.getBezierDirection;
exports.removeChildNodes = ej2Diagrams.removeChildNodes;
exports.serialize = ej2Diagrams.serialize;
exports.deserialize = ej2Diagrams.deserialize;
exports.upgrade = ej2Diagrams.upgrade;
exports.updateStyle = ej2Diagrams.updateStyle;
exports.updateHyperlink = ej2Diagrams.updateHyperlink;
exports.updateShapeContent = ej2Diagrams.updateShapeContent;
exports.updateShape = ej2Diagrams.updateShape;
exports.updateContent = ej2Diagrams.updateContent;
exports.updateUmlActivityNode = ej2Diagrams.updateUmlActivityNode;
exports.getUMLFinalNode = ej2Diagrams.getUMLFinalNode;
exports.getUMLActivityShapes = ej2Diagrams.getUMLActivityShapes;
exports.removeGradient = ej2Diagrams.removeGradient;
exports.removeItem = ej2Diagrams.removeItem;
exports.updateConnector = ej2Diagrams.updateConnector;
exports.getUserHandlePosition = ej2Diagrams.getUserHandlePosition;
exports.canResizeCorner = ej2Diagrams.canResizeCorner;
exports.canShowCorner = ej2Diagrams.canShowCorner;
exports.checkPortRestriction = ej2Diagrams.checkPortRestriction;
exports.findAnnotation = ej2Diagrams.findAnnotation;
exports.findPort = ej2Diagrams.findPort;
exports.getInOutConnectPorts = ej2Diagrams.getInOutConnectPorts;
exports.findObjectIndex = ej2Diagrams.findObjectIndex;
exports.getObjectFromCollection = ej2Diagrams.getObjectFromCollection;
exports.scaleElement = ej2Diagrams.scaleElement;
exports.arrangeChild = ej2Diagrams.arrangeChild;
exports.insertObject = ej2Diagrams.insertObject;
exports.getElement = ej2Diagrams.getElement;
exports.getCollectionChangeEventArguements = ej2Diagrams.getCollectionChangeEventArguements;
exports.getDropEventArguements = ej2Diagrams.getDropEventArguements;
exports.getPoint = ej2Diagrams.getPoint;
exports.getObjectType = ej2Diagrams.getObjectType;
exports.flipConnector = ej2Diagrams.flipConnector;
exports.updatePortEdges = ej2Diagrams.updatePortEdges;
exports.alignElement = ej2Diagrams.alignElement;
exports.updatePathElement = ej2Diagrams.updatePathElement;
exports.checkPort = ej2Diagrams.checkPort;
exports.findPath = ej2Diagrams.findPath;
exports.findDistance = ej2Diagrams.findDistance;
exports.cloneBlazorObject = ej2Diagrams.cloneBlazorObject;
exports.checkBrowserInfo = ej2Diagrams.checkBrowserInfo;
exports.canMeasureDecoratorPath = ej2Diagrams.canMeasureDecoratorPath;
exports.CanvasRenderer = ej2Diagrams.CanvasRenderer;
exports.DiagramRenderer = ej2Diagrams.DiagramRenderer;
exports.DataBinding = ej2Diagrams.DataBinding;
exports.getBasicShape = ej2Diagrams.getBasicShape;
exports.getPortShape = ej2Diagrams.getPortShape;
exports.getDecoratorShape = ej2Diagrams.getDecoratorShape;
exports.getIconShape = ej2Diagrams.getIconShape;
exports.getFlowShape = ej2Diagrams.getFlowShape;
exports.Hyperlink = ej2Diagrams.Hyperlink;
exports.Annotation = ej2Diagrams.Annotation;
exports.ShapeAnnotation = ej2Diagrams.ShapeAnnotation;
exports.PathAnnotation = ej2Diagrams.PathAnnotation;
exports.Port = ej2Diagrams.Port;
exports.PointPort = ej2Diagrams.PointPort;
exports.menuClass = ej2Diagrams.menuClass;
exports.DiagramContextMenu = ej2Diagrams.DiagramContextMenu;
exports.Shape = ej2Diagrams.Shape;
exports.Path = ej2Diagrams.Path;
exports.Native = ej2Diagrams.Native;
exports.Html = ej2Diagrams.Html;
exports.Image = ej2Diagrams.Image;
exports.Text = ej2Diagrams.Text;
exports.BasicShape = ej2Diagrams.BasicShape;
exports.FlowShape = ej2Diagrams.FlowShape;
exports.BpmnGateway = ej2Diagrams.BpmnGateway;
exports.BpmnDataObject = ej2Diagrams.BpmnDataObject;
exports.BpmnTask = ej2Diagrams.BpmnTask;
exports.BpmnEvent = ej2Diagrams.BpmnEvent;
exports.BpmnSubEvent = ej2Diagrams.BpmnSubEvent;
exports.BpmnTransactionSubProcess = ej2Diagrams.BpmnTransactionSubProcess;
exports.BpmnSubProcess = ej2Diagrams.BpmnSubProcess;
exports.BpmnActivity = ej2Diagrams.BpmnActivity;
exports.BpmnAnnotation = ej2Diagrams.BpmnAnnotation;
exports.BpmnShape = ej2Diagrams.BpmnShape;
exports.UmlActivityShape = ej2Diagrams.UmlActivityShape;
exports.MethodArguments = ej2Diagrams.MethodArguments;
exports.UmlClassAttribute = ej2Diagrams.UmlClassAttribute;
exports.UmlClassMethod = ej2Diagrams.UmlClassMethod;
exports.UmlClass = ej2Diagrams.UmlClass;
exports.UmlInterface = ej2Diagrams.UmlInterface;
exports.UmlEnumerationMember = ej2Diagrams.UmlEnumerationMember;
exports.UmlEnumeration = ej2Diagrams.UmlEnumeration;
exports.UmlClassifierShape = ej2Diagrams.UmlClassifierShape;
exports.DiagramShape = ej2Diagrams.DiagramShape;
exports.Node = ej2Diagrams.Node;
exports.Header = ej2Diagrams.Header;
exports.Lane = ej2Diagrams.Lane;
exports.Phase = ej2Diagrams.Phase;
exports.SwimLane = ej2Diagrams.SwimLane;
exports.ChildContainer = ej2Diagrams.ChildContainer;
exports.Selector = ej2Diagrams.Selector;
exports.BpmnDiagrams = ej2Diagrams.BpmnDiagrams;
exports.getBpmnShapePathData = ej2Diagrams.getBpmnShapePathData;
exports.getBpmnTriggerShapePathData = ej2Diagrams.getBpmnTriggerShapePathData;
exports.getBpmnGatewayShapePathData = ej2Diagrams.getBpmnGatewayShapePathData;
exports.getBpmnTaskShapePathData = ej2Diagrams.getBpmnTaskShapePathData;
exports.getBpmnLoopShapePathData = ej2Diagrams.getBpmnLoopShapePathData;
exports.Decorator = ej2Diagrams.Decorator;
exports.Vector = ej2Diagrams.Vector;
exports.ConnectorShape = ej2Diagrams.ConnectorShape;
exports.ActivityFlow = ej2Diagrams.ActivityFlow;
exports.BpmnFlow = ej2Diagrams.BpmnFlow;
exports.ConnectorSegment = ej2Diagrams.ConnectorSegment;
exports.StraightSegment = ej2Diagrams.StraightSegment;
exports.BezierSegment = ej2Diagrams.BezierSegment;
exports.OrthogonalSegment = ej2Diagrams.OrthogonalSegment;
exports.DiagramConnectorSegment = ej2Diagrams.DiagramConnectorSegment;
exports.getDirection = ej2Diagrams.getDirection;
exports.isEmptyVector = ej2Diagrams.isEmptyVector;
exports.getBezierPoints = ej2Diagrams.getBezierPoints;
exports.getBezierBounds = ej2Diagrams.getBezierBounds;
exports.bezierPoints = ej2Diagrams.bezierPoints;
exports.MultiplicityLabel = ej2Diagrams.MultiplicityLabel;
exports.ClassifierMultiplicity = ej2Diagrams.ClassifierMultiplicity;
exports.RelationShip = ej2Diagrams.RelationShip;
exports.DiagramConnectorShape = ej2Diagrams.DiagramConnectorShape;
exports.Connector = ej2Diagrams.Connector;
exports.ConnectorBridging = ej2Diagrams.ConnectorBridging;
exports.Snapping = ej2Diagrams.Snapping;
exports.UndoRedo = ej2Diagrams.UndoRedo;
exports.DiagramTooltip = ej2Diagrams.DiagramTooltip;
exports.initTooltip = ej2Diagrams.initTooltip;
exports.updateTooltip = ej2Diagrams.updateTooltip;
exports.LayoutAnimation = ej2Diagrams.LayoutAnimation;
exports.SymbolSize = ej2Diagrams.SymbolSize;
exports.UserHandle = ej2Diagrams.UserHandle;
exports.ToolBase = ej2Diagrams.ToolBase;
exports.SelectTool = ej2Diagrams.SelectTool;
exports.ConnectTool = ej2Diagrams.ConnectTool;
exports.MoveTool = ej2Diagrams.MoveTool;
exports.RotateTool = ej2Diagrams.RotateTool;
exports.ResizeTool = ej2Diagrams.ResizeTool;
exports.NodeDrawingTool = ej2Diagrams.NodeDrawingTool;
exports.ConnectorDrawingTool = ej2Diagrams.ConnectorDrawingTool;
exports.TextDrawingTool = ej2Diagrams.TextDrawingTool;
exports.ZoomPanTool = ej2Diagrams.ZoomPanTool;
exports.ExpandTool = ej2Diagrams.ExpandTool;
exports.LabelTool = ej2Diagrams.LabelTool;
exports.PolygonDrawingTool = ej2Diagrams.PolygonDrawingTool;
exports.PolyLineDrawingTool = ej2Diagrams.PolyLineDrawingTool;
exports.LabelDragTool = ej2Diagrams.LabelDragTool;
exports.LabelResizeTool = ej2Diagrams.LabelResizeTool;
exports.LabelRotateTool = ej2Diagrams.LabelRotateTool;
exports.DiagramEventHandler = ej2Diagrams.DiagramEventHandler;
exports.CommandHandler = ej2Diagrams.CommandHandler;
exports.findToolToActivate = ej2Diagrams.findToolToActivate;
exports.findPortToolToActivate = ej2Diagrams.findPortToolToActivate;
exports.contains = ej2Diagrams.contains;
exports.hasSelection = ej2Diagrams.hasSelection;
exports.hasSingleConnection = ej2Diagrams.hasSingleConnection;
exports.isSelected = ej2Diagrams.isSelected;
exports.getCursor = ej2Diagrams.getCursor;
exports.ConnectorEditing = ej2Diagrams.ConnectorEditing;
exports.updateCanvasBounds = ej2Diagrams.updateCanvasBounds;
exports.removeChildInContainer = ej2Diagrams.removeChildInContainer;
exports.findBounds = ej2Diagrams.findBounds;
exports.createHelper = ej2Diagrams.createHelper;
exports.renderContainerHelper = ej2Diagrams.renderContainerHelper;
exports.checkParentAsContainer = ej2Diagrams.checkParentAsContainer;
exports.checkChildNodeInContainer = ej2Diagrams.checkChildNodeInContainer;
exports.addChildToContainer = ej2Diagrams.addChildToContainer;
exports.updateLaneBoundsAfterAddChild = ej2Diagrams.updateLaneBoundsAfterAddChild;
exports.renderStackHighlighter = ej2Diagrams.renderStackHighlighter;
exports.moveChildInStack = ej2Diagrams.moveChildInStack;
exports.LineRouting = ej2Diagrams.LineRouting;
exports.CrudAction = ej2Diagrams.CrudAction;
exports.ConnectionDataSource = ej2Diagrams.ConnectionDataSource;
exports.DataSource = ej2Diagrams.DataSource;
exports.Gridlines = ej2Diagrams.Gridlines;
exports.SnapSettings = ej2Diagrams.SnapSettings;
exports.KeyGesture = ej2Diagrams.KeyGesture;
exports.Command = ej2Diagrams.Command;
exports.CommandManager = ej2Diagrams.CommandManager;
exports.ContextMenuSettings = ej2Diagrams.ContextMenuSettings;
exports.CustomCursorAction = ej2Diagrams.CustomCursorAction;
exports.DataMappingItems = ej2Diagrams.DataMappingItems;
exports.Layout = ej2Diagrams.Layout;
exports.MindMap = ej2Diagrams.MindMap;
exports.HierarchicalTree = ej2Diagrams.HierarchicalTree;
exports.RadialTree = ej2Diagrams.RadialTree;
exports.GraphForceNode = ej2Diagrams.GraphForceNode;
exports.SymmetricLayout = ej2Diagrams.SymmetricLayout;
exports.GraphLayoutManager = ej2Diagrams.GraphLayoutManager;
exports.ComplexHierarchicalTree = ej2Diagrams.ComplexHierarchicalTree;
exports.Palette = ej2Diagrams.Palette;
exports.SymbolDragSize = ej2Diagrams.SymbolDragSize;
exports.SymbolPreview = ej2Diagrams.SymbolPreview;
exports.SymbolPalette = ej2Diagrams.SymbolPalette;
exports.Ruler = ej2Diagrams.Ruler;
exports.Overview = ej2Diagrams.Overview;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-diagrams.umd.js.map
