(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@syncfusion/ej2-angular-base'), require('@syncfusion/ej2-barcode-generator'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@syncfusion/ej2-angular-base', '@syncfusion/ej2-barcode-generator', '@angular/common'], factory) :
	(factory((global['ej2-angular-barcode-generator'] = {}),global.ng.core,global.ej2.angular.base,global.ej2.barcode.generator,global.ng.common));
}(this, (function (exports,core,ej2AngularBase,ej2BarcodeGenerator,common) { 'use strict';

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
var inputs = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width'];
var outputs = ['invalid'];
var twoWays = [''];
/**
 * Barcode Component
 * ```html
 * <ej-barcode-generator></ej-barcode-generator>
 * ```
 */
exports.BarcodeGeneratorComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    BarcodeGeneratorComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return BarcodeGeneratorComponent;
}(ej2BarcodeGenerator.BarcodeGenerator));
exports.BarcodeGeneratorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-barcodegenerator',
                inputs: inputs,
                outputs: outputs,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.BarcodeGeneratorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.BarcodeGeneratorComponent = __decorate([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.BarcodeGeneratorComponent);
/**
 * NgModule definition for the BarcodeGenerator component.
 */
var BarcodeGeneratorModule = /** @class */ (function () {
    function BarcodeGeneratorModule() {
    }
    return BarcodeGeneratorModule;
}());
BarcodeGeneratorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.BarcodeGeneratorComponent
                ],
                exports: [
                    exports.BarcodeGeneratorComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, BarcodeGeneratorModule],
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
exports.QRCodeGeneratorComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    QRCodeGeneratorComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return QRCodeGeneratorComponent;
}(ej2BarcodeGenerator.QRCodeGenerator));
exports.QRCodeGeneratorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-qrcodegenerator',
                inputs: inputs$1,
                outputs: outputs$1,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.QRCodeGeneratorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.QRCodeGeneratorComponent = __decorate$1([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$1("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.QRCodeGeneratorComponent);
/**
 * NgModule definition for the QRCodeGenerator component.
 */
var QRCodeGeneratorModule = /** @class */ (function () {
    function QRCodeGeneratorModule() {
    }
    return QRCodeGeneratorModule;
}());
QRCodeGeneratorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.QRCodeGeneratorComponent
                ],
                exports: [
                    exports.QRCodeGeneratorComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, QRCodeGeneratorModule],
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
exports.DataMatrixGeneratorComponent = /** @class */ (function (_super) {
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
        ej2AngularBase.setValue('currentInstance', _this, _this.viewContainerRef);
        _this.context = new ej2AngularBase.ComponentBase();
        return _this;
    }
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngOnInit = function () {
        this.context.ngOnInit(this);
    };
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngAfterViewInit = function () {
        this.context.ngAfterViewInit(this);
    };
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy(this);
    };
    /**
     * @return {?}
     */
    DataMatrixGeneratorComponent.prototype.ngAfterContentChecked = function () {
        this.context.ngAfterContentChecked(this);
    };
    return DataMatrixGeneratorComponent;
}(ej2BarcodeGenerator.DataMatrixGenerator));
exports.DataMatrixGeneratorComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'ejs-datamatrixgenerator',
                inputs: inputs$2,
                outputs: outputs$2,
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                queries: {}
            },] },
];
/**
 * @nocollapse
 */
exports.DataMatrixGeneratorComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.Injector, },
]; };
exports.DataMatrixGeneratorComponent = __decorate$2([
    ej2AngularBase.ComponentMixins([ej2AngularBase.ComponentBase]),
    __metadata$2("design:paramtypes", [core.ElementRef,
        core.Renderer2,
        core.ViewContainerRef,
        core.Injector])
], exports.DataMatrixGeneratorComponent);
/**
 * NgModule definition for the DataMatrixGenerator component.
 */
var DataMatrixGeneratorModule = /** @class */ (function () {
    function DataMatrixGeneratorModule() {
    }
    return DataMatrixGeneratorModule;
}());
DataMatrixGeneratorModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [
                    exports.DataMatrixGeneratorComponent
                ],
                exports: [
                    exports.DataMatrixGeneratorComponent
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
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, DataMatrixGeneratorModule],
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

exports.BarcodeGeneratorModule = BarcodeGeneratorModule;
exports.BarcodeGeneratorAllModule = BarcodeGeneratorAllModule;
exports.QRCodeGeneratorModule = QRCodeGeneratorModule;
exports.QRCodeGeneratorAllModule = QRCodeGeneratorAllModule;
exports.DataMatrixGeneratorModule = DataMatrixGeneratorModule;
exports.DataMatrixGeneratorAllModule = DataMatrixGeneratorAllModule;
exports.ɵa = inputs;
exports.ɵb = outputs;
exports.ɵe = inputs$2;
exports.ɵf = outputs$2;
exports.ɵc = inputs$1;
exports.ɵd = outputs$1;
exports.BarcodeGenerator = ej2BarcodeGenerator.BarcodeGenerator;
exports.BarcodeBase = ej2BarcodeGenerator.BarcodeBase;
exports.OneDimension = ej2BarcodeGenerator.OneDimension;
exports.BarcodeEvent = ej2BarcodeGenerator.BarcodeEvent;
exports.QuietZone = ej2BarcodeGenerator.QuietZone;
exports.DataMatrixSize = ej2BarcodeGenerator.DataMatrixSize;
exports.QRCodeVersion = ej2BarcodeGenerator.QRCodeVersion;
exports.ErrorCorrectionLevel = ej2BarcodeGenerator.ErrorCorrectionLevel;
exports.createHtmlElement = ej2BarcodeGenerator.createHtmlElement;
exports.getChildNode = ej2BarcodeGenerator.getChildNode;
exports.measureText = ej2BarcodeGenerator.measureText;
exports.setAttribute = ej2BarcodeGenerator.setAttribute;
exports.createSvgElement = ej2BarcodeGenerator.createSvgElement;
exports.createMeasureElements = ej2BarcodeGenerator.createMeasureElements;
exports.Point = ej2BarcodeGenerator.Point;
exports.Rect = ej2BarcodeGenerator.Rect;
exports.Size = ej2BarcodeGenerator.Size;
exports.DisplayText = ej2BarcodeGenerator.DisplayText;
exports.Margin = ej2BarcodeGenerator.Margin;
exports.BarcodeCanvasRenderer = ej2BarcodeGenerator.BarcodeCanvasRenderer;
exports.BarcodeRenderer = ej2BarcodeGenerator.BarcodeRenderer;
exports.BarcodeSVGRenderer = ej2BarcodeGenerator.BarcodeSVGRenderer;
exports.CodaBar = ej2BarcodeGenerator.CodaBar;
exports.Code128 = ej2BarcodeGenerator.Code128;
exports.Code128A = ej2BarcodeGenerator.Code128A;
exports.Code128B = ej2BarcodeGenerator.Code128B;
exports.Code128C = ej2BarcodeGenerator.Code128C;
exports.Code39 = ej2BarcodeGenerator.Code39;
exports.Ean8 = ej2BarcodeGenerator.Ean8;
exports.Ean13 = ej2BarcodeGenerator.Ean13;
exports.UpcA = ej2BarcodeGenerator.UpcA;
exports.UpcE = ej2BarcodeGenerator.UpcE;
exports.QRCode = ej2BarcodeGenerator.QRCode;
exports.ModuleValue = ej2BarcodeGenerator.ModuleValue;
exports.QRCodeGenerator = ej2BarcodeGenerator.QRCodeGenerator;
exports.PdfQRBarcodeValues = ej2BarcodeGenerator.PdfQRBarcodeValues;
exports.ErrorCorrectionCodewords = ej2BarcodeGenerator.ErrorCorrectionCodewords;
exports.DataMatrixGenerator = ej2BarcodeGenerator.DataMatrixGenerator;
exports.DataMatrix = ej2BarcodeGenerator.DataMatrix;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ej2-angular-barcode-generator.umd.js.map
