import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, Template, setValue } from '@syncfusion/ej2-angular-base';
import { Annotations, CircularGauge, GaugeTooltip, Legend } from '@syncfusion/ej2-circulargauge';
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
let input = ['angle', 'autoAngle', 'content', 'description', 'radius', 'textStyle', 'zIndex'];
let outputs = [];
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
        this.registerEvents(outputs);
    }
}
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
                selector: 'ej-circulargauge>e-axes>e-axis>e-annotations',
                queries: {
                    children: new ContentChildren(AnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AnnotationsDirective.ctorParameters = () => [];

let input$1 = ['color', 'end', 'endWidth', 'legendText', 'opacity', 'radius', 'roundedCornerRadius', 'start', 'startWidth'];
let outputs$1 = [];
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
        this.registerEvents(outputs$1);
    }
}
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
                selector: 'ej-circulargauge>e-axes>e-axis>e-ranges',
                queries: {
                    children: new ContentChildren(RangeDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
RangesDirective.ctorParameters = () => [];

let input$2 = ['animation', 'border', 'cap', 'color', 'description', 'imageUrl', 'markerHeight', 'markerShape', 'markerWidth', 'needleTail', 'pointerWidth', 'radius', 'roundedCornerRadius', 'type', 'value'];
let outputs$2 = [];
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
        this.registerEvents(outputs$2);
    }
}
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
                selector: 'ej-circulargauge>e-axes>e-axis>e-pointers',
                queries: {
                    children: new ContentChildren(PointerDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
PointersDirective.ctorParameters = () => [];

let input$3 = ['annotations', 'background', 'direction', 'endAngle', 'hideIntersectingLabel', 'labelStyle', 'lineStyle', 'majorTicks', 'maximum', 'minimum', 'minorTicks', 'pointers', 'radius', 'rangeGap', 'ranges', 'roundingPlaces', 'showLastLabel', 'startAndEndRangeGap', 'startAngle'];
let outputs$3 = [];
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
        this.tags = ['annotations', 'ranges', 'pointers'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$3);
    }
}
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
                selector: 'ej-circulargauge>e-axes',
                queries: {
                    children: new ContentChildren(AxisDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
AxesDirective.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs = ['axes', 'background', 'border', 'centerX', 'centerY', 'description', 'enablePersistence', 'enablePointerDrag', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'moveToCenter', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width'];
const outputs$4 = ['animationComplete', 'annotationRender', 'axisLabelRender', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'legendRender', 'load', 'loaded', 'radiusCalculate', 'resized', 'tooltipRender'];
const twoWays = [''];
/**
 * Circular Gauge Component
 * ```html
 * <ej-circulargauge></ej-circulargauge>
 * ```
 */
let CircularGaugeComponent = class CircularGaugeComponent extends CircularGauge {
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
        this.tags = ['axes'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('CircularGaugeGaugeTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        try {
            let mod = this.injector.get('CircularGaugeAnnotations');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_b) { }
        try {
            let mod = this.injector.get('CircularGaugeLegend');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch (_c) { }
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
CircularGaugeComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class CircularGaugeModule {
}
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
CircularGaugeModule.ctorParameters = () => [];

const GaugeTooltipService = { provide: 'CircularGaugeGaugeTooltip', useValue: GaugeTooltip };
const AnnotationsService = { provide: 'CircularGaugeAnnotations', useValue: Annotations };
const LegendService = { provide: 'CircularGaugeLegend', useValue: Legend };
/**
 * NgModule definition for the CircularGauge component with providers.
 */
class CircularGaugeAllModule {
}
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
CircularGaugeAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { AnnotationDirective, AnnotationsDirective, RangeDirective, RangesDirective, PointerDirective, PointersDirective, AxisDirective, AxesDirective, CircularGaugeComponent, CircularGaugeModule, CircularGaugeAllModule, GaugeTooltipService, AnnotationsService, LegendService, inputs as ɵa, outputs$4 as ɵb };
export { CircularGauge, Annotations, Line, Label, Range, Tick, Cap, NeedleTail, Animation, Annotation, Pointer, Axis, Border, Font, RangeTooltip, AnnotationTooltip, Margin, TooltipSettings, GaugeTooltip, measureText, toPixel, getFontStyle, setStyles, measureElementRect, stringToNumber, textElement, appendPath, calculateSum, linear, getAngleFromValue, getDegree, getValueFromAngle, isCompleteAngle, getAngleFromLocation, getLocationFromAngle, getPathArc, getRangePath, getRoundedPathArc, getRoundedPath, getCompleteArc, getCirclePath, getCompletePath, getElement, getTemplateFunction, removeElement, getPointer, getElementSize, getMousePosition, getLabelFormat, calculateShapes, getRangeColor, CustomizeOption, PathOption, RectOption, Size, GaugeLocation, Rect, textTrim, showTooltip, TextOption, VisibleLabels, Location, LegendSettings, Legend, Index, LegendOptions } from '@syncfusion/ej2-circulargauge';
//# sourceMappingURL=ej2-angular-circulargauge.js.map
