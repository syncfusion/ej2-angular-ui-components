(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-progressbar'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-progressbar', '@angular/common'], factory) :
	(factory((global['ej2-angular-progressbar'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.progressbar,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Progressbar,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return ProgressBarAnnotationDirective;
}(ej2AngularBase.ComplexBase));
ProgressBarAnnotationDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
]; };
ProgressBarAnnotationDirective.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate([
    ej2AngularBase.Template(),
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
}(ej2AngularBase.ArrayBase));
ProgressBarAnnotationsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ej-progressbar>e-progressbar-annotations',
                queries: {
                    children: new core.ContentChildren(ProgressBarAnnotationDirective)
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
var inputs = ['animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isIndeterminate', 'label', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'secondaryProgress', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'trackColor', 'trackThickness', 'type', 'value', 'width'];
var outputs$1 = ['animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'valueChanged'];
var twoWays = [''];
/**
 * ProgressBar Component
 * ```html
 * <ejsprogressbar></ejsprogressbar>
 * ```
 */
exports.ProgressBarComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
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
}(ej2Progressbar.ProgressBar));
exports.ProgressBarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-progressbar',
                inputs: inputs,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childAnnotations: new core.ContentChild(ProgressBarAnnotationsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.ProgressBarComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ProgressBarComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ProgressBarComponent);
/**
 * NgModule definition for the ProgressBar component.
 */
var ProgressBarModule = /** @class */ (function () {
    function ProgressBarModule() {
    }
    return ProgressBarModule;
}());
ProgressBarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ProgressBarComponent,
                    ProgressBarAnnotationDirective,
                    ProgressBarAnnotationsDirective
                ],
                exports: [
                    exports.ProgressBarComponent,
                    ProgressBarAnnotationDirective,
                    ProgressBarAnnotationsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressBarModule.ctorParameters = function () { return []; };
var ProgressAnnotationService = { provide: 'ProgressBarProgressAnnotation', useValue: ej2Progressbar.ProgressAnnotation };
/**
 * NgModule definition for the ProgressBar component with providers.
 */
var ProgressBarAllModule = /** @class */ (function () {
    function ProgressBarAllModule() {
    }
    return ProgressBarAllModule;
}());
ProgressBarAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ProgressBarModule],
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

exports.ProgressBarAnnotationDirective = ProgressBarAnnotationDirective;
exports.ProgressBarAnnotationsDirective = ProgressBarAnnotationsDirective;
exports.ProgressBarModule = ProgressBarModule;
exports.ProgressBarAllModule = ProgressBarAllModule;
exports.ProgressAnnotationService = ProgressAnnotationService;
exports.ɵa = inputs;
exports.ɵb = outputs$1;
exports.ProgressBar = ej2Progressbar.ProgressBar;
exports.Margin = ej2Progressbar.Margin;
exports.Font = ej2Progressbar.Font;
exports.Animation = ej2Progressbar.Animation;
exports.ProgressAnnotationSettings = ej2Progressbar.ProgressAnnotationSettings;
exports.ProgressAnnotation = ej2Progressbar.ProgressAnnotation;
exports.Rect = ej2Progressbar.Rect;
exports.Size = ej2Progressbar.Size;
exports.RectOption = ej2Progressbar.RectOption;
exports.TextOption = ej2Progressbar.TextOption;
exports.degreeToLocation = ej2Progressbar.degreeToLocation;
exports.getPathArc = ej2Progressbar.getPathArc;
exports.stringToNumber = ej2Progressbar.stringToNumber;
exports.effect = ej2Progressbar.effect;
exports.annotationRender = ej2Progressbar.annotationRender;
exports.getElement = ej2Progressbar.getElement;
exports.removeElement = ej2Progressbar.removeElement;
exports.ProgressLocation = ej2Progressbar.ProgressLocation;
exports.ProgressAnimation = ej2Progressbar.ProgressAnimation;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-progressbar.umd.js.map
