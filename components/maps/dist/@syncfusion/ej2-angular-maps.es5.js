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
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Annotations, Bubble, DataLabel, Highlight, Legend, Maps, MapsTooltip, Marker, NavigationLine, Selection, Zoom } from '@syncfusion/ej2-maps';
import { CommonModule } from '@angular/common';
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
var input = ['animationDelay', 'animationDuration', 'border', 'dashArray', 'dataSource', 'fill', 'height', 'highlightSettings', 'imageUrl', 'legendText', 'offset', 'opacity', 'selectionSettings', 'shape', 'template', 'tooltipSettings', 'visible', 'width'];
var outputs = [];
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
var MarkerDirective = /** @class */ (function (_super) {
    __extends(MarkerDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function MarkerDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return MarkerDirective;
}(ComplexBase));
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
MarkerDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var MarkersDirective = /** @class */ (function (_super) {
    __extends(MarkersDirective, _super);
    function MarkersDirective() {
        return _super.call(this, 'markersettings') || this;
    }
    return MarkersDirective;
}(ArrayBase));
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
MarkersDirective.ctorParameters = function () { return []; };
var input$1 = ['color', 'from', 'label', 'maxOpacity', 'minOpacity', 'showLegend', 'to', 'value'];
var outputs$1 = [];
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
var ColorMappingDirective = /** @class */ (function (_super) {
    __extends(ColorMappingDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ColorMappingDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return ColorMappingDirective;
}(ComplexBase));
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
ColorMappingDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * ColorMapping Array Directive
 */
var ColorMappingsDirective = /** @class */ (function (_super) {
    __extends(ColorMappingsDirective, _super);
    function ColorMappingsDirective() {
        return _super.call(this, 'colormapping') || this;
    }
    return ColorMappingsDirective;
}(ArrayBase));
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
ColorMappingsDirective.ctorParameters = function () { return []; };
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
var input$2 = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
var outputs$2 = [];
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
var BubbleDirective = /** @class */ (function (_super) {
    __extends(BubbleDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function BubbleDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['colorMapping'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return BubbleDirective;
}(ComplexBase));
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
BubbleDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var BubblesDirective = /** @class */ (function (_super) {
    __extends(BubblesDirective, _super);
    function BubblesDirective() {
        return _super.call(this, 'bubblesettings') || this;
    }
    return BubblesDirective;
}(ArrayBase));
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
BubblesDirective.ctorParameters = function () { return []; };
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
var input$3 = ['angle', 'arrowSettings', 'color', 'dashArray', 'highlightSettings', 'latitude', 'longitude', 'selectionSettings', 'visible', 'width'];
var outputs$3 = [];
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
var NavigationLineDirective = /** @class */ (function (_super) {
    __extends(NavigationLineDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function NavigationLineDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return NavigationLineDirective;
}(ComplexBase));
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
NavigationLineDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var NavigationLinesDirective = /** @class */ (function (_super) {
    __extends(NavigationLinesDirective, _super);
    function NavigationLinesDirective() {
        return _super.call(this, 'navigationlinesettings') || this;
    }
    return NavigationLinesDirective;
}(ArrayBase));
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
NavigationLinesDirective.ctorParameters = function () { return []; };
var input$4 = ['animationDuration', 'bingMapType', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'key', 'layerType', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
var outputs$4 = [];
/**
 * Layer Directive
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
        _this.tags = ['markerSettings', 'bubbleSettings', 'navigationLineSettings'];
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return LayerDirective;
}(ComplexBase));
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
                selector: 'ej-maps>e-layers',
                queries: {
                    children: new ContentChildren(LayerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
LayersDirective.ctorParameters = function () { return []; };
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var input$5 = ['content', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
var outputs$5 = [];
/**
 * Annotation Directive
 * ```html
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * ```
 */
var AnnotationDirective = /** @class */ (function (_super) {
    __extends(AnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        return _this;
    }
    return AnnotationDirective;
}(ComplexBase));
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
AnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
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
var AnnotationsDirective = /** @class */ (function (_super) {
    __extends(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return AnnotationsDirective;
}(ArrayBase));
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
AnnotationsDirective.ctorParameters = function () { return []; };
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs = ['annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings'];
var outputs$6 = ['animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * Represents Maps Component
 * ```html
 * <ej-maps></ej-maps>
 * ```
 */
var MapsComponent = /** @class */ (function (_super) {
    __extends(MapsComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function MapsComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['layers', 'annotations'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('MapsBubble');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('MapsLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('MapsMarker');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('MapsHighlight');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('MapsSelection');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('MapsMapsTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('MapsZoom');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        try {
            var mod = _this.injector.get('MapsDataLabel');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_h) { }
        try {
            var mod = _this.injector.get('MapsNavigationLine');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_j) { }
        try {
            var mod = _this.injector.get('MapsAnnotations');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_k) { }
        _this.registerEvents(outputs$6);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    MapsComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    MapsComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    MapsComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    MapsComponent.prototype.ngAfterContentChecked = function () {
    };
    return MapsComponent;
}(Maps));
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
MapsComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
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
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
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
MapsModule.ctorParameters = function () { return []; };
var BubbleService = { provide: 'MapsBubble', useValue: Bubble };
var LegendService = { provide: 'MapsLegend', useValue: Legend };
var MarkerService = { provide: 'MapsMarker', useValue: Marker };
var HighlightService = { provide: 'MapsHighlight', useValue: Highlight };
var SelectionService = { provide: 'MapsSelection', useValue: Selection };
var MapsTooltipService = { provide: 'MapsMapsTooltip', useValue: MapsTooltip };
var ZoomService = { provide: 'MapsZoom', useValue: Zoom };
var DataLabelService = { provide: 'MapsDataLabel', useValue: DataLabel };
var NavigationLineService = { provide: 'MapsNavigationLine', useValue: NavigationLine };
var AnnotationsService = { provide: 'MapsAnnotations', useValue: Annotations };
/**
 * NgModule definition for the Maps component with providers.
 */
var MapsAllModule = /** @class */ (function () {
    function MapsAllModule() {
    }
    return MapsAllModule;
}());
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
MapsAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { MarkerDirective, MarkersDirective, ColorMappingDirective, ColorMappingsDirective, BubbleDirective, BubblesDirective, NavigationLineDirective, NavigationLinesDirective, LayerDirective, LayersDirective, AnnotationDirective, AnnotationsDirective, MapsComponent, MapsModule, MapsAllModule, BubbleService, LegendService, MarkerService, HighlightService, SelectionService, MapsTooltipService, ZoomService, DataLabelService, NavigationLineService, AnnotationsService, inputs as ɵa, outputs$6 as ɵb };
export { Maps, load, loaded, click, rightClick, doubleClick, resize, tooltipRender, shapeSelected, shapeHighlight, mousemove, mouseup, mousedown, layerRendering, shapeRendering, markerRendering, markerClusterRendering, markerClick, markerClusterClick, markerMouseMove, markerClusterMouseMove, dataLabelRendering, bubbleRendering, bubbleClick, bubbleMouseMove, animationComplete, legendRendering, annotationRendering, itemSelection, itemHighlight, beforePrint, zoomIn, zoomOut, pan, Annotation, Arrow, Font, Border, CenterPosition, TooltipSettings, Margin, ConnectorLineSettings, MarkerClusterSettings, SameMarkerClusterData, ColorMappingSettings, SelectionSettings, HighlightSettings, NavigationLineSettings, BubbleSettings, CommonTitleSettings, SubTitleSettings, TitleSettings, ZoomSettings, ToggleLegendSettings, LegendSettings, DataLabelSettings, ShapeSettings, MarkerBase, MarkerSettings, LayerSettings, Tile, MapsAreaSettings, Size, stringToNumber, calculateSize, createSvg, getMousePosition, degreesToRadians, radiansToDegrees, convertGeoToPoint, convertTileLatLongToPoint, xToCoordinate, yToCoordinate, aitoff, roundTo, sinci, acos, calculateBound, Point, MinMax, GeoLocation, measureText, TextOption, PathOption, ColorValue, RectOption, CircleOption, PolygonOption, PolylineOption, LineOption, Line, MapLocation, Rect, PatternOptions, renderTextElement, convertElement, convertElementFromLabel, drawSymbols, clusterTemplate, mergeSeparateCluster, clusterSeparate, marker, markerTemplate, appendShape, drawCircle, drawRectangle, drawPath, drawPolygon, drawPolyline, drawLine, calculateShapes, drawDiamond, drawTriangle, drawCross, drawHorizontalLine, drawVerticalLine, drawStar, drawBalloon, drawPattern, getFieldData, checkShapeDataFields, checkPropertyPath, filter, getRatioOfBubble, findMidPointOfPolygon, isCustomPath, textTrim, findPosition, removeElement, getTranslate, getZoomTranslate, getElementByID, Internalize, getTemplateFunction, getElement, getShapeData, triggerShapeEvent, getElementsByClassName, querySelector, getTargetElement, createStyle, customizeStyle, removeClass, elementAnimate, timeout, showTooltip, wordWrap, createTooltip, drawSymbol, renderLegendShape, getElementOffset, changeBorderWidth, changeNavaigationLineWidth, targetTouches, calculateScale, getDistance, getTouches, getTouchCenter, sum, zoomAnimate, animate, MapAjax, smoothTranslate, LayerPanel, Bubble, BingMap, Marker, ColorMapping, DataLabel, NavigationLine, Legend, Highlight, Selection, MapsTooltip, Zoom, Annotations } from '@syncfusion/ej2-maps';
//# sourceMappingURL=ej2-angular-maps.es5.js.map
