import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ArrayBase, ComplexBase, ComponentBase, ComponentMixins, FormBase, Template, setValue } from '@syncfusion/ej2-angular-base';
import { ColorPicker, FormValidator, MaskedTextBox, NumericTextBox, Slider, TextBox, Uploader } from '@syncfusion/ej2-inputs';
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
const inputs = ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'];
const outputs = ['blur', 'change', 'created', 'destroyed', 'focus', 'input', 'valueChange'];
const twoWays = ['value'];
/**
 * Represents the EJ2 Angular TextBox Component.
 * ```html
 * <ejs-textbox [value]='value'></ejs-textbox>
 * ```
 */
let TextBoxComponent = TextBoxComponent_1 = class TextBoxComponent extends TextBox {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
                        useExisting: forwardRef(() => TextBoxComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
TextBoxComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class TextBoxModule {
}
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
TextBoxModule.ctorParameters = () => [];

/**
 * NgModule definition for the TextBox component with providers.
 */
class TextBoxAllModule {
}
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
TextBoxAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width'];
const outputs$1 = ['blur', 'change', 'created', 'destroyed', 'focus', 'valueChange'];
const twoWays$1 = ['value'];
/**
 * Represents the EJ2 Angular NumericTextBox Component.
 * ```html
 * <ej-numerictextbox [value]='value'></ej-numerictextbox>
 * ```
 */
let NumericTextBoxComponent = NumericTextBoxComponent_1 = class NumericTextBoxComponent extends NumericTextBox {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
                        useExisting: forwardRef(() => NumericTextBoxComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
NumericTextBoxComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class NumericTextBoxModule {
}
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
NumericTextBoxModule.ctorParameters = () => [];

/**
 * NgModule definition for the NumericTextBox component with providers.
 */
class NumericTextBoxAllModule {
}
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
NumericTextBoxAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'promptChar', 'readonly', 'showClearButton', 'value', 'width'];
const outputs$2 = ['blur', 'change', 'created', 'destroyed', 'focus', 'valueChange'];
const twoWays$2 = ['value'];
/**
 * Represents the EJ2 Angular MaskedTextbox Component.
 * ```html
 * <ej-maskedtextbox [value]='value'></ej-maskedtextbox>
 * ```
 */
let MaskedTextBoxComponent = MaskedTextBoxComponent_1 = class MaskedTextBoxComponent extends MaskedTextBox {
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
        this.skipFromEvent = true;
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
                        useExisting: forwardRef(() => MaskedTextBoxComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
MaskedTextBoxComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class MaskedTextBoxModule {
}
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
MaskedTextBoxModule.ctorParameters = () => [];

/**
 * NgModule definition for the MaskedTextBox component with providers.
 */
class MaskedTextBoxAllModule {
}
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
MaskedTextBoxAllModule.ctorParameters = () => [];

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$3 = ['colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value'];
const outputs$3 = ['focus', 'blur', 'change', 'changed', 'created', 'renderedTicks', 'renderingTicks', 'tooltipChange', 'valueChange'];
const twoWays$3 = ['value'];
/**
 * Represents the EJ2 Angular Slider Component.
 * ```html
 * <ejs-slider [value]='value'></ejs-slider>
 * ```
 */
let SliderComponent = SliderComponent_1 = class SliderComponent extends Slider {
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
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$3);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
                        useExisting: forwardRef(() => SliderComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
SliderComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class SliderModule {
}
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
SliderModule.ctorParameters = () => [];

/**
 * NgModule definition for the Slider component with providers.
 */
class SliderAllModule {
}
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
SliderAllModule.ctorParameters = () => [];

let input = ['name', 'size', 'type'];
let outputs$4 = [];
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
class UploadedFilesDirective extends ComplexBase {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
    }
}
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
UploadedFilesDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
/**
 * UploadedFiles Array Directive
 */
class FilesDirective extends ArrayBase {
    constructor() {
        super('files');
    }
}
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
FilesDirective.ctorParameters = () => [];

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$4 = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'];
const outputs$5 = ['focus', 'blur', 'actionComplete', 'beforeRemove', 'beforeUpload', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
const twoWays$4 = [];
/**
 * Represents the EJ2 Angular Uploader Component.
 * ```html
 * <ejs-uploader></ejs-uploader>
 * ```
 */
let UploaderComponent = UploaderComponent_1 = class UploaderComponent extends Uploader {
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
        this.tags = ['files'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$5);
        this.addTwoWay.call(this, twoWays$4);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
                        useExisting: forwardRef(() => UploaderComponent_1),
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
UploaderComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class UploaderModule {
}
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
UploaderModule.ctorParameters = () => [];

/**
 * NgModule definition for the Uploader component with providers.
 */
class UploaderAllModule {
}
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
UploaderAllModule.ctorParameters = () => [];

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$5 = ['columns', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'value'];
const outputs$6 = ['focus', 'blur', 'beforeClose', 'beforeModeSwitch', 'beforeOpen', 'beforeTileRender', 'change', 'created', 'open', 'select', 'valueChange'];
const twoWays$5 = ['value'];
/**
 * Represents the EJ2 Angular ColorPicker Component.
 * ```html
 * <input ejs-colorpicker type='color'/>
 * ```
 */
let ColorPickerComponent = ColorPickerComponent_1 = class ColorPickerComponent extends ColorPicker {
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
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$6);
        this.addTwoWay.call(this, twoWays$5);
        setValue('currentInstance', this, this.viewContainerRef);
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnChange(registerFunction) {
    }
    /**
     * @param {?} registerFunction
     * @return {?}
     */
    registerOnTouched(registerFunction) {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
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
                        useExisting: forwardRef(() => ColorPickerComponent_1),
                        multi: true
                    }
                ],
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
ColorPickerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class ColorPickerModule {
}
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
ColorPickerModule.ctorParameters = () => [];

/**
 * NgModule definition for the ColorPicker component with providers.
 */
class ColorPickerAllModule {
}
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
ColorPickerAllModule.ctorParameters = () => [];

class FormValidators {
    /**
     * @param {?} number
     * @return {?}
     */
    static max(number) {
        let /** @type {?} */ max = number;
        return (control) => {
            //tslint:disable-next-line
            let /** @type {?} */ result = ((FormValidator)).checkValidator.max({ value: control.value, param: max });
            if (result === true) {
                return null;
            }
            else {
                return { 'max': true };
            }
        };
    }
    /**
     * @param {?} number
     * @return {?}
     */
    static min(number) {
        let /** @type {?} */ min = number;
        return (control) => {
            //tslint:disable-next-line
            let /** @type {?} */ result = ((FormValidator)).checkValidator.min({ value: control.value, param: min });
            if (result === true) {
                return null;
            }
            else {
                return { 'min': true };
            }
        };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static creditcard(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.creditcard({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'cardno': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static date(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.date({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'date': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static dateIso(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.dateIso({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'dateiso': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static digits(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.digits({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'digit': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static email(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.email({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'email': true };
        }
    }
    /**
     * @param {?} number
     * @return {?}
     */
    static maxLength(number) {
        let /** @type {?} */ maxlength = number;
        return (control) => {
            //tslint:disable-next-line
            let /** @type {?} */ result = ((FormValidator)).checkValidator.maxLength({ value: control.value, param: maxlength });
            if (result === true) {
                return null;
            }
            else {
                return { 'maxlength': true };
            }
        };
    }
    /**
     * @param {?} number
     * @return {?}
     */
    static minLength(number) {
        let /** @type {?} */ minlength = number;
        return (control) => {
            //tslint:disable-next-line
            let /** @type {?} */ result = ((FormValidator)).checkValidator.minLength({ value: control.value, param: minlength });
            if (result === true) {
                return null;
            }
            else {
                return { 'minlength': true };
            }
        };
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static number(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.number({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'number': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static required(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = (control.value === null) ? false : ((FormValidator)).checkValidator.required({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'required': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static tel(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.tel({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'telno': true };
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static url(control) {
        //tslint:disable-next-line
        let /** @type {?} */ result = ((FormValidator)).checkValidator.url({ value: control.value });
        if (result === true) {
            return null;
        }
        else {
            return { 'url': true };
        }
    }
    /**
     * @param {?} number1
     * @param {?} number2
     * @return {?}
     */
    static rangeLength(number1, number2) {
        let /** @type {?} */ minRL = number1;
        let /** @type {?} */ maxRL = number2;
        //tslint:disable-next-line
        let /** @type {?} */ param = [minRL, maxRL];
        return (control) => {
            //tslint:disable-next-line
            let /** @type {?} */ result = ((FormValidator)).checkValidator.rangeLength({ value: control.value, param: param });
            if (result === true) {
                return null;
            }
            else {
                return { 'rangelength': true };
            }
        };
    }
    /**
     * @param {?} number1
     * @param {?} number2
     * @return {?}
     */
    static range(number1, number2) {
        let /** @type {?} */ minR = number1;
        let /** @type {?} */ maxR = number2;
        //tslint:disable-next-line
        let /** @type {?} */ param1 = [minR, maxR];
        return (control) => {
            //tslint:disable-next-line
            let /** @type {?} */ result = ((FormValidator)).checkValidator.range({ value: control.value, param: param1 });
            if (result === true) {
                return null;
            }
            else {
                return { 'range': true };
            }
        };
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { TextBoxComponent, TextBoxModule, TextBoxAllModule, NumericTextBoxComponent, NumericTextBoxModule, NumericTextBoxAllModule, MaskedTextBoxComponent, MaskedTextBoxModule, MaskedTextBoxAllModule, SliderComponent, SliderModule, SliderAllModule, UploadedFilesDirective, FilesDirective, UploaderComponent, UploaderModule, UploaderAllModule, ColorPickerComponent, ColorPickerModule, ColorPickerAllModule, FormValidators, inputs$5 as ɵk, outputs$6 as ɵl, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd, inputs$3 as ɵg, outputs$3 as ɵh, inputs as ɵa, outputs as ɵb, inputs$4 as ɵi, outputs$5 as ɵj };
export { NumericTextBox, regularExpressions, createMask, applyMask, wireEvents, unwireEvents, bindClearEvent, unstrippedValue, strippedValue, maskInputFocusHandler, maskInputBlurHandler, maskInputDropHandler, mobileRemoveFunction, setMaskValue, setElementValue, maskInput, getVal, getMaskedVal, MaskUndo, MaskedTextBox, Input, TicksData, ColorRangeData, LimitData, TooltipData, Slider, regex, ErrorOption, FormValidator, FilesProp, ButtonsProps, AsyncSettings, Uploader, ColorPicker, TextBox } from '@syncfusion/ej2-inputs';
//# sourceMappingURL=ej2-angular-inputs.js.map
