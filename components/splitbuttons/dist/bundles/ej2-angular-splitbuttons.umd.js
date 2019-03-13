(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-splitbuttons'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-splitbuttons', '@angular/common'], factory) :
	(factory((global['ej2-angular-splitbuttons'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.splitbuttons,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2Splitbuttons,common) { 'use strict';

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
var inputs = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
var outputs = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
var twoWays = [];
/**
 * Represents the Angular DropDownButton Component.
 * ```html
 * <button ejs-dropdownbutton>DropDownButton</button>
 * ```
 */
exports.DropDownButtonComponent = /** @class */ (function (_super) {
    __extends(DropDownButtonComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DropDownButtonComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    DropDownButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DropDownButtonComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DropDownButtonComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DropDownButtonComponent.prototype.ngAfterContentChecked = function () {
    };
    return DropDownButtonComponent;
}(ej2Splitbuttons.DropDownButton));
exports.DropDownButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[ejs-dropdownbutton]',
                inputs: inputs,
                outputs: outputs,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DropDownButtonComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DropDownButtonComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DropDownButtonComponent);
/**
 * NgModule definition for the DropDownButton component.
 */
var DropDownButtonModule = /** @class */ (function () {
    function DropDownButtonModule() {
    }
    return DropDownButtonModule;
}());
DropDownButtonModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DropDownButtonComponent
                ],
                exports: [
                    exports.DropDownButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DropDownButtonModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DropDownButton component with providers.
 */
var DropDownButtonAllModule = /** @class */ (function () {
    function DropDownButtonAllModule() {
    }
    return DropDownButtonAllModule;
}());
DropDownButtonAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DropDownButtonModule],
                exports: [
                    DropDownButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DropDownButtonAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target'];
var outputs$1 = ['beforeClose', 'beforeItemRender', 'beforeOpen', 'click', 'close', 'created', 'open', 'select'];
var twoWays$1 = [];
/**
 * Represents the Angular SplitButton Component.
 * ```html
 * <ejs-splitbutton content='Split Button'></ejs-splitbutton>
 * ```
 */
exports.SplitButtonComponent = /** @class */ (function (_super) {
    __extends(SplitButtonComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SplitButtonComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    SplitButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    SplitButtonComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SplitButtonComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SplitButtonComponent.prototype.ngAfterContentChecked = function () {
    };
    return SplitButtonComponent;
}(ej2Splitbuttons.SplitButton));
exports.SplitButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-splitbutton',
                inputs: inputs$1,
                outputs: outputs$1,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.SplitButtonComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SplitButtonComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SplitButtonComponent);
/**
 * NgModule definition for the SplitButton component.
 */
var SplitButtonModule = /** @class */ (function () {
    function SplitButtonModule() {
    }
    return SplitButtonModule;
}());
SplitButtonModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SplitButtonComponent
                ],
                exports: [
                    exports.SplitButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SplitButtonModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the SplitButton component with providers.
 */
var SplitButtonAllModule = /** @class */ (function () {
    function SplitButtonAllModule() {
    }
    return SplitButtonAllModule;
}());
SplitButtonAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SplitButtonModule],
                exports: [
                    SplitButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SplitButtonAllModule.ctorParameters = function () { return []; };
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$2 = ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'];
var outputs$2 = ['begin', 'created', 'end', 'fail', 'progress'];
var twoWays$2 = [];
/**
 * Represents the Angular ProgressButton Component.
 * ```html
 * <button ejs-progressbutton content='Progress Button'></button>
 * ```
 */
exports.ProgressButtonComponent = /** @class */ (function (_super) {
    __extends(ProgressButtonComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ProgressButtonComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays$2);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    ProgressButtonComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    ProgressButtonComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ProgressButtonComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ProgressButtonComponent.prototype.ngAfterContentChecked = function () {
    };
    return ProgressButtonComponent;
}(ej2Splitbuttons.ProgressButton));
exports.ProgressButtonComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[ejs-progressbutton]',
                inputs: inputs$2,
                outputs: outputs$2,
                template: "<ng-content ></ng-content>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.ProgressButtonComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ProgressButtonComponent = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ProgressButtonComponent);
/**
 * NgModule definition for the ProgressButton component.
 */
var ProgressButtonModule = /** @class */ (function () {
    function ProgressButtonModule() {
    }
    return ProgressButtonModule;
}());
ProgressButtonModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ProgressButtonComponent
                ],
                exports: [
                    exports.ProgressButtonComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ProgressButtonModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ProgressButton component with providers.
 */
var ProgressButtonAllModule = /** @class */ (function () {
    function ProgressButtonAllModule() {
    }
    return ProgressButtonAllModule;
}());
ProgressButtonAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ProgressButtonModule],
                exports: [
                    ProgressButtonModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ProgressButtonAllModule.ctorParameters = function () { return []; };

exports.DropDownButtonModule = DropDownButtonModule;
exports.DropDownButtonAllModule = DropDownButtonAllModule;
exports.SplitButtonModule = SplitButtonModule;
exports.SplitButtonAllModule = SplitButtonAllModule;
exports.ProgressButtonModule = ProgressButtonModule;
exports.ProgressButtonAllModule = ProgressButtonAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.ɵe = inputs$2;
exports.ɵf = outputs$2;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.getModel = ej2Splitbuttons.getModel;
exports.Item = ej2Splitbuttons.Item;
exports.DropDownButton = ej2Splitbuttons.DropDownButton;
exports.SplitButton = ej2Splitbuttons.SplitButton;
exports.createButtonGroup = ej2Splitbuttons.createButtonGroup;
exports.SpinSettings = ej2Splitbuttons.SpinSettings;
exports.AnimationSettings = ej2Splitbuttons.AnimationSettings;
exports.ProgressButton = ej2Splitbuttons.ProgressButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-splitbuttons.umd.js.map
