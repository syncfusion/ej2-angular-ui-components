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
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';
import { CommonModule } from '@angular/common';
var input = ['buttonModel', 'type'];
var outputs = ['click'];
/**
 * 'e-button' directive represent a button of angular dialog
 * It must be contained in a Dialog component(`ej-dialog`).
 * ```html
 * <ejs-dialog id='dialog' showCloseIcon=true>
 *   <e-buttons>
 *    <e-dialogbutton [buttonModal]='okButton'></e-button>
 *    <e-dialogbutton [buttonModal]='cancelButton'></e-button>
 *   </e-buttons>
 * </ejs-dialog>
 * ```
 */
var DialogButtonDirective = /** @class */ (function (_super) {
    __extends(DialogButtonDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function DialogButtonDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        return _this;
    }
    return DialogButtonDirective;
}(ComplexBase));
DialogButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'e-buttons>e-dialogbutton',
                inputs: input,
                outputs: outputs,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DialogButtonDirective.ctorParameters = function () { return [
    { type: ViewContainerRef, },
]; };
/**
 * DialogButton Array Directive
 */
var ButtonsDirective = /** @class */ (function (_super) {
    __extends(ButtonsDirective, _super);
    function ButtonsDirective() {
        return _super.call(this, 'buttons') || this;
    }
    return ButtonsDirective;
}(ArrayBase));
ButtonsDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-dialog>e-buttons',
                queries: {
                    children: new ContentChildren(DialogButtonDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
ButtonsDirective.ctorParameters = function () { return []; };
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
var inputs = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'];
var outputs$1 = ['beforeClose', 'beforeOpen', 'close', 'created', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing', 'visibleChange'];
var twoWays = ['visible'];
/**
 * Represents the Angular Dialog Component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
var DialogComponent = /** @class */ (function (_super) {
    __extends(DialogComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DialogComponent(ngEle, srenderer, viewContainerRef, injector) {
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
    DialogComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngAfterContentChecked = function () {
    };
    return DialogComponent;
}(Dialog));
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-dialog',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content ></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {
                    childButtons: new ContentChild(ButtonsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
DialogComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DialogComponent.propDecorators = {
    'footerTemplate': [{ type: ContentChild, args: ['footerTemplate',] },],
    'header': [{ type: ContentChild, args: ['header',] },],
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate([
    Template(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "header", void 0);
__decorate([
    Template(),
    __metadata("design:type", Object)
], DialogComponent.prototype, "content", void 0);
DialogComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DialogComponent);
/**
 * NgModule definition for the Dialog component.
 */
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    return DialogModule;
}());
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DialogComponent,
                    DialogButtonDirective,
                    ButtonsDirective
                ],
                exports: [
                    DialogComponent,
                    DialogButtonDirective,
                    ButtonsDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DialogModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Dialog component with providers.
 */
var DialogAllModule = /** @class */ (function () {
    function DialogAllModule() {
    }
    return DialogAllModule;
}());
DialogAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DialogModule],
                exports: [
                    DialogModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DialogAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['animation', 'closeDelay', 'content', 'cssClass', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width'];
var outputs$2 = ['afterClose', 'afterOpen', 'beforeClose', 'beforeCollision', 'beforeOpen', 'beforeRender', 'created', 'destroyed'];
var twoWays$1 = [''];
/**
 * Represents the Angular Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
var TooltipComponent = /** @class */ (function (_super) {
    __extends(TooltipComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TooltipComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngAfterContentChecked = function () {
    };
    return TooltipComponent;
}(Tooltip));
TooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-tooltip',
                inputs: inputs$1,
                outputs: outputs$2,
                template: "<ng-content ></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TooltipComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
TooltipComponent.propDecorators = {
    'content': [{ type: ContentChild, args: ['content',] },],
};
__decorate$1([
    Template(),
    __metadata$1("design:type", Object)
], TooltipComponent.prototype, "content", void 0);
TooltipComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TooltipComponent);
/**
 * NgModule definition for the Tooltip component.
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    return TooltipModule;
}());
TooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TooltipComponent
                ],
                exports: [
                    TooltipComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TooltipModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Tooltip component with providers.
 */
var TooltipAllModule = /** @class */ (function () {
    function TooltipAllModule() {
    }
    return TooltipAllModule;
}());
TooltipAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, TooltipModule],
                exports: [
                    TooltipModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TooltipAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { DialogButtonDirective, ButtonsDirective, DialogComponent, DialogModule, DialogAllModule, TooltipComponent, TooltipModule, TooltipAllModule, inputs as ɵa, outputs$1 as ɵb, inputs$1 as ɵc, outputs$2 as ɵd };
export { PositionData, Popup, getScrollableParent, getZindexPartial, getMaxZindex, calculateRelativeBasedPosition, calculatePosition, fit, isCollide, flip, ButtonProps, AnimationSettings, Dialog, DialogUtility, Animation, Tooltip, blazorSpinner, createSpinner, showSpinner, hideSpinner, setSpinner } from '@syncfusion/ej2-popups';
//# sourceMappingURL=ej2-angular-popups.es5.js.map
