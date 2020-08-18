(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-lineargauge'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-lineargauge', '@angular/common'], factory) :
	(factory((global['ej2-angular-lineargauge'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.lineargauge,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Lineargauge,common) { 'use strict';

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
var input = ['border', 'color', 'end', 'endWidth', 'linearGradient', 'offset', 'position', 'radialGradient', 'start', 'startWidth'];
var outputs = [];
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
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return RangeDirective;
}(ej2AngularBase.ComplexBase));
RangeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-ranges>e-range',
                inputs: input,
                outputs: outputs,
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
                selector: 'ej-lineargauge>e-axes>e-axis>e-ranges',
                queries: {
                    children: new core.ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = function () { return []; };
var input$1 = ['animationDuration', 'border', 'color', 'description', 'enableDrag', 'height', 'imageUrl', 'linearGradient', 'markerType', 'offset', 'opacity', 'placement', 'position', 'radialGradient', 'roundedCornerRadius', 'type', 'value', 'width'];
var outputs$1 = [];
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
        _this.registerEvents(outputs$1);
        _this.directivePropList = input$1;
        return _this;
    }
    return PointerDirective;
}(ej2AngularBase.ComplexBase));
PointerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-pointers>e-pointer',
                inputs: input$1,
                outputs: outputs$1,
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
                selector: 'ej-linear-gauge>e-axes>e-axis>e-pointers',
                queries: {
                    children: new core.ContentChildren(PointerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PointersDirective.ctorParameters = function () { return []; };
var input$2 = ['isInversed', 'labelStyle', 'line', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'opposedPosition', 'pointers', 'ranges', 'showLastLabel'];
var outputs$2 = [];
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
        _this.tags = ['ranges', 'pointers'];
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        _this.directivePropList = input$2;
        return _this;
    }
    return AxisDirective;
}(ej2AngularBase.ComplexBase));
AxisDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
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
                selector: 'ej-lineargauge>e-axes',
                queries: {
                    children: new core.ContentChildren(AxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AxesDirective.ctorParameters = function () { return []; };
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
var input$3 = ['axisIndex', 'axisValue', 'content', 'font', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
var outputs$3 = [];
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
        _this.registerEvents(outputs$3);
        _this.directivePropList = input$3;
        return _this;
    }
    return AnnotationDirective;
}(ej2AngularBase.ComplexBase));
AnnotationDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-annotations>e-annotation',
                inputs: input$3,
                outputs: outputs$3,
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
                selector: 'ej-linear-gauge>e-annotations',
                queries: {
                    children: new core.ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = function () { return []; };
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
var inputs = ['allowImageExport', 'allowPdfExport', 'allowPrint', 'annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
var outputs$4 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
var twoWays = [''];
/**
 * Linear Gauge Component
 * ```html
 * <ej-lineargauge></ej-lineargauge>
 * ```
 */
exports.LinearGaugeComponent = /** @class */ (function (_super) {
    __extends(LinearGaugeComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function LinearGaugeComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['axes', 'annotations'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('LinearGaugePrint');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('LinearGaugePdfExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('LinearGaugeGaugeTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        try {
            var mod = _this.injector.get('LinearGaugeAnnotations');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_d) { }
        try {
            var mod = _this.injector.get('LinearGaugeImageExport');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_e) { }
        try {
            var mod = _this.injector.get('LinearGaugeGradient');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_f) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childAxes;
        if (this.childAnnotations) {
            this.tagObjects[1].instance = /** @type {?} */ (this.childAnnotations);
        }
        this.context.ngAfterContentChecked(this);
    };
    return LinearGaugeComponent;
}(ej2Lineargauge.LinearGauge));
exports.LinearGaugeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-lineargauge',
                inputs: inputs,
                outputs: outputs$4,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childAxes: new core.ContentChild(AxesDirective),
                    childAnnotations: new core.ContentChild(AnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.LinearGaugeComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.LinearGaugeComponent.propDecorators = {
    'tooltip_template': [{ type: core.ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.LinearGaugeComponent.prototype, "tooltip_template", void 0);
exports.LinearGaugeComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.LinearGaugeComponent);
/**
 * NgModule definition for the LinearGauge component.
 */
var LinearGaugeModule = /** @class */ (function () {
    function LinearGaugeModule() {
    }
    return LinearGaugeModule;
}());
LinearGaugeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.LinearGaugeComponent,
                    RangeDirective,
                    RangesDirective,
                    PointerDirective,
                    PointersDirective,
                    AxisDirective,
                    AxesDirective,
                    AnnotationDirective,
                    AnnotationsDirective
                ],
                exports: [
                    exports.LinearGaugeComponent,
                    RangeDirective,
                    RangesDirective,
                    PointerDirective,
                    PointersDirective,
                    AxisDirective,
                    AxesDirective,
                    AnnotationDirective,
                    AnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
LinearGaugeModule.ctorParameters = function () { return []; };
var PrintService = { provide: 'LinearGaugePrint', useValue: ej2Lineargauge.Print };
var PdfExportService = { provide: 'LinearGaugePdfExport', useValue: ej2Lineargauge.PdfExport };
var GaugeTooltipService = { provide: 'LinearGaugeGaugeTooltip', useValue: ej2Lineargauge.GaugeTooltip };
var AnnotationsService = { provide: 'LinearGaugeAnnotations', useValue: ej2Lineargauge.Annotations };
var ImageExportService = { provide: 'LinearGaugeImageExport', useValue: ej2Lineargauge.ImageExport };
var GradientService = { provide: 'LinearGaugeGradient', useValue: ej2Lineargauge.Gradient };
/**
 * NgModule definition for the LinearGauge component with providers.
 */
var LinearGaugeAllModule = /** @class */ (function () {
    function LinearGaugeAllModule() {
    }
    return LinearGaugeAllModule;
}());
LinearGaugeAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, LinearGaugeModule],
                exports: [
                    LinearGaugeModule
                ],
                providers: [
                    PrintService,
                    PdfExportService,
                    GaugeTooltipService,
                    AnnotationsService,
                    ImageExportService,
                    GradientService
                ]
            },] },
];
/**
 * @nocollapse
 */
LinearGaugeAllModule.ctorParameters = function () { return []; };

exports.RangeDirective = RangeDirective;
exports.RangesDirective = RangesDirective;
exports.PointerDirective = PointerDirective;
exports.PointersDirective = PointersDirective;
exports.AxisDirective = AxisDirective;
exports.AxesDirective = AxesDirective;
exports.AnnotationDirective = AnnotationDirective;
exports.AnnotationsDirective = AnnotationsDirective;
exports.LinearGaugeModule = LinearGaugeModule;
exports.LinearGaugeAllModule = LinearGaugeAllModule;
exports.PrintService = PrintService;
exports.PdfExportService = PdfExportService;
exports.GaugeTooltipService = GaugeTooltipService;
exports.AnnotationsService = AnnotationsService;
exports.ImageExportService = ImageExportService;
exports.GradientService = GradientService;
exports.ɵa = inputs;
exports.ɵb = outputs$4;
exports.LinearGauge = ej2Lineargauge.LinearGauge;
exports.Font = ej2Lineargauge.Font;
exports.Margin = ej2Lineargauge.Margin;
exports.Border = ej2Lineargauge.Border;
exports.Annotation = ej2Lineargauge.Annotation;
exports.Container = ej2Lineargauge.Container;
exports.RangeTooltip = ej2Lineargauge.RangeTooltip;
exports.TooltipSettings = ej2Lineargauge.TooltipSettings;
exports.Line = ej2Lineargauge.Line;
exports.Label = ej2Lineargauge.Label;
exports.Range = ej2Lineargauge.Range;
exports.Tick = ej2Lineargauge.Tick;
exports.Pointer = ej2Lineargauge.Pointer;
exports.Axis = ej2Lineargauge.Axis;
exports.stringToNumber = ej2Lineargauge.stringToNumber;
exports.measureText = ej2Lineargauge.measureText;
exports.withInRange = ej2Lineargauge.withInRange;
exports.convertPixelToValue = ej2Lineargauge.convertPixelToValue;
exports.getPathToRect = ej2Lineargauge.getPathToRect;
exports.getElement = ej2Lineargauge.getElement;
exports.removeElement = ej2Lineargauge.removeElement;
exports.isPointerDrag = ej2Lineargauge.isPointerDrag;
exports.valueToCoefficient = ej2Lineargauge.valueToCoefficient;
exports.getFontStyle = ej2Lineargauge.getFontStyle;
exports.textFormatter = ej2Lineargauge.textFormatter;
exports.formatValue = ej2Lineargauge.formatValue;
exports.getLabelFormat = ej2Lineargauge.getLabelFormat;
exports.getTemplateFunction = ej2Lineargauge.getTemplateFunction;
exports.getElementOffset = ej2Lineargauge.getElementOffset;
exports.triggerDownload = ej2Lineargauge.triggerDownload;
exports.VisibleRange = ej2Lineargauge.VisibleRange;
exports.GaugeLocation = ej2Lineargauge.GaugeLocation;
exports.Size = ej2Lineargauge.Size;
exports.Rect = ej2Lineargauge.Rect;
exports.CustomizeOption = ej2Lineargauge.CustomizeOption;
exports.PathOption = ej2Lineargauge.PathOption;
exports.RectOption = ej2Lineargauge.RectOption;
exports.TextOption = ej2Lineargauge.TextOption;
exports.VisibleLabels = ej2Lineargauge.VisibleLabels;
exports.Align = ej2Lineargauge.Align;
exports.textElement = ej2Lineargauge.textElement;
exports.calculateNiceInterval = ej2Lineargauge.calculateNiceInterval;
exports.getActualDesiredIntervalsCount = ej2Lineargauge.getActualDesiredIntervalsCount;
exports.getPointer = ej2Lineargauge.getPointer;
exports.getRangeColor = ej2Lineargauge.getRangeColor;
exports.getMousePosition = ej2Lineargauge.getMousePosition;
exports.getRangePalette = ej2Lineargauge.getRangePalette;
exports.calculateShapes = ej2Lineargauge.calculateShapes;
exports.getBox = ej2Lineargauge.getBox;
exports.Annotations = ej2Lineargauge.Annotations;
exports.GaugeTooltip = ej2Lineargauge.GaugeTooltip;
exports.Print = ej2Lineargauge.Print;
exports.ImageExport = ej2Lineargauge.ImageExport;
exports.PdfExport = ej2Lineargauge.PdfExport;
exports.ColorStop = ej2Lineargauge.ColorStop;
exports.GradientPosition = ej2Lineargauge.GradientPosition;
exports.LinearGradient = ej2Lineargauge.LinearGradient;
exports.RadialGradient = ej2Lineargauge.RadialGradient;
exports.Gradient = ej2Lineargauge.Gradient;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-lineargauge.umd.js.map
