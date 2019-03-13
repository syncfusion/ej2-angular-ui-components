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
import { Annotations, GaugeTooltip, LinearGauge } from '@syncfusion/ej2-lineargauge';
import { CommonModule } from '@angular/common';
var input = ['border', 'color', 'end', 'endWidth', 'offset', 'position', 'start', 'startWidth'];
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return RangeDirective;
}(ComplexBase));
RangeDirective.decorators = [
    { type: Directive, args: [{
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
                selector: 'ej-lineargauge>e-axes>e-axis>e-ranges',
                queries: {
                    children: new ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = function () { return []; };
var input$1 = ['animationDuration', 'border', 'color', 'description', 'enableDrag', 'height', 'imageUrl', 'markerType', 'offset', 'opacity', 'placement', 'roundedCornerRadius', 'type', 'value', 'width'];
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$1);
        return _this;
    }
    return PointerDirective;
}(ComplexBase));
PointerDirective.decorators = [
    { type: Directive, args: [{
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
                selector: 'ej-linear-gauge>e-axes>e-axis>e-pointers',
                queries: {
                    children: new ContentChildren(PointerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PointersDirective.ctorParameters = function () { return []; };
var input$2 = ['isInversed', 'labelStyle', 'line', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'opposedPosition', 'pointers', 'ranges'];
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$2);
        return _this;
    }
    return AxisDirective;
}(ComplexBase));
AxisDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-axes>e-axis',
                inputs: input$2,
                outputs: outputs$2,
                queries: {
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
                selector: 'ej-lineargauge>e-axes',
                queries: {
                    children: new ContentChildren(AxisDirective)
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$3);
        return _this;
    }
    return AnnotationDirective;
}(ComplexBase));
AnnotationDirective.decorators = [
    { type: Directive, args: [{
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
                selector: 'ej-linear-gauge>e-annotations',
                queries: {
                    children: new ContentChildren(AnnotationDirective)
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
var inputs = ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
var outputs$4 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
var twoWays = [''];
/**
 * Linear Gauge Component
 * ```html
 * <ej-lineargauge></ej-lineargauge>
 * ```
 */
var LinearGaugeComponent = /** @class */ (function (_super) {
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
            var mod = _this.injector.get('LinearGaugeGaugeTooltip');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            var mod = _this.injector.get('LinearGaugeAnnotations');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        _this.registerEvents(outputs$4);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    LinearGaugeComponent.prototype.ngAfterContentChecked = function () {
    };
    return LinearGaugeComponent;
}(LinearGauge));
LinearGaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-lineargauge',
                inputs: inputs,
                outputs: outputs$4,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childAxes: new ContentChild(AxesDirective),
                    childAnnotations: new ContentChild(AnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
LinearGaugeComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
LinearGaugeComponent.propDecorators = {
    'tooltip_template': [{ type: ContentChild, args: ['tooltipTemplate',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], LinearGaugeComponent.prototype, "tooltip_template", void 0);
LinearGaugeComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], LinearGaugeComponent);
/**
 * NgModule definition for the LinearGauge component.
 */
var LinearGaugeModule = /** @class */ (function () {
    function LinearGaugeModule() {
    }
    return LinearGaugeModule;
}());
LinearGaugeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    LinearGaugeComponent,
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
                    LinearGaugeComponent,
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
var GaugeTooltipService = { provide: 'LinearGaugeGaugeTooltip', useValue: GaugeTooltip };
var AnnotationsService = { provide: 'LinearGaugeAnnotations', useValue: Annotations };
/**
 * NgModule definition for the LinearGauge component with providers.
 */
var LinearGaugeAllModule = /** @class */ (function () {
    function LinearGaugeAllModule() {
    }
    return LinearGaugeAllModule;
}());
LinearGaugeAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, LinearGaugeModule],
                exports: [
                    LinearGaugeModule
                ],
                providers: [
                    GaugeTooltipService,
                    AnnotationsService
                ]
            },] },
];
/**
 * @nocollapse
 */
LinearGaugeAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { RangeDirective, RangesDirective, PointerDirective, PointersDirective, AxisDirective, AxesDirective, AnnotationDirective, AnnotationsDirective, LinearGaugeComponent, LinearGaugeModule, LinearGaugeAllModule, GaugeTooltipService, AnnotationsService, inputs as ɵa, outputs$4 as ɵb };
export { LinearGauge, Font, Margin, Border, Annotation, Container, TooltipSettings, Line, Label, Range, Tick, Pointer, Axis, stringToNumber, measureText, withInRange, convertPixelToValue, getPathToRect, getElement, removeElement, isPointerDrag, valueToCoefficient, getFontStyle, textFormatter, formatValue, getLabelFormat, getTemplateFunction, getElementOffset, VisibleRange, GaugeLocation, Size, Rect, CustomizeOption, PathOption, RectOption, TextOption, VisibleLabels, Align, textElement, calculateNiceInterval, getActualDesiredIntervalsCount, getPointer, getRangeColor, getRangePalette, calculateShapes, getBox, Annotations, GaugeTooltip } from '@syncfusion/ej2-lineargauge';
//# sourceMappingURL=ej2-angular-lineargauge.es5.js.map
