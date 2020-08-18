(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-circulargauge'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-circulargauge', '@angular/common'], factory) :
	(factory((global['ej2-angular-circulargauge'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.circulargauge,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Circulargauge,common) { 'use strict';

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
var input = ['angle', 'autoAngle', 'content', 'description', 'radius', 'textStyle', 'zIndex'];
var outputs = [];
/**
 * Annotation directive
 * ```html
 * <e-annotations><e-annotation></e-annotation></e-annotations>
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
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return AnnotationDirective;
}(ej2AngularBase.ComplexBase));
AnnotationDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-annotations>e-annotation',
                inputs: input,
                outputs: outputs,
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
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
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
                selector: 'ej-circulargauge>e-axes>e-axis>e-annotations',
                queries: {
                    children: new core.ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = function () { return []; };
var input$1 = ['color', 'end', 'endWidth', 'legendText', 'linearGradient', 'offset', 'opacity', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
var outputs$1 = [];
/**
 * Ranges directive
 * ```html
 * <e-ranges><e-range></e-range></e-ranges>
 * ```
 */
var RangeDirective = /** @class */ (function (_super) {
    __extends(RangeDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function RangeDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return RangeDirective;
}(ej2AngularBase.ComplexBase));
RangeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-ranges>e-range',
                inputs: input$1,
                outputs: outputs$1,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
RangeDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * Range Array Directive
 */
var RangesDirective = /** @class */ (function (_super) {
    __extends(RangesDirective, _super);
    function RangesDirective() {
        return _super.call(this, 'ranges') || this;
    }
    return RangesDirective;
}(ej2AngularBase.ArrayBase));
RangesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-circulargauge>e-axes>e-axis>e-ranges',
                queries: {
                    children: new core.ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = function () { return []; };
var input$2 = ['animation', 'border', 'cap', 'color', 'description', 'imageUrl', 'linearGradient', 'markerHeight', 'markerShape', 'markerWidth', 'needleEndWidth', 'needleStartWidth', 'needleTail', 'offset', 'pointerWidth', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'text', 'textStyle', 'type', 'value'];
var outputs$2 = [];
/**
 * Pointers directive
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
var PointerDirective = /** @class */ (function (_super) {
    __extends(PointerDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function PointerDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return PointerDirective;
}(ej2AngularBase.ComplexBase));
PointerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-pointers>e-pointer',
                inputs: input$2,
                outputs: outputs$2,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
PointerDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * Pointer Array Directive
 */
var PointersDirective = /** @class */ (function (_super) {
    __extends(PointersDirective, _super);
    function PointersDirective() {
        return _super.call(this, 'pointers') || this;
    }
    return PointersDirective;
}(ej2AngularBase.ArrayBase));
PointersDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-circulargauge>e-axes>e-axis>e-pointers',
                queries: {
                    children: new core.ContentChildren(PointerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PointersDirective.ctorParameters = function () { return []; };
var input$3 = ['annotations', 'background', 'direction', 'endAngle', 'hideIntersectingLabel', 'labelStyle', 'lineStyle', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'pointers', 'radius', 'rangeGap', 'ranges', 'roundingPlaces', 'showLastLabel', 'startAndEndRangeGap', 'startAngle'];
var outputs$3 = [];
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
var AxisDirective = /** @class */ (function (_super) {
    __extends(AxisDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function AxisDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        _this.tags = ['annotations', 'ranges', 'pointers'];
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return AxisDirective;
}(ej2AngularBase.ComplexBase));
AxisDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childAnnotations: new core.ContentChild(AnnotationsDirective),
                    childRanges: new core.ContentChild(RangesDirective),
                    childPointers: new core.ContentChild(PointersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AxisDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * Axis Array Directive
 */
var AxesDirective = /** @class */ (function (_super) {
    __extends(AxesDirective, _super);
    function AxesDirective() {
        return _super.call(this, 'axes') || this;
    }
    return AxesDirective;
}(ej2AngularBase.ArrayBase));
AxesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-circulargauge>e-axes',
                queries: {
                    children: new core.ContentChildren(AxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AxesDirective.ctorParameters = function () { return []; };
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
var inputs = ['allowImageExport', 'allowPdfExport', 'allowPrint', 'axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRangeDrag', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
var outputs$4 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'legendRender', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
var twoWays = [''];
/**
 * Circular Gauge Component
 * ```html
 * <ej-circulargauge></ej-circulargauge>
 * ```
 */
exports.CircularGaugeComponent = /** @class */ (function (_super) {
    __extends(CircularGaugeComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function CircularGaugeComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['axes'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('CircularGaugePrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('CircularGaugePdfExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('CircularGaugeGaugeTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('CircularGaugeAnnotations');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('CircularGaugeLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('CircularGaugeImageExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        try {
            var mod = _this.injector.get('CircularGaugeGradient');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_g) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childAxes;
        this.context.ngAfterContentChecked(this);
    };
    return CircularGaugeComponent;
}(ej2Circulargauge.CircularGauge));
exports.CircularGaugeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-circulargauge',
                inputs: inputs,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childAxes: new core.ContentChild(AxesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.CircularGaugeComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.CircularGaugeComponent.propDecorators = {
    'tooltip_template': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.CircularGaugeComponent.prototype, "tooltip_template", void 0);
exports.CircularGaugeComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.CircularGaugeComponent);
/**
 * NgModule definition for the CircularGauge component.
 */
var CircularGaugeModule = /** @class */ (function () {
    function CircularGaugeModule() {
    }
    return CircularGaugeModule;
}());
CircularGaugeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.CircularGaugeComponent,
                    AnnotationDirective,
                    AnnotationsDirective,
                    RangeDirective,
                    RangesDirective,
                    PointerDirective,
                    PointersDirective,
                    AxisDirective,
                    AxesDirective
                ],
                exports: [
                    exports.CircularGaugeComponent,
                    AnnotationDirective,
                    AnnotationsDirective,
                    RangeDirective,
                    RangesDirective,
                    PointerDirective,
                    PointersDirective,
                    AxisDirective,
                    AxesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
CircularGaugeModule.ctorParameters = function () { return []; };
var PrintService = { provide: 'CircularGaugePrint', useValue: ej2Circulargauge.Print };
var PdfExportService = { provide: 'CircularGaugePdfExport', useValue: ej2Circulargauge.PdfExport };
var GaugeTooltipService = { provide: 'CircularGaugeGaugeTooltip', useValue: ej2Circulargauge.GaugeTooltip };
var AnnotationsService = { provide: 'CircularGaugeAnnotations', useValue: ej2Circulargauge.Annotations };
var LegendService = { provide: 'CircularGaugeLegend', useValue: ej2Circulargauge.Legend };
var ImageExportService = { provide: 'CircularGaugeImageExport', useValue: ej2Circulargauge.ImageExport };
var GradientService = { provide: 'CircularGaugeGradient', useValue: ej2Circulargauge.Gradient };
/**
 * NgModule definition for the CircularGauge component with providers.
 */
var CircularGaugeAllModule = /** @class */ (function () {
    function CircularGaugeAllModule() {
    }
    return CircularGaugeAllModule;
}());
CircularGaugeAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, CircularGaugeModule],
                exports: [
                    CircularGaugeModule
                ],
                providers: [
                    PrintService,
                    PdfExportService,
                    GaugeTooltipService,
                    AnnotationsService,
                    LegendService,
                    ImageExportService,
                    GradientService
                ]
            },] },
];
/**
 * @nocollapse
 */
CircularGaugeAllModule.ctorParameters = function () { return []; };

exports.AnnotationDirective = AnnotationDirective;
exports.AnnotationsDirective = AnnotationsDirective;
exports.RangeDirective = RangeDirective;
exports.RangesDirective = RangesDirective;
exports.PointerDirective = PointerDirective;
exports.PointersDirective = PointersDirective;
exports.AxisDirective = AxisDirective;
exports.AxesDirective = AxesDirective;
exports.CircularGaugeModule = CircularGaugeModule;
exports.CircularGaugeAllModule = CircularGaugeAllModule;
exports.PrintService = PrintService;
exports.PdfExportService = PdfExportService;
exports.GaugeTooltipService = GaugeTooltipService;
exports.AnnotationsService = AnnotationsService;
exports.LegendService = LegendService;
exports.ImageExportService = ImageExportService;
exports.GradientService = GradientService;
exports.ɵa = inputs;
exports.ɵb = outputs$4;
exports.CircularGauge = ej2Circulargauge.CircularGauge;
exports.Annotations = ej2Circulargauge.Annotations;
exports.Line = ej2Circulargauge.Line;
exports.Label = ej2Circulargauge.Label;
exports.Range = ej2Circulargauge.Range;
exports.Tick = ej2Circulargauge.Tick;
exports.Cap = ej2Circulargauge.Cap;
exports.NeedleTail = ej2Circulargauge.NeedleTail;
exports.Animation = ej2Circulargauge.Animation;
exports.Annotation = ej2Circulargauge.Annotation;
exports.Pointer = ej2Circulargauge.Pointer;
exports.Axis = ej2Circulargauge.Axis;
exports.Border = ej2Circulargauge.Border;
exports.Font = ej2Circulargauge.Font;
exports.RangeTooltip = ej2Circulargauge.RangeTooltip;
exports.AnnotationTooltip = ej2Circulargauge.AnnotationTooltip;
exports.Margin = ej2Circulargauge.Margin;
exports.TooltipSettings = ej2Circulargauge.TooltipSettings;
exports.GaugeTooltip = ej2Circulargauge.GaugeTooltip;
exports.measureText = ej2Circulargauge.measureText;
exports.toPixel = ej2Circulargauge.toPixel;
exports.getFontStyle = ej2Circulargauge.getFontStyle;
exports.setStyles = ej2Circulargauge.setStyles;
exports.measureElementRect = ej2Circulargauge.measureElementRect;
exports.stringToNumber = ej2Circulargauge.stringToNumber;
exports.textElement = ej2Circulargauge.textElement;
exports.appendPath = ej2Circulargauge.appendPath;
exports.calculateSum = ej2Circulargauge.calculateSum;
exports.linear = ej2Circulargauge.linear;
exports.getAngleFromValue = ej2Circulargauge.getAngleFromValue;
exports.getDegree = ej2Circulargauge.getDegree;
exports.getValueFromAngle = ej2Circulargauge.getValueFromAngle;
exports.isCompleteAngle = ej2Circulargauge.isCompleteAngle;
exports.getAngleFromLocation = ej2Circulargauge.getAngleFromLocation;
exports.getLocationFromAngle = ej2Circulargauge.getLocationFromAngle;
exports.getPathArc = ej2Circulargauge.getPathArc;
exports.getRangePath = ej2Circulargauge.getRangePath;
exports.getRoundedPathArc = ej2Circulargauge.getRoundedPathArc;
exports.getRoundedPath = ej2Circulargauge.getRoundedPath;
exports.getCompleteArc = ej2Circulargauge.getCompleteArc;
exports.getCirclePath = ej2Circulargauge.getCirclePath;
exports.getCompletePath = ej2Circulargauge.getCompletePath;
exports.getElement = ej2Circulargauge.getElement;
exports.getTemplateFunction = ej2Circulargauge.getTemplateFunction;
exports.removeElement = ej2Circulargauge.removeElement;
exports.getPointer = ej2Circulargauge.getPointer;
exports.getRange = ej2Circulargauge.getRange;
exports.getElementSize = ej2Circulargauge.getElementSize;
exports.getMousePosition = ej2Circulargauge.getMousePosition;
exports.getLabelFormat = ej2Circulargauge.getLabelFormat;
exports.calculateShapes = ej2Circulargauge.calculateShapes;
exports.getRangeColor = ej2Circulargauge.getRangeColor;
exports.CustomizeOption = ej2Circulargauge.CustomizeOption;
exports.PathOption = ej2Circulargauge.PathOption;
exports.RectOption = ej2Circulargauge.RectOption;
exports.Size = ej2Circulargauge.Size;
exports.GaugeLocation = ej2Circulargauge.GaugeLocation;
exports.Rect = ej2Circulargauge.Rect;
exports.textTrim = ej2Circulargauge.textTrim;
exports.showTooltip = ej2Circulargauge.showTooltip;
exports.TextOption = ej2Circulargauge.TextOption;
exports.VisibleLabels = ej2Circulargauge.VisibleLabels;
exports.triggerDownload = ej2Circulargauge.triggerDownload;
exports.Location = ej2Circulargauge.Location;
exports.LegendSettings = ej2Circulargauge.LegendSettings;
exports.Legend = ej2Circulargauge.Legend;
exports.Index = ej2Circulargauge.Index;
exports.LegendOptions = ej2Circulargauge.LegendOptions;
exports.ImageExport = ej2Circulargauge.ImageExport;
exports.PdfExport = ej2Circulargauge.PdfExport;
exports.Print = ej2Circulargauge.Print;
exports.ColorStop = ej2Circulargauge.ColorStop;
exports.GradientPosition = ej2Circulargauge.GradientPosition;
exports.LinearGradient = ej2Circulargauge.LinearGradient;
exports.RadialGradient = ej2Circulargauge.RadialGradient;
exports.Gradient = ej2Circulargauge.Gradient;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-circulargauge.umd.js.map
