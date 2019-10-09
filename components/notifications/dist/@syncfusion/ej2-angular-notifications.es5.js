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
import { Toast } from '@syncfusion/ej2-notifications';
import { CommonModule } from '@angular/common';
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return ButtonModelPropDirective;
}(ComplexBase));
ButtonModelPropDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
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
}(ArrayBase));
ButtonModelPropsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-toast>e-buttonmodelprops',
                queries: {
                    children: new ContentChildren(ButtonModelPropDirective)
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
var inputs = ['animation', 'buttons', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'extendedTimeout', 'height', 'icon', 'locale', 'newestOnTop', 'position', 'showCloseButton', 'showProgressBar', 'target', 'template', 'timeOut', 'title', 'width'];
var outputs$1 = ['beforeOpen', 'click', 'close', 'created', 'destroyed', 'open'];
var twoWays = [''];
/**
 * Represents the Angular Toast Component
 * ```html
 * <ejs-toast></ejs-toast>
 * ```
 */
var ToastComponent = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
}(Toast));
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-toast',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content ></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childButtons: new ContentChild(ButtonModelPropsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
ToastComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ToastComponent.propDecorators = {
    'title': [{ type: ContentChild, args: ['title',] },],
    'content': [{ type: ContentChild, args: ['content',] },],
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "title", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "content", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "template", void 0);
ToastComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ToastComponent);
/**
 * NgModule definition for the Toast component.
 */
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    return ToastModule;
}());
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ToastComponent,
                    ButtonModelPropDirective,
                    ButtonModelPropsDirective
                ],
                exports: [
                    ToastComponent,
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
    { type: NgModule, args: [{
                imports: [CommonModule, ToastModule],
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
/**
 * Generated bundle index. Do not edit.
 */
export { ButtonModelPropDirective, ButtonModelPropsDirective, ToastComponent, ToastModule, ToastAllModule, inputs as ɵa, outputs$1 as ɵb };
export { ToastPosition, ButtonModelProps, ToastAnimations, ToastAnimationSettings, Toast } from '@syncfusion/ej2-notifications';
//# sourceMappingURL=ej2-angular-notifications.es5.js.map
