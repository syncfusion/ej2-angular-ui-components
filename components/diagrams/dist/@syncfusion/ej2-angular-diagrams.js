import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BpmnDiagrams, ComplexHierarchicalTree, ConnectorBridging, ConnectorEditing, DataBinding, Diagram, DiagramContextMenu, HierarchicalTree, LayoutAnimation, LineRouting, MindMap, Overview, PrintAndExport, RadialTree, Snapping, SymbolPalette, SymmetricLayout, UndoRedo } from '@syncfusion/ej2-diagrams';
import { CommonModule } from '@angular/common';

let input = ['addInfo', 'id', 'lock', 'objects', 'visible', 'zIndex'];
let outputs = [];
/**
 * Layers Directive
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
class LayerDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
    }
}
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
LayerDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Layer Array Directive
 */
class LayersDirective extends ArrayBase {
    constructor() {
        super('layers');
    }
}
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
LayersDirective.ctorParameters = () => [];

let input$1 = ['action', 'cursor'];
let outputs$1 = [];
/**
 * Cursor Maps Directive
 * ```html
 * <e-cusrsormaps>
 * <e-cursormap></e-cursormap>
 * </e-cursormaps>
 * ```
 */
class CustomCursorDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$1);
    }
}
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
CustomCursorDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * CustomCursor Array Directive
 */
class CustomCursorsDirective extends ArrayBase {
    constructor() {
        super('customcursor');
    }
}
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
CustomCursorsDirective.ctorParameters = () => [];

let input$2 = ['addInfo', 'alignment', 'constraints', 'content', 'displacement', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'segmentAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
let outputs$2 = [];
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
class ConnectorAnnotationDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
    }
}
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
ConnectorAnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * ConnectorAnnotation Array Directive
 */
class ConnectorAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
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
ConnectorAnnotationsDirective.ctorParameters = () => [];

let input$3 = ['addInfo', 'annotations', 'bridgeSpace', 'collapseIcon', 'constraints', 'cornerRadius', 'excludeFromLayout', 'expandIcon', 'flip', 'hitPadding', 'id', 'isExpanded', 'margin', 'ports', 'segments', 'shape', 'sourceDecorator', 'sourceID', 'sourcePadding', 'sourcePoint', 'sourcePortID', 'style', 'targetDecorator', 'targetID', 'targetPadding', 'targetPoint', 'targetPortID', 'tooltip', 'type', 'visible', 'wrapper', 'zIndex'];
let outputs$3 = [];
/**
 * Connectors Directive
 * ```html
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * ```
 */
class ConnectorDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['annotations'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
    }
}
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
ConnectorDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Connector Array Directive
 */
class ConnectorsDirective extends ArrayBase {
    constructor() {
        super('connectors');
    }
}
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
ConnectorsDirective.ctorParameters = () => [];

let input$4 = ['addInfo', 'constraints', 'content', 'dragLimit', 'height', 'horizontalAlignment', 'hyperlink', 'id', 'margin', 'offset', 'rotateAngle', 'style', 'template', 'type', 'verticalAlignment', 'visibility', 'width'];
let outputs$4 = [];
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
class NodeAnnotationDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
    }
}
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
NodeAnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * NodeAnnotation Array Directive
 */
class NodeAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
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
NodeAnnotationsDirective.ctorParameters = () => [];

let input$5 = ['addInfo', 'constraints', 'height', 'horizontalAlignment', 'id', 'margin', 'offset', 'pathData', 'shape', 'style', 'verticalAlignment', 'visibility', 'width'];
let outputs$5 = [];
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
class PortDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$5);
    }
}
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
PortDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Port Array Directive
 */
class PortsDirective extends ArrayBase {
    constructor() {
        super('ports');
    }
}
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
PortsDirective.ctorParameters = () => [];

let input$6 = ['addInfo', 'annotations', 'backgroundColor', 'borderColor', 'borderWidth', 'branch', 'children', 'collapseIcon', 'columnIndex', 'columnSpan', 'columns', 'constraints', 'container', 'data', 'excludeFromLayout', 'expandIcon', 'flip', 'height', 'horizontalAlignment', 'id', 'isExpanded', 'margin', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'offsetX', 'offsetY', 'pivot', 'ports', 'rotateAngle', 'rowIndex', 'rowSpan', 'rows', 'shadow', 'shape', 'style', 'tooltip', 'verticalAlignment', 'visible', 'width', 'wrapper', 'zIndex'];
let outputs$6 = [];
/**
 * Nodes Directive
 * ```html
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * ```
 */
class NodeDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['annotations', 'ports'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$6);
    }
}
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
NodeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Node Array Directive
 */
class NodesDirective extends ArrayBase {
    constructor() {
        super('nodes');
    }
}
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
NodesDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width'];
const outputs$7 = ['animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'historyChange', 'historyStateChange', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
const twoWays = [''];
/**
 * Diagram Component
 * ```html
 * <ej-diagram></ej-diagram>
 * ```
 */
let DiagramComponent = class DiagramComponent extends Diagram {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['layers', 'customCursor', 'connectors', 'nodes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DiagramsHierarchicalTree');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('DiagramsMindMap');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('DiagramsRadialTree');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('DiagramsComplexHierarchicalTree');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('DiagramsDataBinding');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('DiagramsSnapping');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('DiagramsPrintAndExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('DiagramsBpmnDiagrams');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('DiagramsSymmetricLayout');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('DiagramsConnectorBridging');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        try {
            let mod = this.injector.get('DiagramsUndoRedo');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_l) { }
        try {
            let mod = this.injector.get('DiagramsLayoutAnimation');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_m) { }
        try {
            let mod = this.injector.get('DiagramsDiagramContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_o) { }
        try {
            let mod = this.injector.get('DiagramsLineRouting');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_p) { }
        try {
            let mod = this.injector.get('DiagramsConnectorEditing');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_q) { }
        this.registerEvents(outputs$7);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
DiagramComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class DiagramModule {
}
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
DiagramModule.ctorParameters = () => [];

const HierarchicalTreeService = { provide: 'DiagramsHierarchicalTree', useValue: HierarchicalTree };
const MindMapService = { provide: 'DiagramsMindMap', useValue: MindMap };
const RadialTreeService = { provide: 'DiagramsRadialTree', useValue: RadialTree };
const ComplexHierarchicalTreeService = { provide: 'DiagramsComplexHierarchicalTree', useValue: ComplexHierarchicalTree };
const DataBindingService = { provide: 'DiagramsDataBinding', useValue: DataBinding };
const SnappingService = { provide: 'DiagramsSnapping', useValue: Snapping };
const PrintAndExportService = { provide: 'DiagramsPrintAndExport', useValue: PrintAndExport };
const BpmnDiagramsService = { provide: 'DiagramsBpmnDiagrams', useValue: BpmnDiagrams };
const SymmetricLayoutService = { provide: 'DiagramsSymmetricLayout', useValue: SymmetricLayout };
const ConnectorBridgingService = { provide: 'DiagramsConnectorBridging', useValue: ConnectorBridging };
const UndoRedoService = { provide: 'DiagramsUndoRedo', useValue: UndoRedo };
const LayoutAnimationService = { provide: 'DiagramsLayoutAnimation', useValue: LayoutAnimation };
const DiagramContextMenuService = { provide: 'DiagramsDiagramContextMenu', useValue: DiagramContextMenu };
const LineRoutingService = { provide: 'DiagramsLineRouting', useValue: LineRouting };
const ConnectorEditingService = { provide: 'DiagramsConnectorEditing', useValue: ConnectorEditing };
/**
 * NgModule definition for the Diagram component with providers.
 */
class DiagramAllModule {
}
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
DiagramAllModule.ctorParameters = () => [];

let input$7 = ['expanded', 'height', 'iconCss', 'id', 'symbols', 'title'];
let outputs$8 = [];
/**
 * Palette Directive
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
class PaletteDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$8);
    }
}
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
PaletteDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Palette Array Directive
 */
class PalettesDirective extends ArrayBase {
    constructor() {
        super('palettes');
    }
}
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
PalettesDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width'];
const outputs$9 = ['paletteSelectionChange'];
const twoWays$1 = [''];
/**
 * SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
let SymbolPaletteComponent = class SymbolPaletteComponent extends SymbolPalette {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['palettes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('DiagramsBpmnDiagrams');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        this.registerEvents(outputs$9);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
SymbolPaletteComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class SymbolPaletteModule {
}
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
SymbolPaletteModule.ctorParameters = () => [];

/**
 * NgModule definition for the SymbolPalette component with providers.
 */
class SymbolPaletteAllModule {
}
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
SymbolPaletteAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width'];
const outputs$10 = ['created'];
const twoWays$2 = [''];
/**
 * Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
let OverviewComponent = class OverviewComponent extends Overview {
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$10);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
};
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
OverviewComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class OverviewModule {
}
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
OverviewModule.ctorParameters = () => [];

/**
 * NgModule definition for the Overview component with providers.
 */
class OverviewAllModule {
}
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
OverviewAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, ConnectorDirective, ConnectorsDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, NodeDirective, NodesDirective, DiagramComponent, DiagramModule, DiagramAllModule, HierarchicalTreeService, MindMapService, RadialTreeService, ComplexHierarchicalTreeService, DataBindingService, SnappingService, PrintAndExportService, BpmnDiagramsService, SymmetricLayoutService, ConnectorBridgingService, UndoRedoService, LayoutAnimationService, DiagramContextMenuService, LineRoutingService, ConnectorEditingService, PaletteDirective, PalettesDirective, SymbolPaletteComponent, SymbolPaletteModule, SymbolPaletteAllModule, OverviewComponent, OverviewModule, OverviewAllModule, inputs as ɵa, outputs$7 as ɵb, inputs$2 as ɵe, outputs$10 as ɵf, inputs$1 as ɵc, outputs$9 as ɵd };
export { Diagram, PrintAndExport, Size, Rect, MatrixTypes, Matrix, identityMatrix, transformPointByMatrix, transformPointsByMatrix, rotateMatrix, scaleMatrix, translateMatrix, multiplyMatrix, Point, PortVisibility, SnapConstraints, SelectorConstraints, ConnectorConstraints, AnnotationConstraints, NodeConstraints, ElementAction, ThumbsConstraints, DiagramConstraints, DiagramTools, Transform, RenderMode, KeyModifiers, Keys, DiagramAction, RendererAction, RealAction, NoOfSegments, DiagramEvent, PortConstraints, contextMenuClick, contextMenuOpen, contextMenuBeforeItemRender, Thickness, Margin, Shadow, Stop, Gradient, LinearGradient, RadialGradient, ShapeStyle, StrokeStyle, TextStyle, DiagramElement, PathElement, ImageElement, TextElement, Container, Canvas, GridPanel, RowDefinition, ColumnDefinition, GridRow, GridCell, StackPanel, findConnectorPoints, swapBounds, findAngle, findPoint, getIntersection, getIntersectionPoints, orthoConnection2Segment, getPortDirection, getOuterBounds, getOppositeDirection, processPathData, parsePathData, getRectanglePath, getPolygonPath, pathSegmentCollection, transformPath, updatedSegment, scalePathData, splitArrayCollection, getPathString, getString, randomId, cornersPointsBeforeRotation, getBounds, cloneObject, getInternalProperties, cloneArray, extendObject, extendArray, textAlignToString, wordBreakToString, bBoxText, middleElement, overFlow, whiteSpaceToString, rotateSize, rotatePoint, getOffset, getFunction, completeRegion, findNodeByName, findObjectType, setSwimLaneDefaults, setUMLActivityDefaults, setConnectorDefaults, findNearestPoint, isDiagramChild, groupHasType, updateDefaultValues, updateLayoutValue, isPointOverConnector, intersect3, intersect2, getLineSegment, getPoints, getTooltipOffset, sort, getAnnotationPosition, getOffsetOfConnector, getAlignedPosition, alignLabelOnSegments, getBezierDirection, removeChildNodes, serialize, deserialize, upgrade, updateStyle, updateHyperlink, updateShapeContent, updateShape, updateContent, updateUmlActivityNode, getUMLFinalNode, getUMLActivityShapes, removeGradient, removeItem, updateConnector, getUserHandlePosition, canResizeCorner, canShowCorner, checkPortRestriction, findAnnotation, findPort, getInOutConnectPorts, findObjectIndex, getObjectFromCollection, scaleElement, arrangeChild, insertObject, getElement, getCollectionChangeEventArguements, getDropEventArguements, getPoint, getObjectType, flipConnector, updatePortEdges, alignElement, updatePathElement, findPath, findDistance, cloneBlazorObject, checkBrowserInfo, CanvasRenderer, DiagramRenderer, DataBinding, getBasicShape, getPortShape, getDecoratorShape, getIconShape, getFlowShape, Hyperlink, Annotation, ShapeAnnotation, PathAnnotation, Port, PointPort, menuClass, DiagramContextMenu, Shape, Path, Native, Html, Image, Text, BasicShape, FlowShape, BpmnGateway, BpmnDataObject, BpmnTask, BpmnEvent, BpmnSubEvent, BpmnTransactionSubProcess, BpmnSubProcess, BpmnActivity, BpmnAnnotation, BpmnShape, UmlActivityShape, MethodArguments, UmlClassAttribute, UmlClassMethod, UmlClass, UmlInterface, UmlEnumerationMember, UmlEnumeration, UmlClassifierShape, Node, Header, Lane, Phase, SwimLane, ChildContainer, Selector, BpmnDiagrams, getBpmnShapePathData, getBpmnTriggerShapePathData, getBpmnGatewayShapePathData, getBpmnTaskShapePathData, getBpmnLoopShapePathData, Decorator, Vector, ConnectorShape, ActivityFlow, BpmnFlow, ConnectorSegment, StraightSegment, BezierSegment, OrthogonalSegment, getDirection, isEmptyVector, getBezierPoints, getBezierBounds, bezierPoints, MultiplicityLabel, ClassifierMultiplicity, RelationShip, Connector, ConnectorBridging, Snapping, UndoRedo, DiagramTooltip, initTooltip, updateTooltip, LayoutAnimation, UserHandle, ToolBase, SelectTool, ConnectTool, MoveTool, RotateTool, ResizeTool, NodeDrawingTool, ConnectorDrawingTool, TextDrawingTool, ZoomPanTool, ExpandTool, LabelTool, PolygonDrawingTool, PolyLineDrawingTool, LabelDragTool, LabelResizeTool, LabelRotateTool, DiagramEventHandler, CommandHandler, findToolToActivate, findPortToolToActivate, contains, hasSelection, hasSingleConnection, isSelected, getCursor, ConnectorEditing, updateCanvasBounds, removeChildInContainer, findBounds, createHelper, renderContainerHelper, checkParentAsContainer, checkChildNodeInContainer, addChildToContainer, updateLaneBoundsAfterAddChild, renderStackHighlighter, moveChildInStack, LineRouting, CrudAction, ConnectionDataSource, DataSource, Gridlines, SnapSettings, KeyGesture, Command, CommandManager, ContextMenuSettings, CustomCursorAction, DataMappingItems, Layout, MindMap, HierarchicalTree, RadialTree, GraphForceNode, SymmetricLayout, GraphLayoutManager, ComplexHierarchicalTree, Palette, SymbolPreview, SymbolPalette, Ruler, Overview } from '@syncfusion/ej2-diagrams';
//# sourceMappingURL=ej2-angular-diagrams.js.map
