import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Annotations, GaugeTooltip, LinearGauge } from '@syncfusion/ej2-lineargauge';
import { CommonModule } from '@angular/common';

let input = ['border', 'color', 'end', 'endWidth', 'offset', 'position', 'start', 'startWidth'];
let outputs = [];
/**
 * Ranges directive
 * ```html
 * <e-ranges><e-range></e-range></e-ranges>
 * ```
 */
class RangeDirective extends ComplexBase {
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
RangeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Range Array Directive
 */
class RangesDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
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
RangesDirective.ctorParameters = () => [];

let input$1 = ['animationDuration', 'border', 'color', 'description', 'enableDrag', 'height', 'imageUrl', 'markerType', 'offset', 'opacity', 'placement', 'roundedCornerRadius', 'type', 'value', 'width'];
let outputs$1 = [];
/**
 * Pointers directive
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
class PointerDirective extends ComplexBase {
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
PointerDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Pointer Array Directive
 */
class PointersDirective extends ArrayBase {
    constructor() {
        super('pointers');
    }
}
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
PointersDirective.ctorParameters = () => [];

let input$2 = ['isInversed', 'labelStyle', 'line', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'opposedPosition', 'pointers', 'ranges'];
let outputs$2 = [];
/**
 * Axes directive
 * ```html
 * <e-axes><e-axis></e-axis></e-axes>
 * ```
 */
class AxisDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['ranges', 'pointers'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
    }
}
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
AxisDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * Axis Array Directive
 */
class AxesDirective extends ArrayBase {
    constructor() {
        super('axes');
    }
}
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
AxesDirective.ctorParameters = () => [];

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let input$3 = ['axisIndex', 'axisValue', 'content', 'font', 'horizontalAlignment', 'verticalAlignment', 'x', 'y', 'zIndex'];
let outputs$3 = [];
/**
 * Annotation directive
 * ```html
 * <e-annotations><e-annotation></e-annotation></e-annotations>
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
        this.registerEvents(outputs$3);
    }
}
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
AnnotationDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
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
class AnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
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
AnnotationsDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
const outputs$4 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
const twoWays = [''];
/**
 * Linear Gauge Component
 * ```html
 * <ej-lineargauge></ej-lineargauge>
 * ```
 */
let LinearGaugeComponent = class LinearGaugeComponent extends LinearGauge {
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
        this.tags = ['axes', 'annotations'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('LinearGaugeGaugeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('LinearGaugeAnnotations');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        this.registerEvents(outputs$4);
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
LinearGaugeComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class LinearGaugeModule {
}
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
LinearGaugeModule.ctorParameters = () => [];

const GaugeTooltipService = { provide: 'LinearGaugeGaugeTooltip', useValue: GaugeTooltip };
const AnnotationsService = { provide: 'LinearGaugeAnnotations', useValue: Annotations };
/**
 * NgModule definition for the LinearGauge component with providers.
 */
class LinearGaugeAllModule {
}
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
LinearGaugeAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { RangeDirective, RangesDirective, PointerDirective, PointersDirective, AxisDirective, AxesDirective, AnnotationDirective, AnnotationsDirective, LinearGaugeComponent, LinearGaugeModule, LinearGaugeAllModule, GaugeTooltipService, AnnotationsService, inputs as ɵa, outputs$4 as ɵb };
export { LinearGauge, Font, Margin, Border, Annotation, Container, TooltipSettings, Line, Label, Range, Tick, Pointer, Axis, stringToNumber, measureText, withInRange, convertPixelToValue, getPathToRect, getElement, removeElement, isPointerDrag, valueToCoefficient, getFontStyle, textFormatter, formatValue, getLabelFormat, getTemplateFunction, getElementOffset, VisibleRange, GaugeLocation, Size, Rect, CustomizeOption, PathOption, RectOption, TextOption, VisibleLabels, Align, textElement, calculateNiceInterval, getActualDesiredIntervalsCount, getPointer, getRangeColor, getRangePalette, calculateShapes, getBox, Annotations, GaugeTooltip } from '@syncfusion/ej2-lineargauge';
//# sourceMappingURL=ej2-angular-lineargauge.js.map
