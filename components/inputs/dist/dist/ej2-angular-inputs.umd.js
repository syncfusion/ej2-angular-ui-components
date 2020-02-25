(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-inputs'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-inputs', '@angular/common'], factory) :
	(factory((global['ej2-angular-inputs'] = {}),global.ng.core,global.ng.forms,global.ej2.angular.base,global.ej2.inputs,global.ng.common));
}(this, (function (exports,core,forms,ej2AngularBase,ej2Inputs,common) { 'use strict';

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
var inputs = ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'];
var outputs = ['blur', 'change', 'created', 'destroyed', 'focus', 'input', 'valueChange'];
var twoWays = ['value'];
/**
 * Represents the EJ2 Angular TextBox Component.
 * ```html
 * <ejs-textbox [value]='value'></ejs-textbox>
 * ```
 */
exports.TextBoxComponent = TextBoxComponent_1 = /** @class */ (function (_super) {
    __extends(TextBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function TextBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    TextBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    TextBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TextBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    TextBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return TextBoxComponent;
}(ej2Inputs.TextBox));
exports.TextBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-textbox',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return TextBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.TextBoxComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.TextBoxComponent = TextBoxComponent_1 = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.TextBoxComponent);
var TextBoxComponent_1;
/**
 * NgModule definition for the TextBox component.
 */
var TextBoxModule = /** @class */ (function () {
    function TextBoxModule() {
    }
    return TextBoxModule;
}());
TextBoxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.TextBoxComponent
                ],
                exports: [
                    exports.TextBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TextBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the TextBox component with providers.
 */
var TextBoxAllModule = /** @class */ (function () {
    function TextBoxAllModule() {
    }
    return TextBoxAllModule;
}());
TextBoxAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, TextBoxModule],
                exports: [
                    TextBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
TextBoxAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width'];
var outputs$1 = ['blur', 'change', 'created', 'destroyed', 'focus', 'valueChange'];
var twoWays$1 = ['value'];
/**
 * Represents the EJ2 Angular NumericTextBox Component.
 * ```html
 * <ej-numerictextbox [value]='value'></ej-numerictextbox>
 * ```
 */
exports.NumericTextBoxComponent = NumericTextBoxComponent_1 = /** @class */ (function (_super) {
    __extends(NumericTextBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function NumericTextBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    NumericTextBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    NumericTextBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumericTextBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NumericTextBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return NumericTextBoxComponent;
}(ej2Inputs.NumericTextBox));
exports.NumericTextBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-numerictextbox',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return NumericTextBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.NumericTextBoxComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.NumericTextBoxComponent = NumericTextBoxComponent_1 = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.NumericTextBoxComponent);
var NumericTextBoxComponent_1;
/**
 * NgModule definition for the NumericTextBox component.
 */
var NumericTextBoxModule = /** @class */ (function () {
    function NumericTextBoxModule() {
    }
    return NumericTextBoxModule;
}());
NumericTextBoxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.NumericTextBoxComponent
                ],
                exports: [
                    exports.NumericTextBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
NumericTextBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the NumericTextBox component with providers.
 */
var NumericTextBoxAllModule = /** @class */ (function () {
    function NumericTextBoxAllModule() {
    }
    return NumericTextBoxAllModule;
}());
NumericTextBoxAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, NumericTextBoxModule],
                exports: [
                    NumericTextBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
NumericTextBoxAllModule.ctorParameters = function () { return []; };
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
var inputs$2 = ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'promptChar', 'readonly', 'showClearButton', 'value', 'width'];
var outputs$2 = ['blur', 'change', 'created', 'destroyed', 'focus', 'valueChange'];
var twoWays$2 = ['value'];
/**
 * Represents the EJ2 Angular MaskedTextbox Component.
 * ```html
 * <ej-maskedtextbox [value]='value'></ej-maskedtextbox>
 * ```
 */
exports.MaskedTextBoxComponent = MaskedTextBoxComponent_1 = /** @class */ (function (_super) {
    __extends(MaskedTextBoxComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function MaskedTextBoxComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.skipFromEvent = true;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays$2);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return MaskedTextBoxComponent;
}(ej2Inputs.MaskedTextBox));
exports.MaskedTextBoxComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-maskedtextbox',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return MaskedTextBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.MaskedTextBoxComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.MaskedTextBoxComponent = MaskedTextBoxComponent_1 = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.MaskedTextBoxComponent);
var MaskedTextBoxComponent_1;
/**
 * NgModule definition for the MaskedTextBox component.
 */
var MaskedTextBoxModule = /** @class */ (function () {
    function MaskedTextBoxModule() {
    }
    return MaskedTextBoxModule;
}());
MaskedTextBoxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.MaskedTextBoxComponent
                ],
                exports: [
                    exports.MaskedTextBoxComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
MaskedTextBoxModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the MaskedTextBox component with providers.
 */
var MaskedTextBoxAllModule = /** @class */ (function () {
    function MaskedTextBoxAllModule() {
    }
    return MaskedTextBoxAllModule;
}());
MaskedTextBoxAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, MaskedTextBoxModule],
                exports: [
                    MaskedTextBoxModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
MaskedTextBoxAllModule.ctorParameters = function () { return []; };
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$3 = ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'];
var outputs$3 = ['focus', 'blur', 'change', 'changed', 'created', 'renderedTicks', 'renderingTicks', 'tooltipChange', 'valueChange'];
var twoWays$3 = ['value'];
/**
 * Represents the EJ2 Angular Slider Component.
 * ```html
 * <ejs-slider [value]='value'></ejs-slider>
 * ```
 */
exports.SliderComponent = SliderComponent_1 = /** @class */ (function (_super) {
    __extends(SliderComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function SliderComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$3);
        _this.addTwoWay.call(_this, twoWays$3);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    SliderComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    SliderComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SliderComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    SliderComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return SliderComponent;
}(ej2Inputs.Slider));
exports.SliderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-slider',
                inputs: inputs$3,
                outputs: outputs$3,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return SliderComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.SliderComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.SliderComponent = SliderComponent_1 = __decorate$3([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$3("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.SliderComponent);
var SliderComponent_1;
/**
 * NgModule definition for the Slider component.
 */
var SliderModule = /** @class */ (function () {
    function SliderModule() {
    }
    return SliderModule;
}());
SliderModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.SliderComponent
                ],
                exports: [
                    exports.SliderComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
SliderModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Slider component with providers.
 */
var SliderAllModule = /** @class */ (function () {
    function SliderAllModule() {
    }
    return SliderAllModule;
}());
SliderAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, SliderModule],
                exports: [
                    SliderModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
SliderAllModule.ctorParameters = function () { return []; };
var input = ['name', 'size', 'type'];
var outputs$4 = [];
/**
 * 'e-files' directive represent a file of angular uploader
 * It must be contained in a Uploader component(`ejs-uploader`).
 * ```html
 * <ejs-uploader id='fileupload' multiple=true>
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
var UploadedFilesDirective = /** @class */ (function (_super) {
    __extends(UploadedFilesDirective, _super);
    /**
     * @param {?} viewContainerRef
     */
    function UploadedFilesDirective(viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.viewContainerRef = viewContainerRef;
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        _this.directivePropList = input;
        return _this;
    }
    return UploadedFilesDirective;
}(ej2AngularBase.ComplexBase));
UploadedFilesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'e-files>e-uploadedfiles',
                inputs: input,
                outputs: outputs$4,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
UploadedFilesDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * UploadedFiles Array Directive
 */
var FilesDirective = /** @class */ (function (_super) {
    __extends(FilesDirective, _super);
    function FilesDirective() {
        return _super.call(this, 'files') || this;
    }
    return FilesDirective;
}(ej2AngularBase.ArrayBase));
FilesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ejs-uploader>e-files',
                queries: {
                    children: new core.ContentChildren(UploadedFilesDirective)
                },
            },] },
];
/**
 * @nocollapse
 */
FilesDirective.ctorParameters = function () { return []; };
var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$4 = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'];
var outputs$5 = ['focus', 'blur', 'actionComplete', 'beforeRemove', 'beforeUpload', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
var twoWays$4 = [];
/**
 * Represents the EJ2 Angular Uploader Component.
 * ```html
 * <ejs-uploader></ejs-uploader>
 * ```
 */
exports.UploaderComponent = UploaderComponent_1 = /** @class */ (function (_super) {
    __extends(UploaderComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function UploaderComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.tags = ['files'];
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$5);
        _this.addTwoWay.call(_this, twoWays$4);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    UploaderComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    UploaderComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UploaderComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    UploaderComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngAfterContentChecked = function () {
        this.tagObjects[0].instance = this.childFiles;
        this.formCompContext.ngAfterContentChecked(this);
    };
    return UploaderComponent;
}(ej2Inputs.Uploader));
exports.UploaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-uploader',
                inputs: inputs$4,
                outputs: outputs$5,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return UploaderComponent_1; }),
                        multi: true
                    }
                ],
                queries: {
                    childFiles: new core.ContentChild(FilesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
exports.UploaderComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.UploaderComponent.propDecorators = {
    'template': [{ type: core.ContentChild, args: ['template',] },],
};
__decorate$4([
    ej2AngularBase.Template(),
    __metadata$4("design:type", Object)
], exports.UploaderComponent.prototype, "template", void 0);
exports.UploaderComponent = UploaderComponent_1 = __decorate$4([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$4("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.UploaderComponent);
var UploaderComponent_1;
/**
 * NgModule definition for the Uploader component.
 */
var UploaderModule = /** @class */ (function () {
    function UploaderModule() {
    }
    return UploaderModule;
}());
UploaderModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.UploaderComponent,
                    UploadedFilesDirective,
                    FilesDirective
                ],
                exports: [
                    exports.UploaderComponent,
                    UploadedFilesDirective,
                    FilesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
UploaderModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the Uploader component with providers.
 */
var UploaderAllModule = /** @class */ (function () {
    function UploaderAllModule() {
    }
    return UploaderAllModule;
}());
UploaderAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, UploaderModule],
                exports: [
                    UploaderModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
UploaderAllModule.ctorParameters = function () { return []; };
var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
var inputs$5 = ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value'];
var outputs$6 = ['focus', 'blur', 'beforeClose', 'beforeModeSwitch', 'beforeOpen', 'beforeTileRender', 'change', 'created', 'onModeSwitch', 'open', 'select', 'valueChange'];
var twoWays$5 = ['value'];
/**
 * Represents the EJ2 Angular ColorPicker Component.
 * ```html
 * <input ejs-colorpicker type='color'/>
 * ```
 */
exports.ColorPickerComponent = ColorPickerComponent_1 = /** @class */ (function (_super) {
    __extends(ColorPickerComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function ColorPickerComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$6);
        _this.addTwoWay.call(_this, twoWays$5);
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.formContext = new ej2AngularBase.FormBase();
        _this.formCompContext = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ColorPickerComponent.prototype.registerOnChange = function (registerFunction) {
    };
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    ColorPickerComponent.prototype.registerOnTouched = function (registerFunction) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.writeValue = function (value) {
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ColorPickerComponent.prototype.setDisabledState = function (disabled) {
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = function () {
        this.formCompContext.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = function () {
        this.formContext.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = function () {
        this.formCompContext.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterContentChecked = function () {
        this.formCompContext.ngAfterContentChecked(this);
    };
    return ColorPickerComponent;
}(ej2Inputs.ColorPicker));
exports.ColorPickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: '[ejs-colorpicker]',
                inputs: inputs$5,
                outputs: outputs$6,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: core.forwardRef(function () { return ColorPickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.ColorPickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.ColorPickerComponent = ColorPickerComponent_1 = __decorate$5([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase, ej2AngularBase.FormBase]),
    __metadata$5("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.ColorPickerComponent);
var ColorPickerComponent_1;
/**
 * NgModule definition for the ColorPicker component.
 */
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    return ColorPickerModule;
}());
ColorPickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.ColorPickerComponent
                ],
                exports: [
                    exports.ColorPickerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ColorPickerModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the ColorPicker component with providers.
 */
var ColorPickerAllModule = /** @class */ (function () {
    function ColorPickerAllModule() {
    }
    return ColorPickerAllModule;
}());
ColorPickerAllModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, ColorPickerModule],
                exports: [
                    ColorPickerModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
ColorPickerAllModule.ctorParameters = function () { return []; };
var FormValidators = /** @class */ (function () {
    function FormValidators() {
    }
    /**
     * @param {?} number
     * @return {?}
     */
    FormValidators.max = function (number) {
        var /** @type {?} */ max = number;
        return function (control) {
            //tslint:disable-next-line
            var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.max({ value: control.value, param: max });
            if (result === true) {
                return null;
            }
            else {
                return { 'max': true };
            }
        };
    };
    /**
     * @param {?} number
     * @return {?}
     */
    FormValidators.min = function (number) {
        var /** @type {?} */ min = number;
        return function (control) {
            //tslint:disable-next-line
            var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.min({ value: control.value, param: min });
            if (result === true) {
                return null;
            }
            else {
                return { 'min': true };
            }
        };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.creditcard = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.creditcard({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'cardno': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.date = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.date({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'date': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.dateIso = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.dateIso({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'dateiso': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.digits = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.digits({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'digit': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.email = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.email({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'email': true };
        }
    };
    /**
     * @param {?} number
     * @return {?}
     */
    FormValidators.maxLength = function (number) {
        var /** @type {?} */ maxlength = number;
        return function (control) {
            //tslint:disable-next-line
            var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.maxLength({ value: control.value, param: maxlength });
            if (result === true) {
                return null;
            }
            else {
                return { 'maxlength': true };
            }
        };
    };
    /**
     * @param {?} number
     * @return {?}
     */
    FormValidators.minLength = function (number) {
        var /** @type {?} */ minlength = number;
        return function (control) {
            //tslint:disable-next-line
            var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.minLength({ value: control.value, param: minlength });
            if (result === true) {
                return null;
            }
            else {
                return { 'minlength': true };
            }
        };
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.number = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.number({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'number': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.required = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = (control.value === null) ? false : ((ej2Inputs.FormValidator)).checkValidator.required({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'required': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.tel = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.tel({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'telno': true };
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.url = function (control) {
        //tslint:disable-next-line
        var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.url({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'url': true };
        }
    };
    /**
     * @param {?} number1
     * @param {?} number2
     * @return {?}
     */
    FormValidators.rangeLength = function (number1, number2) {
        var /** @type {?} */ minRL = number1;
        var /** @type {?} */ maxRL = number2;
        //tslint:disable-next-line
        var /** @type {?} */ param = [minRL, maxRL];
        return function (control) {
            //tslint:disable-next-line
            var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.rangeLength({ value: control.value, param: param });
            if (result === true) {
                return null;
            }
            else {
                return { 'rangelength': true };
            }
        };
    };
    /**
     * @param {?} number1
     * @param {?} number2
     * @return {?}
     */
    FormValidators.range = function (number1, number2) {
        var /** @type {?} */ minR = number1;
        var /** @type {?} */ maxR = number2;
        //tslint:disable-next-line
        var /** @type {?} */ param1 = [minR, maxR];
        return function (control) {
            //tslint:disable-next-line
            var /** @type {?} */ result = ((ej2Inputs.FormValidator)).checkValidator.range({ value: control.value, param: param1 });
            if (result === true) {
                return null;
            }
            else {
                return { 'range': true };
            }
        };
    };
    return FormValidators;
}());

exports.TextBoxModule = TextBoxModule;
exports.TextBoxAllModule = TextBoxAllModule;
exports.NumericTextBoxModule = NumericTextBoxModule;
exports.NumericTextBoxAllModule = NumericTextBoxAllModule;
exports.MaskedTextBoxModule = MaskedTextBoxModule;
exports.MaskedTextBoxAllModule = MaskedTextBoxAllModule;
exports.SliderModule = SliderModule;
exports.SliderAllModule = SliderAllModule;
exports.UploadedFilesDirective = UploadedFilesDirective;
exports.FilesDirective = FilesDirective;
exports.UploaderModule = UploaderModule;
exports.UploaderAllModule = UploaderAllModule;
exports.ColorPickerModule = ColorPickerModule;
exports.ColorPickerAllModule = ColorPickerAllModule;
exports.FormValidators = FormValidators;
exports.ɵk = inputs$5;
exports.ɵl = outputs$6;
exports.ɵe = inputs$2;
exports.ɵf = outputs$2;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.ɵg = inputs$3;
exports.ɵh = outputs$3;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.ɵi = inputs$4;
exports.ɵj = outputs$5;
exports.NumericTextBox = ej2Inputs.NumericTextBox;
exports.regularExpressions = ej2Inputs.regularExpressions;
exports.createMask = ej2Inputs.createMask;
exports.applyMask = ej2Inputs.applyMask;
exports.wireEvents = ej2Inputs.wireEvents;
exports.unwireEvents = ej2Inputs.unwireEvents;
exports.bindClearEvent = ej2Inputs.bindClearEvent;
exports.unstrippedValue = ej2Inputs.unstrippedValue;
exports.strippedValue = ej2Inputs.strippedValue;
exports.maskInputFocusHandler = ej2Inputs.maskInputFocusHandler;
exports.maskInputBlurHandler = ej2Inputs.maskInputBlurHandler;
exports.maskInputDropHandler = ej2Inputs.maskInputDropHandler;
exports.mobileRemoveFunction = ej2Inputs.mobileRemoveFunction;
exports.setMaskValue = ej2Inputs.setMaskValue;
exports.setElementValue = ej2Inputs.setElementValue;
exports.maskInput = ej2Inputs.maskInput;
exports.getVal = ej2Inputs.getVal;
exports.getMaskedVal = ej2Inputs.getMaskedVal;
exports.MaskUndo = ej2Inputs.MaskUndo;
exports.MaskedTextBox = ej2Inputs.MaskedTextBox;
exports.Input = ej2Inputs.Input;
exports.TicksData = ej2Inputs.TicksData;
exports.ColorRangeData = ej2Inputs.ColorRangeData;
exports.LimitData = ej2Inputs.LimitData;
exports.TooltipData = ej2Inputs.TooltipData;
exports.Slider = ej2Inputs.Slider;
exports.regex = ej2Inputs.regex;
exports.ErrorOption = ej2Inputs.ErrorOption;
exports.FormValidator = ej2Inputs.FormValidator;
exports.FilesProp = ej2Inputs.FilesProp;
exports.ButtonsProps = ej2Inputs.ButtonsProps;
exports.AsyncSettings = ej2Inputs.AsyncSettings;
exports.Uploader = ej2Inputs.Uploader;
exports.ColorPicker = ej2Inputs.ColorPicker;
exports.TextBox = ej2Inputs.TextBox;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-inputs.umd.js.map
