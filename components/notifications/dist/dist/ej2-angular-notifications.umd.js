(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-notifications'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-notifications', '@angular/common'], factory) :
	(factory((global['ej2-angular-notifications'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.notifications,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Notifications,common) { 'use strict';

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
var input = ['model'];
var outputs = ['click'];
/**
 * 'e-button' directive represent a button of angular toast
 * It must be contained in a Toast component(`ejs-toast`).
 * ```html
 * <ejs-toast id='toast' showCloseIcon=true>
 *   <e-buttons>
 *    <e-button content='Ok' isPrimary=true></e-button>
 *    <e-button content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
var ButtonModelPropDirective = /** @class */ (function (_super) {
    __extends(ButtonModelPropDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function ButtonModelPropDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return ButtonModelPropDirective;
}(ej2AngularBase.ComplexBase));
ButtonModelPropDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-buttonmodelprops>e-buttonmodelprop',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ButtonModelPropDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * ButtonModelProp Array Directive
 */
var ButtonModelPropsDirective = /** @class */ (function (_super) {
    __extends(ButtonModelPropsDirective, _super);
    function ButtonModelPropsDirective() {
        return _super.call(this, 'buttons') || this;
    }
    return ButtonModelPropsDirective;
}(ej2AngularBase.ArrayBase));
ButtonModelPropsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-toast>e-buttonmodelprops',
                queries: {
                    children: new core.ContentChildren(ButtonModelPropDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ButtonModelPropsDirective.ctorParameters = function () { return []; };
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
var inputs = ['animation', 'buttons', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width'];
var outputs$1 = ['beforeOpen', 'beforeSanitizeHtml', 'click', 'close', 'created', 'destroyed', 'open'];
var twoWays = [''];
/**
 * Represents the Angular Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
exports.ToastComponent = /** @class */ (function (_super) {
    __extends(ToastComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ToastComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['buttons'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngAfterContentChecked = function () {
    };
    return ToastComponent;
}(ej2Notifications.Toast));
exports.ToastComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-toast',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childButtons: new core.ContentChild(ButtonModelPropsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.ToastComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ToastComponent.propDecorators = {
    'title': [{ type: core.ContentChild, args: ['title',] },],
    'content': [{ type: core.ContentChild, args: ['content',] },],
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.ToastComponent.prototype, "title", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.ToastComponent.prototype, "content", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.ToastComponent.prototype, "template", void 0);
exports.ToastComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ToastComponent);
/**
 * NgModule definition for the Toast component.
 */
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    return ToastModule;
}());
ToastModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ToastComponent,
                    ButtonModelPropDirective,
                    ButtonModelPropsDirective
                ],
                exports: [
                    exports.ToastComponent,
                    ButtonModelPropDirective,
                    ButtonModelPropsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ToastModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Toast component with providers.
 */
var ToastAllModule = /** @class */ (function () {
    function ToastAllModule() {
    }
    return ToastAllModule;
}());
ToastAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ToastModule],
                exports: [
                    ToastModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ToastAllModule.ctorParameters = function () { return []; };

exports.ButtonModelPropDirective = ButtonModelPropDirective;
exports.ButtonModelPropsDirective = ButtonModelPropsDirective;
exports.ToastModule = ToastModule;
exports.ToastAllModule = ToastAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$1;
exports.ToastPosition = ej2Notifications.ToastPosition;
exports.ButtonModelProps = ej2Notifications.ButtonModelProps;
exports.ToastAnimations = ej2Notifications.ToastAnimations;
exports.ToastAnimationSettings = ej2Notifications.ToastAnimationSettings;
exports.Toast = ej2Notifications.Toast;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-notifications.umd.js.map
