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
import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BarcodeGenerator, DataMatrixGenerator, QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';
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
var inputs = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width'];
var outputs = ['invalid'];
var twoWays = [''];
/**
 * Barcode Component
 * ```html
 * <ej-barcode-generator></ej-barcode-generator>
 * ```
 */
var BarcodeGeneratorComponent = /** @class */ (function (_super) {
    __extends(BarcodeGeneratorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function BarcodeGeneratorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs);
        _this.addTwoWay.call(_this, twoWays);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngAfterContentChecked = function () {
    };
    return BarcodeGeneratorComponent;
}(BarcodeGenerator));
BarcodeGeneratorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-barcodegenerator',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
BarcodeGeneratorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
BarcodeGeneratorComponent = __decorate([
    ComponentMixins([ComponentBase]),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], BarcodeGeneratorComponent);
/**
 * NgModule definition for the BarcodeGenerator component.
 */
var BarcodeGeneratorModule = /** @class */ (function () {
    function BarcodeGeneratorModule() {
    }
    return BarcodeGeneratorModule;
}());
BarcodeGeneratorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    BarcodeGeneratorComponent
                ],
                exports: [
                    BarcodeGeneratorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
BarcodeGeneratorModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the BarcodeGenerator component with providers.
 */
var BarcodeGeneratorAllModule = /** @class */ (function () {
    function BarcodeGeneratorAllModule() {
    }
    return BarcodeGeneratorAllModule;
}());
BarcodeGeneratorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, BarcodeGeneratorModule],
                exports: [
                    BarcodeGeneratorModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
BarcodeGeneratorAllModule.ctorParameters = function () { return []; };
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
var inputs$1 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'errorCorrectionLevel', 'foreColor', 'height', 'locale', 'margin', 'mode', 'value', 'version', 'width', 'xDimension'];
var outputs$1 = ['invalid'];
var twoWays$1 = [''];
/**
 * QRCode Component
 * ```html
 * <ej-qrcode-generator></ej-qrcode-generator>
 * ```
 */
var QRCodeGeneratorComponent = /** @class */ (function (_super) {
    __extends(QRCodeGeneratorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function QRCodeGeneratorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$1);
        _this.addTwoWay.call(_this, twoWays$1);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngAfterContentChecked = function () {
    };
    return QRCodeGeneratorComponent;
}(QRCodeGenerator));
QRCodeGeneratorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-qrcodegenerator',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
QRCodeGeneratorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
QRCodeGeneratorComponent = __decorate$1([
    ComponentMixins([ComponentBase]),
    __metadata$1("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], QRCodeGeneratorComponent);
/**
 * NgModule definition for the QRCodeGenerator component.
 */
var QRCodeGeneratorModule = /** @class */ (function () {
    function QRCodeGeneratorModule() {
    }
    return QRCodeGeneratorModule;
}());
QRCodeGeneratorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    QRCodeGeneratorComponent
                ],
                exports: [
                    QRCodeGeneratorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
QRCodeGeneratorModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the QRCodeGenerator component with providers.
 */
var QRCodeGeneratorAllModule = /** @class */ (function () {
    function QRCodeGeneratorAllModule() {
    }
    return QRCodeGeneratorAllModule;
}());
QRCodeGeneratorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, QRCodeGeneratorModule],
                exports: [
                    QRCodeGeneratorModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
QRCodeGeneratorAllModule.ctorParameters = function () { return []; };
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
var inputs$2 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'encoding', 'foreColor', 'height', 'locale', 'margin', 'mode', 'size', 'value', 'width', 'xDimension'];
var outputs$2 = ['invalid'];
var twoWays$2 = [''];
/**
 * DataMatrix Component
 * ```html
 * <ej-datamatrix-generator></ej-datamatrix-generator>
 * ```
 */
var DataMatrixGeneratorComponent = /** @class */ (function (_super) {
    __extends(DataMatrixGeneratorComponent, _super);
    /**
     * @param {?} ngEle
     * @param {?} srenderer
     * @param {?} viewContainerRef
     * @param {?} injector
     */
    function DataMatrixGeneratorComponent(ngEle, srenderer, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.ngEle = ngEle;
        _this.srenderer = srenderer;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.element = _this.ngEle.nativeElement;
        _this.injectedModules = _this.injectedModules || [];
        _this.registerEvents(outputs$2);
        _this.addTwoWay.call(_this, twoWays$2);
        setValue('currentInstance', _this, _this.viewContainerRef);
        return _this;
    }
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngAfterContentChecked = function () {
    };
    return DataMatrixGeneratorComponent;
}(DataMatrixGenerator));
DataMatrixGeneratorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ejs-datamatrixgenerator',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
DataMatrixGeneratorComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
]; };
DataMatrixGeneratorComponent = __decorate$2([
    ComponentMixins([ComponentBase]),
    __metadata$2("design:paramtypes", [ElementRef,
        Renderer2,
        ViewContainerRef,
        Injector])
], DataMatrixGeneratorComponent);
/**
 * NgModule definition for the DataMatrixGenerator component.
 */
var DataMatrixGeneratorModule = /** @class */ (function () {
    function DataMatrixGeneratorModule() {
    }
    return DataMatrixGeneratorModule;
}());
DataMatrixGeneratorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    DataMatrixGeneratorComponent
                ],
                exports: [
                    DataMatrixGeneratorComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
DataMatrixGeneratorModule.ctorParameters = function () { return []; };
/**
 * NgModule definition for the DataMatrixGenerator component with providers.
 */
var DataMatrixGeneratorAllModule = /** @class */ (function () {
    function DataMatrixGeneratorAllModule() {
    }
    return DataMatrixGeneratorAllModule;
}());
DataMatrixGeneratorAllModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DataMatrixGeneratorModule],
                exports: [
                    DataMatrixGeneratorModule
                ],
                providers: []
            },] },
];
/**
 * @nocollapse
 */
DataMatrixGeneratorAllModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { BarcodeGeneratorComponent, BarcodeGeneratorModule, BarcodeGeneratorAllModule, QRCodeGeneratorComponent, QRCodeGeneratorModule, QRCodeGeneratorAllModule, DataMatrixGeneratorComponent, DataMatrixGeneratorModule, DataMatrixGeneratorAllModule, inputs as ɵa, outputs as ɵb, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd };
export { BarcodeGenerator, BarcodeBase, OneDimension, BarcodeEvent, QuietZone, DataMatrixSize, QRCodeVersion, ErrorCorrectionLevel, createHtmlElement, getChildNode, measureText, setAttribute, createSvgElement, createMeasureElements, Point, Rect, Size, DisplayText, Margin, BarcodeCanvasRenderer, BarcodeRenderer, BarcodeSVGRenderer, CodaBar, Code128, Code128A, Code128B, Code128C, Code39, Ean8, Ean13, UpcA, UpcE, QRCode, ModuleValue, QRCodeGenerator, PdfQRBarcodeValues, ErrorCorrectionCodewords, DataMatrixGenerator, DataMatrix } from '@syncfusion/ej2-barcode-generator';
//# sourceMappingURL=ej2-angular-barcode-generator.es5.js.map
