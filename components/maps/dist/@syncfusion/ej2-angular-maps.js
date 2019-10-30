import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Annotations, Bubble, DataLabel, Highlight, Legend, Maps, MapsTooltip, Marker, NavigationLine, Selection, Zoom } from '@syncfusion/ej2-maps';
import { CommonModule } from '@angular/common';

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input = ['animationDelay', 'animationDuration', 'border', 'dashArray', 'dataSource', 'fill', 'height', 'highlightSettings', 'imageUrl', 'legendText', 'offset', 'opacity', 'selectionSettings', 'shape', 'template', 'tooltipSettings', 'visible', 'width'];
let outputs = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class MarkerDirective extends ComplexBase {
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
MarkerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layer>e-markerSettings>e-markerSetting',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MarkerDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
MarkerDirective.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
    'tooltipSettings_template': [{ type: ContentChild, args: ['tooltipSettingsTemplate',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], MarkerDirective.prototype, "template", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], MarkerDirective.prototype, "tooltipSettings_template", void 0);
/**
 * Marker Array Directive
 */
class MarkersDirective extends ArrayBase {
    constructor() {
        super('markersettings');
    }
}
MarkersDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layer>e-markerSettings',
                queries: {
                    children: new ContentChildren(MarkerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
MarkersDirective.ctorParameters = () => [];

let input$1 = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
let outputs$1 = [];
/**
 * ColorMapping Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-colorMappings>
 * <e-colorMapping>
 * </e-colorMapping>
 * </e-colorMappings>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class ColorMappingDirective extends ComplexBase {
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
ColorMappingDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-bubbleSettings>e-colorMappings>e-colorMapping',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColorMappingDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * ColorMapping Array Directive
 */
class ColorMappingsDirective extends ArrayBase {
    constructor() {
        super('colormapping');
    }
}
ColorMappingsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-bubbleSettings>e-colorMappings',
                queries: {
                    children: new ContentChildren(ColorMappingDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ColorMappingsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$2 = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
let outputs$2 = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class BubbleDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['colorMapping'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
    }
}
BubbleDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layer>e-bubbleSettings>e-bubbleSetting',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childColorMapping: new ContentChild(ColorMappingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
BubbleDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
BubbleDirective.propDecorators = {
    'tooltipSettings_template': [{ type: ContentChild, args: ['tooltipSettingsTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], BubbleDirective.prototype, "tooltipSettings_template", void 0);
/**
 * Bubble Array Directive
 */
class BubblesDirective extends ArrayBase {
    constructor() {
        super('bubblesettings');
    }
}
BubblesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layer>e-bubbleSettings',
                queries: {
                    children: new ContentChildren(BubbleDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
BubblesDirective.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$3 = ['angle', 'arrowSettings', 'color', 'dashArray', 'highlightSettings', 'latitude', 'longitude', 'selectionSettings', 'visible', 'width'];
let outputs$3 = [];
/**
 * Layer Directive
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
class NavigationLineDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
    }
}
NavigationLineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layer>e-navigationLineSettings>e-navigationLineSetting',
                inputs: input$3,
                outputs: outputs$3,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
NavigationLineDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
NavigationLineDirective.propDecorators = {
    'tooltipSettings_template': [{ type: ContentChild, args: ['tooltipSettingsTemplate',] },],
};
__decorate$2([
    Template(),
    __metadata$2("design:type", Object)
], NavigationLineDirective.prototype, "tooltipSettings_template", void 0);
/**
 * NavigationLine Array Directive
 */
class NavigationLinesDirective extends ArrayBase {
    constructor() {
        super('navigationlinesettings');
    }
}
NavigationLinesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layer>e-navigationLineSettings',
                queries: {
                    children: new ContentChildren(NavigationLineDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
NavigationLinesDirective.ctorParameters = () => [];

let input$4 = ['animationDuration', 'bingMapType', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'key', 'layerType', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
let outputs$4 = [];
/**
 * Layer Directive
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
        this.tags = ['markerSettings', 'bubbleSettings', 'navigationLineSettings'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
    }
}
LayerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-layers>e-layer',
                inputs: input$4,
                outputs: outputs$4,
                queries: {
                    childMarkerSettings: new ContentChild(MarkersDirective),
                    childBubbleSettings: new ContentChild(BubblesDirective),
                    childNavigationLineSettings: new ContentChild(NavigationLinesDirective)
                }
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
                selector: 'ej-maps>e-layers',
                queries: {
                    children: new ContentChildren(LayerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
LayersDirective.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$5 = ['content', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs$5 = [];
/**
 * Annotation Directive
 * ```html
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * ```
 */
class AnnotationDirective extends ComplexBase {
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
AnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-maps-annotations>e-maps-annotation',
                inputs: input$5,
                outputs: outputs$5,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
AnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
AnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$3([
    Template(),
    __metadata$3("design:type", Object)
], AnnotationDirective.prototype, "content", void 0);
/**
 * Annotation Array Directive
 */
class AnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-maps>e-maps-annotations',
                queries: {
                    children: new ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = () => [];

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings'];
const outputs$6 = ['animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom', 'dataSourceChange'];
const twoWays = ['dataSource'];
/**
 * Represents Maps Component
 * ```html
 * <ej-maps></ej-maps>
 * ```
 */
let MapsComponent = class MapsComponent extends Maps {
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
        this.tags = ['layers', 'annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('MapsBubble');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('MapsLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('MapsMarker');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            let mod = this.injector.get('MapsHighlight');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            let mod = this.injector.get('MapsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            let mod = this.injector.get('MapsMapsTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            let mod = this.injector.get('MapsZoom');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            let mod = this.injector.get('MapsDataLabel');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            let mod = this.injector.get('MapsNavigationLine');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            let mod = this.injector.get('MapsAnnotations');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        this.registerEvents(outputs$6);
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
MapsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-maps',
                inputs: inputs,
                outputs: outputs$6,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childLayers: new ContentChild(LayersDirective),
                    childAnnotations: new ContentChild(AnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
MapsComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
MapsComponent = __decorate$4([
    ComponentMixins([ComponentBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], MapsComponent);

/**
 * NgModule definition for the Maps component.
 */
class MapsModule {
}
MapsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MapsComponent,
                    MarkerDirective,
                    MarkersDirective,
                    ColorMappingDirective,
                    ColorMappingsDirective,
                    BubbleDirective,
                    BubblesDirective,
                    NavigationLineDirective,
                    NavigationLinesDirective,
                    LayerDirective,
                    LayersDirective,
                    AnnotationDirective,
                    AnnotationsDirective
                ],
                exports: [
                    MapsComponent,
                    MarkerDirective,
                    MarkersDirective,
                    ColorMappingDirective,
                    ColorMappingsDirective,
                    BubbleDirective,
                    BubblesDirective,
                    NavigationLineDirective,
                    NavigationLinesDirective,
                    LayerDirective,
                    LayersDirective,
                    AnnotationDirective,
                    AnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
MapsModule.ctorParameters = () => [];

const BubbleService = { provide: 'MapsBubble', useValue: Bubble };
const LegendService = { provide: 'MapsLegend', useValue: Legend };
const MarkerService = { provide: 'MapsMarker', useValue: Marker };
const HighlightService = { provide: 'MapsHighlight', useValue: Highlight };
const SelectionService = { provide: 'MapsSelection', useValue: Selection };
const MapsTooltipService = { provide: 'MapsMapsTooltip', useValue: MapsTooltip };
const ZoomService = { provide: 'MapsZoom', useValue: Zoom };
const DataLabelService = { provide: 'MapsDataLabel', useValue: DataLabel };
const NavigationLineService = { provide: 'MapsNavigationLine', useValue: NavigationLine };
const AnnotationsService = { provide: 'MapsAnnotations', useValue: Annotations };
/**
 * NgModule definition for the Maps component with providers.
 */
class MapsAllModule {
}
MapsAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, MapsModule],
                exports: [
                    MapsModule
                ],
                providers: [
                    BubbleService,
                    LegendService,
                    MarkerService,
                    HighlightService,
                    SelectionService,
                    MapsTooltipService,
                    ZoomService,
                    DataLabelService,
                    NavigationLineService,
                    AnnotationsService
                ]
            },] },
];
/**
 * @nocollapse
 */
MapsAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { MarkerDirective, MarkersDirective, ColorMappingDirective, ColorMappingsDirective, BubbleDirective, BubblesDirective, NavigationLineDirective, NavigationLinesDirective, LayerDirective, LayersDirective, AnnotationDirective, AnnotationsDirective, MapsComponent, MapsModule, MapsAllModule, BubbleService, LegendService, MarkerService, HighlightService, SelectionService, MapsTooltipService, ZoomService, DataLabelService, NavigationLineService, AnnotationsService, inputs as ɵa, outputs$6 as ɵb };
export { Maps, load, loaded, click, rightClick, doubleClick, resize, tooltipRender, shapeSelected, shapeHighlight, mousemove, mouseup, mousedown, layerRendering, shapeRendering, markerRendering, markerClusterRendering, markerClick, markerClusterClick, markerMouseMove, markerClusterMouseMove, dataLabelRendering, bubbleRendering, bubbleClick, bubbleMouseMove, animationComplete, legendRendering, annotationRendering, itemSelection, itemHighlight, beforePrint, zoomIn, zoomOut, pan, Annotation, Arrow, Font, Border, CenterPosition, TooltipSettings, Margin, ConnectorLineSettings, MarkerClusterSettings, SameMarkerClusterData, ColorMappingSettings, SelectionSettings, HighlightSettings, NavigationLineSettings, BubbleSettings, CommonTitleSettings, SubTitleSettings, TitleSettings, ZoomSettings, ToggleLegendSettings, LegendSettings, DataLabelSettings, ShapeSettings, MarkerBase, MarkerSettings, LayerSettings, Tile, MapsAreaSettings, Size, stringToNumber, calculateSize, createSvg, getMousePosition, degreesToRadians, radiansToDegrees, convertGeoToPoint, convertTileLatLongToPoint, xToCoordinate, yToCoordinate, aitoff, roundTo, sinci, acos, calculateBound, Point, MinMax, GeoLocation, measureText, TextOption, PathOption, ColorValue, RectOption, CircleOption, PolygonOption, PolylineOption, LineOption, Line, MapLocation, Rect, PatternOptions, renderTextElement, convertElement, convertElementFromLabel, drawSymbols, clusterTemplate, mergeSeparateCluster, clusterSeparate, marker, markerTemplate, appendShape, drawCircle, drawRectangle, drawPath, drawPolygon, drawPolyline, drawLine, calculateShapes, drawDiamond, drawTriangle, drawCross, drawHorizontalLine, drawVerticalLine, drawStar, drawBalloon, drawPattern, getFieldData, checkShapeDataFields, checkPropertyPath, filter, getRatioOfBubble, findMidPointOfPolygon, isCustomPath, textTrim, findPosition, removeElement, getTranslate, getZoomTranslate, getElementByID, Internalize, getTemplateFunction, getElement, getShapeData, triggerShapeEvent, getElementsByClassName, querySelector, getTargetElement, createStyle, customizeStyle, removeClass, elementAnimate, timeout, showTooltip, wordWrap, createTooltip, drawSymbol, renderLegendShape, getElementOffset, changeBorderWidth, changeNavaigationLineWidth, targetTouches, calculateScale, getDistance, getTouches, getTouchCenter, sum, zoomAnimate, animate, MapAjax, smoothTranslate, LayerPanel, Bubble, BingMap, Marker, ColorMapping, DataLabel, NavigationLine, Legend, Highlight, Selection, MapsTooltip, Zoom, Annotations } from '@syncfusion/ej2-maps';
//# sourceMappingURL=ej2-angular-maps.js.map
