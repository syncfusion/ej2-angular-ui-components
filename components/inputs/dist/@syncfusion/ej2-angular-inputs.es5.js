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
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { ColorPicker, FormValidator, MaskedTextBox, NumericTextBox, Slider, TextBox, Uploader } from '@syncfusion/ej2-inputs';
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
var inputs = ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'];
var outputs = ['blur', 'change', 'created', 'destroyed', 'focus', 'input', 'valueChange'];
var twoWays = ['value'];
/**
 * Represents the EJ2 Angular TextBox Component.
 * ```html
 * <ejs-textbox [value]='value'></ejs-textbox>
 * ```
 */
var TextBoxComponent = TextBoxComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    TextBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return TextBoxComponent;
}(TextBox));
TextBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-textbox',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return TextBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TextBoxComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
TextBoxComponent = TextBoxComponent_1 = __decorate([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], TextBoxComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    TextBoxComponent
                ],
                exports: [
                    TextBoxComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, TextBoxModule],
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
var NumericTextBoxComponent = NumericTextBoxComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    NumericTextBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return NumericTextBoxComponent;
}(NumericTextBox));
NumericTextBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-numerictextbox',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return NumericTextBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
NumericTextBoxComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
NumericTextBoxComponent = NumericTextBoxComponent_1 = __decorate$1([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], NumericTextBoxComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    NumericTextBoxComponent
                ],
                exports: [
                    NumericTextBoxComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, NumericTextBoxModule],
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
var MaskedTextBoxComponent = MaskedTextBoxComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    MaskedTextBoxComponent.prototype.ngAfterContentChecked = function () {
    };
    return MaskedTextBoxComponent;
}(MaskedTextBox));
MaskedTextBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-maskedtextbox',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return MaskedTextBoxComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MaskedTextBoxComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
MaskedTextBoxComponent = MaskedTextBoxComponent_1 = __decorate$2([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], MaskedTextBoxComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MaskedTextBoxComponent
                ],
                exports: [
                    MaskedTextBoxComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, MaskedTextBoxModule],
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
var inputs$3 = ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'];
var outputs$3 = ['focus', 'blur', 'change', 'changed', 'created', 'renderedTicks', 'renderingTicks', 'tooltipChange', 'valueChange'];
var twoWays$3 = ['value'];
/**
 * Represents the EJ2 Angular Slider Component.
 * ```html
 * <ejs-slider [value]='value'></ejs-slider>
 * ```
 */
var SliderComponent = SliderComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngAfterContentChecked = function () {
    };
    return SliderComponent;
}(Slider));
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-slider',
                inputs: inputs$3,
                outputs: outputs$3,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return SliderComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
SliderComponent = SliderComponent_1 = __decorate$3([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$3("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], SliderComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    SliderComponent
                ],
                exports: [
                    SliderComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, SliderModule],
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
        setValue('currentInstance', _this, _this.viewContainerRef);
        _this.registerEvents(outputs$4);
        return _this;
    }
    return UploadedFilesDirective;
}(ComplexBase));
UploadedFilesDirective.decorators = [
    { type: Directive, args: [{
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
    { type: ViewContainerRef, },
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
}(ArrayBase));
FilesDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ejs-uploader>e-files',
                queries: {
                    children: new ContentChildren(UploadedFilesDirective)
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
var UploaderComponent = UploaderComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngAfterContentChecked = function () {
    };
    return UploaderComponent;
}(Uploader));
UploaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-uploader',
                inputs: inputs$4,
                outputs: outputs$5,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return UploaderComponent_1; }),
                        multi: true
                    }
                ],
                queries: {
                    childFiles: new ContentChild(FilesDirective)
                }
            },] },
];
/**
 * @nocollapse
 */
UploaderComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
UploaderComponent.propDecorators = {
    'template': [{ type: ContentChild, args: ['template',] },],
};
__decorate$4([
    Template(),
    __metadata$4("design:type", Object)
], UploaderComponent.prototype, "template", void 0);
UploaderComponent = UploaderComponent_1 = __decorate$4([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$4("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], UploaderComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    UploaderComponent,
                    UploadedFilesDirective,
                    FilesDirective
                ],
                exports: [
                    UploaderComponent,
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
    { type: NgModule, args: [{
                imports: [CommonModule, UploaderModule],
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
var outputs$6 = ['focus', 'blur', 'beforeClose', 'beforeModeSwitch', 'beforeOpen', 'beforeTileRender', 'change', 'created', 'open', 'select', 'valueChange'];
var twoWays$5 = ['value'];
/**
 * Represents the EJ2 Angular ColorPicker Component.
 * ```html
 * <input ejs-colorpicker type='color'/>
 * ```
 */
var ColorPickerComponent = ColorPickerComponent_1 = /** @class */ (function (_super) {
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
        setValue('currentInstance', _this, _this.viewContainerRef);
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
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterContentChecked = function () {
    };
    return ColorPickerComponent;
}(ColorPicker));
ColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: '[ejs-colorpicker]',
                inputs: inputs$5,
                outputs: outputs$6,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return ColorPickerComponent_1; }),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColorPickerComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
ColorPickerComponent = ColorPickerComponent_1 = __decorate$5([
    ComponentMixins([ComponentBase, FormBase]),
    __metadata$5("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], ColorPickerComponent);
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
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    ColorPickerComponent
                ],
                exports: [
                    ColorPickerComponent
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
    { type: NgModule, args: [{
                imports: [CommonModule, ColorPickerModule],
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
            var /** @type {?} */ result = ((FormValidator)).checkValidator.max({ value: control.value, param: max });
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
            var /** @type {?} */ result = ((FormValidator)).checkValidator.min({ value: control.value, param: min });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.creditcard({ value: control.value });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.date({ value: control.value });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.dateIso({ value: control.value });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.digits({ value: control.value });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.email({ value: control.value });
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
            var /** @type {?} */ result = ((FormValidator)).checkValidator.maxLength({ value: control.value, param: maxlength });
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
            var /** @type {?} */ result = ((FormValidator)).checkValidator.minLength({ value: control.value, param: minlength });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.number({ value: control.value });
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
        var /** @type {?} */ result = (control.value === null) ? false : ((FormValidator)).checkValidator.required({ value: control.value });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.tel({ value: control.value });
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
        var /** @type {?} */ result = ((FormValidator)).checkValidator.url({ value: control.value });
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
            var /** @type {?} */ result = ((FormValidator)).checkValidator.rangeLength({ value: control.value, param: param });
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
            var /** @type {?} */ result = ((FormValidator)).checkValidator.range({ value: control.value, param: param1 });
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
/**
 * Generated bundle index. Do not edit.
 */
export { TextBoxComponent, TextBoxModule, TextBoxAllModule, NumericTextBoxComponent, NumericTextBoxModule, NumericTextBoxAllModule, MaskedTextBoxComponent, MaskedTextBoxModule, MaskedTextBoxAllModule, SliderComponent, SliderModule, SliderAllModule, UploadedFilesDirective, FilesDirective, UploaderComponent, UploaderModule, UploaderAllModule, ColorPickerComponent, ColorPickerModule, ColorPickerAllModule, FormValidators, inputs$5 as ɵk, outputs$6 as ɵl, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd, inputs$3 as ɵg, outputs$3 as ɵh, inputs as ɵa, outputs as ɵb, inputs$4 as ɵi, outputs$5 as ɵj };
export { NumericTextBox, regularExpressions, createMask, applyMask, wireEvents, unwireEvents, bindClearEvent, unstrippedValue, strippedValue, maskInputFocusHandler, maskInputBlurHandler, maskInputDropHandler, mobileRemoveFunction, setMaskValue, setElementValue, maskInput, getVal, getMaskedVal, MaskUndo, MaskedTextBox, Input, TicksData, ColorRangeData, LimitData, TooltipData, Slider, regex, ErrorOption, FormValidator, FilesProp, ButtonsProps, AsyncSettings, Uploader, ColorPicker, TextBox } from '@syncfusion/ej2-inputs';
//# sourceMappingURL=ej2-angular-inputs.es5.js.map
