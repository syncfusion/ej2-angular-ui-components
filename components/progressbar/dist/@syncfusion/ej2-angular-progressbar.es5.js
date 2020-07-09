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
import { ProgressAnnotation, ProgressBar } from '@syncfusion/ej2-progressbar';
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
var input = ['annotationAngle', 'annotationRadius', 'content'];
var outputs = [];
/**
 * ProgressBarAnnotations Directive
 * ```html
 * <e-progressbar-annotations>
 * <e-progressbar-annotation></e-progressbar-annotation>
 * </e-progressbar-annotations>
 * ```
 */
var ProgressBarAnnotationDirective = /** @class */ (function (_super) {
    __extends(ProgressBarAnnotationDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ProgressBarAnnotationDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ProgressBarAnnotationDirective;
}(ComplexBase));
ProgressBarAnnotationDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-progressbar-annotations>e-progressbar-annotation',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ProgressBarAnnotationDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
ProgressBarAnnotationDirective.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ProgressBarAnnotationDirective.prototype, "content", void 0);
/**
 * ProgressBarAnnotation Array Directive
 */
var ProgressBarAnnotationsDirective = /** @class */ (function (_super) {
    __extends(ProgressBarAnnotationsDirective, _super);
    function ProgressBarAnnotationsDirective() {
        return _super.call(this, 'annotations') || this;
    }
    return ProgressBarAnnotationsDirective;
}(ArrayBase));
ProgressBarAnnotationsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ej-progressbar>e-progressbar-annotations',
                queries: {
                    children: new ContentChildren(ProgressBarAnnotationDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ProgressBarAnnotationsDirective.ctorParameters = function () { return []; };
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
var inputs = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width'];
var outputs$1 = ['animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
var twoWays = [''];
/**
 * ProgressBar Component
 * ```html
 * <ejsprogressbar></ejsprogressbar>
 * ```
 */
var ProgressBarComponent = /** @class */ (function (_super) {
    __extends(ProgressBarComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ProgressBarComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['annotations'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        try {
            var mod = _this.injector.get('ProgressBarProgressAnnotation');
            if (_this.injectedModules.indexOf(mod) === -1) {
                _this.injectedModules.push(mod);
            }
        }
        catch (_a) { }
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    ProgressBarComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childAnnotations;
        this.context.ngAfterContentChecked(this);
    };
    return ProgressBarComponent;
}(ProgressBar));
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-progressbar',
                inputs: inputs,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childAnnotations: new ContentChild(ProgressBarAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ProgressBarComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ProgressBarComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ProgressBarComponent);
/**
 * NgModule definition for the ProgressBar component.
 */
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    return ProgressBarModule;
}());
ProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ProgressBarComponent,
                    ProgressBarAnnotationDirective,
                    ProgressBarAnnotationsDirective
                ],
                exports: [
                    ProgressBarComponent,
                    ProgressBarAnnotationDirective,
                    ProgressBarAnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressBarModule.ctorParameters = function () { return []; };
var ProgressAnnotationService = { provide: 'ProgressBarProgressAnnotation', useValue: ProgressAnnotation };
/**
 * NgModule definition for the ProgressBar component with providers.
 */
var ProgressBarAllModule = /** @class */ (function () {
    function ProgressBarAllModule() {
    }
    return ProgressBarAllModule;
}());
ProgressBarAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ProgressBarModule],
                exports: [
                    ProgressBarModule
                ],
                providers: [
                    ProgressAnnotationService
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressBarAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective, ProgressBarComponent, ProgressBarModule, ProgressBarAllModule, ProgressAnnotationService, inputs as ɵa, outputs$1 as ɵb };
export { ProgressBar, Margin, Font, Animation, ProgressAnnotationSettings, RangeColor, ProgressAnnotation, Rect, Size, Pos, RectOption, ColorValue, convertToHexCode, componentToHex, convertHexToColor, colorNameToHex, TextOption, degreeToLocation, getPathArc, stringToNumber, setAttributes, effect, annotationRender, getElement, removeElement, ProgressLocation, ProgressAnimation } from '@syncfusion/ej2-progressbar';
//# sourceMappingURL=ej2-angular-progressbar.es5.js.map
