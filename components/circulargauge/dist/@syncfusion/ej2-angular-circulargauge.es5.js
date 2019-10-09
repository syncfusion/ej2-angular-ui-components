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
import { Annotations, CircularGauge, GaugeTooltip, Legend } from '@syncfusion/ej2-circulargauge';
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return AnnotationDirective;
}(ComplexBase));
AnnotationDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
]; };
AnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
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
}(ArrayBase));
AnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-circulargauge>e-axes>e-axis>e-annotations',
                queries: {
                    children: new ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = function () { return []; };
var input$1 = ['color', 'end', 'endWidth', 'legendText', 'opacity', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return RangeDirective;
}(ComplexBase));
RangeDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
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
}(ArrayBase));
RangesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-circulargauge>e-axes>e-axis>e-ranges',
                queries: {
                    children: new ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = function () { return []; };
var input$2 = ['animation', 'border', 'cap', 'color', 'description', 'imageUrl', 'markerHeight', 'markerShape', 'markerWidth', 'needleTail', 'pointerWidth', 'radius', 'roundedCornerRadius', 'type', 'value'];
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return PointerDirective;
}(ComplexBase));
PointerDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
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
}(ArrayBase));
PointersDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-circulargauge>e-axes>e-axis>e-pointers',
                queries: {
                    children: new ContentChildren(PointerDirective)
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return AxisDirective;
}(ComplexBase));
AxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$3,
                outputs: outputs$3,
                queries: {
                    childAnnotations: new ContentChild(AnnotationsDirective),
                    childRanges: new ContentChild(RangesDirective),
                    childPointers: new ContentChild(PointersDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
AxisDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
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
}(ArrayBase));
AxesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-circulargauge>e-axes',
                queries: {
                    children: new ContentChildren(AxisDirective)
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
var inputs = ['axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
var outputs$4 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'legendRender', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
var twoWays = [''];
/**
 * Circular Gauge Component
 * ```html
 * <ej-circulargauge></ej-circulargauge>
 * ```
 */
var CircularGaugeComponent = /** @class */ (function (_super) {
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
            var mod = _this.injector.get('CircularGaugeGaugeTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('CircularGaugeAnnotations');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            var mod = _this.injector.get('CircularGaugeLegend');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    CircularGaugeComponent.prototype.ngAfterContentChecked = function () {
    };
    return CircularGaugeComponent;
}(CircularGauge));
CircularGaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-circulargauge',
                inputs: inputs,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childAxes: new ContentChild(AxesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
CircularGaugeComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
CircularGaugeComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], CircularGaugeComponent.prototype, "tooltip_template", void 0);
CircularGaugeComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], CircularGaugeComponent);
/**
 * NgModule definition for the CircularGauge component.
 */
var CircularGaugeModule = /** @class */ (function () {
    function CircularGaugeModule() {
    }
    return CircularGaugeModule;
}());
CircularGaugeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    CircularGaugeComponent,
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
                    CircularGaugeComponent,
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
var GaugeTooltipService = { provide: 'CircularGaugeGaugeTooltip', useValue: GaugeTooltip };
var AnnotationsService = { provide: 'CircularGaugeAnnotations', useValue: Annotations };
var LegendService = { provide: 'CircularGaugeLegend', useValue: Legend };
/**
 * NgModule definition for the CircularGauge component with providers.
 */
var CircularGaugeAllModule = /** @class */ (function () {
    function CircularGaugeAllModule() {
    }
    return CircularGaugeAllModule;
}());
CircularGaugeAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, CircularGaugeModule],
                exports: [
                    CircularGaugeModule
                ],
                providers: [
                    GaugeTooltipService,
                    AnnotationsService,
                    LegendService
                ]
            },] },
];
/**
 * @nocollapse
 */
CircularGaugeAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { AnnotationDirective, AnnotationsDirective, RangeDirective, RangesDirective, PointerDirective, PointersDirective, AxisDirective, AxesDirective, CircularGaugeComponent, CircularGaugeModule, CircularGaugeAllModule, GaugeTooltipService, AnnotationsService, LegendService, inputs as ɵa, outputs$4 as ɵb };
export { CircularGauge, Annotations, Line, Label, Range, Tick, Cap, NeedleTail, Animation, Annotation, Pointer, Axis, Border, Font, RangeTooltip, AnnotationTooltip, Margin, TooltipSettings, GaugeTooltip, measureText, toPixel, getFontStyle, setStyles, measureElementRect, stringToNumber, textElement, appendPath, calculateSum, linear, getAngleFromValue, getDegree, getValueFromAngle, isCompleteAngle, getAngleFromLocation, getLocationFromAngle, getPathArc, getRangePath, getRoundedPathArc, getRoundedPath, getCompleteArc, getCirclePath, getCompletePath, getElement, getTemplateFunction, removeElement, getPointer, getElementSize, getMousePosition, getLabelFormat, calculateShapes, getRangeColor, CustomizeOption, PathOption, RectOption, Size, GaugeLocation, Rect, textTrim, showTooltip, TextOption, VisibleLabels, Location, LegendSettings, Legend, Index, LegendOptions } from '@syncfusion/ej2-circulargauge';
//# sourceMappingURL=ej2-angular-circulargauge.es5.js.map
