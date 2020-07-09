import { ChangeDetectionStrategy, Component, ElementRef, Injector, NgModule, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BarcodeGenerator, DataMatrixGenerator, QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';
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
const inputs = ['backgroundColor', 'displayText', 'enableCheckSum', 'enablePersistence', 'enableRtl', 'foreColor', 'height', 'locale', 'margin', 'mode', 'type', 'value', 'width'];
const outputs = ['invalid'];
const twoWays = [''];
/**
 * Barcode Component
 * ```html
 * <ej-barcode-generator></ej-barcode-generator>
 * ```
 */
let BarcodeGeneratorComponent = class BarcodeGeneratorComponent extends BarcodeGenerator {
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
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
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
BarcodeGeneratorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class BarcodeGeneratorModule {
}
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
BarcodeGeneratorModule.ctorParameters = () => [];

/**
 * NgModule definition for the BarcodeGenerator component with providers.
 */
class BarcodeGeneratorAllModule {
}
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
BarcodeGeneratorAllModule.ctorParameters = () => [];

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$1 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'errorCorrectionLevel', 'foreColor', 'height', 'locale', 'margin', 'mode', 'value', 'version', 'width', 'xDimension'];
const outputs$1 = ['invalid'];
const twoWays$1 = [''];
/**
 * QRCode Component
 * ```html
 * <ej-qrcode-generator></ej-qrcode-generator>
 * ```
 */
let QRCodeGeneratorComponent = class QRCodeGeneratorComponent extends QRCodeGenerator {
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
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
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
QRCodeGeneratorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class QRCodeGeneratorModule {
}
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
QRCodeGeneratorModule.ctorParameters = () => [];

/**
 * NgModule definition for the QRCodeGenerator component with providers.
 */
class QRCodeGeneratorAllModule {
}
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
QRCodeGeneratorAllModule.ctorParameters = () => [];

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const inputs$2 = ['backgroundColor', 'displayText', 'enablePersistence', 'enableRtl', 'encoding', 'foreColor', 'height', 'locale', 'margin', 'mode', 'size', 'value', 'width', 'xDimension'];
const outputs$2 = ['invalid'];
const twoWays$2 = [''];
/**
 * DataMatrix Component
 * ```html
 * <ej-datamatrix-generator></ej-datamatrix-generator>
 * ```
 */
let DataMatrixGeneratorComponent = class DataMatrixGeneratorComponent extends DataMatrixGenerator {
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
        this.registerEvents(outputs$2);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.context.ngAfterContentChecked(this);
    }
};
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
DataMatrixGeneratorComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: Injector, },
];
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
class DataMatrixGeneratorModule {
}
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
DataMatrixGeneratorModule.ctorParameters = () => [];

/**
 * NgModule definition for the DataMatrixGenerator component with providers.
 */
class DataMatrixGeneratorAllModule {
}
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
DataMatrixGeneratorAllModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { BarcodeGeneratorComponent, BarcodeGeneratorModule, BarcodeGeneratorAllModule, QRCodeGeneratorComponent, QRCodeGeneratorModule, QRCodeGeneratorAllModule, DataMatrixGeneratorComponent, DataMatrixGeneratorModule, DataMatrixGeneratorAllModule, inputs as ɵa, outputs as ɵb, inputs$2 as ɵe, outputs$2 as ɵf, inputs$1 as ɵc, outputs$1 as ɵd };
export { BarcodeGenerator, BarcodeBase, OneDimension, BarcodeEvent, QuietZone, DataMatrixSize, QRCodeVersion, ErrorCorrectionLevel, createHtmlElement, getChildNode, measureText, setAttribute, createSvgElement, createMeasureElements, Point, Rect, Size, DisplayText, Margin, BarcodeCanvasRenderer, BarcodeRenderer, BarcodeSVGRenderer, CodaBar, Code128, Code128A, Code128B, Code128C, Code39, Ean8, Ean13, UpcA, UpcE, QRCode, ModuleValue, QRCodeGenerator, PdfQRBarcodeValues, ErrorCorrectionCodewords, DataMatrixGenerator, DataMatrix } from '@syncfusion/ej2-barcode-generator';
//# sourceMappingURL=ej2-angular-barcode-generator.js.map
