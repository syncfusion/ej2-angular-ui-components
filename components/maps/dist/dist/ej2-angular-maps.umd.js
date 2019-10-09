(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-maps'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-maps', '@angular/common'], factory) :
	(factory((global['ej2-angular-maps'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.maps,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Maps,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return MarkerDirective;
}(ej2AngularBase.ComplexBase));
MarkerDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
MarkerDirective.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
    'tooltipSettings_template': [{ type: core.ContentChild, args: ['tooltipSettingsTemplate',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], MarkerDirective.prototype, "template", void 0);
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
MarkersDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-layer>e-markerSettings',
                queries: {
                    children: new core.ContentChildren(MarkerDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return ColorMappingDirective;
}(ej2AngularBase.ComplexBase));
ColorMappingDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ColorMappingsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-bubbleSettings>e-colorMappings',
                queries: {
                    children: new core.ContentChildren(ColorMappingDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return BubbleDirective;
}(ej2AngularBase.ComplexBase));
BubbleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-layer>e-bubbleSettings>e-bubbleSetting',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
                    childColorMapping: new core.ContentChild(ColorMappingsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
BubbleDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
BubbleDirective.propDecorators = {
    'tooltipSettings_template': [{ type: core.ContentChild, args: ['tooltipSettingsTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
BubblesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-layer>e-bubbleSettings',
                queries: {
                    children: new core.ContentChildren(BubbleDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return NavigationLineDirective;
}(ej2AngularBase.ComplexBase));
NavigationLineDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
NavigationLineDirective.propDecorators = {
    'tooltipSettings_template': [{ type: core.ContentChild, args: ['tooltipSettingsTemplate',] },],
};
__decorate$2([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
NavigationLinesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-layer>e-navigationLineSettings',
                queries: {
                    children: new core.ContentChildren(NavigationLineDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return LayerDirective;
}(ej2AngularBase.ComplexBase));
LayerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-layers>e-layer',
                inputs: input$4,
                outputs: outputs$4,
                queries: {
                    childMarkerSettings: new core.ContentChild(MarkersDirective),
                    childBubbleSettings: new core.ContentChild(BubblesDirective),
                    childNavigationLineSettings: new core.ContentChild(NavigationLinesDirective)
                }
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
                selector: 'ej-maps>e-layers',
                queries: {
                    children: new core.ContentChildren(LayerDirective)
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$5);
        return _this;
    }
    return AnnotationDirective;
}(ej2AngularBase.ComplexBase));
AnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
AnnotationDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate$3([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
AnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-maps>e-maps-annotations',
                queries: {
                    children: new core.ContentChildren(AnnotationDirective)
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
var inputs = ['annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'useGroupingSeparator', 'width', 'zoomSettings'];
var outputs$6 = ['animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'zoom', 'dataSourceChange'];
var twoWays = ['dataSource'];
/**
 * Represents Maps Component
 * ```html
 * <ej-maps></ej-maps>
 * ```
 */
exports.MapsComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
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
}(ej2Maps.Maps));
exports.MapsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-maps',
                inputs: inputs,
                outputs: outputs$6,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childLayers: new core.ContentChild(LayersDirective),
                    childAnnotations: new core.ContentChild(AnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.MapsComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.MapsComponent = __decorate$4([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$4("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.MapsComponent);
/**
 * NgModule definition for the Maps component.
 */
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.MapsComponent,
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
                    exports.MapsComponent,
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
var BubbleService = { provide: 'MapsBubble', useValue: ej2Maps.Bubble };
var LegendService = { provide: 'MapsLegend', useValue: ej2Maps.Legend };
var MarkerService = { provide: 'MapsMarker', useValue: ej2Maps.Marker };
var HighlightService = { provide: 'MapsHighlight', useValue: ej2Maps.Highlight };
var SelectionService = { provide: 'MapsSelection', useValue: ej2Maps.Selection };
var MapsTooltipService = { provide: 'MapsMapsTooltip', useValue: ej2Maps.MapsTooltip };
var ZoomService = { provide: 'MapsZoom', useValue: ej2Maps.Zoom };
var DataLabelService = { provide: 'MapsDataLabel', useValue: ej2Maps.DataLabel };
var NavigationLineService = { provide: 'MapsNavigationLine', useValue: ej2Maps.NavigationLine };
var AnnotationsService = { provide: 'MapsAnnotations', useValue: ej2Maps.Annotations };
/**
 * NgModule definition for the Maps component with providers.
 */
var MapsAllModule = /** @class */ (function () {
    function MapsAllModule() {
    }
    return MapsAllModule;
}());
MapsAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, MapsModule],
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

exports.MarkerDirective = MarkerDirective;
exports.MarkersDirective = MarkersDirective;
exports.ColorMappingDirective = ColorMappingDirective;
exports.ColorMappingsDirective = ColorMappingsDirective;
exports.BubbleDirective = BubbleDirective;
exports.BubblesDirective = BubblesDirective;
exports.NavigationLineDirective = NavigationLineDirective;
exports.NavigationLinesDirective = NavigationLinesDirective;
exports.LayerDirective = LayerDirective;
exports.LayersDirective = LayersDirective;
exports.AnnotationDirective = AnnotationDirective;
exports.AnnotationsDirective = AnnotationsDirective;
exports.MapsModule = MapsModule;
exports.MapsAllModule = MapsAllModule;
exports.BubbleService = BubbleService;
exports.LegendService = LegendService;
exports.MarkerService = MarkerService;
exports.HighlightService = HighlightService;
exports.SelectionService = SelectionService;
exports.MapsTooltipService = MapsTooltipService;
exports.ZoomService = ZoomService;
exports.DataLabelService = DataLabelService;
exports.NavigationLineService = NavigationLineService;
exports.AnnotationsService = AnnotationsService;
exports.ɵa = inputs;
exports.ɵb = outputs$6;
exports.Maps = ej2Maps.Maps;
exports.load = ej2Maps.load;
exports.loaded = ej2Maps.loaded;
exports.click = ej2Maps.click;
exports.rightClick = ej2Maps.rightClick;
exports.doubleClick = ej2Maps.doubleClick;
exports.resize = ej2Maps.resize;
exports.tooltipRender = ej2Maps.tooltipRender;
exports.shapeSelected = ej2Maps.shapeSelected;
exports.shapeHighlight = ej2Maps.shapeHighlight;
exports.mousemove = ej2Maps.mousemove;
exports.mouseup = ej2Maps.mouseup;
exports.mousedown = ej2Maps.mousedown;
exports.layerRendering = ej2Maps.layerRendering;
exports.shapeRendering = ej2Maps.shapeRendering;
exports.markerRendering = ej2Maps.markerRendering;
exports.markerClusterRendering = ej2Maps.markerClusterRendering;
exports.markerClick = ej2Maps.markerClick;
exports.markerClusterClick = ej2Maps.markerClusterClick;
exports.markerMouseMove = ej2Maps.markerMouseMove;
exports.markerClusterMouseMove = ej2Maps.markerClusterMouseMove;
exports.dataLabelRendering = ej2Maps.dataLabelRendering;
exports.bubbleRendering = ej2Maps.bubbleRendering;
exports.bubbleClick = ej2Maps.bubbleClick;
exports.bubbleMouseMove = ej2Maps.bubbleMouseMove;
exports.animationComplete = ej2Maps.animationComplete;
exports.legendRendering = ej2Maps.legendRendering;
exports.annotationRendering = ej2Maps.annotationRendering;
exports.itemSelection = ej2Maps.itemSelection;
exports.itemHighlight = ej2Maps.itemHighlight;
exports.beforePrint = ej2Maps.beforePrint;
exports.zoomIn = ej2Maps.zoomIn;
exports.zoomOut = ej2Maps.zoomOut;
exports.pan = ej2Maps.pan;
exports.Annotation = ej2Maps.Annotation;
exports.Arrow = ej2Maps.Arrow;
exports.Font = ej2Maps.Font;
exports.Border = ej2Maps.Border;
exports.CenterPosition = ej2Maps.CenterPosition;
exports.TooltipSettings = ej2Maps.TooltipSettings;
exports.Margin = ej2Maps.Margin;
exports.MarkerClusterSettings = ej2Maps.MarkerClusterSettings;
exports.ColorMappingSettings = ej2Maps.ColorMappingSettings;
exports.SelectionSettings = ej2Maps.SelectionSettings;
exports.HighlightSettings = ej2Maps.HighlightSettings;
exports.NavigationLineSettings = ej2Maps.NavigationLineSettings;
exports.BubbleSettings = ej2Maps.BubbleSettings;
exports.CommonTitleSettings = ej2Maps.CommonTitleSettings;
exports.SubTitleSettings = ej2Maps.SubTitleSettings;
exports.TitleSettings = ej2Maps.TitleSettings;
exports.ZoomSettings = ej2Maps.ZoomSettings;
exports.ToggleLegendSettings = ej2Maps.ToggleLegendSettings;
exports.LegendSettings = ej2Maps.LegendSettings;
exports.DataLabelSettings = ej2Maps.DataLabelSettings;
exports.ShapeSettings = ej2Maps.ShapeSettings;
exports.MarkerBase = ej2Maps.MarkerBase;
exports.MarkerSettings = ej2Maps.MarkerSettings;
exports.LayerSettings = ej2Maps.LayerSettings;
exports.Tile = ej2Maps.Tile;
exports.MapsAreaSettings = ej2Maps.MapsAreaSettings;
exports.Size = ej2Maps.Size;
exports.stringToNumber = ej2Maps.stringToNumber;
exports.calculateSize = ej2Maps.calculateSize;
exports.createSvg = ej2Maps.createSvg;
exports.getMousePosition = ej2Maps.getMousePosition;
exports.degreesToRadians = ej2Maps.degreesToRadians;
exports.radiansToDegrees = ej2Maps.radiansToDegrees;
exports.convertGeoToPoint = ej2Maps.convertGeoToPoint;
exports.convertTileLatLongToPoint = ej2Maps.convertTileLatLongToPoint;
exports.xToCoordinate = ej2Maps.xToCoordinate;
exports.yToCoordinate = ej2Maps.yToCoordinate;
exports.aitoff = ej2Maps.aitoff;
exports.roundTo = ej2Maps.roundTo;
exports.sinci = ej2Maps.sinci;
exports.acos = ej2Maps.acos;
exports.calculateBound = ej2Maps.calculateBound;
exports.Point = ej2Maps.Point;
exports.MinMax = ej2Maps.MinMax;
exports.GeoLocation = ej2Maps.GeoLocation;
exports.measureText = ej2Maps.measureText;
exports.TextOption = ej2Maps.TextOption;
exports.PathOption = ej2Maps.PathOption;
exports.ColorValue = ej2Maps.ColorValue;
exports.RectOption = ej2Maps.RectOption;
exports.CircleOption = ej2Maps.CircleOption;
exports.PolygonOption = ej2Maps.PolygonOption;
exports.PolylineOption = ej2Maps.PolylineOption;
exports.LineOption = ej2Maps.LineOption;
exports.Line = ej2Maps.Line;
exports.MapLocation = ej2Maps.MapLocation;
exports.Rect = ej2Maps.Rect;
exports.PatternOptions = ej2Maps.PatternOptions;
exports.renderTextElement = ej2Maps.renderTextElement;
exports.convertElement = ej2Maps.convertElement;
exports.convertElementFromLabel = ej2Maps.convertElementFromLabel;
exports.drawSymbols = ej2Maps.drawSymbols;
exports.clusterTemplate = ej2Maps.clusterTemplate;
exports.marker = ej2Maps.marker;
exports.markerTemplate = ej2Maps.markerTemplate;
exports.appendShape = ej2Maps.appendShape;
exports.drawCircle = ej2Maps.drawCircle;
exports.drawRectangle = ej2Maps.drawRectangle;
exports.drawPath = ej2Maps.drawPath;
exports.drawPolygon = ej2Maps.drawPolygon;
exports.drawPolyline = ej2Maps.drawPolyline;
exports.drawLine = ej2Maps.drawLine;
exports.calculateShapes = ej2Maps.calculateShapes;
exports.drawDiamond = ej2Maps.drawDiamond;
exports.drawTriangle = ej2Maps.drawTriangle;
exports.drawCross = ej2Maps.drawCross;
exports.drawHorizontalLine = ej2Maps.drawHorizontalLine;
exports.drawVerticalLine = ej2Maps.drawVerticalLine;
exports.drawStar = ej2Maps.drawStar;
exports.drawBalloon = ej2Maps.drawBalloon;
exports.drawPattern = ej2Maps.drawPattern;
exports.getFieldData = ej2Maps.getFieldData;
exports.checkShapeDataFields = ej2Maps.checkShapeDataFields;
exports.checkPropertyPath = ej2Maps.checkPropertyPath;
exports.filter = ej2Maps.filter;
exports.getRatioOfBubble = ej2Maps.getRatioOfBubble;
exports.findMidPointOfPolygon = ej2Maps.findMidPointOfPolygon;
exports.isCustomPath = ej2Maps.isCustomPath;
exports.textTrim = ej2Maps.textTrim;
exports.findPosition = ej2Maps.findPosition;
exports.removeElement = ej2Maps.removeElement;
exports.getTranslate = ej2Maps.getTranslate;
exports.getZoomTranslate = ej2Maps.getZoomTranslate;
exports.getElementByID = ej2Maps.getElementByID;
exports.Internalize = ej2Maps.Internalize;
exports.getTemplateFunction = ej2Maps.getTemplateFunction;
exports.getElement = ej2Maps.getElement;
exports.getShapeData = ej2Maps.getShapeData;
exports.triggerShapeEvent = ej2Maps.triggerShapeEvent;
exports.getElementsByClassName = ej2Maps.getElementsByClassName;
exports.querySelector = ej2Maps.querySelector;
exports.getTargetElement = ej2Maps.getTargetElement;
exports.createStyle = ej2Maps.createStyle;
exports.customizeStyle = ej2Maps.customizeStyle;
exports.removeClass = ej2Maps.removeClass;
exports.elementAnimate = ej2Maps.elementAnimate;
exports.timeout = ej2Maps.timeout;
exports.showTooltip = ej2Maps.showTooltip;
exports.wordWrap = ej2Maps.wordWrap;
exports.createTooltip = ej2Maps.createTooltip;
exports.drawSymbol = ej2Maps.drawSymbol;
exports.renderLegendShape = ej2Maps.renderLegendShape;
exports.getElementOffset = ej2Maps.getElementOffset;
exports.changeBorderWidth = ej2Maps.changeBorderWidth;
exports.changeNavaigationLineWidth = ej2Maps.changeNavaigationLineWidth;
exports.targetTouches = ej2Maps.targetTouches;
exports.calculateScale = ej2Maps.calculateScale;
exports.getDistance = ej2Maps.getDistance;
exports.getTouches = ej2Maps.getTouches;
exports.getTouchCenter = ej2Maps.getTouchCenter;
exports.sum = ej2Maps.sum;
exports.zoomAnimate = ej2Maps.zoomAnimate;
exports.animate = ej2Maps.animate;
exports.MapAjax = ej2Maps.MapAjax;
exports.smoothTranslate = ej2Maps.smoothTranslate;
exports.LayerPanel = ej2Maps.LayerPanel;
exports.Bubble = ej2Maps.Bubble;
exports.BingMap = ej2Maps.BingMap;
exports.Marker = ej2Maps.Marker;
exports.ColorMapping = ej2Maps.ColorMapping;
exports.DataLabel = ej2Maps.DataLabel;
exports.NavigationLine = ej2Maps.NavigationLine;
exports.Legend = ej2Maps.Legend;
exports.Highlight = ej2Maps.Highlight;
exports.Selection = ej2Maps.Selection;
exports.MapsTooltip = ej2Maps.MapsTooltip;
exports.Zoom = ej2Maps.Zoom;
exports.Annotations = ej2Maps.Annotations;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-maps.umd.js.map
