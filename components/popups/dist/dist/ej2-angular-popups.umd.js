(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-popups'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-popups', '@angular/common'], factory) :
	(factory((global['ej2-angular-popups'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.popups,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Popups,common) { 'use strict';

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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs);
        _this.directivePropList = input;
        return _this;
    }
    return DialogButtonDirective;
}(ej2AngularBase.ComplexBase));
DialogButtonDirective.decorators = [
    { type: core.Directive, args: [{
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
    { type: core.ViewContainerRef, },
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
}(ej2AngularBase.ArrayBase));
ButtonsDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-dialog>e-buttons',
                queries: {
                    children: new core.ContentChildren(DialogButtonDirective)
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
var inputs = ['allowDragging', 'animationSettings', 'buttons', 'closeOnEscape', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'footerTemplate', 'header', 'height', 'isModal', 'locale', 'minHeight', 'position', 'showCloseIcon', 'target', 'visible', 'width', 'zIndex'];
var outputs$1 = ['beforeClose', 'beforeOpen', 'beforeSanitizeHtml', 'close', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'open', 'overlayClick', 'resizeStart', 'resizeStop', 'resizing', 'visibleChange'];
var twoWays = ['visible'];
/**
 * Represents the Angular Dialog Component
 * ```html
 * <ejs-dialog></ejs-dialog>
 * ```
 */
exports.DialogComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.containerContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = function () {
        this.containerContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngAfterViewInit = function () {
        this.containerContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnDestroy = function () {
        this.containerContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childButtons;
        this.containerContext.ngAfterContentChecked(this);
    };
    return DialogComponent;
}(ej2Popups.Dialog));
exports.DialogComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-dialog',
                inputs: inputs,
                outputs: outputs$1,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {
                    childButtons: new core.ContentChild(ButtonsDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.DialogComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DialogComponent.propDecorators = {
    'footerTemplate': [{ type: core.ContentChild, args: ['footerTemplate',] },],
    'header': [{ type: core.ContentChild, args: ['header',] },],
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DialogComponent.prototype, "footerTemplate", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DialogComponent.prototype, "header", void 0);
__decorate([
    ej2AngularBase.Template(),
    __metadata("design:type", Object)
], exports.DialogComponent.prototype, "content", void 0);
exports.DialogComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DialogComponent);
/**
 * NgModule definition for the Dialog component.
 */
var DialogModule = /** @class */ (function () {
    function DialogModule() {
    }
    return DialogModule;
}());
DialogModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DialogComponent,
                    DialogButtonDirective,
                    ButtonsDirective
                ],
                exports: [
                    exports.DialogComponent,
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DialogModule],
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
var inputs$1 = ['animation', 'closeDelay', 'content', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'isSticky', 'locale', 'mouseTrail', 'offsetX', 'offsetY', 'openDelay', 'opensOn', 'position', 'showTipPointer', 'target', 'tipPointerPosition', 'width'];
var outputs$2 = ['afterClose', 'afterOpen', 'beforeClose', 'beforeCollision', 'beforeOpen', 'beforeRender', 'created', 'destroyed'];
var twoWays$1 = [''];
/**
 * Represents the Angular Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <ejs-tooltip content='Tooltip content'>Show Tooltip</ejs-tooltip>
 * ```
 */
exports.TooltipComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.containerContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnInit = function () {
        this.containerContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngAfterViewInit = function () {
        this.containerContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngOnDestroy = function () {
        this.containerContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TooltipComponent.prototype.ngAfterContentChecked = function () {
        this.containerContext.ngAfterContentChecked(this);
    };
    return TooltipComponent;
}(ej2Popups.Tooltip));
exports.TooltipComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-tooltip',
                inputs: inputs$1,
                outputs: outputs$2,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.TooltipComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TooltipComponent.propDecorators = {
    'content': [{ type: core.ContentChild, args: ['content',] },],
};
__decorate$1([
    ej2AngularBase.Template(),
    __metadata$1("design:type", Object)
], exports.TooltipComponent.prototype, "content", void 0);
exports.TooltipComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TooltipComponent);
/**
 * NgModule definition for the Tooltip component.
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    return TooltipModule;
}());
TooltipModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TooltipComponent
                ],
                exports: [
                    exports.TooltipComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TooltipModule],
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

exports.DialogButtonDirective = DialogButtonDirective;
exports.ButtonsDirective = ButtonsDirective;
exports.DialogModule = DialogModule;
exports.DialogAllModule = DialogAllModule;
exports.TooltipModule = TooltipModule;
exports.TooltipAllModule = TooltipAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs$1;
exports.ɵc = inputs$1;
exports.ɵd = outputs$2;
exports.PositionData = ej2Popups.PositionData;
exports.Popup = ej2Popups.Popup;
exports.getScrollableParent = ej2Popups.getScrollableParent;
exports.getZindexPartial = ej2Popups.getZindexPartial;
exports.getMaxZindex = ej2Popups.getMaxZindex;
exports.calculateRelativeBasedPosition = ej2Popups.calculateRelativeBasedPosition;
exports.calculatePosition = ej2Popups.calculatePosition;
exports.fit = ej2Popups.fit;
exports.isCollide = ej2Popups.isCollide;
exports.flip = ej2Popups.flip;
exports.ButtonProps = ej2Popups.ButtonProps;
exports.AnimationSettings = ej2Popups.AnimationSettings;
exports.Dialog = ej2Popups.Dialog;
exports.DialogUtility = ej2Popups.DialogUtility;
exports.Animation = ej2Popups.Animation;
exports.Tooltip = ej2Popups.Tooltip;
exports.Spinner = ej2Popups.Spinner;
exports.createSpinner = ej2Popups.createSpinner;
exports.showSpinner = ej2Popups.showSpinner;
exports.hideSpinner = ej2Popups.hideSpinner;
exports.setSpinner = ej2Popups.setSpinner;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-popups.umd.js.map
